const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');
const avconv = require('avconv');
const opus = require('@discordjs/opus');
const Discord = require('discord.js')


async function amor(message, voiceChannel)  {
        try {
            await voiceChannel.join().then(connection => {
                connection.play(ytdl('https://www.youtube.com/watch?v=izGwDsrQ1eQ', { type: 'opus' }));
                message.channel.send('Você pediu musica romantica? Então toma!');
            });
        } catch (e) {
            message.channel.send('Não foi possivel fazer essa ação agora!');
            console.log(e);
        }
    }

async function set(message, voiceChannel)  {
        try {
            await voiceChannel.join().then(connection => {
                connection.play(ytdl('https://www.youtube.com/watch?v=zObCCCsCo2I', { type: 'opus' }));
                message.channel.send('Tocando aquele set violento!');
            });
        } catch (e) {
            message.channel.send('Não foi possivel fazer essa ação agora!');
            console.log(e);
        }
    }

    async function musica(message, voiceChannel, command) {
        try {
            const musica = command
            var detectaUrl = message.content;
            detectaUrl = detectaUrl.replace('!musica ', '')
            if (musica && !voiceChannel) return message.channel.send('entre em um canal de voz primeiro!');
            if (musica && message.content === `!musica ${detectaUrl}`) {
             await voiceChannel.join().then(connection => {
              connection.play(ytdl(`${detectaUrl}`, { type: 'opus' }));
              message.channel.send('Tocando seu som!');
              })
            }
          } catch(e) {
            message.channel.send('Não foi possivel fazer essa ação agora!');
            console.log(e);
          }
          
    }

    async function parar(message) {
         await message.guild.me.voice.channel.leave()
         message.channel.send('Parando a musica e saindo do canal de voz!');
    }

module.exports = { amor, musica , parar, set}