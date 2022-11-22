"use strict";

// html과 연결되어 있는 프론트

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

// id, psword 값
function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    // console.log(req, JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json()) //fetch로 전달하고 응답한 데이터를 다시 받음
        .then((res) => {
            if (res.success) {
                location.href = "/"; // response 값이 success일 시 루트로 이동
            } else {
                alert(res.msg); // 서버에서 전달한 메세지
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생"); // 새로운 에러 발생 찾기
        });
}
