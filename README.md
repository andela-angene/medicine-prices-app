# Medicine Prices Nigeria
This is the repository for https://medprices.codefornigeria.org. It has been built using
react and generated using create-react-app.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing
Clone the repo from Github by running `$ git clone git@github.com:Code4Nigeria/medicine-prices-app.git`

Change directory into package `$ cd medicine-prices-app`

Install the dependencies by running `$  npm install`

You can now run the project by `$ npm start`. The output from this command should either
show you how to access it or open and direct you to it on your browser.

### Deployment
To deploy this application, you need to build the distributable code. This is done using
`$ npm run build` which generates a `/build` directory at the root of the project. You can now take this and serve it as static files of a server.

If pushing to dokku or heroku, you can run `$ ./deploy.sh <remote_name>` which makes a deployment branch, builds the distributable code, stops gitignoring the distributable code folder, makes a
commit and and pushes the repo to the remote provided. eg. `$ ./deploy.sh dokku`

Beware that pushing uses force and will overwrite whatever is on the repo that is currently on
the server.

In case the changes don't immediately reflect on the server run `dokku ps:rebuild <myapp>`
