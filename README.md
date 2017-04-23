## Project Name & Pitch

Turing Mod 3 Personal Project.

An application used to filter data an API, built with React, Redux, JavaScript, Express and CSS. I made this so that I could get more familiar with OAuth. It was my crash course in what can and can't be done with Express, OAuth, and a typical API such as api/vimeo.com, api/instagram.com, api/genius.com, or api/marvel.com.

I am currenty trying to implement a fine arts API into this codebase.
## Project Status

This project is currently in development. It's set up for CRUD functionality with API calls to any API that uses OAuth. The OAuth part is a little convoluted, and misguided. But the server does send back an access token into React state which allows me to create search functionality. 

I am currenty trying to implement a fine arts API into this codebase.

## Project Screen Shot(s)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Debug:

`node debug server.js ; repl`

To Start Server:

`VIMEO_CLIENT_SECRET=KMjW6p2aO3UI/yR7+C8fO9YFYeVRSfl4c9zK4fZWPOb5pmqS9gG8rtpO8Ntw91d8hJ5w1JZdP1HWdK4PxIiwDP0aU0dPhy/8VKja9G02t835aWHaXArrWowLr8i9WtGq node server.js`  

To Visit App:

`localhost:9000/`  

## Reflection:  

This was a 2 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

Originally I wanted to build an application that allowed users to pull data from the Genius API. I started this process by using the `create-react-app` boilerplate, then adding `express` `react-router` and `redux`.  

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0. Due to a lack of good data inside of the Genius API (No Lyrics!), I had to pivot to using a better API, like the Vimeo API.

The technologies used in this project are React, React-Router, Redux, VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into server-side-rendering, and building a reusable Oauth2 boilerplate for future endeavors with new API calls. I enjoy `create-react-app`, if only for its great read-me, and cohesive design, and I plan on continuing to use it in the future.

For my next self-directed project I've learned that I want to dream up a product first, set my aim high, and then look for the tools to get it done, be that a external API, or a rest API. 
