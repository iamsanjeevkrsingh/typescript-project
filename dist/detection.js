"use strict";
function detectType(val) {
    if (typeof val === "string")
        return val.toUpperCase();
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
