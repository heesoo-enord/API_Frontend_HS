"use strict";

const app = require("../../app"); // app.js를 불러 옴
const PORT = 3000;

app.listen(PORT, () => {
    // function () 대신 () => 사용해도 무방
    console.log("서버 가동");
});
