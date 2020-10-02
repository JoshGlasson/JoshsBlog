---
slug: 'discord_bot'
title: 'Creating a Simple Discord Bot.'
headline: 'Its not self promotion if its done by a robot!'
image: "./images/icons_same_size/discord logo.png"
sortdate: "2020-09-03"
originaldate: "2020-09-02"
tags: ['Software Development']
---

I was sitting at home yesterday thinking it would be good to work on something small just for some practice. I stumbled upon a <a href="https://www.maxbits.net/blog/post/Writing-a-Discord-Bot-in-Ruby-using-DiscordRB/" target="_blank">blog post</a> regarding making a discord bot, and decided it would be cool to give it a go.

The blog shows the process using Ruby. I hadn't used Ruby for a while so it wasn't easy for me to pick it up and remember the syntax. For that reason I decided I would also do it in JavaScript as I know more about it. I found a guide <a href="https://www.sitepoint.com/discord-bot-node-js/" target="_blank">here</a> which was really helpful.

<br>

# Ruby

So as I mentioned above, I pretty much followed the blog I linked, with only a few minor changes to get things working, and instead of just sending a test message I wanted to send a link to my blog. I will go through the steps from the start, but credit to the above blog for most of the work!

## Register Your Bot

To start with, you need to create a new Application in the <a href="https://discord.com/developers/applications" target="_blank">Discord Develper Portal</a>, which you can call whatever you want. I gave it the same name I wanted to give my bot, just to make life easier! Once you have a new application, go to the Bot tab, and press Add Bot. We will need its token and client id soon.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-new-application.png" alt="Creating a New Application"/>
    <figcaption>Creating a New Application</figcaption>
  </figure>
</div>

## Project Setup

In your IDE of choice, create a project with the following structure.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-project-structure.png" alt="Project Structure"/>
    <figcaption>Project Structure</figcaption>
  </figure>
</div>

If you haven't used Ruby before, the `Gemfile` is used to define dependencies. So starting with the `Gemfile`, the first thing we need to do is get the `discordrb` gem, so add the below to your `Gemfile`:

<div id="codeSnippet">

```ruby
source 'https://rubygems.org'
gem 'discordrb'
```
</div>

In the post I followed they did not define a `source`, however I needed it to make this work. To install the dependency, run `bundle install`. You should have `Bundler` installed already if you have Ruby. If not, now would be a good time to install Ruby!

Next, we can put the below into `run.rb`:

<div id="codeSnippet">

```ruby
require_relative 'src/bot'
```
</div>

`run.rb` is acting a shortcut to the `bot.rb` file where we are actually going to run our code. So lets give it some code to run, in `src/bot.rb` add:

<div id="codeSnippet">

```ruby
require 'discordrb'
require 'ostruct'
require 'yaml'

module Bot
    if File.file? 'data/config.yaml'
        CONFIG = OpenStruct.new YAML.load_file 'data/config.yaml'
    else
        puts 'Can\'t load config file!'
        exit!
    end

    BOT = Discordrb::Commands::CommandBot.new(client_id: CONFIG.client_id, token: CONFIG.token, prefix: CONFIG.prefix)

    # Discord Commands
    module DiscordCommands; end
    Dir['src/modules/commands/*.rb'].each { |mod| load mod }
    DiscordCommands.constants.each do |mod|
        BOT.include! DiscordCommands.const_get mod
    end

    # Discord Events
    module DiscordEvents; end
    Dir['src/modules/events/*.rb'].each { |mod| load mod }
    DiscordEvents.constants.each do |mod|
        BOT.include! DiscordEvents.const_get mod
    end

    BOT.run
end
```
</div>

The blog post I followed gives some good descriptions of what each part of this code is doing, so probably worth checking that out.

You can see in the code above, we are getting some information from `CONFIG`. This is coming from the `data/config.yaml` file, which has three properties in it:

<div id="codeSnippet">

```ruby
client_id: 'Client Id (From the Dev Portal)'
token: 'Your Token (From the Dev Portal)'
prefix: '?'
```
</div>

The client id and token both come from the Bot tab in the Discord Dev Portal. The prefix can be whatever you want, and will be used to call your bot with commands.

Now that's all set up we can actually give it a command to work with. The post I followed gave a simple example of sending `?ping` and the bot responding with *pong*. However that isn't very interesting, so I am branching off here for a moment! I wanted my bot to promote my blog, by sending a link to it in the chat. So in `src/modules/commands/` I added a file called `promote.rb`, in which I added the following code:

<div id="codeSnippet">

