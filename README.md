[![GitHub contributors](https://img.shields.io/badge/contributors-8-green?style=for-the-badge)]()


# MusicHub

> An application that works on Bluetooth, something similar to Airdrop (with IOS airdrop you can send pictures to anyone around you that has it on), but with this application, you can see what music the other people around you (that also have this application turned on) are listening to. And if you like it, you can send them a message. The users can have a profile, with a profile picture and their Spotify account linked.

A social network based on music that helps people connect to those near them!


### General guidelines

The project is based on the following main dependencies:
* Docker v3
* MySQL v8
* Node v14.15.0
* Python 3.8

For setting up the frontend and backend manually, please refer to the individual directoy READMEs, there are more detailed instructions there.

### Using docker to setup everything

Why go through the trouble of adding docker into the mix? Because it's faster than installing python, mysql and npm by hand.
And with some basic commands, you won't need much installed on your local machine and the configuration can easily be reset.

To setup the database locally, you can run the following in the *root* directory of the project:
```
    $ docker-compose -f docker-compose-local.yml up --build -d db
```

Where:
* docker-compose is the tool used for spinning up container configuration
* -f docker-compose-local.yml specifies the configuration file to use
* up - start the container from the configurations found in the file
* --build - rebuild the container if any files have changed, if not it won't do anything differently
* -d - detach, if you skip this it will show the command output, you may need to skip this for debugging
* db - the name of the configuration to spin up, if not specified it will run all entries from the given file (see docker-compose-local.yml)

Similarly, to spin up the development backend server:
```
    $ docker-compose -f docker-compose-local.yml up --build -d backend
```

And for the frontend dev server:
```
    $ docker-compose -f docker-compose-local.yml up --build -d frontend
```


### Automated checks using github actions and docker

For ensuring code quality and contineous integration, we added tests and linters that run automatically upon creating a new pull request (or adding new commits to an existing one).

Tests, are.. unit tests for small pieces of code that test a certain functionallity. We have them for both frontend and backend.

Linters are tools that check certain standards are met. For example: the spacing is right, there are no unused imports, so on and so forth.

If you want, you can run these commands by hand, or using a single docker command for each step.

To run backend linter:
```
$ flake8 backend/
```
Or using docker (you may need to build the container first! see 'Using docker to setup everything'):
```
$ docker-compose -f docker-compose-local.yml run --rm backend flake8 --max-line-length 120 .
```

To run backend tests:
```
$ ./manage.py test
```

Or using docker (you may need to build the container first! see 'Using docker to setup everything'):
```
$ docker-compose -f docker-compose-local.yml run --rm backend python manage.py test
```

To run frontend linter:
```
$ eslint src/
```

Or using docker (you may need to build the container first! see 'Using docker to setup everything'):
```
$ docker-compose -f docker-compose-local.yml run --rm frontend eslint --max-warnings 0 src
```

To run frontend tests:
```
$ npm test
```

Or using docker (you may need to build the container first! see 'Using docker to setup everything'):
```
$ docker-compose -f docker-compose-local.yml run --rm frontend npm test
```