import { Message, MessageErrorType } from './index';
export default class {
    MessageError: (message: Message, { msg, syntax, color, fields, cooldown, permission, sendmsg }: MessageErrorType) => void;
    config: {
        defaultSendMsg: boolean;
        defaultColor: string;
        timestamp: string;
    };
    emojis: {
        x: string;
        question: string;
    };
    private botPrefix;
    get prefix(): string;
    set prefix(prefix: string);
    constructor();
}
