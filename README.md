# FriendFinder
![Home Screen](app/images/screenshot1.PNG)
![Survey Result](app/images/screenshot2.PNG)

## Description

**__Friend Finder__** is a full-stack application designed to find a user's most compatible friend through their responses to a survey. The survey consists of ten questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). Once the survey is submitted, their response values are compared with existing user records; the user with the closest response values is displayed to the user as their match.

## Demo

**__Friend Finder__** is deployed on Heroku. Check it out [here](https://fab-friend-finder-8080.herokuapp.com/).

## Installation

To install the application, run the following commands:

```
git clone https://github.com/jschneid94/FriendFinder.git
cd FriendFinder
npm i
```

## Running Locally

To run this application locally and access it via the browser, you will need to first set the "PORT" environment. This is easily done by setting this in the terminal, below is an example of setting the environment to 8080:

```
export PORT=8080
```

Once this is set, you can start running the app using this command:

```
node server.js
```

Now the application is listening on the port you set earlier, in our example we set it to 8080. You can access it from the browser with the URL "localhost:8080".

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Materialize](https://materializecss.com/)