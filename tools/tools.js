
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
        "BISERICA": ["<author> a zis ca esti prost/proasta, <target>"],
        "MORTI": ["<target>, <author> ti-a futut toti mortii si ranitii... Cam necrofil... zic si eu.."],
        "STATUT": [
            "<target>, <author> ti-a facut cadou o pula", 
            "<author> si-a ancorat pula-n tine, <target>"
                ]
    }


}