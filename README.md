## Installation

### Source Code
- Clone the repo

### Dependencies
- npm: sudo apt-get install npm
- node: npm install node
- npm i | from package.json as it lists all dependencies

---

## Usage
### To run the app
- cd src
- node app.js (port 8080)

---

## Containerization
- BUILD locally: docker image build --tag express:aws -f <dockerfile> <context-dir>
- RUN locally: docker run --rm -p 8080:8080 express:aws
- TAG: docker tag express:aws doodoodev/express-on-aws:latest
- PUSH: docker push doodoodev/express-on-aws:latest


## Containerized Usage
- docker run -d --rm -p 8080:8080 doodoodev/express-on-aws:latest