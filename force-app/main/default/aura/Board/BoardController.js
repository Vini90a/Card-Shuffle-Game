({
    doInit : function(component, event, helper) {
        
        //get the game mode
        const gameMode = component.get("v.mode");
        let column = 0;

        //if gameMode != de null and hard mode
        //get the number of columns of the game
        if (gameMode && gameMode === 'hard') {
            column = 6;
        }else if (gameMode === 'medium'){
            column = 4;
        }else{
            column = 3;
        }

        //get block width/size
        let blockSize = 12/column;
        component.set('v.blockSize', blockSize);
        //contruindo uma lista de x palavras
        const words = helper.getWords(column * column);
        component.set('v.words', words);
        //buscando a palavra vencedora
        const winWord = helper.getWinWord(words);
        component.set('v.winWord', winWord.toUpperCase());
    }
})
