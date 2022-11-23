"use strict";

// html과 연결되어 있는 프런트

const id = document.querySelector("#id"), // 선택자
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

// 입력한 id, psword 값을 받아온다
function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    // console.log(req, JSON.stringify(req));

    // 입력한 id, psword 값을 서버로 전달
    fetch("/login", {
        // 데이터를 전달해 줄 경로
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json()) // fetch로 전달하고 응답한 데이터를 then으로 가져 옴 (res.json의 반환 값은 Promise)
        .then((res) => {
            if (res.success) {
                location.href = "/"; // response 값이 success일 시 루트로 이동
            } else {
                alert(res.msg); // 서버에서 전달한 메세지 (login.js)
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생"); // 로직을 수행하다가 새롭게 발생한 에러 찾기
        });
}
