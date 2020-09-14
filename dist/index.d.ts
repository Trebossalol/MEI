import GetEmbed from './embed';
import MessageError from './error';
import MEI from './mei';
import { MessageEmbed, Message } from 'discord.js';
import * as Moment from 'moment';
declare type EmbedFieldType = {
    title: string;
    value: string;
    inline: boolean;
};
declare type MessageErrorType = {
    msg: string;
    syntax: string;
    color: string;
    fields: EmbedFieldType[];
    cooldown: string | number;
    permission: string;
    sendmsg: boolean;
};
export { MessageEmbed, Message, Moment, GetEmbed, MessageError, MEI, EmbedFieldType, MessageErrorType };
