<<<<<<< Updated upstream
#!/bin/sh
sleep 20

python3 manage.py makemigrations
python3 manage.py migrate --run-syncdb

=======
#!/bin/sh
sleep 30

python3 manage.py collectstatic
python3 manage.py makemigrations
python3 manage.py migrate --run-syncdb

>>>>>>> Stashed changes
gunicorn --bind 0.0.0.0:8000 --log-level=debug main.wsgi