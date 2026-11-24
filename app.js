//document.getElementById('zeichen').addEventListener('keydown', e => e.preventDefault());   


let GenerateBTN = document.getElementById("btn"); 
let CopyBTN = document.getElementById("Clipboard"); 

let GeneratedPassword = document.getElementById("Result"); 
 let Password = ""; 


GenerateBTN.addEventListener("click", function()
{
    CopyBTN.value = "Kopieren"; 
    GeneratedPassword.value = " "; 
    let CharSet = ''; 
    Password = ""; 
    GeneratedPassword.disable = false;


    let länge = document.getElementById("zeichen").value; 

    let BigLetters = document.getElementById("BigLetters").checked; 
    let SmallLetters = document.getElementById("SmallLetters").checked; 
    let SelectedNumber = document.getElementById("Number").checked; 
    let symbole = document.getElementById("symbole").checked; 

    if (länge > 20 || länge < 3)
    {
        alert("Bitte gib einen wert zwischen 3-20 ein 🦊"); 
    }
    else 
    {
        if (SmallLetters)
        {
            CharSet += 'abcdefghijklnmopqrstuvwxyz'
        }

        if (BigLetters)
        {
            CharSet += 'ABCDEFGHIJKLNMOPQRSTUVWXYZ'
        }

        if (symbole)
        {
            CharSet += '§$&?!@€^{}[]()<>.:;-_\+/'
        }

        if (SelectedNumber)
        {
            CharSet += '1234567890'
        }

        if (!CharSet || länge.trim() == "" || länge <= 2)
        {
            alert("Ungültiger Wert 🦊"); 
            return; 
        }

        for(var o = 0; o < länge; o++)
        {
            let Random = Math.floor(Math.random() * CharSet.length)
            Password += CharSet[Random];  
        }

        GeneratedPassword.value = Password; 
        GeneratedPassword.disable = true; 
    }

}); 

CopyBTN.addEventListener("click", function()
{

    if (GeneratedPassword.value.trim() == "")
    {
        alert("Kein Inhalt zum kopieren gefunden 🦊"); 
    }
    else 
    {
        navigator.clipboard.writeText(GeneratedPassword.value); 
        CopyBTN.value = "Kopiert"; 
    }

}); 
