const servicos = [
        {name: 'Administração', id: 1, descricao: "Bem vindo ao seu serviço de administração"}, 
        {name: 'Concurso Público', id: 2},
        {name: 'Câmara dos vereadores', id: 3},
        {name: 'Perda da chamada', id: 4},
        {name: 'Chamada de aprovados', id:5}
]

const propsServico = servicos.map((servico)=>{
    return([   
        servico.id,
        servico.name,
        servico.descricao
    ])
})

console.log(servicos)

const searchForm = document.getElementById('searchForm')
const inputSearch = document.getElementById('inputSearch')


var showServicos = servicos.map(function(servico){
    return`
        <li class="list">${servico.name}</li>
    `
})

const listGroup = document.getElementById("listGroup")

// Função pra mostrar todos os dados quando o input está vazio
const listServicos = () => {
   return listGroup.innerHTML = showServicos.join("")
}

if (inputSearch.value == "") {
    listServicos()
}

searchForm.addEventListener('keyup' , (event)=>{
    event.preventDefault()
    listGroup.innerHTML = ""

    if (inputSearch.value == "") {
        listServicos()
    }else {
        // Se o input não estiver vazio o valor vai pra variavel query

        let query = inputSearch.value

        // substitui e o valor fica com uma barrinha na frente, fiquei com preguiça de procurar o motivo disso
        query = query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        let queryRegExp = new RegExp('^' + query, 'i')

        // Aqui crio um array novo que filtra os dados pelo nome de acordo com o valor do input
        let newServicos = servicos.filter(item => {
            return queryRegExp.test(item.name)
        })

        // Faço o map igual antes
        let showNewServicos = newServicos.map(item => {
            return `<li class="list">${item.name}</li>`
        })

        // E boto na tela
        listGroup.innerHTML = showNewServicos.join("")
        
    }

    
})



