const Discord = require("discord.js");
const tools = require("./tools/tools.js")

class Insulter {
    constructor(message, target, options) {

        if (!message) throw new Error("Nu ai specificat mesajul");
        if (!target) throw new Error("Nu ai specificat persoana insultata");
        this.message = message;
        this.target = target;
        if (!options) {
            this.options = tools.defaultOptions;
        } else if (typeof options !== "object") throw new Error("Optiunile nu sunt un obiect");
         else {
            const defaultKeys = Object.keys(tools.defaultOptions);
            this.options = {}
            for (let i = 0; i < defaultKeys.length; i++) {
                if (options.hasOwnProperty(defaultKeys[i])) {
                    this.options[defaultKeys[i]] = options[defaultKeys[i]];
                } else {
                    this.options[defaultKeys[i]] = tools.defaultOptions[defaultKeys[i]];
                }
            }
        }

        if (!tools.types.includes(this.options.type)) throw new Error("Acesta categorie nu exista, foloseste-le pe cele precizate in docs sau \"ALL\" pentru a le folosi pe toate");
        

    }

    //selecteaza categoria si modifica mesajul.
    #selectCategory(category) {
        let injuratura = undefined;
        switch (category) {
            case "ALL":
                const categorie = tools.injuraturi[tools.types[Math.floor(Math.random() * tools.types.length)]];
                const inj = categorie[Math.floor(Math.random() * categorie.length)];
                injuratura = inj;
                break;

                default: 
                    const c = tools.injuraturi[category];
                    const i = c[Math.floor(Math.random() * c.length)];
                    injuratura = i;

                
        }
        return this.#modifyMessage(injuratura);
    }

    //mention checker
    #userFormat(user) {
        if (this.options.mention === true) {
            return user;
        } else {
            return user.username
        }
    }


    //inlocuieste placeholderu
    #modifyMessage(msg) {
        let author = this.#userFormat(this.message.author);
        let target = this.#userFormat(this.target);
       
        return msg.replace(/<author>|<target>/g, function(x) {
            if (x.toLowerCase() === "<author>") return author;
            else return target;
        });
    }

    //verifica embed si trimite
    sendInsult() {
    console.log(this.options.embed)
       if (this.options.embed === true) {
           const embed = new Discord.MessageEmbed()
           .setDescription(`${this.#selectCategory(this.options.type)}`)
           .setColor(this.options.embedColor)
           this.message.channel.send({embed: embed});
       } else {
           this.message.channel.send(`${this.#selectCategory(this.options.type)}`)
       }
    }
}

module.exports = Insulter;