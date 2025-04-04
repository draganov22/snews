import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import NewsList from "./components/NewsList";
import NewsDetails from "./components/NewsDetails";
import CategoryList from "./components/CategoryList";
import TagList from "./components/TagList";
import UserFavorites from "./components/UserFavorites";
import UserList from "./components/UserList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route
                  path="*"
                  element={
                    <div className="container">
                      <Routes>
                        <Route path="/news" element={<NewsList />} />
                        <Route path="/news/:newsId" element={<NewsDetails />} />
                        <Route path="/categories" element={<CategoryList />} />
                        <Route path="/tags" element={<TagList />} />
                        <Route path="/favorites" element={<UserFavorites />} />
                        <Route path="/users" element={<UserList />} />
                      </Routes>
                    </div>
                  }
                />
              </Routes>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
