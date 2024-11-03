## API Documentation

1. **Static Files**  
   Static files are served from the `public` directory. Example request to retrieve the `placeholder.txt` file in PowerShell:  
   Invoke-WebRequest -Uri http://localhost:8080/placeholder.txt
   Result: "Put your static files in this directory and then delete this file."

2. **Unauthorized Routes**  
   You can access unauthorized routes without a token. Example request to an unauthorized route:  
   Invoke-WebRequest -Uri http://localhost:8080/unauthorized
   Result: `true`

3. **Authorized Routes (without JWT)**  
   Attempting to access an authorized route without a JWT token will result in a 401 Unauthorized error. Example request:  
   Invoke-WebRequest -Uri http://localhost:8080/authorized
   Result: `{"statusCode":401,"message":"Unauthorized"}`

4. **Authentication Route `/auth/login`**  
   Use the `/auth/login` route to authenticate and retrieve a token. Example request for login with JSON body:  
   $headers = @{ "Content-Type" = "application/json" }  
   $body = '{ "username": "maria", "password": "123" }'
   Invoke-WebRequest -Uri http://localhost:8080/auth/login -Method POST -Body $body -Headers $headers
   Result: `{"access_token":"<JWT_token>"}`

5. **Cart Routes with JWT Token**  
   Use the obtained JWT token to access authorized routes by adding an `Authorization` header with the `Bearer` prefix. Example request to the `/cart` route with the token:  
   Invoke-WebRequest -Uri http://localhost:8080/cart -Headers @{ "Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmlhIiwic3ViIjoyLCJpYXQiOjE3MzA2NDYwNzAsImV4cCI6MTczMDczMjQ3MH0.qU2OUgDVT6JYKELRlwO9cQGpwmqtUIZbeYz4xFbW0VA" }
   Result: `{"userId":2}`
