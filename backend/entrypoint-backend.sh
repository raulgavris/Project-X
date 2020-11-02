#!/bin/sh
sleep 60
python3 manage.py makemigrations
python3 manage.py migrate --run-syncdb
gunicorn --bind 0.0.0.0:8000 --log-level=debug main.wsgi