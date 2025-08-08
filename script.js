let inp = document.querySelector('input')
let select = document.querySelector('select')
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')

btn.addEventListener('click', ()=>{
     
    if(inp.value = inp.value ){
        let speech = new SpeechSynthesisUtterance(inp.value)
        speech.lang = (select.value)
        speech.volume = 1
        speech.rate = 1
        speech.pitch = 1
        speechSynthesis.speak(speech)
        inp.value = ''
        h1.textContent = ''
    }else{
       inp.value = ''
       h1.textContent = 'Error'
    }


})