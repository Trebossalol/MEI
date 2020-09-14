"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class default_1 {
    constructor() {
        this.botPrefix = undefined;
        this.botPrefix = undefined;
        this.config = {
            defaultSendMsg: false,
            defaultColor: '#eb4034',
            timestamp: 'HH:mm:ss',
        };
        this.emojis = {
            x: ':x:',
            question: ':question:'
        };
        this.MessageError = function (message, { msg, syntax, color, fields, cooldown, permission, sendmsg }) {
            if (!this.config.botPrefixe)
                throw console.error('please define property \'config.botPrefix\'.');
            new index_1.MessageError(message, {
                msg: msg,
                syntax: syntax,
                color: color || this.config.defaultColor,
                fields: fields || [],
                cooldown: cooldown,
                permission: permission,
                sendmsg: sendmsg || this.config.defaultSendMsg,
                emojis: this.emojis,
                timestamp: this.config.timestamp,
                prefix: this.config.botPrefix
            });
        };
    }
    get prefix() {
        return this.botPrefix;
    }
    ;
    set prefix(prefix) {
        if (this.botPrefix !== undefined)
            throw new Error('prefix is already set. You can\'t change the prefix.');
        this.botPrefix = prefix;
    }
}
exports.default = default_1;
;
