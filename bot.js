const delay = 1500 // Delay in milliseconds between each frame
const voiceChannel = "1234567890" // The ID of the voice channel to use
const guildId = "1234567890" // The ID of the guild to use
const setBlankPfp = false // Set each bot's PFP to a blank image? (true or false) (ONLY DO THIS ONCE BECAUSE API)
const setNick = false     // Set the bot to have the special nickname to ensure they appear in order (true or false) (ONLY DO THIS ONCE BECAUSE API)
const printInvite = false // Print the bot invite link for each bot in the console (true or false)



//
//  CONFIG ^^^
//



/*
                                                 dddddddd
BBBBBBBBBBBBBBBBB                                d::::::d                    AAA                                                      lllllll
B::::::::::::::::B                               d::::::d                   A:::A                                                     l:::::l
B::::::BBBBBB:::::B                              d::::::d                  A:::::A                                                    l:::::l
BB:::::B     B:::::B                             d:::::d                  A:::::::A                                                   l:::::l
  B::::B     B:::::B  aaaaaaaaaaaaa      ddddddddd:::::d                 A:::::::::A          ppppp   ppppppppp   ppppp   ppppppppp    l::::l     eeeeeeeeeeee
  B::::B     B:::::B  a::::::::::::a   dd::::::::::::::d                A:::::A:::::A         p::::ppp:::::::::p  p::::ppp:::::::::p   l::::l   ee::::::::::::ee
  B::::BBBBBB:::::B   aaaaaaaaa:::::a d::::::::::::::::d               A:::::A A:::::A        p:::::::::::::::::p p:::::::::::::::::p  l::::l  e::::::eeeee:::::ee
  B:::::::::::::BB             a::::ad:::::::ddddd:::::d              A:::::A   A:::::A       pp::::::ppppp::::::ppp::::::ppppp::::::p l::::l e::::::e     e:::::e
  B::::BBBBBB:::::B     aaaaaaa:::::ad::::::d    d:::::d             A:::::A     A:::::A       p:::::p     p:::::p p:::::p     p:::::p l::::l e:::::::eeeee::::::e
  B::::B     B:::::B  aa::::::::::::ad:::::d     d:::::d            A:::::AAAAAAAAA:::::A      p:::::p     p:::::p p:::::p     p:::::p l::::l e:::::::::::::::::e
  B::::B     B:::::B a::::aaaa::::::ad:::::d     d:::::d           A:::::::::::::::::::::A     p:::::p     p:::::p p:::::p     p:::::p l::::l e::::::eeeeeeeeeee
  B::::B     B:::::Ba::::a    a:::::ad:::::d     d:::::d          A:::::AAAAAAAAAAAAA:::::A    p:::::p    p::::::p p:::::p    p::::::p l::::l e:::::::e
BB:::::BBBBBB::::::Ba::::a    a:::::ad::::::ddddd::::::dd        A:::::A             A:::::A   p:::::ppppp:::::::p p:::::ppppp:::::::pl::::::le::::::::e
B:::::::::::::::::B a:::::aaaa::::::a d:::::::::::::::::d       A:::::A               A:::::A  p::::::::::::::::p  p::::::::::::::::p l::::::l e::::::::eeeeeeee
B::::::::::::::::B   a::::::::::aa:::a d:::::::::ddd::::d      A:::::A                 A:::::A p::::::::::::::pp   p::::::::::::::pp  l::::::l  ee:::::::::::::e
BBBBBBBBBBBBBBBBB     aaaaaaaaaa  aaaa  ddddddddd   ddddd     AAAAAAA                   AAAAAAAp::::::pppppppp     p::::::pppppppp    llllllll    eeeeeeeeeeeeee
                                                                                               p:::::p             p:::::p
                                                                                               p:::::p             p:::::p
                                                                                              p:::::::p           p:::::::p
                                                                                              p:::::::p           p:::::::p
                                                                                              p:::::::p           p:::::::p
                                                                                              ppppppppp           ppppppppp
                                                                                                                                                           dddddddd
                                        DDDDDDDDDDDDD          iiii                                                                                        d::::::d
                                        D::::::::::::DDD      i::::i                                                                                       d::::::d
                                        D:::::::::::::::DD     iiii                                                                                        d::::::d
                                        DDD:::::DDDDD:::::D                                                                                                d:::::d
   ooooooooooo   nnnn  nnnnnnnn           D:::::D    D:::::D iiiiiii     ssssssssss       cccccccccccccccc   ooooooooooo   rrrrr   rrrrrrrrr       ddddddddd:::::d
 oo:::::::::::oo n:::nn::::::::nn         D:::::D     D:::::Di:::::i   ss::::::::::s    cc:::::::::::::::c oo:::::::::::oo r::::rrr:::::::::r    dd::::::::::::::d
o:::::::::::::::on::::::::::::::nn        D:::::D     D:::::D i::::i ss:::::::::::::s  c:::::::::::::::::co:::::::::::::::or:::::::::::::::::r  d::::::::::::::::d
o:::::ooooo:::::onn:::::::::::::::n       D:::::D     D:::::D i::::i s::::::ssss:::::sc:::::::cccccc:::::co:::::ooooo:::::orr::::::rrrrr::::::rd:::::::ddddd:::::d
o::::o     o::::o  n:::::nnnn:::::n       D:::::D     D:::::D i::::i  s:::::s  ssssss c::::::c     ccccccco::::o     o::::o r:::::r     r:::::rd::::::d    d:::::d
o::::o     o::::o  n::::n    n::::n       D:::::D     D:::::D i::::i    s::::::s      c:::::c             o::::o     o::::o r:::::r     rrrrrrrd:::::d     d:::::d
o::::o     o::::o  n::::n    n::::n       D:::::D     D:::::D i::::i       s::::::s   c:::::c             o::::o     o::::o r:::::r            d:::::d     d:::::d
o::::o     o::::o  n::::n    n::::n       D:::::D    D:::::D  i::::i ssssss   s:::::s c::::::c     ccccccco::::o     o::::o r:::::r            d:::::d     d:::::d
o:::::ooooo:::::o  n::::n    n::::n     DDD:::::DDDDD:::::D  i::::::is:::::ssss::::::sc:::::::cccccc:::::co:::::ooooo:::::o r:::::r            d::::::ddddd::::::dd
o:::::::::::::::o  n::::n    n::::n     D:::::::::::::::DD   i::::::is::::::::::::::s  c:::::::::::::::::co:::::::::::::::o r:::::r             d:::::::::::::::::d
 oo:::::::::::oo   n::::n    n::::n     D::::::::::::DDD     i::::::i s:::::::::::ss    cc:::::::::::::::c oo:::::::::::oo  r:::::r              d:::::::::ddd::::d
   ooooooooooo     nnnnnn    nnnnnn     DDDDDDDDDDDDD        iiiiiiii  sssssssssss        cccccccccccccccc   ooooooooooo    rrrrrrr               ddddddddd   ddddd

*/


