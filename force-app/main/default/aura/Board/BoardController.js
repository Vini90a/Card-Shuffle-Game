({
    doInit : function(component, event, helper) {
        
        //get the game mode
        const gameMode = component.get("v.mode");
        let column = 0;

        //if gameMode != de null and hard mode
        //get the number of columns of the game
        if (gameMode && gameMode === "Hard") {
            column = 6;
        }else if (gameMode === "Medium"){
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
    },

    blockClickHandler : function (component, event, helper){

        //get event value
        const value = event.getParam("value");
        //get clickCount value
        const clickCount = component.get("v.clickCount") + 1;
        if (value === component.get("v.winWord")){
            //user has won
            component.set("v.result", "YOU WIN");
            //window.alert("YOU WIN");            
            helper.disableBoard(component);
        }else if (clickCount === 3){
            //user has lost
            component.set("v.result", "YOU LOSE");
            //window.alert("YOU LOSE"); 
            helper.disableBoard(component);           
        }
        component.set("v.clickCount", clickCount);
    }
});
