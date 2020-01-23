# Products Catalog backend service

Project to define products and business database schemes and models for data access

## Requirements

Requirement list:

- Node and npm
- Docker
- docker-compose
- mysql-client

## Too long to read

Get mysql up

```bash
npm run mysql
```

Install npm dependencies

```bash
npm install
```

Apply migrations

```bash
npm run migrate
```

Testing

```bash
npm test
```

Clean up

```bash
docker-compose down
```

## Getting started

### Mysql locally

First you must write settings file to config `mysql` using environments variables. You could copy the example, then custom your settings:

```bash
cp .env.example .env
nano .env
...
```

This is an example of configuration:

```
MYSQL_HOST=127.0.0.1
MYSQL_USER=app_user
MYSQL_PASSWORD=app_password
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=app_database
```

Next, to get `mysql` up locally you could run `docker-compose`:

```bash
docker-compose up -d
docker-compose ps
```

(Optional) If you have `node` and `npm`, you could run the script in `package.json` to get `mysql` up:

```bash
npm run mysql
```

Last commands run an instance of `mysql` and other of `adminer`. You could check logs with `docker-compose`:

```bash
docker-compose logs
```

After that, you could connect using any `mysql-client`, for example:

```bash
export $(cat .env)
mysql --user=$MYSQL_USER --host=$MYSQL_HOST --database=$MYSQL_DATABASE --password=$MYSQL_PASSWORD
```

The `export ...` command is optional, you have to run it only first time or if you want change the settings.
In order to exit of `mysql-client` you have to type `exit` then hit `ENTER`.

### Apply migrations

In order to get a complete database schema you have to apply migrations.
You could use `node` and `knex` to apply migrations.

First, if you have `node` and `npm` install dependencies (only first time), then run migrations:

```bash
npm install
node ./node_modules/knex/bin/cli.js migrate:latest
```

(Optional) You could run the script in `package.json` to apply migrations:

```bash
npm run migrate
```

### Testing

Testing is easy with `mocha` and `chai`. We have reliable test because we have a real `mysql`database running in `Docker`.

First, if you have `node` and `npm` install dependencies (only first time), then run testing:

```bash
npm install
npm test
```

### Clean up

Finally, if you want down your instances with `docker-compose`:

```bash
docker-compose down
```
