# Project-X

Requirements:  
- Docker v3
- MySQL v8
- Node v14.15.0


Database:  
Install requirements from: https://pypi.org/project/mysqlclient/

Backend:  
- Install pip3 python3 (3.8.5 at least)
- Create a virtual env  
mkvirtualenv projectx  
workon projectx  
pip3 install -r requirements.txt  
- source .env  
check with env on commandline to see if your variable are in the path    
- python3 manage.py migrate --run-syncdb
- python3 manage.py runserver


Frontend:
- npm install
- npm start
