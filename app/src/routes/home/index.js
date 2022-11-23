"use strict"; // 코드에 더 나은 오류 검사를 적용하는 방법

const express = require("express");
const router = express.Router(); // express 사용

const ctrl = require("./home.ctrl"); // home.ctrl.js 파일을 가져 온다

router.get("/", ctrl.output.hello); // 기능만 사용하기 위해 컨트롤러(ctrl) 따로 사용
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login); // 데이터를 받아서 로그인 기능을 처리해 준다

module.exports = router; // router를 외부 파일에서 사용할 수 있음 (app.js와 연결)
 