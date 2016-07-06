Docker Tutorial
===============

Follow this tutorial to learn how to make a simple Docker instance that prints out
a silly Dad Joke to the console.

Install Docker
--------------

(Docker Download webpage)[https://www.docker.com/products/docker]

Create the Dockerfile
---------------------

Create a new file named "Dockerfile"

Add the Docker setup commands
-----------------------------

Copy and paste this into Dockerfile.

~~~bash
FROM ubuntu:16.04

MAINTAINER Your Fullname <your.email@example.com>

# Install NodeJS
RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

# Create the directory for mounting external files (volumes) to.
RUN mkdir /container

# Note that this directory is meant for mounting a volume to.
VOLUME /container

CMD node /container/dad-joke-logger.js
~~~

Build the Docker Container
--------------------------

~~~bash
docker build -t dad-jokes .
~~~

Run the Docker Instance
-----------------------

The -v command mounts the files from the current directory into the Docker container.

~~~bash
docker run -v ./:/container/ dad-jokes
~~~