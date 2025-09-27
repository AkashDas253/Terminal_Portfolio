
// Modular Terminal Portfolio Loader
const font = 'Slant';
figlet.defaults({ fontPath: 'fonts/' });

const user = 'guest';
const server = 'AkashDas253';
const root = '~';
let cwd = root;
const cwdObj = { cwd };

const files = ['joke', 'credits', 'record'];

const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

let term;
let directories = {};
let dirs = [];
let commands = {};
let helpText = '';

async function loadData() {
    const [educationData, projectsData, skillsData] = await Promise.all([
        fetch('data/education.json').then(r => r.json()),
        fetch('data/projects.json').then(r => r.json()),
        fetch('data/skills.json').then(r => r.json())
    ]);

    const skills = [
        '',
        ...skillsData.map(category => [
            `<white>${category.category}</white>`,
            ...category.skills.map(skill => `* <yellow>${skill.name}</yellow>`)
        ]).flat(),
        ''
    ];

    const education = [
        '',
        '<white>Education</white>',
        ...educationData.map(edu => [
            `* <h2>${edu.institution}</h2> \n<yellow>"${edu.degree}"</yellow> ${edu.year}`,
            ...edu.details.map(detail => `  * ${detail}`)
        ]).flat(),
        ''
    ];

    const projects = [
        '',
        '<white>Projects</white>',
        ...projectsData.map(project => {
            let projectDetails = `* ${project.name}`;
            if (project.repository || project.liveLink) {
                projectDetails += '\n  Links: ';
                if (project.repository) {
                    projectDetails += `Repository: ${project.repository}`;
                }
                if (project.repository && project.liveLink) {
                    projectDetails += ' | ';
                }
                if (project.liveLink) {
                    projectDetails += `Live Link: ${project.liveLink}`;
                }
            }
            projectDetails += `\n  <white>${project.description}</white>`;
            return projectDetails;
        }),
        ''
    ];

    directories = { skills, education, projects };
    dirs = Object.keys(directories);
}

async function loadCommands() {
    const [help, ls, joke, cd, credits, echo, record] = await Promise.all([
        import('./commands/help.js').then(m => m.default),
        import('./commands/ls.js').then(m => m.default),
        import('./commands/joke.js').then(m => m.default),
        import('./commands/cd.js').then(m => m.default),
        import('./commands/credits.js').then(m => m.default),
        import('./commands/echo.js').then(m => m.default),
        import('./commands/record.js').then(m => m.default)
    ]);

    commands = {
        help: function() { help(term, helpText); },
        ls: function(dir = null) { ls(term, directories, cwdObj.cwd, root, dirs, dir); },
        joke: function() { joke(term); },
        cd: function(dir = null) { cd(term, cwdObj, dirs, root, dir); },
        credits: function() { credits(term); },
        echo: function(...args) { echo(term, ...args); },
        record: function(arg) { record(term, arg); }
    };
}

function prompt() {
    return `<green>${user}@${server}</green>:<blue>${cwdObj.cwd}</blue>$ `;
}

function print_home() {
    term.echo(dirs.map(dir => `<blue class="directory">${dir}</blue>`).join('\n'));
    term.echo(files.map(file => `<green class="command">${file}</green>`).join('\n'));
}

async function initTerminal() {
    await loadData();
    await loadCommands();

    const command_list = ['clear'].concat(Object.keys(commands));
    const formatted_list = command_list.map(cmd => `<white class="command">${cmd}</white>`);
    helpText = formatter.format(formatted_list);

    const re = new RegExp(`^\s*(${command_list.join('|')})(\s?.*)`);
    $.terminal.new_formatter([re, function(_, command, args) {
        return `<white class="command">${command}</white><aquamarine>${args}</aquamarine>`;
    }]);

    $.terminal.xml_formatter.tags.blue = (attrs) => `[[;#55F;;${attrs.class}]`;
    $.terminal.xml_formatter.tags.green = (attrs) => `[[;#44D544;;${attrs.class}]`;

    term = $('body').terminal(commands, {
        greetings: false,
        checkArity: false,
        completion(string) {
            const { name, rest } = $.terminal.parse_command(this.get_command());
            if (["cd", "ls"].includes(name)) {
                if (rest.startsWith('~/')) {
                    return dirs.map(dir => `~/${dir}`);
                }
                if (cwdObj.cwd === root) {
                    return dirs;
                }
            }
            return Object.keys(commands);
        },
        execHash: true,
        prompt
    });

    term.pause();

    term.on('click', '.command', function() {
        const command = $(this).text();
        term.exec(command, { typing: true, delay: 50 });
    });

    term.on('click', '.directory', function() {
        const dir = $(this).text();
        term.exec(`cd ~/${dir}`, { typing: true, delay: 50 });
    });

    ready();
}

// Greetings and figlet rendering
const greetings_main = "Welcome to Das Shell";
const greetings_sub = '<white>Welcome to my Terminal Portfolio</white>\n';
figlet.preloadFonts([font], ready);

function ready() {
    const seed = rand(256);
    if (term) {
        term.echo(() => rainbow(render(greetings_main), seed))
            .echo(greetings_sub).resume();
    }
}

function rainbow(string, seed) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string, seed).join('\n');
}

function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}

function render(text) {
    const cols = term ? term.cols() : 80;
    return trim(figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    }));
}

function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => n.toString(16).padStart(2, '0')).join('');
}

// Start the terminal after DOM is ready
$(function() {
    initTerminal();
});
