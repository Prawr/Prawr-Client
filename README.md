# Prawr Client
[![Build Status](https://travis-ci.org/Prawr/Prawr-Client.svg?branch=master)](https://travis-ci.org/Prawr/Prawr-Client)
[![Maintainability](https://api.codeclimate.com/v1/badges/d370f5192c0a480969da/maintainability)](https://codeclimate.com/github/Prawr/Prawr-Client/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d370f5192c0a480969da/test_coverage)](https://codeclimate.com/github/Prawr/Prawr-Client/test_coverage)

---
<p align="center">This is the client repository.  
<b>Check out the <a href="https://github.com/Prawr/Prawr-Server">server</a> and <a href="https://github.com/Prawr/Prawr)">meta</a></b>
</p>

---

## General info
The client is built with [react](https://reactjs.org/), tests are written with [jest](https://facebook.github.io/jest/) and can be pushed to code climate.
*coming soon*
### Node Commands
Currently there are these commands available via `npm run <command>`:  
* `dev` Starts the dev Server
* `build` Builds the project
* `test` Executes a JEST-Test
* `test-coverage` Executes a JEST-coverage test and exports the data into the `/coverage/` directory.

### API-Connection
For the API-Connection, we use the [unirest client](http://unirest.io/nodejs.html) library.

## Design

### Fonts
There are three main fonts, those are:
* **Roboto** & **Oxygen** for normal text
* **Poiret One** for headlines
* **Julius Sans One** For things such as the page title
**Serif Fonts**
Embed them manually with `<link href="https://fonts.googleapis.com/css?family=Lustria|Vidaloka" rel="stylesheet">`
so the load time isn't that long on every page.
* **Vidaloka** for headlines
* **Lustria** for text