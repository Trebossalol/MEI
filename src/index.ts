// Source-Modules
import GetEmbed from './embed';
import MessageError from './error';
import MEI from './mei';

// Node-Modules | Type Reference
import { MessageEmbed, Message } from 'discord.js';
import * as Moment from 'moment';


// Custom Types
type EmbedFieldType = {
    title: string,
    value: string,
    inline: boolean
};

type MessageErrorType = {
    msg: string,
    syntax: string,
    color: string,
    fields: EmbedFieldType[],
    cooldown: string | number,
    permission: string,
    sendmsg: boolean
};


// Exporting Modules, References and types
export {
    MessageEmbed, Message, Moment, 
    GetEmbed, MessageError, MEI, 
    EmbedFieldType, MessageErrorType
};
