# API Client in HTML+JS
This repository contains the front-end for calling a simple API, which returns a Hello message which is concatenated with Date and Time by js code in this application and output displayed in a HTML label
### Building Docker Image
To build docker image of this application `CD` to directory containing dockerfile and then run the following command
```
    docker build -t apiclient:js .
```
### Running Docker Container
To run a container,use following command 
```
    docker run -d --restart always -p 8080:80 --name front-end-app apiclient:js
```
In above command a container will
- launch in `-d` detach mode
- `--restart` will restart container automatically if it downs or exits due to any reason
- `-p` will bind host's port 8080 to container's port 80
- `--name` will assign a name "front-end-app" to container
### Using Kubernetes Deployment
to deploy it using kubernetes deployment resource,use following command
```
    kubectl create -f deployment.yml
```
