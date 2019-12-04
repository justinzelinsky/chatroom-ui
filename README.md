# Chatroom

[![Build Status](https://travis-ci.com/justinzelinsky/chatroom-ui.svg?branch=master)](https://travis-ci.com/justinzelinsky/chatroom-ui)
[![codecov](https://codecov.io/gh/justinzelinsky/chatroom-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/justinzelinsky/chatroom-ui)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

The UI for simple chatroom built with React, Redux, and Socket.IO featuring user authentication.

## Purpose

This is my pet project which allows me to test my knowledge of JavaScript and Web Development. The end goal is to have a full CI/CD pipeline.

## Setup & Running

### Install

`npm install`

### Usage

`npm start`

and navigate to `https://localhost:8082`

**Note**: You will need to have the server running as well. You can check out that codebase [here](https://github.com/justinzelinsky/chatroom-server).

### SSL Certificates

In order to run this application in production mode, you will need to generate a self-signed certificate.

Run the following command and put `server.key` and `server.cert` in a directory called `.ssl` located in the project root:

```bash
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
