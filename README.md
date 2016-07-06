Docker Tutorial
===============

Follow this tutorial to learn how to make a simple Docker instance that prints out
a silly Dad Jokes to the console.

Install Docker
--------------

(Docker Download webpage)[https://www.docker.com/products/docker]

Create the Dockerfile
---------------------

Create a file named "Dockerfile" (it may have already been created in this example).
This file is used for giving Docker the instruction on how to setup itself (the "image")
and what command to run when it is called by Docker to run.

Add the Docker setup commands
-----------------------------

Copy and paste this into Dockerfile.

~~~bash
# Create the Docker instance based on Ubuntu v16.04.
FROM ubuntu:16.04

MAINTAINER Your Fullname <your.email@example.com>

# Install some dependencies.
RUN apt-get update
RUN apt-get install -y curl

# Install NodeJS
RUN curl -sL https://deb.nodesource.com/setup_6.x
RUN apt-get install -y nodejs

# Create the working directory for mounting external files to.
RUN mkdir /container

# Copy the Dad Jokes JS file into the container.
COPY ./dad-joke-logger.js /container

# Put the working directory into Docker's context.
WORKDIR /container

# This command will run when Docker runs this container.
CMD nodejs dad-joke-logger.js
~~~

Build the Docker Container
--------------------------

Tag the container with a name by using the "-t" argument.

~~~bash
docker build -t dad-jokes .
~~~

Run the Docker Instance
-----------------------

The --rm argument cleans up the files used by this Docker run after it completes.

~~~bash
docker run --rm dad-jokes
~~~

Delete the Docker Dad Jokes Data (When no longer needed)
--------------------------------------------------------

Docker Image vs. Container

> An instance of an image is called container. You have an image, which is a set of layers as you describe. If you start this image, you have a running container of this image. You can have many running containers of the same image.

> You can see all your images with docker images whereas you can see your running containers with docker ps (and you can see all containers with docker ps -a).

> So a running image is a container.

(source: http://stackoverflow.com/questions/23735149/docker-image-vs-container)

List all of the Docker Containers:

~~~bash
docker ps -a
~~~

Delete a container:

~~~bash
docker rm <container-id>
~~~

List all of the Docker Images:

~~~bash
docker images
~~~

Find "dad-jokes" and copy the IMAGE ID. Then, use the image ID to delete the docker container.

~~~bash
docker rmi 87942608142f
~~~

Extra Credit (Mount external files into the Docker container)
-------------------------------------------------------------

Use a live copy of the Dad Jokes JS file by mounting a volume to the container.

Don't forget to delete your old dad-jokes image that was built earlier.

First, remove this line from your Docker file:

~~~bash
# Remove
COPY ./dad-joke-logger.js /container
~~~

Then build again:

~~~bash
docker build -t dad-jokes .
~~~

Lastly, run the container using a mounted volumed. The -v command mounts the files from the
current directory into the Docker container.

~~~bash
docker run -v ~/path/to/this/repo:/container dad-jokes
~~~
