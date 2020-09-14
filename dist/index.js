"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEI = exports.MessageError = exports.GetEmbed = exports.Moment = exports.Message = exports.MessageEmbed = void 0;
// Source-Modules
const embed_1 = require("./embed");
exports.GetEmbed = embed_1.default;
const error_1 = require("./error");
exports.MessageError = error_1.default;
const mei_1 = require("./mei");
exports.MEI = mei_1.default;
// Node-Modules | Type Reference
const discord_js_1 = require("discord.js");
Object.defineProperty(exports, "MessageEmbed", { enumerable: true, get: function () { return discord_js_1.MessageEmbed; } });
Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return discord_js_1.Message; } });
const Moment = require("moment");
exports.Moment = Moment;
