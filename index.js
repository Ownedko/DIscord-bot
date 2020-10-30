const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
// ASHES BOT CODE//

const Discord = require('discord.js');
const { send } = require('process');
const { OutgoingMessage } = require('http');
const client = new Discord.Client();

client.on('ready', () => {
    // Vypíše aktualní seznam serveru na kterém BOT je
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
    });

})
client.on('message', (receivedMessage) => {
    // Nereaguje na vlastní zprávy
    if (receivedMessage.author == client.user) {

        return
    }
   
// BOT Zareaguje "TICK" emoji
    receivedMessage.channel.send("Děkuji za omluvenku, officeři už to vědí:" + ("```Tvoje omluvenka:") + receivedMessage.content + ("```"))
    receivedMessage.react("✅")

})


// Když se přidá reakce 
client.on('messageReactionAdd', (reaction, author) => {
    // cca do 3 sec smaže zprávu

    const message = reaction.message
    setTimeout(function () {
        message.delete();

    }, 3000) //v ms


// Přepošle zprávu do jiného channelu pro "vedení"
})
client.on('message', (message) => {
    if (message.author.bot) return;
    channelName = "omluvenky-bot"
    const channel = client.channels.cache.find(channel => channel.name === channelName)
    channel.send("<@&740598284489457756>" + " " + message.author.tag + " napsal: " + message.content)

});

// Přes tohle se bot přihlašuje na discord
client.login(process.env.DISCORD_TOKEN);

// "Disclaimer:"Tenhle kod je automaticky pingován(cca každých 5min) z jiné stránky, díky tomu je možné udržovat bota v téměr 100% uptimu, aniž by hrozilo že nebude plnit svojí funkci