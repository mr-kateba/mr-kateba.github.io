# mr-kateba.github.io

The Blazma tools site: https://mr-kateba.github.io

Profile page: entry screen, a list of the Blazma tools, a list of Nakhla Studio games, and a nasheed player.

- Tools and games: `assets/site.js` (`TOOLS`, `GAMES`).
- Nasheeds, main picture and background: `nasheeds/list.json` (see `nasheeds/README.md`).
- The previous tools page is kept at `/classic` and in the `classic-2026-11-24` tag.

It also serves the short launcher for [Blazma Boost](https://github.com/mr-kateba/Blazma-Boost):

```powershell
irm mr-kateba.github.io/win | iex
```

`win` downloads and runs the latest Blazma Boost release, so it never needs updating.
