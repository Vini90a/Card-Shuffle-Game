({
    startGame : function(component, event, helper) {
        //acessando o combobox
        let selectedGameMode = component.find("gameMode");

        //acessando o valor selecionado do combobox
        let gameModeValue = selectedGameMode.get("v.value");

        //modificando o valor da frase "Selected Mode Is: {!v.selectedGameMode}" no arquivo cmp (markup file)
        component.set("v.selectedGameMode", gameModeValue);

        //verificando se foi selecionado algum valor
        if (gameModeValue == "inProgress"){
            window.alert("Selecione um modo de Jogo");
        } 
        else{
            window.alert("O valor selecionado foi "+gameModeValue);
        }
    },

    reshuffleClicked : function(component, event, helper) {
        window.alert("O botão reshuffle foi clicado");
    }
})
