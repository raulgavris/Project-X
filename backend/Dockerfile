FROM python:3.8

WORKDIR /backend

COPY . /backend

RUN apt-get update -y
RUN apt-get install default-libmysqlclient-dev  -y

RUN pip install -r requirements.txt

RUN /bin/bash -c 'echo "$(cat .env-for-source)" >> /root/.bashrc'

EXPOSE 8000

ENTRYPOINT ["/backend/entrypoint-backend.sh"]
