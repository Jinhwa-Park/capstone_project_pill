"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home"); // 만들어 준 js 파일을 불러오는 것이기 때문에 폴더를 명시해줘야함. routes/home에 있는 js파일을 읽어오라는 내용.

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); // __dirname은 현재 app.js의 위치를 반환함, 이 폴더의 src 안의 public의 폴더를 경로로 추가하겠다.

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;