"use strict"; // 코드에 더 나은 오류 검사를 적용하는 방법

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello); // ctrl.output.hello 더 명확하게 사용 가능
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login); // 데이터를 받아서 로그인 기능을 처리해 준다

module.exports = router; // router를 외부 파일에서 사용할 수 있음
