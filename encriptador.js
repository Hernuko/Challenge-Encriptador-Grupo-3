const inputTexto = document.querySelector(".text1")
const mensaje = document.querySelector(".mensaje")


function encriptar(){
    const textoEncriptado = encriptador(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = '';

}

function encriptador(stringEncriptado){
    let matrizCodigo = [["e","enter"] , ["i", "imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function desencriptar(){
    const textoEncriptado = desencriptador(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = ''
}

function desencriptador(stringDesencriptada){
    let matrizCodigo = [["e","enter"] , ["i", "imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll
            (matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}
function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = ""
    alert("Texto copiado");
}