#!/bin/sh
python3 manage.py makemigrations
python3 manage.py migrate --run-syncdb
gunicorn --bind 0.0.0.0:8000 --error-logfile=gunicorn_error.log --log-level=debug website.wsgi