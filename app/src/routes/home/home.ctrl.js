"use strict";

// index.js 파일 컨트롤러
const output = {
    hello: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
};

// 유저 데이터
const users = {
    id: ["choi", "hee", "soo"],
    psword: ["1234", "1234", "12345"],
};

// 인증 과정
const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        //console.log(id, psword);
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword)
                return res.json({
                    success: true, // if문이 일치하면 success: true object를 json으로 만들어서 프론트로 응답 (response)
                });
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

// 외부에서 사용 가능
module.exports = {
    output,
    process,
};
