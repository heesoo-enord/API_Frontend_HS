"use strict";

// index.js
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

// 인증 과정 (유저 데이터와 프런트에서 전달한 데이터를 인증)
const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        //console.log(id, psword);
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            // 프런트에서 전달한 id가 users에 있으면 id의 idx를 가져온다
            if (users.psword[idx] === psword)
                // users.psword의 idx가 프런트에서 전달한 psword와 같은지 여부 확인
                return res.json({
                    success: true, // 로그인이 성공하면 success: true object를 json으로 만들어서 프런트로 응답 (response)
                });
        }
        // 위에 return 있으므로 else 구문 사용 안 해도 됨
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

// 외부에서 사용 가능 (index.js)
module.exports = {
    output, //index.js
    process,
};
