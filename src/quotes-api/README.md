# Quotes HTTP API

## Requirements

- node >= 10
- npm >= 6
- mongodb >= 3.0
- typescript >= 3.0

## Running the API
### Development
To start the application in development mode, run:

```bash
npm install
```

Start the application in dev env:
```
npm run dev
```
Start the application in production env:

Install ts pm2 and typescript compiler:
```
npm install -g pm2
pm2 install typescript
```

example start with scale on 2 core:
```
pm2 start ./src/index.ts -i 2 --no-daemon
```
or
```
npm run build
pm2 start ./build/index.js
```

Express server listening on http://localhost:3000/, in development mode
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.

### Testing
To run integration tests:
```bash
npm test
```

## Set up environment
In root folder you can find `.env`. You can use this config or change it for your purposes.
If you want to add some new variables, you also need to add them to interface and config object (Look `src/config/index.ts`)
