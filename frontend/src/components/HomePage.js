import React, { useEffect, useState } from "react";
import BaseComponent from "./BaseComponent";
import { fetchNews } from "../services/api";
import { connect } from "react-redux";

class HomePage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("authToken");
    if (!token) {
      window.location.href = "/login"; // Redirect to login page if not logged in
      return;
    }

    this.clearError();
    this.fetchData();
  }

  fetchData() {
    const favoriteCategoryID = this.props.favoriteCategoryID;
    const tags = this.props.tags;

    fetchNews({ categoryID: favoriteCategoryID, tags })
      .then((response) => {
        this.setState({ news: response.data });
        this.clearError();
      })
      .catch((error) => {
        this.setError("There was an error fetching the news!");
      });
  }

  render() {
    const { news } = this.state;

    return (
      <ul class="news-list">
        {news.map((item) => (
          <li key={item.newsID} class="news">
            <a href={`/news/${item.newsID}`} class="hbox">
              {item.images && item.images.length > 0 && (
                <img src={item.images[0]} alt={item.title} class="news-image" />
              )}
              <div class="flex-item ml-10">
                <h4>{item.title}</h4>
                <div class="news-content">{item.content}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

// Map state from Redux store to props
const mapStateToProps = (state) => ({
  favoriteCategoryID: state.auth.favoriteCategoryID,
  tags: state.auth.tags,
});

export default connect(mapStateToProps)(HomePage);
