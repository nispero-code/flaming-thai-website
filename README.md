# Flaming Thai website

Static site (plain HTML, CSS and JavaScript, no build step).

- `index.html` — homepage
- `product.html?p=<sauce>` — product pages, data in `products.js`
- `recipes.html` and `recipe.html?r=<recipe>` — recipes, data in `recipes.js`
- `site.css`, `site.js` — shared header, footer and buttons
- `assets/` — photography, bottle cutouts, packshots and tiger artwork

To view locally, run `python3 -m http.server` in this folder and open http://localhost:8000.
