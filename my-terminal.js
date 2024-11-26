// Greetings
greetings_main = "Welcome to Das Shell";
greetings_sub = '<white>Welcome to my Terminal Portfolio</white>\n';


// Fonts

const font = 'Slant';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);

const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});


// Directories
const educationData = [
    {
      "degree": "Bachelor of Technology in Computer Science and Engineering",
      "institution": "St. thomas College of Engineering and Technology",
      "year": "2025",
      "details": ["CGPA(till 6th Semester): 8.9", "Relevant coursework: Data Structures, Algorithms, Databases, Computer Networks, OOPS "]
    },
    {
      "degree": "ISC",
      "institution": "Orient Day School",
      "year": "2021",
      "details": ["Percentage: 89.33%", "Science Stream","Relevant coursework: Physics, Chemistry, Mathematics, Computer Science, Java Core, OOP"]
    },
    {
      "degree": "ICSE",
      "institution": "Orient Day School",
      "year": "2019",
      "details": ["Percentage: 86.8%","Relevant coursework: Java Core, OOP(Basic)"]
    }
  ];

const projectsData = [
 

    {
      "name": "SociallySecure",
      "description": "Developed SociallySecure, a full-stack web application using OCR to detect sensitive data in images, preventing accidental uploads to social media. Currently enhancing it with machine learning classification. The app features encryption for secure credential storage and robust user authentication, ensuring data privacy.",
      "technologies": ["Django", "Django REST Framework", "HTML", "CSS", "JavaScript", "GitHub", "Git", "Python"],
      "repository": "https://github.com/AkashDas253/SociallySecure"
    },
    {
      "name": "GitListify",
      "description": "Developed GitListify, a ToDo management app that utilizes the Octokit library for seamless CRUD operations on task lists stored in GitHub. The app features secure multi-device login through a unique GitHub access token, eliminating the need for users to enter their full token on each device.",
      "technologies": ["HTML", "CSS", "JavaScript", "Octokit", "GitHub", "Git"],
      "repository": "https://github.com/AkashDas253/GitListify",
      "liveLink": "https://akashdas253.github.io/GitListify/"
    },
    {
      "name": "Amazon ML Challenge",
      "description": "Collaborated in a team to analyze over 260,000 images, determining dimensions (width, area, volume) based on given product categories. Enhanced machine learning skills and teamwork in a competitive environment.",
      "technologies": ["Machine Learning", "Python", "Data Analysis", "Team Collaboration"]
    },
    {
      "name": "TicTacToe",
      "description": "Developed a web-based Tic-Tac-Toe game that supports both 3x3 and 5x5 grids. The game offers two modes: Human vs. Human and Human vs. AI. Implemented an AI opponent for the 3x3 board using the Minimax algorithm for optimal gameplay. For the 5x5 grid, a random AI bot was used to diversify gameplay.",
      "technologies": ["HTML", "CSS", "JavaScript", "GitHub", "Git"],
      "repository": "https://github.com/AkashDas253/TicTacToe",
      "liveLink": "https://akashdas253.github.io/TicTacToe/"
    },
    {
      "name": "Portfolio Website",
      "description": "Developed a responsive portfolio website to showcase projects, skills, and contact information. The website features a clean, minimalist design with smooth scrolling and a dark mode toggle.",
      "technologies": ["HTML", "CSS", "JavaScript", "GitHub", "Git"],
      "repository": "https://github.com/AkashDas253/AkashDas253.github.io",
      "liveLink": "https://akashdas253.github.io/"
    }
  
  ]

skillsData = [
    {
      "category": "Programming Languages",
      "skills": [
        { "name": "Python", "icon": "python-logo.png" },
        { "name": "Java", "icon": "java-logo.png" },
        { "name": "SQL and PL/SQL", "icon": "sql-logo.png" },
        { "name": "C", "icon": "c-logo.png" },
        { "name": "JavaScript", "icon": "javascript-logo.png" }
      ]
    },
    {
      "category": "Web Development",
      "skills": [
        { "name": "HTML", "icon": "html-logo.png" },
        { "name": "CSS", "icon": "css-logo.png" },
        { "name": "JavaScript", "icon": "javascript-logo.png" },
        { "name": "Django", "icon": "django-logo1.png" },
        { "name": "Django REST Framework", "icon": "django rest framework-logo.png" }
      ]
    },
    {
      "category": "Machine Learning",
      "skills": [
        { "name": "Numpy", "icon": "numpy-logo.png" },
        { "name": "Pandas", "icon": "pandas-logo.png" },
        { "name": "Keras", "icon": "keras-logo.png" },
        { "name": "Scikit-Learn", "icon": "scikit-learn-logo.png" },
        { "name": "Tensorflow", "icon": "tensorflow-logo.png" }
      ]
    },
    {
      "category": "Development Tools",
      "skills": [
        { "name": "VSCode", "icon": "vscode-logo.png" },
        { "name": "Git", "icon": "git-logo.png" },
        { "name": "GitHub", "icon": "github-logo.png" }
      ]
    },
    {
      "category": "Concepts",
      "skills": [
        { "name": "Computer Networks", "icon": "networks-logo.png" },
        { "name": "Data Structures", "icon": "dsa-logo.png" },
        { "name": "Algorithms", "icon": "algorithm-logo.png" },
        { "name": "RDBMS", "icon": "dbms-logo.png" }
      ]
    }
  ]
  
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
    `* <h2>${edu.institution}</h2> 
    <yellow>"${edu.degree}"</yellow> ${edu.year}`,
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

