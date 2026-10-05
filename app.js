(() => {
  const P = window.PORTFOLIO;
  const G = window.GITHUB_STATS;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const projects = P.projects.filter((p) => p.show !== false);
  const stats = (p) => (G && p.repo && G.repos[p.repo]) || null;
  const monthYear = (iso) => new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const listText = (items) =>
    items.length < 2 ? items.join("") : items.slice(0, -1).join(", ") + " and " + items[items.length - 1];

  // ---------- Header, intro, footer ----------
  document.title = P.name;
  $("top-name").textContent = P.name;
  $("name").textContent = P.name;
  $("intro").textContent = P.intro;
  $("status").textContent = P.status || "";
  $("foot").textContent = `© ${new Date().getFullYear()} ${P.name}`;

  const contact = [];
  if (P.email) contact.push(`<a href="mailto:${esc(P.email)}">Email</a>`);
  contact.push(`<a href="${esc(P.github)}" target="_blank" rel="noopener">GitHub</a>`);
  if (P.linkedin) contact.push(`<a href="${esc(P.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
  $("top-links").innerHTML = contact.join("");
  $("contact-links").innerHTML = contact.join("");

  // ---------- Quest list ----------
  const lockIcon = `<svg class="lock" viewBox="0 0 12 12" aria-hidden="true"><path fill="currentColor" d="M3 5V3.5a3 3 0 0 1 6 0V5h1v7H2V5h1zm1.5 0h3V3.5a1.5 1.5 0 0 0-3 0V5z"/></svg>`;
  $("quest-list").innerHTML = projects
    .map((p, i) => `<li><button type="button" data-i="${i}" data-status="${p.status}">
        ${esc(p.name)}${p.private ? lockIcon : ""}<span class="visually-hidden">${p.status === "complete" ? ", complete" : ", in progress"}${p.private ? ", private" : ""}</span>
      </button></li>`)
    .join("");
  const completed = projects.filter((p) => p.status === "complete").length;
  $("quest-count").textContent = `Completed: ${completed}/${projects.length}`;

  // ---------- Journal ----------
  const journal = $("journal");
  const renderJournal = (p) => {
    const s = stats(p);
    const steps = [
      ...(p.done || []).map((t) => `<li class="done">${esc(t)}</li>`),
      ...(p.todo || []).map((t) => `<li class="todo">${esc(t)}</li>`),
    ].join("");

    const facts = [];
    if (s) facts.push(`${s.commits} commit${s.commits === 1 ? "" : "s"}, last updated ${monthYear(s.pushedAt)}.`);
    facts.push(
      p.private
        ? "The source is in a private repository. I'm happy to walk through it on a call."
        : `<a href="${esc(P.github.replace(/\/$/, ""))}/${esc(p.repo)}" target="_blank" rel="noopener">Read the source on GitHub</a>.`
    );

    journal.innerHTML = `
      <h3>${esc(p.name)}</h3>
      <p class="kind">${esc(p.kind)}</p>
      <p class="summary">${esc(p.summary)}</p>
      <h4>${p.status === "complete" ? "Quest complete" : "Quest in progress"}</h4>
      <ul class="steps">${steps}</ul>
      <h4>Built with</h4>
      <p class="rewards">${esc(listText(p.stack))}.</p>
      ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
      <p class="meta">${facts.join(" ")}</p>`;

    journal.classList.remove("opening");
    void journal.offsetWidth; // restart the unroll animation
    journal.classList.add("opening");
  };

  const select = (i) => {
    $("quest-list").querySelectorAll("button").forEach((b) => b.setAttribute("aria-current", String(b.dataset.i === String(i))));
    renderJournal(projects[i]);
  };
  $("quest-list").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    select(btn.dataset.i);
    if (matchMedia("(max-width: 760px)").matches) journal.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  select(0);
  journal.classList.remove("opening"); // no animation on first load

  // ---------- Stack and interests ----------
  const pairs = (items) => items.map((x) => `<dt>${esc(x.name)}</dt><dd>${esc(x.note || x.text)}</dd>`).join("");
  $("stack").innerHTML = pairs(P.stack);
  $("interests").innerHTML = pairs(P.interests);
  $("training").textContent = P.training || "";
})();
