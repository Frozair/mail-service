# mail-service

Nginx setup:
```
server {
        listen          80;
        server_name     api.example.com;

        location / {
                proxy_pass http://127.0.0.1:3000/;
                proxy_set_header Host example.com;
        }
}
```

NodeJS setup:
```
npm install forever
forever start app.js
```
