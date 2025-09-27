export default function echo(term, ...args) {
    if (args.length > 0) {
        term.echo(args.join(' '));
    }
}
