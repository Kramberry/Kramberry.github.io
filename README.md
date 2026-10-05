# Portfolio

Static site with no build step and no frameworks. Open `index.html` in a browser to preview it.

## Editing

All content lives in [data/profile.js](data/profile.js): intro, projects, stack and interests.

- `status: "complete"` shows a project in green in the quest list; `"in-progress"` shows it in yellow.
- `done` steps appear struck through in the journal, like finished quest steps. `todo` steps appear in blue.
- `private: true` shows a lock and replaces the source link with an offer to walk through the code.
- `show: false` hides a project completely.

## Syncing GitHub stats (including private repos)

```bash
node scripts/sync-github.mjs
```

This uses your logged-in `gh` CLI to fetch commit counts, languages and dates for the repos listed in `profile.js`, then writes them to `data/github.js`. Only that metadata goes into the site: no code, no tokens, and no repos you haven't listed. Run it before each deploy.

## Deploying

Push to a public GitHub repo and turn on **Settings → Pages → Deploy from branch (main, root)**. Any static host works (Netlify, Vercel, Cloudflare Pages).