//
//  Don't mess with the code below unless you know what you're doing!
//


const char = `!"#$%&'()*+,-./0123456789:;<=>?@abcdefghijklmnopqrstuvwxyzâạảấầậあ`.split('')
const Discord = require('discord.js')
const tokens = require('./bots.json')
const frames = require('./frames.json')

tokens.map(async (token,i) => {
    const client = new Discord.Client()
    var c
    client.login(token)

    client.on('ready',()=>{
        client.idx = parseInt(client.user.username.replace('b',''))-1
        console.log(`Bot ${client.user.username} is ready`, i)

        if(printInvite) console.log(`${client.user.username} - https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`); //.... Print the invite link of each bot in the console
        if(setBlankPfp) client.user.setAvatar('https://cdn.discordapp.com/attachments/558759865552732190/824134246087786506/blank.png'); //.......................... Set all the bots' PFP to a blank image
        if(setNick) client.guilds.resolve(guildId).me.setNickname(char[i])
    })

    client.on('message',async m=>{
        const s = m.content
        if (s == "l") {
            client.voice.connections.first().disconnect()
        } else if (s == "j") {
            c = await client.channels.resolve(voiceChannel).join()
            c.voice.setSelfMute(false)
        } else if (s == "p"){
            c.voice.setSelfMute(false)
        } else if (s == "s"){
            c.voice.setSelfMute(true)
        } else if (s == "play") {
            var i = 0
            client.timer = setInterval(()=>{
                const newMuteBool = frames[i%frames.length].split('')[client.idx]==0?true:false
                if(c.voice.selfMute !== newMuteBool) {
                    c.voice.setSelfMute(newMuteBool)
                    console.log(`Showing frame ${i}`)
                }
                i++
            },delay)
        } else if (s == "stop") {
            clearInterval(client.timer)
        }
    })
})