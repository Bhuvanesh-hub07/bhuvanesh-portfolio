# Bhuvanesh S — Personal Portfolio

A responsive dark-futuristic React portfolio for Bhuvanesh S, B.E. Electronics & Communication Engineering (expected 2027). Built with React and Vite.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL Vite prints in your browser.

## Build for deployment

```bash
npm run build
```

The production site is generated in `dist/`.

## Deploy to GitHub Pages

The `main` branch is deployed automatically by `.github/workflows/deploy.yml`.
The Vite base path is configured for the `bhuvanesh-portfolio` repository, and
the profile image and resume links use that base path.

In the repository, open **Settings → Pages** and set **Build and deployment
→ Source** to **GitHub Actions**. Pushes to `main` and manual workflow runs
will then publish the site at
`https://bhuvanesh-hub07.github.io/bhuvanesh-portfolio/`.

## Deploy to Vercel

1. Upload this project to a GitHub repository.
2. Sign in to Vercel and import the repository.
3. Keep the defaults for Vite: build command `npm run build`, output directory `dist`.
4. Deploy and use the generated public URL on your resume and LinkedIn.

## Before publishing

- Review every date, award title, and internship description for accuracy.
- Replace project GitHub profile links with specific repository URLs when available. The current project cards point to the main GitHub profile because project-specific repository URLs were not supplied.
- Add project screenshots, demo videos, and a resume download if you want those assets displayed publicly.
- Check that you are comfortable publishing the email and phone number currently shown in the resume.
- This portfolio presents the NICU monitoring system as an academic prototype, not a certified medical device.

## Content sources

Content is based on the supplied resume documents. LinkedIn information may need manual confirmation if profile visibility requires a sign-in.
