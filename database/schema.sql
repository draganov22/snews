CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY,
    CategoryName VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Tags (
    TagID INT PRIMARY KEY IDENTITY,
    TagName VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY,
    Username VARCHAR(100) UNIQUE NOT NULL,
    PasswordHash VARCHAR(MAX) NOT NULL,
    FavoriteCategoryID INT,
    FOREIGN KEY (FavoriteCategoryID) REFERENCES Categories(CategoryID)
);

CREATE TABLE News (
    NewsID INT PRIMARY KEY IDENTITY,
    Title VARCHAR(200) NOT NULL,
    Content TEXT NOT NULL,
    CategoryID INT,
    VideoLink VARCHAR(MAX) NULL,
    PublishDate DATETIME NOT NULL,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

CREATE TABLE NewsImages (
    NewsImageID INT PRIMARY KEY IDENTITY,
    NewsID INT,
    ImageLink VARCHAR(MAX) NOT NULL,
    FOREIGN KEY (NewsID) REFERENCES News(NewsID)
);

CREATE TABLE UserTags (
    UserID INT,
    TagID INT,
    PRIMARY KEY (UserID, TagID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (TagID) REFERENCES Tags(TagID)
);

CREATE TABLE NewsTags (
    NewsID INT,
    TagID INT,
    PRIMARY KEY (NewsID, TagID),
    FOREIGN KEY (NewsID) REFERENCES News(NewsID),
    FOREIGN KEY (TagID) REFERENCES Tags(TagID)
);
