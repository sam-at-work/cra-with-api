# CRA with API

A Create React App project that comes with its own Node Server and a bunch of useful scripts

See a [Live Demo](https://cra-with-api-epqeqjrxby.now.sh)

## Key Features
- `./` (Project Root)
  - Yarn Workspaces used to hoist all workspace dependencies
  - NPM scripts for:
    - setting the name of the project (in `package.json` and `client/public/maniject.json`)
    - checking the current node version is latest Node version
    - setting the current Node version as the Node version for the project
    - checking if dependencies are up to date
    - updating dependencies to their latest versions in all `package.json` files
    - see disk usage of the client build
    - running client, server or both in development mode
    - generating a production build
    - running the production build
    - deploying production build using ∆Now
  - The following NPM packages that apply to both Client and Server workspaces:
    - [Prettier](https://prettier.io/) - apply consistent stying across client and server
    - [Gitmoji](https://gitmoji.carloscuesta.me/) - pretty git messages
    
- `./client`
  - Create React App
  - Dependencies manager by Yarn workspace
  
- `./server`
  - Run in development mode with Nodemon and Babel 7
  - Production build compiled with Babel 7
  
- `./scripts`
  - Bash scripts for:
    - Killing the dev server process by port (for those times it doesn't terminate properly)
    - Prefixing `npx` to the gitmoji `prepare-commit-msg` hook, so gitmoji can be installed locally
    - Listing all the Now∆ deployments of the project
    - Removing all but the latest Now∆ deployment

## Medium articles about this project
- [Create React App / Express API / Yarn Workspaces / Babel 7 / Now Deployment](https://medium.com/@smrgrace/create-react-app-express-api-yarn-workspaces-babel-7-now-deployment-2097bf8b371)