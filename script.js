function fullName(){
    var fullName = "";
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        fullName = fullName + " "+ element; 
    }
    return fullName;
}

var inputName =  fullName('Hanif', 'Poribohon', 'sibpur', 'baricha');
console.log(inputName);