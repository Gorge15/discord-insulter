
module.exports = {
    defaultOptions: {
        type: "ALL",
        embed: false,
        mention: true,
        embedColor: "#000001"
    },
    types: [
        "ALL",
        "MAMA",
        "BISERICA",
        "STATUT",
        "MORTI"
    ],
    injuraturi: {
        "MAMA": [
            "<author> a injurat-o pe ma-ta, <target>", 
            "<target>, vezi ca <author> a zic ca ma-ta-i proasta",
            "<author> tocmai si-a bagat pula-n ma-ta, <target>",
            "<author> a facut RKO cu pizda ma-tii, <target>",
            "'Face-mi-as schiuri din coastele ma-tii <target>' ~cu drag de la <author>"
        ],
        "BISERICA": [
            "<author> a zis: <target>, sculpt-mi-as pula pe crucea ma-tii",
            "<author> a exorcizat pizda ma-tii, <target> cu o cadelnita",
            "<author> s-a cacat pe mormantu familiei ma-tii, <target>",
            "<author> a chemat preotul sa predice lumii cat de prost este <target>"
                    ],
        "MORTI": [
            "<target>, <author> ti-a futut toti mortii si ranitii... Cam necrofil... zic si eu..",
            "<target>, <author> ti-a luat toti mortii-n pula"
        ],
        "STATUT": [
            "<target>, <author> ti-a facut cadou o pula", 
            "<author> si-a ancorat pula-n tine, <target>",
            "<author> a zis ca esti prost/proasta, <target>",
            "<target> sa-l lingi in cur pe <author>",
            "<author> ti-a pus pula-n brate, <target>"
                ]
    }


}