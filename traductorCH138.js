const toEnglish = await Translator.create({
    sourceLenguaje: "es",
    targetLenguaje: "en"
})

const text = "Hola, buenos días"
const result = await toEnglish.translate(text)
console.log({result}) 

async function traductor(usrTxt){
    const result = await toEnglish.translate(usrTxt)
    document.getElementById("result").value = result;
}

document.getElementById("usrTxt").addEventListener('input', async function(){
    const usrTxt = document.getElementById("usrTxt").value;
    traductor(usrTxt);
});
