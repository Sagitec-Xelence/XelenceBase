IF NOT EXISTS (SELECT *	FROM SGS_CODE WHERE CODE_ID = 72)
BEGIN
INSERT INTO dbo.SGS_CODE (CODE_ID, DESCRIPTION, DATA1_CAPTION, DATA1_TYPE, DATA2_CAPTION, DATA2_TYPE, DATA3_CAPTION, DATA3_TYPE, FIRST_LOOKUP_ITEM, FIRST_MAINTENANCE_ITEM, COMMENTS, LEGACY_CODE_ID, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, UPDATE_SEQ)
VALUES (72, 'Database Connection Type', NULL, NULL, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL, 'ashish.saklani', GETDATE(), 'ashish.saklani', GETDATE(), 0)
END
GO

IF NOT EXISTS(SELECT 1 FROM SGS_CODE_VALUE WITH(NOLOCK) WHERE CODE_ID = 72 AND CODE_VALUE = 'SqlServerClient') 
BEGIN
INSERT INTO dbo.SGS_CODE_VALUE (CODE_ID, CODE_VALUE, DESCRIPTION, DATA1, DATA2, DATA3, COMMENTS, START_DATE, END_DATE, CODE_VALUE_ORDER, LEGACY_CODE_ID, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, UPDATE_SEQ)
VALUES (72, 'SQSC', 'SqlServerClient', 'active', NULL, NULL, NULL, NULL, NULL, 1, NULL, 'ashish.saklani', GETDATE(), 'ashish.saklani', GETDATE(), 0)
END
GO

IF NOT EXISTS(SELECT 1 FROM SGS_CODE_VALUE WITH(NOLOCK) WHERE CODE_ID = 72 AND CODE_VALUE = 'OracleClient') 
BEGIN
INSERT INTO dbo.SGS_CODE_VALUE (CODE_ID, CODE_VALUE, DESCRIPTION, DATA1, DATA2, DATA3, COMMENTS, START_DATE, END_DATE, CODE_VALUE_ORDER, LEGACY_CODE_ID, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, UPDATE_SEQ)
VALUES (72, 'ORDA', 'OracleClient', NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, 'ashish.saklani', GETDATE(), 'ashish.saklani', GETDATE(), 0)
END
GO

IF NOT EXISTS(SELECT 1 FROM SGS_CODE_VALUE WITH(NOLOCK) WHERE CODE_ID = 72 AND CODE_VALUE = 'PostgreSQL') 
BEGIN
INSERT INTO dbo.SGS_CODE_VALUE (CODE_ID, CODE_VALUE, DESCRIPTION, DATA1, DATA2, DATA3, COMMENTS, START_DATE, END_DATE, CODE_VALUE_ORDER, LEGACY_CODE_ID, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, UPDATE_SEQ)
VALUES (72, 'PSGS', 'PostgreSQL', NULL, NULL, NULL, NULL, NULL, NULL, 3, NULL, 'ashish.saklani', GETDATE(), 'ashish.saklani', GETDATE(), 0)
END
GO

