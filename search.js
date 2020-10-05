const servicos = [
        {name: 'Administração',
         keypass: 'iptu administracao alecrimdourado',
            link: 'https://www.google.com'}, 

        {name: 'Concurso Público', keypass: 'concurso publico', link:'#'},
        {name: 'Câmara dos vereadores', keypass: 'Camara dos vereadores', link:'#'},
        {name: 'Perda da chamada', keypass: 'perda da chamada', link:'#'},
        {name: 'Chamada de aprovados', keypass: 'chamada de aprovados', link:'#'}
]
const propsServico = servicos.map((servico)=>{
    return([   
        servico.keypass,
        servico.name,
        servico.descricao
    ])
})

console.log(servicos)

const searchForm = document.getElementById('searchForm')
const inputSearch = document.getElementById('inputSearch')


var showServicos = servicos.map(function(servico){
    return`
        <li class="list"><a href="${servico.link}">${servico.name}</a></li>
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

        // remove acentos e caracteres especiais
        query = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        let queryRegExp = new RegExp( query, 'i')

        // Aqui crio um array novo que filtra os dados pelo keypass de acordo com o valor do input
        let newServicos = servicos.filter(item => {
            return queryRegExp.test(item.keypass)
        })

        // Faço o map igual antes
        let showNewServicos = newServicos.map(item => {
            return `<li class="list"><a href="${item.link}">${item.name}</a></li>`
        })

        // E boto na tela
        listGroup.innerHTML = showNewServicos.join("")
        
    }

    
})



