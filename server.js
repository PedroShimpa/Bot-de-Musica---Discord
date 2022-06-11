const Discord = require("discord.js");
const config = require("./config.json");
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');
const fs = require('fs');
const avconv = require('avconv');
const opus = require('@discordjs/opus');
const comandos = new require('./modules/cmds.js')


const client = new Discord.Client();

const prefix = "!";

client.on("message", async function(message) {
  let voiceChannel  = message.member.voice.channel;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase(); 
  if (command && !voiceChannel) return message.reply('entre em um canal de voz primeiro!');
  
  if (command === "amor") comandos.amor(message, voiceChannel) 
  if (command === "set") comandos.set(message, voiceChannel)
  if (command === "musica") comandos.musica(message, voiceChannel, command)
  if (command === "parar") comandos.parar(message)
  if (command === "comandos") message.channel.send('Comandos Disponiveis: !set, !amor, !musica (apenas com links do youtube), !parar')
})

client.login(config.BOT_TOKEN);

module.exports = { client }
