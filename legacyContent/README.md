Live Page: https://james-york2008.github.io/neonReel/

About: Neon Reel is a movie discovery web application made using the TMDB API. The main focus of this project was to create an engaging interface where users can browse, filter, search for, or get a randomly selected movie. One important note regarding this project is it does not use a backend, and in turn the TMDB API key is exposed. I understand this is not ideal for production-level web applications, and for this project I plan to actively maintain and replace the API key as neccessary. 

Tech Stack: -HTML -CSS -JavaScript -TMDB API

Challenges Faced and Lessons Learned: 
One of the biggest challenges during development was planning application logic before implementing features. I initially created separate functions for genre filtering and year filtering. Later, I realized these systems could have been combined into a single, reuable function that handled multiple query paramaters at once. Refactoring the filtering system taught me the importance of designing scalable logic before adding features.

Another issue I encountered was the random movie feature did not take genre filters into account early on. This caused misleading, inconsistant results and undoubtably could cause confusion for users. I updated the function to account for genre filters and improve the user experience.

One design decision I had to make was regarding the searching and filtering functionalities. TMDB uses different API endpoints for search and discovery features, and this causes integrating both systems simultaneously more complicated than expected. For now, I have the search functionality separate from the filter system and added a visual indicator to communicate that filters are temporarily disabled while searching.

Potential Future Improvements: -Make search and filter functionalities work together seamlessly. -Create or commission a backend to securely store the API key. -Explore TMDB's watch-provider integrations to display where movies can be streamed or purchased. -Rebuild the project using ReactJS for the sake of scalability.