```ruby
require 'discordrb/webhooks'

module Bot
    module DiscordCommands
        module Promote extend Discordrb::Commands::CommandContainer
            command :promote do |event|
                event.channel.send_embed("Check out my blog here: ") do |embed|
                    embed.title = "Joshs Blog"
                    embed.colour = Random.bytes(3).unpack1('H*')
                    embed.url = "https://joshglasson.com"
                    embed.description = "My personal blog about Software Development, Sports, Music, and any more of my hobbies!"
                    embed.timestamp = Time.at(Time.now())
                end
            end
        end
    end
end
```
</div>

Theres two parts to this to explain really. Firstly:

<div id="codeSnippet">

```ruby
module Bot
    module DiscordCommands
        module Promote extend Discordrb::Commands::CommandContainer
            command :promote do |event|
              # not important right now
            end
        end
    end
end
```
</div>

This is the code to handle commands. We have extended `Discordrb::Commands::CommandContainer` which comes from the `discordrb` plugin, and added code in to handle commands. In this case, `command :promote do |event|` will listen for a `promote` command, and do something if it receives it.

<div id="codeSnippet">

```ruby
require 'discordrb/webhooks'

command :promote do |event|
    event.channel.send_embed("Check out my blog here: ") do |embed|
        embed.title = "Joshs Blog"
        embed.colour = Random.bytes(3).unpack1('H*')
        embed.url = "https://joshglasson.com"
        embed.description = "My personal blog about Software Development, Sports, Music, and any more of my hobbies!"
        embed.timestamp = Time.at(Time.now())
    end
end
```
</div>

Inside the command block is some code to embed a link. To use this we have to import `discordrb/webhooks`. Then we can use that to send an embedded link to the channel. I used the <a href="https://leovoel.github.io/embed-visualizer/" target="_blank">Discord Embed Visualiser</a> to help me build the code.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-ruby-embed.png" alt="Ruby Code to Embed a Link"/>
    <figcaption>Ruby Code to Embed a Link</figcaption>
  </figure>
</div>

I replaced the colour with some code that randomly generates a hex code instead, and the hardcoded timestamp with a dynamic time instead.

The last part is the same as the original post. In `events/online.rb` we add the following code:

<div id="codeSnippet">

```ruby
module Bot
    module DiscordEvents
        module Online extend Discordrb::EventContainer
            ready do |event|
                puts "Logged in as #{event.bot.profile.distinct}"
                puts "Invite URL: #{event.bot.invite_url}"
            end
        end
    end
end
```
</div>

Upon running `ruby run.rb`, you should see a message like this:

<div id="codeSnippet">

```bash
[INFO : websocket @ 2020-09-02 09:25:30.187] Discord using gateway protocol version: 6, requested: 6
Logged in as JoshsBlogPromoter#0931
Invite URL: https://discordapp.com/oauth2/authorize?&client_id=750398124148654120&scope=bot
```
</div>

If you follow the link, it should give you the option of adding the bot to one of your discord servers. Now you can test it by sending it a message, in this case `?promote`:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-ruby-message.png" alt="Ruby Bot Working in Discord"/>
    <figcaption>Ruby Bot Working in Discord</figcaption>
  </figure>
</div>

<br>

# JavaScript

So now we have a Ruby Discord Bot working, lets make one in JavaScript.

## Bot Setup

Firstly if you did not create an Application and Bot in the Ruby guide, do so now. Once that is done, go to the **OAuth2** tab and setup the permissions you want your bot to have. In ***Scopes*** tick *bot*, and in ***Bot Permissions*** I have ticked *Send Messages* and *Read Message History*. If you want it to do more, of course you can tick more options. Doing this should update the link in ***Scopes***, and once you are happy, copy this link into your browser. This should take you to a page to add your bot to your server.

## Project Setup

To start with, create 2 files. Firstly create a `package.json` file with the below:

<div id="codeSnippet">

```json
{
  "name": "discord-bot",
  "version": "1.0.0",
  "description": "My Discord Bot",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Josh Glasson",
  "license": "ISC",
  "dependencies": {
    "discord.js": "^11.5.1",
    "dotenv": "^8.2.0"
  }
}
```
</div>

Then run `npm install` to install the two defined dependencies, `discord.js` and `dotenv`. `dotenv` is going to help us keep our token private.

Next create a file called `.env` and add your token into it:

<div id="codeSnippet">

```yaml
TOKEN='Your Token'
```
</div>

I would create a `.gitignore` file now too and make sure to add `.env` to it, just so you don't forget!

Now we can create the bot. You may have noticed in the `package.json` file we defined `main` as `index.js`. That is the entrypoint for npm, so we should create an `index.js`.

<div id="codeSnippet">

```javascript
require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
```
</div>

