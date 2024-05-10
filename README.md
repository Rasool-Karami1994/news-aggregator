
# News Aggregator

## Introduction

News Aggregator is an innovative web application that aggregates news from multiple sources and delivers them in an organized and user-friendly manner. The app is designed to provide users with an enhanced news reading experience by offering various features such as keyword search, filtering by sections and sources, and personalized feeds based on user interactions. 

Built with React and utilizing the power of Vite for faster development, News Aggregator leverages cutting-edge technologies to deliver a seamless and efficient news browsing experience. Redux Toolkit is used to efficiently manage both synchronous and asynchronous global state, ensuring smooth data flow throughout the application. 

Axios, a popular HTTP client, handles all API requests for fetching news data from various sources. The app also incorporates SASS, a powerful CSS extension language, to create a visually appealing and intuitive user interface. The primary focus during development has been on maintaining simplicity and usability, ensuring users can effortlessly navigate through the app and stay informed with the latest news.

## Installation

1.Clone the repository:

git clone https://github.com/Rasool-Karami1994/news-aggregator


2.Navigate to the project directory:

cd news-aggregator


3.Install dependencies:

npm install


4.Run the development server:

npm run dev


## File Structure

 `src/`: Contains source code for React components, including:
    - `AppContainer.js`: Main component for the application
    - `CardsList.js`: Component for listing news 
    - `Card.js`: Component for displaying individual news
    - `FilterMenu.js`: Component for displaying and choosing filters
    - `SearchFom.js`: Component for displaying and using search bar

 `package.json`: Contains project dependencies and scripts



## Components


### CardsList

 `newsList` (prop): Array of news to be displayed
 Usage: Displays a list of tasks
 Example:
<CardsList data={newsList}  />

### Card

 `newsItem` (prop): An object to display as a card in list
 Usage: diplay news as a card
 Example:
<Card data={newsItem} />

### FilterMenu
 Usage: displaying filters and choosing filters to store in redux and update the list based on the change 
 Example:
<FilterMenu/>

### SearchForm
 Usage: displaying search bar and keep track of entered keywords to store in redux and update the list based on the change 
 Example:
<SearchForm/>



## APIs

Our News Aggregator app aggregates news data from multiple sources through APIs. The primary APIs used are:

### Guardian API

- API Key: `f1452d9f-af00-477c-a2cf-01c67b866673`
- Base URL: `https://content.guardianapis.com`

This API is accessed using the `getGauardianNews()` function, which takes an optional `options` parameter containing a `payload`. The function generates a URL based on the provided payload, handling various parameters such as category, date, and search query (`q`). 



### News API

- API Key: `ed5e7160e76144a991e84b5d57a6cbd3`
- Base URL: `https://newsapi.org/v2`

This API is accessed using the `getNewsApiNews()` function, which also takes an optional `options` parameter containing a `payload`. Similar to the `getGauardianNews()` function, it generates a URL based on the provided payload, handling parameters such as category, date, source, and search query (`q`).


Both API functions utilize `axios` for making HTTP requests and include the appropriate API key in the request headers. The `URLSearchParams` class is used to serialize the query parameters into a URL query string, and the generated URL is then passed to `axios.get()`. The returned promise resolves with the API response data or rejects with an error if the request fails.




## Style Guide

This project uses the Sass for styling components, following a consistent and modern design.



## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request


## Credits

This project uses the following third-party libraries:
 React
 React-redux-toolkit
 Sass
 axios

## Changelog

- v1.0.0: Initial release

## Contact

Please contact [Rasool-Karami1994] on GitHub for any questions or contributions.
