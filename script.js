 const output = document.getElementById("password-output");

 const dataLowercase = "qwertyuiopasdfghjklzxcvbnm".split('');
 const dataUppercase = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
 const dataNumbers = "1234567890".split('');
 const dataSymbols = "!~`@#$%^&*()_-+=?/.,><';:".split('');

//  console.log(dataLowercase);
//  console.log(dataUppercase);
//  console.log(dataNumbers);
//  console.log(dataSymbols);

 function generatePassword(){

     const data = [].concat(
         lowercase.checked? dataLowercase : [],
         uppercase.checked? dataUppercase: [],
         numbers.checked? dataNumbers: [],
         symbols.checked? dataSymbols: [],
     );
    //  console.log(data);

    // parseInt : c pour mettre en valeur numerique
    let passwordLenght = parseInt(document.getElementById("display-password-lenght").value);
    // console.log(passwordLenght);
    let newPassword = '';

    if (data.length === 0){
        output.innerHTML = 'Generateur de MDP';
        alert('Veuillez selectionner des criteres');
        return;
    } 
    for (let i = 0; i < passwordLenght; i++){
        newPassword += data[Math.floor(Math.random() * data.length)]
    }
    console.log(newPassword);
    output.value = newPassword;

    // la methode select() : sert a selectionner le mot de passe (ici la var: output)

    output.select();
    document.execCommand("copy");
    generateButton.innerHTML = "Copie!"
    setTimeout(() => {generateButton.innerHTML = "Generer mot de passe"
        
    }, 3000);
 }
