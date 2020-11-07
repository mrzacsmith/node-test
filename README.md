## Node.js Project Requirements

### Technology Stack

• Node.js
• TypeScript
• Express

Functionality and Design
The application must expose restful endpoints that will parse data (passed in the request body) and return the value back to the
client. The API will have two versions and depending on the version endpoint, the parsing of the data will return a different value
back to the client. Use TypeScript interfaces so the code assumes the design / object properties.

Endpoint s
/api/v1/parse (POST)
/api/v2/parse ( POST)

Request Body

```js {
data: “ JOHN 0000 MICHAEL00	09994567	”
}
Expected Results
/api/v1/parse 	– Response Body
js  {
statusCode: 200,
data:  {
firstName: “JOHN0000”,
lastName: “MICHAEL000”,
clientId: “9994567”
}
}
/api/v2/parse  – Response Body
{
statusCode: 200,
data:  {
firstName: “JOHN”,
lastName: “MICHAEL”,
clientId: “999	- 4567”
}
}
```
