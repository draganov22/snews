INSERT INTO Categories (CategoryName) VALUES ('Football');
INSERT INTO Categories (CategoryName) VALUES ('Tennis');
INSERT INTO Categories (CategoryName) VALUES ('Basketball');

-- Insert Tags
INSERT INTO Tags (TagName) VALUES ('Arsenal');
INSERT INTO Tags (TagName) VALUES ('Liverpool');
INSERT INTO Tags (TagName) VALUES ('Botev');
INSERT INTO Tags (TagName) VALUES ('Locomotiv');
INSERT INTO Tags (TagName) VALUES ('Chelsea');

-- Insert News
INSERT INTO News (Title, Content, CategoryID) VALUES ('Football Match', 'Details about the football match...', 1);
INSERT INTO News (Title, Content, CategoryID) VALUES ('AI Breakthrough', 'New advancements in AI...', 2);
INSERT INTO News (Title, Content, CategoryID) VALUES ('Health Tips', 'Tips for a healthier life...', 3);
INSERT INTO News (Title, Content, CategoryID) VALUES ('New Movie Release', 'Details about the new movie...', 1);
INSERT INTO News (Title, Content, CategoryID) VALUES ('Stock Market Update', 'Latest updates on the stock market...', 2);
INSERT INTO News (Title, Content, CategoryID) VALUES ('Football Transfer', 'Latest football transfer news...', 1);
INSERT INTO News (Title, Content, CategoryID) VALUES ('Tech Conference', 'Highlights from the tech conference...', 2);
INSERT INTO News (Title, Content, CategoryID) VALUES ('Fitness Routine', 'Best fitness routines...', 3);
INSERT INTO News (Title, Content, CategoryID) VALUES ('Celebrity Gossip', 'Latest celebrity gossip...', 3);
INSERT INTO News (Title, Content, CategoryID) VALUES ('Market Analysis', 'In-depth market analysis...', 1);

-- Insert NewsTags
INSERT INTO NewsTags (NewsID, TagID) VALUES (1, 1);
INSERT INTO NewsTags (NewsID, TagID) VALUES (2, 2);
INSERT INTO NewsTags (NewsID, TagID) VALUES (3, 3);
INSERT INTO NewsTags (NewsID, TagID) VALUES (4, 4);
INSERT INTO NewsTags (NewsID, TagID) VALUES (5, 5);
INSERT INTO NewsTags (NewsID, TagID) VALUES (6, 1);
INSERT INTO NewsTags (NewsID, TagID) VALUES (7, 2);
INSERT INTO NewsTags (NewsID, TagID) VALUES (8, 3);
INSERT INTO NewsTags (NewsID, TagID) VALUES (9, 4);
INSERT INTO NewsTags (NewsID, TagID) VALUES (10, 5);

INSERT INTO Users(Username, PasswordHash, FavoriteCategoryID) VALUES( 'Ironforst', '1', 1)
INSERT INTO Users(Username, PasswordHash, FavoriteCategoryID) VALUES( 'DimDragon', '1', 1)

-- Insert UserTags
INSERT INTO UserTags (UserID, TagID) VALUES (1, 1);
INSERT INTO UserTags (UserID, TagID) VALUES (1, 3);
INSERT INTO UserTags (UserID, TagID) VALUES (2, 1);
INSERT INTO UserTags (UserID, TagID) VALUES (2, 4);