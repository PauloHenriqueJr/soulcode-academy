use sys;

ALTER USER 'user' IDENTIFIED WITH mysql_native_password BY 'user';

flush privileges;

UPDATE mysql.user SET Grant_priv='Y', Insert_priv='Y' WHERE User='user';

UPDATE mysql.user SET Grant_priv='Y', Super_priv='Y' WHERE User='user';

exit

