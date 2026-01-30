# Estudio Juridico Rebottaro — Website

A simple, responsive marketing website for a law firm. Built as a static site using HTML, CSS and a small amount of JavaScript with Bootstrap for layout and components.

---

## 🔎 Project overview

- **Purpose:** Marketing / contact site for Estudio Juridico Rebottaro (example).
- **Stack:** HTML, CSS, JavaScript, Bootstrap 5, Google Fonts (Cinzel), no build step.
- **Location:** Root files: `index.html`, `styles/`, `js/`.

## ▶️ Quick start (preview locally)

1. Clone the repository:

   git clone <repo-url>
   cd estudioRebottaro

2. Quick preview options:
   - Open `index.html` directly in your browser (file://) or
   - Run a simple HTTP server and open `http://localhost:8000`:

     python -m http.server 8000

3. Edit files in the workspace and refresh the browser to see changes.

## 🧭 Project structure

- `index.html` — main page
- `styles/styles.css` — primary styles
- `js/script.js` — small site behaviors (ScrollSpy init, back-to-top, mobile collapse)
- `README.md` — (this file)

## ✨ Notable features

- Responsive layout using **Bootstrap 5**
- Navbar ScrollSpy (highlights active section)
- Smooth scrolling + `Back to top` button
- WhatsApp quick contact floating action button
- Fonts: **Cinzel** for a Roman/inscription style across the site
- Accessibility considerations: ARIA labels on interactive elements

## 🛠️ Development notes

- Keep markup semantic and use the existing section `id`s to ensure ScrollSpy works (`#home`, `#services`, `#about`, `#contact`).
- `js/script.js` contains a small, unobtrusive script for UI behaviors — keep it lightweight.
- Consider adding a linter or formatter for CSS/HTML if the project grows.

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit and push your changes
4. Open a Pull Request and describe the change

Please open issues to discuss larger changes first.

## 📄 License

This repository does not include a license file by default. If you want to make this code reusable, consider adding an open source license (e.g., MIT).

---

If you want, I can also add a `LICENSE` file, a short `CONTRIBUTING.md`, or a simple demo screenshot. Which would you prefer next? ✨