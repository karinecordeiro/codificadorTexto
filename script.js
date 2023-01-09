var inputText = document.querySelector('#inputText');
var outputText = document.querySelector('#outputText')

function codificar(){   
    var text = inputText.value;

    var resultCodificador = text.replace(/E/g, "ENTER").replace(/I/g, "IMES").replace(/A/g, "AI").replace(/O/g, "OBER").replace(/U/g, "UFAT");

    outputText.innerHTML = '<textarea readonly id="textOutput" class="textareaOutput">' + resultCodificador + '</textarea>' + '<button class="button" id="copiar" onclick="copiar()">Copiar</button>';;
}

function decodificar(){
    var text = inputText.value;

    var resultDecodificador = text.replace(/ENTER/g, "E").replace(/IMES/g, "I").replace(/AI/g, "A").replace(/OBER/g, "O").replace(/UFAT/g, "U");

    outputText.innerHTML = '<textarea readonly id="textOutput" class="textareaOutput">' + resultDecodificador + '</textarea>' + '<button class="button" id="copiar" onclick="copiar()">Copiar</button>';;
}

function copiar(){
    var textCopy = textOutput;

    textCopy.select();

    document.execCommand('copy');
    alert('O texto já foi copiado!')
}

//botão checkbox//
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener ('change', function(){
    $html.classList.toggle('dark-mode')
})