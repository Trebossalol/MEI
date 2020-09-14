import { MessageError, Message, MessageErrorType } from './index'

export default class {

    public MessageError: (message: Message, { msg: string, syntax, color, fields, cooldown, permission, sendmsg }: MessageErrorType) => void;

    public config: {
        defaultSendMsg: boolean,
        defaultColor: string,
        timestamp: string
    };
    public emojis: {
        x: string,
        question: string
    };

    private botPrefix: string = undefined;

    get prefix() {
        return this.botPrefix;
    };

    set prefix(prefix) {
        if(this.botPrefix !== undefined) throw new Error('prefix is already set. You can\'t change the prefix.');
        this.botPrefix = prefix;
    }

    constructor() {

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

        this.MessageError = function (message: Message, { 
                msg,  syntax, color, fields,  cooldown, permission, sendmsg
            }: MessageErrorType ) {

                if(!this.config.botPrefixe) throw console.error('please define property \'config.botPrefix\'.');

                new MessageError(message, { 
                    msg: msg, 
                    syntax: syntax, 
                    color: color || this.config.defaultColor, 
                    fields: fields || [], 
                    cooldown: cooldown , 
                    permission: permission, 
                    sendmsg: sendmsg || this.config.defaultSendMsg,
                    emojis: this.emojis,
                    timestamp: this.config.timestamp,
                    prefix: this.config.botPrefix
            });
        };
    }
};