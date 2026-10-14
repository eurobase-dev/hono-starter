# Hono starter for Eurobase

A minimal Hono API with `/` and `/health`. Ready to deploy on [Eurobase](https://eurobase.dev), a cloud for deploying web apps from GitHub, made in Europe.

## Deploy

1. Select **Use this template** to create your own copy of this repository.
2. In [Eurobase](https://eurobase.dev), create a project from your copy. Eurobase detects Hono and builds it with the included `wrangler.jsonc`.
3. Every push to `main` deploys again. You can roll back to any earlier deployment.

### With a coding agent

Connect Claude Code, Codex, Cursor, Zed or VS Code to Eurobase ([how](https://eurobase.dev/docs/agents)), then ask your agent:

> Deploy this project on Eurobase.

## Run it locally

```sh
npm install
npm run dev
```

## Learn more

- [Getting started](https://eurobase.dev/docs/getting-started)
- [How Hono runs on Eurobase](https://eurobase.dev/docs/workers)
- [Plans and limits](https://eurobase.dev/docs/plans): the Free plan costs nothing.
