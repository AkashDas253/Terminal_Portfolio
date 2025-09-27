export default async function experience(term) {
  const res = await fetch('data/experience.json');
  const data = await res.json();
  term.echo('<white>Experience</white>');
  data.forEach(exp => {
    term.echo(`* <h2>${exp.company}</h2> <yellow>"${exp.role}"</yellow> (${exp.duration}, ${exp.location})`);
    exp.details.forEach(detail => term.echo(`  * ${detail}`));
    term.echo('');
  });
}
