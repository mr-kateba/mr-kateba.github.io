# mr-kateba.github.io

The Blazma tools site: https://mr-kateba.github.io

Profile page: an animated main picture, a list of the Blazma tools and a list of Nakhla Studio games.

- Tools and games: `assets/site.js` (`TOOLS`, `GAMES`).
- Main picture: `assets/avatar.webp` (animated). Cover/background: set `COVER` at the top of `assets/site.js`.
- The previous tools page is kept at `/classic` and in the `classic-2026-11-24` tag.

It also serves the short launcher for [Blazma Boost](https://github.com/mr-kateba/Blazma-Boost):

```powershell
irm mr-kateba.github.io/win | iex
```

`win` downloads and runs the latest Blazma Boost release, so it never needs updating.
