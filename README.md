# NodeJS TypeScript Starter Template

Features:

- Dockerized as dev and prod
- Hot reload inside dev docker container
- ES Modules syntax in both sources and tests
- Unit Testing using Mocha
- Linting using TSLint
- VS Code launch config for debugging

## Docker

```bash
docker compose up -d --build
```

## Usage

Run tests:

```bash
npm test
```

Run app without build step:

```bash
npm start
```

Lint and fix:

```bash
npm run lint
```


Build app:

```bash
npm run build
```

Run built app using node (e.g. in [node docker container](https://hub.docker.com/_/node)):
```bash
npm run start:prod
```

Clean (removes ./dist/ folder)
```bash
npm run clean
```
