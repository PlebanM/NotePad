let element = document.getElementById('text-area');
element.addEventListener("keyup", function importText(e){
    printValue(e.key);
});


function printValue(letter) {
    let fileName = "memos";

    let fromStorage = readFromFile(fileName);
    console.log(fromStorage['inputText']);
    let newVar = fromStorage['inputText'] + letter;

    writeToFile(fileName,newVar);
    console.log(newVar);
    //
    // document.getElementById("show-message").innerHTML = newVar;

}

function printLetters(letter){

    let textInput = {
        inputText: letter
    };

    let fileName = 'memo';

    writeToFile(fileName, textInput);

    document.getElementById("show-message").innerHTML = readFromFile(fileName)['inputText'];
}

function checkLetter(letter){
    return letter;

}


function writeToFile(fileName, textInput) {
    localStorage.setItem(fileName,JSON.stringify(textInput));

}

function readFromFile(fileName) {

    if(localStorage.getItem(fileName)===null){
        localStorage.setItem(fileName, JSON.stringify({inputText:"a"}));
        return JSON.parse(localStorage.getItem(fileName));
    }else{
        return JSON.parse(localStorage.getItem(fileName));
    };



}

