USE [InternshipProject]
GO

DROP TABLE IF EXISTS [dbo].[Sound]
DROP TABLE IF EXISTS [dbo].[SoundType]
DROP TABLE IF EXISTS [dbo].[ByteArray]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[SoundType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_SoundType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
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
	[SoundTypeId] [int] NOT NULL,
	[ByteArrayId] [int] NOT NULL REFERENCES [dbo].[ByteArray] ([Id]),
 CONSTRAINT [PK_Sound] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] --TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Sound]  WITH CHECK ADD  CONSTRAINT [FK_Sound_Type] FOREIGN KEY([SoundTypeId])
REFERENCES [dbo].[SoundType] ([Id])
GO

ALTER TABLE [dbo].[Sound] CHECK CONSTRAINT [FK_Sound_Type]
GO






