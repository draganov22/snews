import React, { useState, useEffect } from "react";
import api from "../services/api";

const NewsForm = ({ selectedNews, onSubmit, onCancel }) => {
  const [news, setNews] = useState({
    title: "",
    content: "",
    categoryID: "",
    videoLink: "",
    images: [],
    tags: [],
  });
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [isAddingImage, setIsAddingImage] = useState(false);
  const [errors, setErrors] = useState({ videoLink: "", newImage: "" });

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get("/categories");
      setCategories(response.data);
    };

    const fetchTags = async () => {
      const response = await api.get("/tags");
      setTags(response.data);
    };

    if (selectedNews) {
      setNews({
        ...selectedNews,
        title: selectedNews.title || "",
        content: selectedNews.content || "",
        categoryID: selectedNews.categoryID || "",
        videoLink: selectedNews.videoLink || "",
        images:
          selectedNews.images.map(
            (image) =>
              typeof image === "string" ? { ImageLink: image } : image // Ensure images are objects with ImageLink
          ) || [],
        tags: selectedNews.tags || [],
      });
    }

    fetchCategories();
    fetchTags();
  }, [selectedNews]);

  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleTagChange = (tagID, tagName) => {
    setNews((prevNews) => {
      const isTagPresent = prevNews.tags.some((tag) => tag.tagID === tagID);
      return {
        ...prevNews,
        tags: isTagPresent
          ? prevNews.tags.filter((tag) => tag.tagID !== tagID) // Remove tag object if already present
          : [...prevNews.tags, { tagID, tagName }],
      };
    });
  };

  const handleAddImage = () => {
    if (!isValidURL(newImage)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        newImage: "Invalid image URL",
      }));
      return;
    }
    setNews((prevNews) => ({
      ...prevNews,
      images: [...prevNews.images, { ImageLink: newImage }],
    }));
    setNewImage("");
    setIsAddingImage(false);
    setErrors((prevErrors) => ({ ...prevErrors, newImage: "" }));
  };

  const handleCancelImage = () => {
    setNewImage("");
    setIsAddingImage(false);
    setErrors((prevErrors) => ({ ...prevErrors, newImage: "" }));
  };

  const handleVideoLinkChange = (e) => {
    const value = e.target.value;
    setNews((prevNews) => ({
      ...prevNews,
      videoLink: value === "" ? null : value, // Set to null if empty
    }));
    if (value && !isValidURL(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        videoLink: "Invalid video URL",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, videoLink: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formattedNews = {
    //   ...news,
    //   images: news.images.map((image) => ({ imageLink: image })), // Format images for API
    //   tags: news.tags.map((tagID) => ({ tagID })), // Format tags for API
    // };
    onSubmit(news); // Pass formatted data to the parent component
  };

  return (
    <form onSubmit={handleSubmit} class="ctrl-form">
      <div class="row">
        <input
          type="text"
          value={news.title}
          onChange={(e) => setNews({ ...news, title: e.target.value })}
          placeholder="Title"
          required
        />
      </div>
      <div class="row">
        <textarea
          value={news.content}
          onChange={(e) => setNews({ ...news, content: e.target.value })}
          placeholder="Content"
          required
        />
      </div>
      <div class="row">
        <div class="select-wrap">
          <select
            value={news.categoryID}
            onChange={(e) => setNews({ ...news, categoryID: e.target.value })}
            required
          >
            {categories.map((category) => (
              <option key={category.categoryID} value={category.categoryID}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div class="row vbox gap-5">
        {tags.map((tag) => (
          <label key={tag.tagID} class="hbox vcbox">
            <input
              type="checkbox"
              class="ctrl-checkbox mr-10"
              checked={news.tags.some((t) => t.tagID === tag.tagID)}
              onChange={() => handleTagChange(tag.tagID, tag.tagName)} // Pass tagName along with tagID
            />
            {tag.tagName}
          </label>
        ))}
      </div>
      <div class="row vbox topbox">
        {isAddingImage ? (
          <div class="row">
            <input
              type="text"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              placeholder="Enter image URL"
              class="flex-item"
            />
            <button
              type="button"
              onClick={handleAddImage}
              class="img-btn ficon-tick"
            ></button>
            <button
              type="button"
              onClick={handleCancelImage}
              class="img-btn ficon-close-2"
            ></button>
            {errors.newImage && (
              <p style={{ color: "red" }}>{errors.newImage}</p>
            )}
          </div>
        ) : (
          <div class="upload-img">
            <label class="flex-item">Images</label>

            <button
              type="button"
              onClick={() => setIsAddingImage(true)}
              class="img-btn ficon-plus-circle"
            ></button>
          </div>
        )}
        <ul class="upload-img-list">
          {news.images.map((image, index) => (
            <li key={index} class="img-thumb">
              <img
                src={image.ImageLink}
                alt={`Preview ${index}`}
                className="image-preview"
              />
              <button
                type="button"
                onClick={() =>
                  setNews((prevNews) => ({
                    ...prevNews,
                    images: prevNews.images.filter((_, i) => i !== index),
                  }))
                }
                className="remove-image-button"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div class="row">
        <input
          type="text"
          value={news.videoLink}
          onChange={handleVideoLinkChange}
          placeholder="Video Link"
        />
        {errors.videoLink && <p style={{ color: "red" }}>{errors.videoLink}</p>}
      </div>
      <div class="row btn-wrap endbox">
        <button type="submit" class="main-btn primary">
          Save
        </button>
        <button type="button" onClick={onCancel} class="main-btn">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewsForm;
