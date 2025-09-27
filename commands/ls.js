export default function ls(term, directories, cwd, root, dirs, dir = null) {
    function print_home() {
        term.echo(dirs.map(dir => `<blue class="directory">${dir}</blue>`).join('\n'));
        term.echo(['joke','credits','record'].map(file => `<green class="command">${file}</green>`).join('\n'));
    }
    if (dir) {
        if (dir.match(/^~\/?$/)) {
            print_home();
        } else if (dir.startsWith('~/')) {
            const path = dir.substring(2);
            const dirsArr = path.split('/');
            if (dirsArr.length > 1) {
                term.error('Invalid directory');
            } else {
                const dirName = dirsArr[0];
                term.echo(directories[dirName].join('\n'));
            }
        } else if (cwd === root) {
            if (dir in directories) {
                term.echo(directories[dir].join('\n'));
            } else {
                term.error('Invalid directory');
            }
        } else if (dir === '..') {
            print_home();
        } else {
            term.error('Invalid directory');
        }
    } else if (cwd === root) {
        print_home();
    } else {
        const dirName = cwd.substring(2);
        term.echo(directories[dirName].join('\n'));
    }
}
