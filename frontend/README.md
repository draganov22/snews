# Sports News Application - Frontend

This is the frontend part of the Sports News application built using React.js. It interacts with the backend API to fetch and display sports news articles.

## Project Structure

- **public/**: Contains static files.
  - **index.html**: The main HTML file.
  - **manifest.json**: Metadata for the Progressive Web App.

- **src/**: Contains the source code for the React application.
  - **components/**: Reusable components.
    - **NewsItem.js**: Component to display individual news articles.
  - **pages/**: Different pages of the application.
    - **HomePage.js**: Displays the latest sports news.
  - **services/**: API service functions.
    - **api.js**: Functions for making API calls.
  - **App.js**: Main application component.
  - **index.js**: Entry point for the React application.
  - **serviceWorker.js**: Service worker for PWA features.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```
   cd sports-news-app/frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Features

- Fetches and displays sports news articles from the backend API.
- Responsive design for various screen sizes.
- Progressive Web App features for offline access and installation.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.