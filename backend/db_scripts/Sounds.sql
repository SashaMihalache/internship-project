USE [InternshipProject]
GO


DROP TABLE IF EXISTS [dbo].[Sound]
DROP TABLE IF EXISTS [dbo].[Type]
DROP TABLE IF EXISTS [dbo].[ByteArray]

GO

USE [InternshipProject]
GO

/****** Object:  Table [dbo].[Types]    Script Date: 8/13/2018 3:32:05 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Type](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[IconSrc] [nvarchar](max) NULL,
	[ColorType] [nvarchar](max) NULL,
 CONSTRAINT [PK_SoundType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ByteArray](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Value] [varbinary](max) NOT NULL
 CONSTRAINT [PK_ByteArray] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Sound](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[TypeId] [int] NOT NULL,
	[Image] [nvarchar](50) NOT NULL,
	[ByteArrayId] [int] NOT NULL
 CONSTRAINT [PK_Sound] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Sound]  WITH CHECK ADD  CONSTRAINT [FK_ArrayByte] FOREIGN KEY([ByteArrayId])
REFERENCES [dbo].[ByteArray] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Sound]  WITH CHECK ADD  CONSTRAINT [FK_Sound_Type] FOREIGN KEY([TypeId])
REFERENCES [dbo].[Type] ([Id])
GO

ALTER TABLE [dbo].[Sound] CHECK CONSTRAINT [FK_Sound_Type]
GO

/****** Object:  Table [dbo].[Beatmap]    Script Date: 8/20/2018 3:09:42 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Beatmap](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Map] [nvarchar](100) NULL,
	[ProjectId] [int] NOT NULL,
	[SoundId] [int] NOT NULL,
 CONSTRAINT [PK_Beatmap] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Beatmap]  WITH CHECK ADD  CONSTRAINT [FK_Beatmap_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([Id])
GO

ALTER TABLE [dbo].[Beatmap] CHECK CONSTRAINT [FK_Beatmap_Project]
GO

ALTER TABLE [dbo].[Beatmap]  WITH CHECK ADD  CONSTRAINT [FK_Beatmap_Sound] FOREIGN KEY([SoundId])
REFERENCES [dbo].[Sound] ([Id])
GO

ALTER TABLE [dbo].[Beatmap] CHECK CONSTRAINT [FK_Beatmap_Sound]
GO






