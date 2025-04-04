import React from "react";
import api from "../services/api"; // Use api directly
import NewsForm from "./NewsForm";
import BaseComponent from "./BaseComponent";

class NewsList extends BaseComponent {
  state = {
    news: [],
    editingNews: null,
  };

  componentDidMount() {
    this.fetchNewsData();
  }

  fetchNewsData = async () => {
    try {
      this.clearError();
      const response = await api.get("/news");
      this.setState({ news: response.data });
    } catch (error) {
      this.setError("Error fetching news.");
    }
  };

  handleEdit = (newsItem) => {
    this.setState({ editingNews: newsItem });
  };

  handleEditSubmit = async (updatedNews) => {
    try {
      this.clearError();
      console.log("Updated news:", updatedNews);
      const response = await api.put(
        `/news/${updatedNews.newsID}`,
        updatedNews
      );
      this.setState((prevState) => ({
        news: prevState.news.map((newsItem) =>
          newsItem.newsID === updatedNews.newsID ? updatedNews : newsItem
        ),
        editingNews: null,
      }));
    } catch (error) {
      this.setError("Error updating news.");
    }
  };

  handleDelete = async (newsID) => {
    try {
      this.clearError();
      await api.delete(`/news/${newsID}`);
      this.setState((prevState) => ({
        news: prevState.news.filter((newsItem) => newsItem.newsID !== newsID),
      }));
    } catch (error) {
      this.setError("Error deleting news.");
    }
  };

  handleCreateSubmit = async (newNews) => {
    try {
      this.clearError();
      const response = await api.post("/news", newNews);
      this.setState((prevState) => ({
        news: [...prevState.news, response.data],
        editingNews: null,
      }));
    } catch (error) {
      this.setError("Error creating news.");
    }
  };

  render() {
    const { news, editingNews } = this.state;

    return (
      <div>
        <h1 class="page-title">News</h1>
        {editingNews ? (
          <NewsForm
            newsId={editingNews.newsID}
            selectedNews={editingNews}
            onSubmit={
              editingNews.newsID
                ? this.handleEditSubmit
                : this.handleCreateSubmit
            }
            onCancel={() => this.setState({ editingNews: null })}
          />
        ) : (
          <>
            <div class="hbox endbox mb-20">
              <button
                onClick={() =>
                  this.setState({
                    editingNews: {
                      title: "",
                      content: "",
                      categoryID: "",
                      videoLink: "",
                      images: [],
                      tags: [],
                    },
                  })
                }
                class="main-btn primary"
              >
                Creatе
              </button>
            </div>
            <ul class="items-list">
              {news.map((article) => (
                <li key={article.newsID} class="hbox vcbox">
                  <div class="flex-item">
                    <div class="item-title">{article.title}</div>
                    <div class="item-desc">{article.content}</div>
                  </div>
                  <button
                    onClick={() => this.handleEdit(article)}
                    class="img-btn ficon ficon-edit"
                  ></button>
                  <button
                    onClick={() => this.handleDelete(article.newsID)}
                    class="img-btn ficon ficon-trash1"
                  ></button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default NewsList;
