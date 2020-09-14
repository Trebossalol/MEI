import { GetEmbed, Message } from './index'

export default class {

    constructor(Message: Message, data) {
        if (!data || !Message) return false;

        return GetEmbed(Message, data);
    }
};




