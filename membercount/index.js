
client.on('ready', () => {
  setInterval(() => {
    const serverinfo={
      guild: '',  //your Server ID
      allmemchannelid: '',  //channel ID
      botschannelid: '', // botchannel ID
      onlinememid: '', //only online Members ID
      fetchchannelid: '', //fetch message ID 
      fetchmessageid: '', //create fetch message and Take ID and pease are
      channelmemgoal: '',
      servermemgoal: '' //you'r members goal
    }
    const guild = client.guilds.cache.get(serverinfo.guild)//Get Your Server Stats
    let mem = guild.memberCount //Get all Members in server
    const bots = guild.members.cache.filter(member => !member.user.bot).size; //Get only bots in server
    const onlinemem = guild.members.cache.filter(m => m.presence.status === 'online').size// get only online members in servers
    client.channels.cache.get(serverinfo.allmemchannelid).setName('Total Members ' + mem)
    client.channels.cache.get(serverinfo.botschannelid).setName('Total Bots ' + bots)
    client.channels.cache.get(serverinfo.onlinememid).setName('Total Online ' + onlinemem)
    client.channels.cache.get(serverinfo.channelmemgoal).setName('Server Goal ' + serverinfo.servermemgoal)
//fetch message
    let embed = new MessageEmbed()
    .setFooter('Last update')
    .setTimestamp()
    .setTitle(guild.name + 'Stats')
    .setColor('BLUE')
    .setDescription('Users Count: `' + mem + '`\nOnline Count: `' + onlinemem + '`' + '\nBot Count: `' + bots + '`\n')

    client.channels.cache.get(serverinfo.fetchchannelid).messages.fetch(serverinfo.messageid)
    .then(msg => {
      msg.edit(embed)
    })
  }, 1000);
  })