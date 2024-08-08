const texts = {
    global: { // liste de textes aléatoires
        tooManyArgs: "Trop d'arguments ! Besoin de %REQUIRED_AMOUNT%, reçu %RECEIVED_AMOUNT%",
        notEnoughArgs: "Pas assez d'arguments ! Besoin de %REQUIRED_AMOUNT%, reçu %RECEIVED_AMOUNT%",
        error: "Une erreur s'est produite",
        notEnoughPermAdmin: "Tu n'es pas un administrateur du serveur",
    },
    categories: { // Liste des dossiers de commandes et une description de leur contenu. Utilisé dans /help généré automatiquement
        langs: "Commandes utilitaires pour la langue du bot",
        utils: "Commandes utilitaires diverses",
    },
    // Liste des commandes et des textes qui leur sont associés
    ping: { 
        description: "Une commande qui vous donne le ping du bot.",
        advancedDesc: "Une commande qui vous donne le ping du bot. (sans arguments)",
        reply: "Pong ! Ce message a une latence de %MESSAGE_PING%ms. L'API a une latence de %API_PING%ms."
    },
    changelang: {
        description: "Change la langue des messages du bot.",
        advancedDesc: "Change la langue des messages du bot. (/changelang lang, obtenir les langues disponibles avec /listlangs)",
        langOption: "La langue que le bot utilisera pour communiquer avec vous",
        badLanguageProvided: "La langue que vous avez demandée n'est pas valide. Les langues possibles sont : %LANG_LIST%",
        reply: "Votre langue a été changée avec succès en %LANG%"
    },
    listlangs: {
        description: "Obtenez toutes les langues du bot.",
        advancedDesc: "Obtenez toutes les langues du bot. (sans arguments)",
        reply: "Les langues possibles sont : %LANG_LIST%"
    },
    changeprefix: {
        description: "Change le prefix du bot.",
        advancedDesc: "Change le prefix du bot. (/setprefix nouveauprefix, taille max 25 char)",
        reply: "Le prefix a bien été changé à : %PREFIX%",
        tooLong: "Ce nouveau prefix fait plus de 25 char"
    },
    help: {
        description: "Liste des commandes.",
        advancedDesc: "List all possibles commands and help you on a specific command that you pass as an argument. (/help commandname)",
        title: "Voici toutes les commandes possibles !",
        categoryformat: "__%CATEGORY_NAME%__",
        commandformat: "- **%COMMAND_NAME%** : %COMMAND_DESCRIPTION%",
        invalidCommand: "Cette commande n'existe pas",
    },
}

module.exports = { texts };