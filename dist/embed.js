"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function default_1(message, { syntax, msg, sendmsg, color, fields, cooldown, permission, emojis, timestamp, prefix }) {
    const embed = new index_1.MessageEmbed();
    if (syntax) {
        embed
            .setTitle(`${emojis.x} **__Fehlende Parameter__**`)
            .addField(`${emojis.question} **Syntax**`, `\`${prefix}${syntax}\``, true);
    }
    else if (msg) {
        embed
            .setTitle(`${emojis.x} **__Ein Fehler ist aufgetreten__**`)
            .addField(`${emojis.question} **Beschreibung:**`, msg, true);
    }
    else if (cooldown) {
        embed
            .setTitle(`${emojis.x} **__Cooldown__**`)
            .addField(`${emojis.question} Zeit verbleibend:`, `${cooldown} second/s`);
    }
    else if (permission) {
        embed
            .setTitle(`${emojis.x} **__Fehlende Berechtigungen__**`)
            .addField(`${emojis.question} **__Befehl erfordert folgende Berechtigung:__**`, `\`${permission}\``);
    }
    ;
    var footerTimestamp = index_1.Moment().format(timestamp);
    embed.setFooter(`${message.author.tag} | ${footerTimestamp}`, message.author.avatarURL());
    if (fields)
        fields.forEach(data => {
            embed.addField(data.title, data.value, data.inline || false);
        });
    embed.setColor(color);
    if (sendmsg) {
        message.channel.send(embed);
        return true;
    }
    else
        return embed;
}
exports.default = default_1;
