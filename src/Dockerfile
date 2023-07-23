FROM node:20.3.0-bookworm

COPY . /home/node/app
WORKDIR /home/node/app

EXPOSE 8000

RUN apt-get update && \
    apt-get install -y netcat-traditional
RUN npm install

ENV SUPER_SECRET="Don't let anyone know!"

ENTRYPOINT [ "npm", "run", "dev" ]