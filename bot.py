import discord
import os

from pathlib import Path
from dotenv import load_dotenv
from discord.ext import commands

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

TOKEN = os.getenv('DISCORD_TOKEN')
GUILD = os.getenv('DISCORD_GUILD')

intents = discord.Intents.all()

bot = commands.Bot(command_prefix='#', intents=intents)

tree = discord.app_commands.CommandTree(bot)

@bot.event
async def on_ready():
    await tree.sync(guild=discord.utils.get(bot.guilds, name=GUILD))
    # print "ready" in the console when the bot is ready to work
    print("ready")

@bot.command(name='helloworld')
async def helloworld(ctx):
    await ctx.respond("hello world!")

@tree.command(name="name", description="description")
async def slash_command(interaction: discord.Interaction):    
    await interaction.response.send_message("command")

bot.run(TOKEN)
