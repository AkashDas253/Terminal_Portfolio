export default function record(term, arg) {
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
