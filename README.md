# NodeJS TypeScript Starter Template

Features:

- ES Modules syntax in both sources and tests
- Unit Testing using Mocha and Chai
- Linting using TSLint
- Dev launch using node-ts
- Prod build and launch using node
- VS Code launch config for debugging

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
