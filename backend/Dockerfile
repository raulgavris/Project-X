FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY . /backend
WORKDIR /backend

RUN apt-get update -y
RUN apt-get install default-libmysqlclient-dev  -y

RUN pip install -r requirements.txt

EXPOSE 8000

ENTRYPOINT ["/backend/entrypoint-backend.sh"]
