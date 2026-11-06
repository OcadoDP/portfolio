# Dexter Ocado — Personal Portfolio

A multi-page personal portfolio showcasing my background, experience, selected projects, and work at the intersection of mathematics, data analytics, and software development.

The site uses a maroon, black, and white visual identity, responsive layouts, interactive elements, and a light/dark theme.

## Live Website

[ocadodp.github.io/portfolio](https://ocadodp.github.io/portfolio/)

## Pages

| File | Description |
| --- | --- |
| `index.html` | Home and portfolio introduction |
| `about.html` | Background and personal profile |
| `projects.html` | Selected projects and case studies |
| `project-dbm.html` | Enterprise HR automation and business intelligence |
| `project-empower.html` | Project EmpowerPH |
| `project-infratrust.html` | InfraTrust decision support tool |
| `project-signature.html` | Offline signature verification (SigVerifyAI) |
| `project-volatility.html` | Econometric time-series analysis (PSEi) |
| `contacts.html` | Contact information and links |
| `job-hunt.html` | Fresh graduate / job-hunt reflection |
| `restricted.html` | Restricted archive experience |
| `version-history.html` | Portfolio version history |

## Project Structure

```text
portfolio-main/
├── index.html
├── about.html
├── projects.html
├── project-*.html
├── contacts.html
├── job-hunt.html
├── restricted.html
├── version-history.html
├── site-shared.css
├── site-shared.js
├── ai-context.txt
├── img/
└── Resume - Dexter Pascual Ocado.pdf
```

- **HTML files** contain the individual pages and their page-specific markup, styles, and scripts.
- **`site-shared.css`** contains shared styling used across pages.
- **`site-shared.js`** provides shared site functionality, including navigation and theme behavior.
- **`ai-context.txt`** provides a factual reference for the portfolio's AI experience.
- **`img/`** contains image assets used throughout the website.

## Running Locally

This is a static website. No build step is required.

1. Download or clone the repository.
2. Open `index.html` in a browser, or serve the folder with a local web server for more consistent testing.
3. Navigate through the pages using the website's menu.

For example, with Python installed, run this command from the project folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

Some fonts, animation libraries, and other resources load from external services, so an internet connection may be needed for the complete experience.

## Maintenance Notes

- Keep the filenames and relative links consistent when adding or moving pages.
- Review **`site-shared.css`** and **`site-shared.js`** for shared site changes before editing individual pages.
- Test changes in both light and dark modes and on mobile and desktop screen sizes.
- Update **`ai-context.txt`** when changing information that the portfolio AI should accurately reference.
- Keep the version history current when making substantial updates.

## Code Formatting

The source files in this version have been formatted for consistent indentation and easier reading. The formatting pass was intended to preserve existing behavior, page content, styles, and functionality; it was not a feature redesign.

## Author

**Dexter Pascual Ocado**  
[GitHub](https://github.com/OcadoDP) · [LinkedIn](https://www.linkedin.com/in/ocadodexterp/) · [Portfolio](https://ocadodp.github.io/portfolio/)
