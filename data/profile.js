// Everything on the site is driven by this file. Edit freely.
// Private projects show their name, description and stack, but no source link.
// Set `show: false` to hide a project entirely.

window.PORTFOLIO = {
  name: "Kramberry",
  intro: "I build tools for the things I care about: games, small businesses, and the people who use them. Most of my projects start because something I use every day is slower or clunkier than it should be.",
  status: "Open to new roles and freelance work.",
  github: "https://github.com/Kramberry",
  email: "", // add an address to show an email link
  linkedin: "", // optional

  // "What I work with": plain list, no levels.
  stack: [
    { name: "Java", note: "RuneLite plugins: overlays, game-state tracking, event-driven code." },
    { name: "Python", note: "Flask and Streamlit apps, pandas, Windows executables with PyInstaller." },
    { name: "JavaScript", note: "Next.js App Router, React components, API routes." },
    { name: "HTML and CSS", note: "Tailwind, responsive layouts, print-ready PDF styling." },
    { name: "APIs", note: "REST clients, OAuth 2.0 with PKCE, the OSRS Wiki prices API." },
    { name: "Data", note: "Prisma, PostgreSQL, Supabase, plain JSON when that's enough." },
    { name: "Tooling", note: "Git and GitHub, Gradle, npm, Claude Code as a pair programmer." },
  ],

  // status: "complete" (green in the quest list) | "in-progress" (yellow)
  // done: steps shown struck through, like a finished quest step
  // todo: steps still ahead
  // repo: GitHub repo name, used by scripts/sync-github.mjs for commit counts and dates
  projects: [
    {
      show: true,
      name: "ShiftDesk",
      repo: "PyScheduler",
      private: false,
      status: "complete",
      kind: "A desktop scheduling app, written in Python",
      summary: "A weekly staff-schedule builder for small teams. It runs locally, needs no internet, and exports to Excel and PDF in one click.",
      done: [
        "Package it as a Windows executable so there's nothing to install",
        "Calculate hours automatically and handle PTO and multi-role shifts",
        "Remember last week's schedule between sessions",
      ],
      stack: ["Python", "Flask", "Tailwind CSS", "PyInstaller"],
      note: "Built so a manager would never have to fight a spreadsheet again.",
    },
    {
      show: true,
      name: "GE Flipper",
      repo: "ge-tracker",
      private: true,
      status: "complete",
      kind: "A trading dashboard, written in Python",
      summary: "A Grand Exchange dashboard that pulls live prices, accounts for GE tax, and tracks open and completed flips.",
      done: [
        "Work out live margins with the 2% tax, its cap and its exemptions built in",
        "Find combination flips: items bought, combined and resold",
        "Track holdings and history, with automatic backups",
      ],
      stack: ["Python", "Streamlit", "pandas", "OSRS Wiki API"],
      note: "Buy low, sell high, log everything.",
    },
    {
      show: true,
      name: "Spotify Controller",
      repo: "runelite-spotify-controller",
      private: false,
      status: "complete",
      kind: "A RuneLite plugin, written in Java",
      summary: "Control Spotify from inside RuneLite: play, pause, skip, volume and album art, without alt-tabbing.",
      done: [
        "Sign in with OAuth and PKCE, so no client secret ships with the plugin",
        "Add a sidebar panel and a floating mini player",
      ],
      stack: ["Java", "Spotify Web API", "OAuth 2.0"],
      note: "Alt-tabbing mid-raid is how you die.",
    },
    {
      show: true,
      name: "Nutrition Platform",
      repo: "",
      private: true,
      status: "in-progress",
      kind: "A full-stack web app, written in JavaScript",
      summary: "A subscription nutrition platform with a TDEE calculator, food logging, meal planning and grocery pricing.",
      done: [
        "Build the TDEE calculator and calorie tracker",
        "Add food search with images",
        "Set up sign-in with Supabase and the database with Prisma and Postgres",
      ],
      todo: [
        "Meal planning",
        "Grocery price lookups",
        "Subscriptions with Stripe",
      ],
      stack: ["Next.js", "React", "Prisma", "PostgreSQL", "Supabase", "Stripe"],
      note: "",
    },
  ],

  // "Outside of work". Rewrite these in your own words.
  interests: [
    { name: "Old School RuneScape", text: "My longest-running game, and the reason half my projects exist. If something in OSRS is tedious, I'll probably end up writing a plugin for it." },
    { name: "World of Warcraft", text: "Raids, dungeons and the kind of coordination that feels a lot like shipping software with a team." },
    { name: "Anime", text: "Mostly long-running shonen with the odd slice-of-life in between. I have a weakness for a good training arc, which probably explains the side projects." },
    { name: "Computers", text: "Building, tweaking and breaking machines, then figuring out exactly why they broke." },
  ],

  training: "Currently working through the backend path on Boot.dev.",
};
