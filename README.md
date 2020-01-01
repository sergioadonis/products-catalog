# restaurant-orders-db
Project to define restaurant orders schemes database and models for data access 

## Requirements
Requirement list:
 - Docker
 - docker-compose 
 - mysql-client

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

Next, to run `mysql` locally you could up it with `docker-compose`:
```bash
docker-compose up -d
docker-compose ps
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

Finally, if you want down your instances with `docker-compose`:
```bash
docker-compose down
```
