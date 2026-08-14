# burnerchrome

**Permanent burner Chrome + agent-browser CDP for the Musketeer family.**

Four adapters share one isolated Chrome for Testing profile on loopback port 9222:

| Bridge | CLI | Target | Behavior |
|--------|-----|--------|----------|
| [the-musketeer](https://github.com/VeigaPunk/the-musketeer) | `grok-web` | grok.com | Blocks until Copy capture |
| [the-puppeteer](https://github.com/VeigaPunk/the-puppeteer) | `chitchat` | chatgpt.com | Fire-and-forget |
| [the-kimiraikkoner](https://github.com/VeigaPunk/the-kimiraikkoner) | `kimiraikkoner` | kimi.com | Fire-and-forget |
| [the-almanacker](https://github.com/VeigaPunk/the-almanacker) | `almanack` | NotebookLM | Fire-and-forget studio/chat |

## Site

This repository is the product/docs site:

- **GitHub Pages:** https://veigapunk.github.io/burnerchrome/
- **Vercel mirror:** connect this repo in the Vercel dashboard (static site; `vercel.json` included)

## Why not Playwright?

Real Chrome (Turnstile passes), live OAuth (no cookie export), never your daily browser, ~2k-token a11y snapshots vs 50–100k DOM dumps, agent-first CLIs for web-GUI-only features (ChatGPT Pro / Deep Research, NotebookLM Studio, SuperGrok).

## One paste

See the site **Install** page, or:

```bash
# agent-browser + family CLIs + musketeer-chrome
# full script: https://veigapunk.github.io/burnerchrome/install.html
```

Marketplace plugins (skills): [VeigaPunk/ds4cc-marketplace](https://github.com/VeigaPunk/ds4cc-marketplace) — plugin ids `the-musketeer`, `the-puppeteer`, `the-almanacker`, `the-kimiraikoner` (note spelling).

## Policy

- CDP on `127.0.0.1` only
- Isolated `--user-data-dir` (Chrome 136+ refuses CDP on the default profile)
- Sequential fires only
- Official `grok` / `kimi` binaries keep their names

## License

Documentation and site code: MIT. Referenced CLIs remain under their own licenses.
