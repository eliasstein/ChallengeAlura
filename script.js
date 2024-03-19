

function encrypt(){
    let text=document.getElementById("text-area").value;
    let newText="";
    for(let x=0; x<text.length;x++){
        switch(text[x]){
            case 'a':newText+="ai";
            break;
            case 'e':newText+="enter";
            break;
            case 'i':newText+="imes";
            break;
            case 'o':newText+="ober";
            break;
            case 'u':newText+="ufat";
            break;

            case 'á':
            case 'é':
            case 'í':
            case 'ó':
            case 'ú':
                alert("Por favor no ingresar caracteres con tilde");
                return;
                break;

            case 'A':newText+="AI";
            break;
            case 'E':newText+="ENTER";
            break;
            case 'I':newText+="IMES";
            break;
            case 'O':newText+="OBER";
            break;
            case 'U':newText+="UFAT";
            break;

            default:newText+=text[x];
            break;
        }
    }
    //console.log(text);
    document.getElementById("text-area-crypted").value=newText;
}

function decrypt(){
    let text=document.getElementById("text-area").value;

    text=text.toLowerCase().replaceAll("ai","a");
    text=text.toLowerCase().replaceAll("enter","e");
    text=text.toLowerCase().replaceAll("imes","i");
    text=text.toLowerCase().replaceAll("ober","o");
    text=text.toLowerCase().replaceAll("ufat","u");

    text=text.toLowerCase().replaceAll("AI","A");
    text=text.toLowerCase().replaceAll("ENTER","E");
    text=text.toLowerCase().replaceAll("IMES","I");
    text=text.toLowerCase().replaceAll("OBER","O");
    text=text.toLowerCase().replaceAll("UFAT","U");

    //console.log(text);
    document.getElementById("text-area-crypted").value=text;
}

function copy(){
    encryptedText=document.getElementById("text-area-crypted").value;
    navigator.clipboard.writeText(encryptedText);

}