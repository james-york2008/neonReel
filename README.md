## Live Page: 
<https://james-york2008.github.io/neonReel/>


## Run Locally:

Clone the repository:
```bash
git clone https://github.com/james-york2008/neonReel
cd neonReel
```


Install dependencies:
```bash
npm install
```


Create a `.env` file in the project root and add your TMDB API key:
```ini
VITE_TMDB_API_KEY=YOUR_KEY_HERE
```


Start the development server:
```bash
npm run dev
```


Open the application in your browser at:
`http://localhost:5173`


Note: 
The `.env` file is not included in the repository, so you'll need to provide your own key. You can obtain an API key from The Movie Database:
https://developer.themoviedb.org/docs/getting-started


## About: 
Neon Reel is a movie discovery web application made using the TMDB API. The main focus of this project was to create an engaging interface where users can browse, filter, search, or get a randomly selected movie. One important note regarding this project is it does not use a backend, and in turn the TMDB API key is exposed. I understand this is not ideal for production-level web applications, and for this project I plan to actively maintain and replace the API key as necessary. I have created a .env file and stored the key there so that it isn't exposed on GitHub, but I am aware it is still exposed. This project was initially made using vanilla JavaScript, but has since been reworked with React and TypeScript to improve scalability.


## Tech Stack: 
- ReactJS 
- TypeScript 
- CSS 
- TMDB API


## Challenges Faced and Lessons Learned:
State Management
One of the biggest challenges faced during the React migration was managing state across multiple components. In older versions, I declared the movie state in multiple components, which caused inconsistent behaviors and unnecessarily complex logic. Refactoring the application to centralize state ownership greatly improved reliability.


Random Movie Selection
Implementing the random movie feature presented additional challenges when filters were introduced. Ensuring the random selector respected active genre and year filters required rewriting several fetch requests and carefully managing query parameters.


TypeScript Integration
Working with TypeScript highlighted the importance of properly defining data structures. Creating dedicated movie and genre types reduced errors and improved the debugging experience.


Deployment and Configuration
Deploying the React version to GitHub Pages displayed a configuration error where the page would crash and simply white screen. This bug was caused by the Vite config file not having a base path. Troubleshooting this problem, and many similar to it, provided experience with build tools and frontend deployment workflows.


API key storage
In earlier versions, the API key was written out every time it was used, and that was committed to GitHub. Since then, I have replaced the key and added a .env file to hide it from GitHub. Unfortunately, without a backend server, I cannot securely store this key, but I have chosen to maintain the key myself.


## Potential Future Improvements: 
- Make search and filter functionalities work together seamlessly. 
- Create or commission a backend to securely store the API key. 
- Explore TMDB's watch-provider integrations to display where movies can be streamed or purchased.