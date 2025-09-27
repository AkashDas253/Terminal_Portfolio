export default function cd(term, cwdObj, dirs, root, dir = null) {
    let { cwd } = cwdObj;
    if (dir === null || (dir === '..' && cwd !== root)) {
        cwdObj.cwd = root;
    } else if (dir.startsWith('~/') && dirs.includes(dir.substring(2))) {
        cwdObj.cwd = dir;
    } else if (dirs.includes(dir)) {
        cwdObj.cwd = root + '/' + dir;
    } else {
        term.error('Wrong directory');
    }
}
