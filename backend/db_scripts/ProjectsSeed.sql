USE [InternshipProject]
GO

INSERT INTO [dbo].[Genre]
           ([Name])
     VALUES
           ('Rock'),
		   ('Pop'),
		   ('Rap'),
		   ('Trap'),
		   ('Electronic'),
		   ('Punk'),
		   ('Soul'),
		   ('Jazz')
GO

INSERT INTO [dbo].[Project]
           ([Name]
           ,[GenreId]
           ,[Description]
	     ,[Bpm])
     VALUES
           ('Project 1', 1, 'This is my best project 1 ever', 100),
		   ('Project 2', 2, 'This is my best project 2 ever', 100),
		   ('Project 3', 3, 'This is my best project 3 ever', 100),
		   ('Project 4', 4, 'This is my best project 4 ever', 100),
		   ('Project 5', 5, 'This is my best project 5 ever', 100),
		   ('Project 6', 6, 'This is my best project 6 ever', 100),
		   ('Project 7', 7, 'This is my best project 7 ever', 100),
		   ('Project 8', 8, 'This is my best project 8 ever', 100),
		   ('Project 9', 6, 'This is my best project 9 ever', 100)

GO

