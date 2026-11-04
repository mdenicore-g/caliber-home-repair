# Caliber Home Repair

React + Vite rebuild of the Caliber Home Repair single-page site.

## Run

```sh
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint
```

## Structure

- `src/data.js` – services, communities, benefits and contact details
- `src/components/` – one component per page section (Header, Hero, Intro, Services,
  ServiceArea, WhyCaliber, About, CallToAction, Contact, Footer)
- `src/index.css` – all styles; colors are CSS variables at the top
- `index.html` – page title, SEO meta tags and schema.org business data