This code uses the `discord.js` plugin to create a Discord client, then logs in using the token. It then creates a collection and populates it with commands from the `/commands` folder (which doesn't exist yet but we are getting there). Once the bot is ready it will log a message saying it is logged in. The below code is where the message handling happens:

<div id="codeSnippet">

```javascript
bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
```
</div>

It checks every message and separates by space into individual words, it then checks the first word to see if it is a command. If not it just does nothing. If so it tries to execute the command, and logs any errors.

Now we should add the commands to make it actually do stuff. Create a folder called commands, and inside create `index.js` and `promote.js`. `promote.js` is my command so that can be whatever you want. Inside `promote.js` put the following code:

<div id="codeSnippet">

```javascript
module.exports = {
    name: 'promote',
    description: 'Promote Joshs Blog!',
    execute(msg, args) {
      const embed = {
        "title": "Joshs Blog",
        "description": "My personal blog about Software Development, Sports, Music, and any more of my hobbies!",
        "url": "https://joshglasson.com",
        "color": Math.floor(Math.random()*16777215),
        "timestamp": Date.now()
      };
      msg.channel.send("Check out my blog here: ", { embed });
    },
};
```
</div>

Again I have used the <a href="https://leovoel.github.io/embed-visualizer/" target="_blank">embed visualiser</a> here to get the embed code:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-js-embed.png" alt="JS Code to Embed a Link"/>
    <figcaption>JavaScript Code to Embed a Link</figcaption>
  </figure>
</div>

I have once again changed the colour and timestamp to be dynamic.

Finally in `commands/index.js` we need to add the below:

<div id="codeSnippet">

```javascript
module.exports = {
    Promote: require('./promote'),
};
```
</div>

We import any commands into this file, then import this file into the main `index.js`. This keeps it neater, as otherwise we would need to import each individual command into the main `index.js` file. We can now run the bot with `node index.js`.

Here is the working JS bot:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-js-message.png" alt="JS Bot Working in Discord"/>
    <figcaption>JS Bot Working in Discord</figcaption>
  </figure>
</div>

As you can see it works pretty much the same way. However the key difference is it doesn't take a prefix, which may lead to confusion as it could trigger when it shouldn't. I updated my code to ensure it only picks up words with the `?` prefix as it does in the Ruby version. The below is what I added to the `on message` function in the main `index.js`, before the check for the command existing:

<div id="codeSnippet">

```javascript
if (command.slice(0,1) != '?') {
  return;
} else {
  command = command.slice(1)
}
```
</div>

Here it is in action

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-js-messages-with-prefix.gif" alt="JS Bot"/>
  </figure>
</div>

Now everything was working I added more info to my embed:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-js-embed-with-images.png" alt="JS Embed with Logo"/>
    <figcaption>JS Embed with Logo</figcaption>
  </figure>
</div>

<br>

You can find the <a href="https://github.com/JoshGlasson/Discord-Bot" target="_blank">code on my GitHub</a>

And that is it for now. I find little things like this very interesting, I may revisit this and add more to it in the future, so look out for a part 2 one day!

<br>

<h1><em><strong>UPDATE: Thu Sep 03 2020</strong></em></h1>
<h2><em><strong>Adding Python</strong></em></h2>

<br>

# Python

## Register the Bot

Again we need to have a bot setup and an auth token ready to use. Follow the setup process in the Ruby guide for this if you haven't done it already, and then follow the guide in the JavaScript section to add it to your server.

## Project Setup

Despite having PyCharm installed, I decided to stick with VSCode for the Python code. It actually works pretty well, well enough for the simple project I am going to be doing anyway! If you too want to use VSCode, I would follow <a href="https://code.visualstudio.com/docs/python/python-tutorial" target="_blank">this guide</a> to get it setup for Python.

Now the IDE is setup we can start on the project. I was following <a href="https://www.devdungeon.com/content/make-discord-bot-python" target="_blank">this guide</a> to start with, but ran into all sorts of problems with python, so will try to explain exactly what I did.

Firstly we need the `discord.py` library. There are some issues with this library working on the newest version of python, so use the below commands to get it working:

<div id="codeSnippet">

```zsh
python3 -m pip install -U "https://github.com/Rapptz/discord.py/archive/async.zip#egg=discord.py[voice]"
python3 -m pip install --upgrade aiohttp
python3 -m pip install --upgrade websockets
```
</div>

I am not sure the second and third commands are necessary, but it worked for me! Now we can get started, so in your project folder, create a file called `bot.py` and add the following code:

<div id="codeSnippet">

```python
import discord

TOKEN = 'PUT YOUR TOKEN HERE'

client = discord.Client()

@client.event
async def on_message(message):
    # we do not want the bot to reply to itself
    if message.author == client.user:
        return

    if message.content.startswith('!hello'):
        msg = 'Hello {0.author.mention}'.format(message)
        await client.send_message(message.channel, msg)

@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

client.run(TOKEN)
```
</div>

After adding your token, try to run this python file in the terminal using `python3 /path/to/file/bot.py` (or the play button in the top right in VSCode).

At this point you may run into an SSLError, something like this will be in the stack trace.

<div id="codeSnippet">

```bash
Cannot connect to host discordapp.com:443 ssl:True 
[SSLCertVerificationError: (1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1056)')]
```
</div>

If this does happen to you, navigate to your root directory, then go to `Applications/Python 3.7` and run the `Install Certificates.command` file. Now if you re-run the python script, it should work!

You should be able to see your bot in your channel, and sending `!hello` should prompt it to reply and tag you in the response.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-py-hello.png" alt="Python Bot Hello"/>
    <figcaption>Python Bot Hello</figcaption>
  </figure>
</div>

The bot is up and running now, so we can make some more tweaks. Instead of hardcoding my token into the `bot.py` file, I want to use `dotenv` as I have for my JavaScript bot. I installed the plugin with `python3 -m pip install python-dotenv`, and created a `.env` file with my token inside, in a key value pair format. For example `TOKEN="My token"`.

To get this into my `bot.py` file, I had to add a few things at the top:

<div id="codeSnippet">

```python
import discord
from dotenv import load_dotenv
import os

load_dotenv()
TOKEN = os.environ.get('TOKEN')
```
</div>

Next I wanted to update my code to look for the `?` prefix, as it has in the other two projects. To do this I added another `if` block after the check that the bot is not replying to itself:

<div id="codeSnippet">

```python
if message.content.startswith('?'):
    command = message.content[1:]
    print("Command received: " + command)
else:
    print("Commands should start with ?")
    return
```
</div>

If a message starts with `?`, then I trim the message to not include the `?` and save that into my `command` variable. If it does not start with `?` I print a log then `return`, so none of the rest of the code after this point is executed.

Now I could add the `promote` command I have been working with on the other projects.

<div id="codeSnippet">

```python
if command.startswith('promote'):
  colour=random.randint(0, 0xFFFFFF)
  embed = discord.Embed(title="Joshs Blog", colour=discord.Colour(colour), url="https://joshglasson.com", description="My personal blog about Software Development, Sports, Music, and any more of my hobbies!", timestamp=datetime.utcnow())
  embed.set_image(url="https://joshglasson.com/logo.png")
  embed.set_thumbnail(url="https://joshglasson.com/logo.png")
  embed.set_author(name="Josh Glasson", url="https://joshglasson.com", icon_url="https://joshglasson.com/logo.png")
  await client.send_message(message.channel, embed=embed)
  print("Command executed: " + command)
```
</div>

Once again I am picking a random colour and setting the time to now. To do this I used `random` and `datetime`, both of which have to be imported. I used the embed visualiser to get the right code for embedding, although had to tweek some bits to make it work with my bot.


<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-python-visualizer.png" alt="Python Embed Visualiser"/>
    <figcaption>Python Embed Visualiser</figcaption>
  </figure>
</div>

Here is the full `bot.py` code:

<div id="codeSnippet">

```python
import discord
from datetime import datetime
import random
from dotenv import load_dotenv
import os

load_dotenv()
TOKEN = os.environ.get('TOKEN')

client = discord.Client()

@client.event
async def on_message(message):
    # we do not want the bot to reply to itself
    if message.author == client.user:
        return

    if message.content.startswith('?'):
        command = message.content[1:]
        print("Command received: " + command)
    else:
        print("Commands should start with ?")
        return

    if command.startswith('hello'):
        msg = 'Hello {0.author.mention}'.format(message)
        await client.send_message(message.channel, msg)
        print("Command executed: " + command)
        return

    if command.startswith('promote'):
        colour=random.randint(0, 0xFFFFFF)
        embed = discord.Embed(title="Joshs Blog", colour=discord.Colour(colour), url="https://joshglasson.com", description="My personal blog about Software Development, Sports, Music, and any more of my hobbies!", timestamp=datetime.utcnow())
        embed.set_image(url="https://joshglasson.com/logo.png")
        embed.set_thumbnail(url="https://joshglasson.com/logo.png")
        embed.set_author(name="Josh Glasson", url="https://joshglasson.com", icon_url="https://joshglasson.com/logo.png")
        await client.send_message(message.channel, embed=embed)
        print("Command executed: " + command)
        return

    print("Command " + command + " does not match any known commands")

@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

client.run(TOKEN)
```
</div>

And here it is in action:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/09/discord-bot-python.png" alt="Python Bot"/>
    <figcaption>Python Bot</figcaption>
  </figure>
</div>

You may have spotted the timestamp on the embed and the actual time are an hour apart. That is because I was using `datetime.now()` which was returning the time in BST, however Discord was expecting UTC and tried to convert it to BST again for me, hence it becomes an hour ahead of what it should be. I have updated the code above to use `datetime.utcnow()` which fixes this problem!

As with before the <a href="https://github.com/JoshGlasson/Discord-Bot" target="_blank">code is on my GitHub</a> if you want to check it out.