# express-mysql-restful

> 💉 Build a RESTful API using Express and MySQL.

## Install

Install dependencies
```
$ npm i
```
Create `.env` file
```
PORT=<Your Post>
DB_HOST=<Your Host>
DB_USER=<Your User>
DB_PASSWORD=<Your Password>
DB_DATABASE=<Your Database>
```

## Usage

One line to run
```
$ npm start
```

## API

| Route            | HTTP method | Description                 |
|------------------|-------------|-----------------------------|
| /api/cats        | `GET`       | Get all the cats.           |
| /api/cats        | `POST`      | Create a cat.               |
| /api/cats/:catId | `GET`       | Get a single cat.           |
| /api/cats/:catId | `PUT`       | Update a cat with new info. |
| /api/cats/:catId | `DELETE`    | Delete a cat.               |

## License

![](https://img.shields.io/github/license/cuongw/express-mysql-restful.svg?style=flat-square)
