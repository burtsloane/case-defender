# Case Defender static site update

What changed:
- `/` is now the public cold-entry homepage.
- `/platform/` is the warm gated preview.
- `/why/` redirects to `/`.
- Existing `/citation/` and `/motion/` demos were preserved.

Before publishing:
1. Replace `hello@example.com` in `index.html` and `platform/index.html`.
2. Set the real preview password in `assets/main.js`.
3. Review relative links if you later move files around.

This package is GitHub Pages friendly for a project-site deployment where the repository root is the published folder.
