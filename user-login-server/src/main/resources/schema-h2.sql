DROP TABLE IF EXISTS app_user CASCADE;

CREATE TABLE app_user (
    user_id varchar2(10) NOT NULL,
    password varchar2(500) NOT NULL,
    email varchar2(100) NOT NULL,
    user_name varchar2(30),
    city varchar2(30),
    birth_date datetime,
    secret_question varchar2(30) NOT NULL,
    secret_answer varchar2(30) NOT NULL,
    PRIMARY KEY (user_id)
);