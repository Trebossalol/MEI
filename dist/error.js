"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class default_1 {
    constructor(Message, data) {
        if (!data || !Message)
            return false;
        return index_1.GetEmbed(Message, data);
    }
}
exports.default = default_1;
;
