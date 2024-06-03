const { clickSaveBtn, clickClearBtn } = require("./functionsForm");
const makeGetRequest = require("./get");


makeGetRequest();

const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", clickSaveBtn);

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clickClearBtn);










