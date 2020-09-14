const MEI = require('./index')

const Mei = new MEI()

Mei.prefix = 'x!'
Mei.emojis.question = ':grey_question:'

Mei.MessageError(message, {
    msg: 'Du musst gültige Parameter verwenden!',
    syntax: 'create-role <role-name>',
    sendmsg: true
})

Mei.config.defaultSendMsg = true