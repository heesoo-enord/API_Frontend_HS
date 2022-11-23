"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser"); //
const app = express();

// 라우팅
const home = require("./src/routes/home"); // ./src/routes/home 경로에 있는 index.js 호출

// 앱 세팅

app.set("views", "./src/views"); // 화면 관리를 저장해줌 (루트는 index.ejs)
app.set("view engine", "ejs"); // ejs 엔진을 사용한다
app.use(express.static(`${__dirname}/src/public`)); // dirname은 디렉터리 파일이 있는 위치를 반환하고 경로에 해당하는 public 폴더를 정적 경로로 추가
app.use(bodyParser.json()); // json 데이터를 파싱함
app.use(bodyParser.urlencoded({ extended: true })); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함된 경우 제대로 인식되지 않는 문제 해결

app.use("/", home); // use -> 미들 웨어 등록해주는 메서드 (루트 경로로 들어오면 home으로 보내준다)

module.exports = app; // www.js로 내보냄
