# OpenHome Backend

# Build
Run `npm run build` to build the backend.

# Running server
Navigate to `/dist` folder and run `node openhome-service.js`

# Docker deployment
Run `docker build -t image-name .` to build an image

Then you can get your container running:

`docker run -d -p 8080:8080 -p 3000:3000 -p 3001:3001 --name container-name image-name`