[![Black code style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)
[![Python 3.8](https://img.shields.io/badge/python-3.8-blue.svg)](https://www.python.org/downloads/release/python-360/)

# Musichub backend

> Backend of our group project application, MusicHub!

### Prerequisites and general guidelines

To get the backend project running, you will need to have python 3.8 installed.
As well as pip to manage dependencies.

For easier development you can use [docker](https://docs.docker.com/docker-for-windows/install/) to setup the database and even the frontend for testing.


### Using the direct approach to setting up stuff

This can be easier if you are already comfortable with your environment.
But regardless, you may want to check the docker approach as well.

You will need to install virtualenv for python. There are multiple ways to do this, I recommend virtualenvwrapper.
Here's a [good tutorial](https://realpython.com/python-virtual-environments-a-primer/)

Make sure your environment is activated, then you can install the requirements:
```
    $ pip install -r requirements.txt
```

You will also need to setup a [mysql database server](https://dev.mysql.com/doc/refman/8.0/en/installing.html) on your machine.


Then you have to create the tables and run the migrations.
```
    python3 manage.py migrate --run-syncdb
    python3 manage.py runserver
```

Refer to the frontend docs for setting up npm and running the build.
