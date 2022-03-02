
# vivi-brandnew-be

  

# 환경설정

> /.env
```
NODE_ENV=development
PORT=3003
LOGGER_LEVEL=debug
DB_HOST=localhost
DB_PORT=5434
DB_DATABASE=vivi_brandnew
DB_ID=postgres
DB_PASS=postgres
DB_DIALECT=postgres
```
  
  

# 사용자 API

> /routes/user.js
> 
> 등록  
>request
```
method: POST 
url: http://localhost:3003/users 
body: {
	"name": "김개발",
	"nickname": "개발개발",
	"userid": "kim123",
	"password": "123123",
	"email": "kim123@email.com",
	"phone": "010-1231-2341",
}
```
>response
```
{
  "auth": "user",
  "loginFailCount": 0,
  "active": false,
  "id": 1,
  "name": "김개발",
  "nickname": "개발개발",
  "userid": "kim123",
  "email": "kim123@email.com",
  "phone": "010-1234-1234",
  "updatedAt": "2022-02-28T06:09:57.506Z",
  "createdAt": "2022-02-28T06:09:57.506Z",
  "deletedAt": null
}
```
> 리스트 조회
> request
```
method: GET
url: /users
query: name, nickname, userid
```
> response
```
{
	"count": 1,
	"rows": [
		{
      "id": 1,
      "name": "김개발",
      "nickname": "개발개발",
      "userid": "kim123",
      "auth": "user",
      "email": "kim123@email.com",
      "phone": "010-1234-1234",
      "loginFailCount": 0,
      "active": false,
      "createdAt": "2022-02-28T06:09:57.506Z",
      "updatedAt": "2022-02-28T06:09:57.506Z",
      "deletedAt": null
		}
	]
}
```
> 상세정보 조회
> request
```
method: GET 
url: /users/<:id>
```
> response
```
{
  "id": 1,
  "name": "김개발",
  "nickname": "개발개발",
  "userid": "kim123",
  "auth": "user",
  "email": "kim123@email.com",
  "phone": "010-1234-1234",
  "loginFailCount": 0,
  "active": false,
  "createdAt": "2022-02-28T06:09:57.506Z",
  "updatedAt": "2022-02-28T06:09:57.506Z",
  "deletedAt": null
}
```
> 수정
> request
```
method: PUT 
url: /users/<:id> 
body:
{
  "id": 1,
  "name": "김개발",
  "nickname": "개발개발",
  "auth": "user",
  "email": "kim123@email.com",
  "phone": "010-1234-1234",
  "active": false
}
```
> response
```
{
	"updatedCount": 1
}
```
> 삭제
> request
```
method: DELETE 
url: /users/<:id>
```
> response
```
{
	"deletedCount": 1
}
```

# 편의점 API

> /routes/convenience.js
> 
> 등록  
>request
```
method: POST 
url: http://localhost:3003/conveniences
body: 
{
  "name": "CU"
}
```
>response
```
{
  "id": 1,
  "name": "CU",
  "updatedAt": "2022-03-02T01:32:37.513Z",
  "createdAt": "2022-03-02T01:32:37.513Z",
  "deletedAt": null
}
```
> 리스트 조회
> request
```
method: GET
url: /conveniences
```
> response
```
{
	"count": 1,
	"rows": [
    {
      "id": 1,
      "name": "CU",
      "createdAt": "2022-03-02T01:32:37.513Z",
      "updatedAt": "2022-03-02T01:32:37.513Z",
      "deletedAt": null
    }
	]
}
```

> 수정
> request
```
method: PUT 
url: /conveniences/<:id> 
body:
{
"name": "GS"
}
```
> response
```
{
	"updatedCount": 1
}
```
> 삭제
> request
```
method: DELETE 
url: /conveniences/<:id>
```
> response
```
{
	"deletedCount": 1
}
```
