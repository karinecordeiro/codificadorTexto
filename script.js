var inputText = document.querySelector('#inputText');
var outputText = document.querySelector('#outputText')

function codificar(){   
    var text = inputText.value;

    var resultCodificador = text.replace(/E/g, "ENTER").replace(/I/g, "IMES").replace(/A/g, "AI").replace(/O/g, "OBER").replace(/U/g, "UFAT");

    outputText.innerHTML = '<textarea readonly id="inputText" class="textareaOutput">' + resultCodificador + '</textarea>';
}

function decodificar(){
    var text = inputText.value;

    var resultDecodificador = text.replace(/ENTER/g, "E").replace(/IMES/g, "I").replace(/AI/g, "A").replace(/OBER/g, "O").replace(/UFAT/g, "U");

    outputText.innerHTML = '<textarea readonly id="inputText" class="textareaOutput">' + resultDecodificador + '</textarea>';
}

// function copiar(){
//     var textCopy = outputText;

//     textCopy.select();

//     document.execCommand('copy');
//     alert('O texto já foi copiado!')
// }

// + '<button class="button" id="copiar" onclick="copiar()">Copiar</button>';