# auto login for man guest wifi using _puppeteer_

## steps:
1. install dependencies using `yarn` or `npm i`
2. create a `.env` file (template is the `.env-example` file)
3. fill in your credentials
4. when you connect to the wifi **close the captive portal pop up**
5. execute the index.js (`node index.js` or `yarn start` or `npm start`)

## optional
1. create an alias in your `.bashrc` or `.zshrc` that executes the index.js file (e.g. `alias wifi='yarn --cwd <DIRECTORY_OF_THIS_REPO> start'`)