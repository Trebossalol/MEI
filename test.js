// Import the Module from index.js.
const MEI = require('./index')

// Create a new variable and use the constructor. 
const Mei = new MEI()

// The Bot-Prefix must be set, it can't be changed later.
Mei.prefix = 'x!'

// Your can change things in MEI.config & MEI.emojis, but there are default values set.
Mei.emojis.question = ':grey_question:'
Mei.emojis.x = ':heavy_multiplication_x:'

// Create an error, using the MEI.MessageError method, pass the message object from the message event
// and some information, you want to be included in the message.
Mei.MessageError(message, {
    msg: 'Du musst gültige Parameter verwenden!',
    syntax: 'create-role <role-name>',
    sendmsg: true
})

// By default, you have to pass the sendmsg parameter, if you want to send the message directly into the 
// chat, but this setting will help you out!
Mei.config.defaultSendMsg = true

// The default color for the message-embeds will be a light-red, but for sure, you can change that.
Mei.config.defaultColor = '#a30b00'

// The timestamp, which is in the message-embed footer, is by default HH:mm:ss. You can change that with a
// little help from https://momentjs.com/
Mei.config.timestamp = 'MMM Do YY'
