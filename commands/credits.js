export default function credits(term) {
    term.echo([
        '',
        '<white>Used libraries:</white>',
        '* <a href="https://terminal.jcubic.pl">jQuery Terminal</a>',
        '* <a href="https://github.com/patorjk/figlet.js/">Figlet.js</a>',
        '* <a href="https://github.com/jcubic/isomorphic-lolcat">Isomorphic Lolcat</a>',
        '* <a href="https://jokeapi.dev/">Joke API</a>',
        ''
    ].join('\n'));
}
