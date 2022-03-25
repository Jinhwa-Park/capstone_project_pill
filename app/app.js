"use strict";

// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./src/routes/home"); // 만들어 준 js 파일을 불러오는 것이기 때문에 폴더를 명시해줘야함.
// routes/home에 있는 js파일을 읽어오라는 내용.

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;