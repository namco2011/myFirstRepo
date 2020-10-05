
function myFunction() {
    alert("Hello, world!");
}

function changeText(){
    var text = document.getElementById('textArea');
    if(text.style.fontSize && parseInt(text.style.fontSize) < 24)
        text.style.fontSize = (parseInt(text.style.fontSize) + 2) + "pt";
    else {
        text.style.fontSize = "12pt";
    }

}
function bling(){
    var checked = document.getElementById('check');
    var text = document.getElementById('textArea').value;
    if(checked.checked){text.className = "bling";
        document.body.className = "bodybling";}
}

function replaceText() {
    var text = document.getElementById('textArea').value;
    var arr = text.split(" ");
    arr = Array.from(arr).map(x => {
        if(x.length >= 5) {
            return "Malkovich";
        }
        else
            return x;
    });
    document.getElementById('textArea').value = Array.from(arr).join(" ");
}
function convertText() {
    var text = document.getElementById('textArea').value;
    let Vowels = ['A', 'E', 'I', 'O', 'U'];
    var arr = text.split(" ");
    arr = Array.from(arr).map(x => {
        if(Vowels.indexOf(x.charAt(0).toUpperCase())>=0) {
            return x + "ay";
        }
        else {
            return x.slice(1) + x.charAt(0) + "ay";
        }
    });
    document.getElementById('textArea').value = Array.from(arr).join(" ");
}