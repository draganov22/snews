import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import NewsList from './components/NewsList';
import NewsDetails from './components/NewsDetails';
import CategoryList from './components/CategoryList';
import TagList from './components/TagList';
import UserFavorites from './components/UserFavorites';
import NewsForm from './components/NewsForm';
import CategoryForm from './components/CategoryForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:newsId" element={<NewsDetails />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/tags" element={<TagList />} />
        <Route path="/favorites" element={<UserFavorites />} />
        <Route path="/admin/news" element={<NewsForm />} />
        <Route path="/admin/categories" element={<CategoryForm />} />
      </Routes>
    </Router>
  );
};

export default App;