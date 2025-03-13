# Sports News Application

## Overview
The Sports News Application is a full-stack web application that provides users with the latest sports news articles. The application consists of a backend built with C# (.NET 6/7/8) using Web API and a frontend developed with React.js. It also includes Progressive Web App (PWA) features for enhanced user experience.

## Project Structure
```
sports-news-app
├── backend
│   ├── Controllers
│   ├── Models
│   ├── Data
│   ├── Services
│   ├── Program.cs
│   ├── Startup.cs
│   ├── appsettings.json
│   └── SportsNewsApp.csproj
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── README.md
├── database
│   └── schema.sql
└── README.md
```

## Features
- **Backend**: 
  - RESTful API for managing news articles.
  - Authentication using JWT.
  - Database management with Entity Framework Core.

- **Frontend**: 
  - Responsive UI built with React.js.
  - Fetches news articles from the backend API.
  - PWA features for offline access and installation.

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Restore the dependencies:
   ```
   dotnet restore
   ```
3. Update the `appsettings.json` with your database connection string.
4. Run the application:
   ```
   dotnet run
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Database Schema
The database schema is defined in `database/schema.sql`, which includes tables for Users, Categories, Tags, NewsArticles, and UserFavorites.

## API Endpoints
- `GET /api/news`: Retrieve all news articles.
- `GET /api/news/{id}`: Retrieve a specific news article by ID.
- `POST /api/news`: Add a new news article.

## Authentication
The application uses JWT for user authentication. Ensure to include the token in the Authorization header for protected routes.

## PWA Features
The frontend includes a service worker for caching and offline capabilities. Users can install the app on their devices for a native-like experience.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.