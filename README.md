# discord-insulter
**Discord insulter** este un modul pentru toti idiotii ca mine care vor sa-si bage o comanda de insult in bot


**Instalare**
 - downloadeaza codul sursa si pune-l in folderul botului (pana cand imi dau seama cum sa l fac sa mearga ca lumea ca npm package)
 - trebuie sa aveti discord.js instalat


**Basic Start**

```js
    //declarare constructor
    const Insulter = require("/path/to/folder/Discord-Insulter");

    const insult = new Insulter(message, target, options);
    
    insult.sendInsult();
```

**EXEMPLU**

```js
    const Discord = require("discord.js");
    const Insulter = require("/path/to/folder/Discord-Insulter");
    const client = new Discord.Client();
    const prefix = "?";

    client.on("ready", () => {
        console.log("SUNT LOGAT");
    });

    client.on("message", message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if (command === "insult") {
            const target = message.mentions.members.first();
            if (!target) return message.reply("esti idiot");

            const insult = new Insulter(message, target.user, {
                type: "ALL",
                mention: false, 
                embed: true, 
                embedColor: "#ffffff"
                });
            insult.sendInsult();

        }
    });

    client.login("token");
```

**De stiut**

Modulul functioneaza in acest fel:
```js
    const insult = new Insulter(message, target, options);
```

 - message => trebuie sa fie cel declarat in eventul "message"l;
 - target => persoana pe care vrei sa o injuri; (de verificat [discord.js docs](https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=members) pentru mai multe informatii)
 - optiuni => Nu sunt obligatorii, dar daca vrei sa faci ceva mai custom, astea sunt posibilitatile:
    * type: "ALL", "MAMA", "BISERICA", "STATUT", "MORTI" => alege tipul de injuratura
    * embed: true sau false => pune injuratura intr-un embed
    * embedColor: true sau false => alege culoarea embedului in hex format
    * mention: true sau false => alege daca sa dai sau nu mention

    Exemplu:
    ```js
        const insult = new Insulter(message, target, {
            type: "MAMA",
            mention: false,
            embed: true,
            embedColor: "#0f0f0f"
        });
    ```

**CONTACT**
Pentru probleme sau sugestii, ma puteti contacta pe georgicabot@gmail.com
