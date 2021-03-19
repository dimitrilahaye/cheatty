# Cheatty.io API

## Description

API MongoDB GraphQL NestJS

## Installation

```bash
npm install
```

## Services

### Running Mongo on docker

```bash
docker-compose up -d
```
> > Mongo DB location: http://localhost:27017
>
> > Mongo-express client: http://localhost:8081
>
> > Mailhog: http://localhost:8025

[Service used for docker](https://hub.docker.com/_/mongo)

### Running the API

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```
> > API location: http://localhost:3002
>
> > Graphql Playground location: http://localhost:3002/graphql

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
