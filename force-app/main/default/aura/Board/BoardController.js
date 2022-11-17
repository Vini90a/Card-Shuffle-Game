({
    doInit : function(component, event, helper) {
        //contruindo uma lista de 100 palavras
        const words = helper.getWords(6);
        component.set('v.words', words);
        //buscando a palavra vencedora
        const winWord = helper.getWinWord(words);
        component.set('v.winWord', winWord);
    }
})
