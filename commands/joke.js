export default async function joke(term) {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming');
    const data = await res.json();
    if (data.type == 'twopart') {
        await term.animation(async () => {
            await term.echo(`Q: ${data.setup}`, { delay: 50, typing: true });
            await term.echo(`A: ${data.delivery}`, { delay: 50, typing: true });
        });
    } else if (data.type === 'single') {
        term.echo(data.joke, { delay: 51, typing: true });
    }
}