const directories = { skills, education, projects };

const dirs = Object.keys(directories);

const root = '~';
let cwd = root;

// Pick specific files: not every command needs to be binary we picked those three that works more like real programs
const files = [
    'joke',
    'credits',
    'record'
];


// Prompt
const user = 'guest';
const server = 'AkashDas253';
function prompt() {
    return `<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `;
}



function print_home() {
     term.echo(dirs.map(dir => {
         return `<blue class="directory">${dir}</blue>`;
     }).join('\n'));
     term.echo(files.map(file => {
         return `<green class="command">${file}</green>`;
     }).join('\n'));
}

// Commands
const commands = {
    help() {
        term.echo(`List of available commands: ${help}`);
    },
    ls(dir = null) {
        if (dir) {
            if (dir.match(/^~\/?$/)) {
                 print_home();
            } else if (dir.startsWith('~/')) {
                const path = dir.substring(2);
                const dirs = path.split('/');
                if (dirs.length > 1) {
                    this.error('Invalid directory');
                } else {
                    const dir = dirs[0];
                    this.echo(directories[dir].join('\n'));
                }
            } else if (cwd === root) {
                if (dir in directories) {
                    this.echo(directories[dir].join('\n'));
                } else {
                    this.error('Invalid directory');
                }
            } else if (dir === '..') {
                print_home();
            } else {
                this.error('Invalid directory');
            }
        } else if (cwd === root) {
           print_home();
        } else {
            const dir = cwd.substring(2);
            this.echo(directories[dir].join('\n'));
        }
    },
    async joke() {
        // we use programming jokes so it fit better developer portfolio
        const res = await fetch('https://v2.jokeapi.dev/joke/Programming');
        const data = await res.json();
        if (data.type == 'twopart') {
            // this allow to create sequence of typing animations
            this.animation(async () => {
                // as said before in every function, passed directly
                // to terminal, you can use `this` object
                // to reference terminal instance
                await this.echo(`Q: ${data.setup}`, {
                    delay: 50,
                    typing: true
                });
                await this.echo(`A: ${data.delivery}`, {
                    delay: 50,
                    typing: true
                });
            });
        } else if (data.type === 'single') {
            this.echo(data.joke, {
                delay: 51,
                typing: true
            });
        }
    },
    cd(dir = null) {
        if (dir === null || (dir === '..' && cwd !== root)) {
            cwd = root;
        } else if (dir.startsWith('~/') && dirs.includes(dir.substring(2))) {
            cwd = dir;
        } else if (dirs.includes(dir)) {
            cwd = root + '/' + dir;
        } else {
            this.error('Wrong directory');
        }
    },
    credits() {
        // you can return string or a Promise from a command
        return [
            '',
            '<white>Used libraries:</white>',
            '* <a href="https://terminal.jcubic.pl">jQuery Terminal</a>',
            '* <a href="https://github.com/patorjk/figlet.js/">Figlet.js</a>',
            '* <a href="https://github.com/jcubic/isomorphic-lolcat">Isomorphic Lolcat</a>',
            '* <a href="https://jokeapi.dev/">Joke API</a>',
            ''
        ].join('\n');
    },
    echo(...args) {
        if (args.length > 0) {
            term.echo(args.join(' '));
        }
    },
    record(arg) {
        if (arg === 'start') {
            term.history_state(true);
        } else if (arg === 'stop') {
            term.history_state(false);
        } else {
            term.echo('save commands in url hash so you can share the link\n\n' +
                      'usage: record [stop|start]\n');
            term.echo('<white>NOTE</white>: this command will not work on CodePen,' +
                     ' becuase it use an iframe!');
        }
    }
};

// clear is default command that you can turn off with an option
const command_list = ['clear'].concat(Object.keys(commands));
const formatted_list = command_list.map(cmd => `<white class="command">${cmd}</white>`);
const help = formatter.format(formatted_list);

const re = new RegExp(`^\s*(${command_list.join('|')})(\s?.*)`);

$.terminal.new_formatter([re, function(_, command, args) {
    return `<white class="command">${command}</white><aquamarine>${args}</aquamarine>`;
}]);

$.terminal.xml_formatter.tags.blue = (attrs) => {
    return `[[;#55F;;${attrs.class}]`;
};
$.terminal.xml_formatter.tags.green = (attrs) => {
    return `[[;#44D544;;${attrs.class}]`;
};

const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    completion(string) {
        // in every function we can use this to reference term object
        const { name, rest } = $.terminal.parse_command(this.get_command());
        if (['cd', 'ls'].includes(name)) {
            if (rest.startsWith('~/')) {
                return dirs.map(dir => `~/${dir}`);
            }
            if (cwd === root) {
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

function ready() {
   const seed = rand(256);
   term.echo(() => rainbow(render(greetings_main), seed))
       .echo(greetings_sub).resume();
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
    const cols = term.cols();
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
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}
