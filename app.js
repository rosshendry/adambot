/* Our wonderful Adambot */
const Discord = require('discord.js');
const f = require('./functions.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const facts = require('./facts.json');
const ascii_adam = require('./ascii-adam.json');
const prefix = "~";

console.log(ascii_adam.face, "\n\nGIT GUD\n\n", f.rng);

client.on('ready', () => {
	console.log('I\'m Online\nI\'m Online');
});

client.on('message', message => {
	if (message.content === prefix + 'adambot ping'){
		message.reply('pong');
	}

	if (message.content === prefix + 'adambot alcohol-level'){
		message.reply('\nAdam is mad wi it.\nTwenty\nFour\nSeven');
	}

	if (message.content === prefix + 'adambot facts'){
		var min = 0, max = facts.length;
		var rand = f.rng(min, max);
		message.reply(facts[rand]);
	}

	if (message.content === prefix + 'adambot ascii'){
		console.log(message);
	}
});

client.login(settings.token);