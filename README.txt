# Table of Contents

- [General info](#general-info)
- [Endpoints](#endpoints)
  - [Overview](#overview)
  - [Get users](#get-users)
  - [Get user by id](#get-user-by-id)
  - [Add user](#add-user)
  - [Update user](#update-user-by-id)
  - [Delete user](#delete-user-by-id)
  - [Get movies](#get-movies)
  - [Get movie by id](#get-movie-by-id)
  - [Get movie by TMDB id](#get-movie-by-TMDB-id)
  - [Add movie](#add-movie)
  - [Update movie](#update-movie-by-id)
  - [Delete movie](#delete-movie-by-id)
  - [Get reviews](#get-reviews)
  - [Get review by id](#get-review-by-id)
  - [Get review by TMDB and user id](#get-review-by-TMDB-id-user-id)
  - [Get review by TMDB id](#get-review-by-TMDB-id)
  - [Get review by user and watched](#get-review-by-watched-user-id)
  - [Get review by user and plan to watch](#get-review-by-plan-to-watch-user-id)
  - [Add review](#add-review)
  - [Update review](#update-review-by-id)
  - [Delete review](#delete-review-by-id)
  - [Register](#Register)
  - [Login](#Login)
  - [Change Password](#Change Password)

# General info

This app provides a REST-API for all The Movie Archive users, movies and reviews.

# Endpoints

## Overview

This app uses the following endpoints and methods:

[`GET /users/`](#get-users)

[`GET /users/:id`](#get-user-by-id)

[`POST /users/`](#add-user)

[`PUT /users/:id`](#update-user-by-id)

[`DELETE /users/:id`(#delete-user-by-id)

[`GET /movies/`](#get-users)

[`GET /movies/:id`](#get-movie-by-id)

[`GET /movies/tmdb/:id`](#get-movie-by-TMDB-id)

[`POST /movies/`](#add-movie)

[`PUT /movies/:id`](#update-movie-by-id)

[`DELETE /movies/:id`](#delete-movie-by-id)

[`GET /reviews/`](#get-reviews)

[`GET /reviews/:id`](#get-review-by-id)

[`GET /reviews/review/:idTMDB/:idUser`](#get-review-by-movie-id-user-id)

[`GET /reviews/movie/:idTMDB`](#get-review-by-movie-id)

[`GET /reviews/watched/:idUser`](#get-review-by-watched-user-id)

[`GET /reviews/plantowatch/:idUser`](#get-review-by-plan-to-watch-user-id)

[`POST /reviews/`](#add-review)

[`PUT /reviews/:id`](#update-review-by-id)

[`DELETE /reviews/:id`](#delete-review-by-id)

[`POST /register/`](#Register)

[`POST /login/`](#Login)

[`PUT /changepassword/:id`](#Change Password)


## Get users

### Request

`GET /users/`

### Response

```
{
	"_id": "663a2e5af9b549377fb52154",
	"email": "bob@bobmail.com",
	"hash": "$argon2id$v=19$m=65536,t=3,p=4$l1PzDoSv6pC0kfVmxoZUng$ttE8qimdSw+C1vd9RBg/I39cQHtTckF/pmoeu4u4zkM",
	"name": "bob",
	"country": "Portugal"
},
{
	"_id": "663e00c190e36ead186b3ef9",
	"email": "bob2@bobmail.com",
	"hash": "$argon2id$v=19$m=65536,t=3,p=4$btKrm99yVdGmUZX0WAeSYg$/5tNf6/IrPOVL06p7Jk5kLa0q7R3arid/dFARbQ8qto",
	"name": "bob2",
	"country": "Portugal"
}
```

## Get user by ID

### Request

`GET /users/:id`

### Response

```
{
	"_id": "663a2e5af9b549377fb52154",
	"email": "bob@bobmail.com",
	"hash": "$argon2id$v=19$m=65536,t=3,p=4$l1PzDoSv6pC0kfVmxoZUng$ttE8qimdSw+C1vd9RBg/I39cQHtTckF/pmoeu4u4zkM",
	"name": "bob",
	"country": "Portugal"
}
```

## Get user by ID

### Request

`GET /users/:id`

### Response

```
{
	"_id": "663a2e5af9b549377fb52154",
	"email": "bob@bobmail.com",
	"hash": "$argon2id$v=19$m=65536,t=3,p=4$l1PzDoSv6pC0kfVmxoZUng$ttE8qimdSw+C1vd9RBg/I39cQHtTckF/pmoeu4u4zkM",
	"name": "bob",
	"country": "Portugal"
}
```
## Post user

### Request

`POST /users`

Example POST body:

```
{
	"name":"name",
	"email":"mail@mail.com",
	"password":"123456Ab_",
	"country":"country"
}
```

## Put user by ID

### Request

`PUT /users/:id`

Example PUT body:

```
{
	"name":"name",
	"email":"mail@mail.com",
	"password":"123456Ab_",
	"country":"country"
}
```

## Delete user by ID

### Request

`DELETE /users/:id`

## Get reviews

### Request

`GET /reviews/`

### Response

```
{
	"_id": "6644c6206f63348dce9e41d1",
	"idUser": "663a2e5af9b549377fb52154",
	"idTMDB": "823464",
	"review": "bad movie",
	"score": 10,
	"watched": true,
	"planToWatch": false
}
{
	"_id": "6644cc6915a1c810ce62f246",
	"idUser": "663e00c190e36ead186b3ef9",
	"idTMDB": "823464",
	"review": "bad movie",
	"score": 10,
	"watched": true,
	"planToWatch": false
}
```

## Get movie by ID

### Request

`GET /movies/:id`

### Response

```
{
	"_id": "664497c807ed15c73494c2d6",
	"idTMDB": "653346",
	"title": "Kingdom of the Planet of the Apes",
	"img": "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
	"release_date": "2024-05-08",
	"plot": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
	"score": 7.3
}
```

## Get movie by TMDB ID

### Request

`GET /movies/tmdb/:id`

### Response

```
{
	"_id": "664497c807ed15c73494c2d6",
	"idTMDB": "653346",
	"title": "Kingdom of the Planet of the Apes",
	"img": "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
	"release_date": "2024-05-08",
	"plot": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
	"score": 7.3
}
```
## Post movie

### Request

`POST /movies`

Example POST body:

```
{	
	"idTMDB": "81137",
	"title": "test2",
	"img": "",
	"release_date": "2210-01-31",
	"plot": "teste",
	"score": 5
}
```

## Put movie by ID

### Request

`PUT /movies/:id`

Example PUT body:

```
{		
	"idTMDB": "81137",
	"title": "test2",
	"img": "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
	"release_date": "2210-01-31",
	"plot": "teste",
	"score": 5
}
```

## Delete movie by ID

### Request

`DELETE /movies/:id`

## Get reviews

### Request

`GET /reviews/`

### Response

```
{
	"_id": "6644c6206f63348dce9e41d1",
	"idUser": "663a2e5af9b549377fb52154",
	"idTMDB": "823464",
	"review": "bad movie",
	"score": 10,
	"watched": true,
	"planToWatch": false
},
{
	"_id": "6644cc6915a1c810ce62f246",
	"idUser": "663e00c190e36ead186b3ef9",
	"idTMDB": "823464",
	"review": "bad movie",
	"score": 10,
	"watched": true,
	"planToWatch": false
},
```

## Get review by ID

### Request

`GET /reviews/:id`

### Response

```
{
	"_id": "6644c6206f63348dce9e41d1",
	"idUser": "663a2e5af9b549377fb52154",
	"idTMDB": "823464",
	"review": "bad movie",
	"score": 10,
	"watched": true,
	"planToWatch": false
}
```

## Get review by TMDB ID and User ID

### Request

`GET reviews/review/:idTMDB/:idUser`

### Response

```
{
	"_id": "6644c6206f63348dce9e41d1",
	"idUser": "663a2e5af9b549377fb52154",
	"idTMDB": "823464",
	"review": "bad movie",
	"score": 10,
	"watched": true,
	"planToWatch": false
}
```

## Get review by TMDB ID

### Request

`GET reviews/movie/:idTMDB`

### Response

```
{
	"_id": "6644c6206f63348dce9e41d1",
	"idUser": "663a2e5af9b549377fb52154",
	"idTMDB": "823464",
	"review": "bad movie",
	"score": 10,
	"watched": true,
	"planToWatch": false
}
```

## Get review by Watched

### Request

`GET reviews/watched/:idUser`

### Response

```
{
	"_id": "6651fb699cb17bf89a00df2a",
	"score": 4,
	"movie": [
		{
			"title": "Godzilla x Kong: The New Empire",
			"img": "/lLh39Th5plbrQgbQ4zyIULsd0Pp.jpg"
		}
	]
}
```

## Get review by Plan to watch

### Request

`GET reviews/plantowatch/:idUser`

### Response

```
{
	"_id": "6654a4348181f28923256278",
	"movie": [
		{
			"title": "Kung Fu Panda 4",
			"img": "/kYgQzzjNis5jJalYtIHgrom0gOx.jpg",
			"score": 7.135
		}
	]
}
```

## Post review

### Request

`POST /reviews`

Requires authentication bearer!

Example POST body:

```
{
	"idUser": "66448cd9c8e5f82a4866cbd3",
	"idTMDB": "940721",
	"review":"bad movie",
	"score":10,
	"watched":true,
	"planToWatch":false
}
```

## Put review by ID

### Request

`PUT /reviews/:id`

Requires authentication bearer!

Example PUT body:

```
{
	"idUser": "66448cd9c8e5f82a4866cbd3",
	"idTMDB": "940721",
	"review":"bad movie",
	"score":10,
	"watched":true,
	"planToWatch":false
}
```

## Delete review by ID

### Request

`DELETE /reviews/:id`

[`POST /register/`](#Register)

[`POST /login/`](#Login)

[`PUT /changepassword/:id`](#Change Password)

## Post register

### Request

`POST /register`

Example POST body:

```
{
	"name":"Pedro23",
	"email":"pedro23@mail.com",
	"password":"123456Ab_",
	"country":""
}
```

## Post login

### Request

`POST /login`

Example POST body:

```
{
	"email":"pedro23@mail.com",
	"password":"123456Ab_",
}
```

## Put changePassword by ID

### Request

`PUT /changePassword/:id`

Requires authentication bearer!

Example PUT body:

```
{
	"password":"123456Ab_",
	"newPassword":"654321Ab_",
	"verifyPassword":"654321Ab_"
}
```