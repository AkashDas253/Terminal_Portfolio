# Terminal Portfolio

>A web-based interactive terminal portfolio to showcase your skills, projects, education, and experience in a fun, command-line style interface.

---

## Entry Syntax

Use the following JSON structures for each entry type in the `data/` folder:

**Education Entry:**
```json
{
	"degree": "...",
	"institution": "...",
	"year": "...",
	"details": ["...", "..."]
}
```

**Experience Entry:**
```json
{
	"role": "...",
	"company": "...",
	"duration": "...",
	"location": "...",
	"details": ["...", "..."]
}
```

**Project Entry:**
```json
{
	"name": "...",
	"description": "...",
	"technologies": ["...", "..."],
	"repository": "...",
	"liveLink": "..." // optional
}
```

**Skill Entry:**
```json
{
	"category": "...",
	"skills": [
		{ "name": "...", "icon": "..." },
		{ "name": "...", "icon": "..." }
	]
}
```

---

## Features

- **Terminal UI**: Simulates a real terminal with commands and directory navigation.
- **Modular Data**: Education, experience, skills, and projects are loaded from JSON files for easy editing.
- **Modular Commands**: Each command is implemented in its own JavaScript file for maintainability.
- **Dynamic Display**: Commands like `ls`, `cd`, `experience`, `joke`, and more.
- **Data Format Help**: Commands like `education_format`, `experience_format`, etc., show the JSON structure for each data type.
- **Fun Additions**: Programming jokes, colored output, and ASCII art greetings.

## Project Structure

- `index.html` — Main HTML file, loads all scripts and styles.
- `my-terminal.js` — Main JavaScript, loads commands and data, initializes the terminal.
- `commands/` — Each command (e.g., `help.js`, `ls.js`, `experience.js`) is a separate module.
- `data/` — All portfolio data in JSON files (`education.json`, `experience.json`, `skills.json`, `projects.json`).
- `fonts/` — Figlet font files for ASCII art.

## Usage

1. **Clone or Download** this repository.
2. **Serve Locally**: Use a local server (e.g., VS Code Live Server, Python's `http.server`, or Node's `http-server`) to avoid CORS issues.
3. **Open `index.html`** in your browser.
4. **Try Commands**:
	 - `ls`, `cd`, `help`, `echo`, `joke`, `credits`, `record`
	 - `experience` — View your work experience
	 - `education` — View your education (via `ls education`)
	 - `projects` — View your projects (via `ls projects`)
	 - `skills` — View your skills (via `ls skills`)
	 - `education_format`, `experience_format`, `project_format`, `skill_format` — See the JSON format for each data type (see Entry Syntax above)

## Customization

- **Add/Edit Data**: Edit the JSON files in the `data/` folder to update your portfolio. Use the [Entry Syntax](#entry-syntax) as a guide.
- **Add Commands**: Add new JS files in `commands/` and register them in `my-terminal.js`.
- **Change Fonts**: Add more figlet fonts to the `fonts/` folder and update the font in `my-terminal.js`.

## Credits
- [jQuery Terminal](https://terminal.jcubic.pl)
- [Figlet.js](https://github.com/patorjk/figlet.js/)
- [Isomorphic Lolcat](https://github.com/jcubic/isomorphic-lolcat)
- [Joke API](https://jokeapi.dev/)

---
Feel free to fork and customize for your own portfolio!
