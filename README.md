# Omaro.11ty

Portfolio website built with [11ty](https://www.11ty.dev/).

```sh
npm install
npm start       # dev server
npm run build   # outputs to dist/
```

- Content (experience, ventures, projects, skills, contact) lives in `src/_data/cv.js`.
- Site-wide SEO defaults live in `src/_data/site.js`; pages override `title` and `description` in front matter.
- Styles are plain CSS in `src/assets/css/styles.css`. Type scale tops out at 14.4px (16px scaled to 90%).
