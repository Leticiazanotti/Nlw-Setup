const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add(){
    
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
   // const today = '10/01'
    const dayExists=nlwSetup.dayExists(today)

    if(dayExists){
        alert('Esse dia já está incluso ❌')
        return
    }

    alert('Dia adicionado com sucesso ✅')
    nlwSetup.addDay(today) 
   
}

function save(){
    localStorage.setItem('Nlw-projeto', JSON.stringify(nlwSetup.data))
}



const data = JSON.parse(localStorage.getItem('Nlw-projeto')) || {}

nlwSetup.setData(data)
nlwSetup.load()