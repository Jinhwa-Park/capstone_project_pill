"use strict";

const hello = (req, res) => {
    res.render("home/index");
}
// hello라는 함수를 만들어줌으로써 외부에서 가져다가 쓸 수 있게 함.

const login = (req, res) => {
    res.render("home/login");
}

module.exports = {
    hello,
    login,
};