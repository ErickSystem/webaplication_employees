# EMPLOYEE REGISTRATION

## REQUIRED

- *node >= v8.9.4
- *npm >= 5.6.0
- *MongoDB shell version >= v3.6.4
- *nodemon
- *Docker and docker compose

## INSTALAÇÃO

### 1 - DOCKER

Have docker installed, preferably the version below or higher:

`Docker version 18.06.0-ce, build 0ffa825`

How install: https://docs.docker.com/install/linux/docker-ce/ubuntu/

configure user root to docker: https://docs.docker.com/install/linux/linux-postinstall/

Have docker-compose installed, preferably the version below or higher:

`docker-compose version 1.21.2, build a133471`

How install: https://docs.docker.com/compose/install/#install-compose

### 2 - MONGODB

How install: https://www.digitalocean.com/community/tutorials/como-instalar-o-mongodb-no-ubuntu-16-04-pt

### 3 - CONFIG PROJECT

```bash
# add name para server local mongo
sudo vim /etc/hosts
127.0.0.1   mongodb.local
ESQ
:wq!
# download dependencies of project
cd api/
npm i

# install nodemon.
# More information about nodemon: https://nodemon.io/
npm install -g nodemon

```

# ARCHITECTURE API

```
├── bin
│   └── service.js
├── config
│   ├── env.js
│   └── index.js
├── lib
│   ├── controller
│   │   └── employee.controller.js
│   ├── datasource
│   │   └── connection.js
│   ├── index.js
│   ├── model
│   │   └── employee.js
│   ├── routes
│   │   └── employee.routes.js
│   └── util
│       └── logger.js
├── logs
│   ├── default-02.log
│   ├── error-02.log
│   ├── rate-02.log
│   ├── result-02.log
│   └── task-02.log
├── package.json
├── package-lock.json
└── src
    ├── controller
    │   └── employee.controller.js
    ├── datasource
    │   └── connection.js
    ├── index.js
    ├── model
    │   └── employee.js
    ├── routes
    │   └── employee.routes.js
    └── util
        └── logger.js
```

## RUN 

```bash
# whitout docker
source dev.env
cd api/
npm run local

# with docker
docker-compose up local
```

## API

```bash
# endpoints
GET -> http://127.0.0.1:3000/api/employees
GET -> http://127.0.0.1:3000/api/employees/:id
POST -> http://127.0.0.1:3000/api/employees
PUT -> http://127.0.0.1:3000/api/employees/:id
DELETE -> http://127.0.0.1:3000/api/employees/:id

# Body post and put
{
    "name": "Name Lastname",
    "position": "Function ",
    "office": "Office",
    "salary": 3500
}
Header: Content-Type: application/json
```