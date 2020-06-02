const {Client, MessageEmbed } = require('discord.js')
const Discord = require("discord.js");
const client = new Client()
 
const PREFIX = '!'


//fivem system

client.on('guildMemberAdd', mem => {  
    const channel = 'channel-id'

    let embed = new MessageEmbed()
    .setTitle('New User')
    .setAuthor(mem, mem.user.displayAvatarURL())
    .setDescription('WHAT EVER')
    .setThumbnail(mem.user.displayAvatarURL())
    .setFooter('WHAT EVER')
    .setColor("BLUE" || 'RED' || "GREEN")
    const welchannel = mem.guild.channels.cache.get(channel)
    if(!welchannel) return;
    channel.send(embed)
})
