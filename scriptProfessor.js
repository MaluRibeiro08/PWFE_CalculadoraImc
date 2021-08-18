

function calcularIMC (peso, altura)
{
    return (peso / (altura **2)).toFixed(1)
        //dois ** é potência
        //to fixed é o número de casas decimais que você deseja
}

function camposValidos()
{
    return document.querySelector('form').reportValidity()
    //verifica se os campos REQUERIDOS estão preenchidos
}

function classificarIMC(imc)
{
    let classificacao = ""

    if (imc < 18.5)
    {
        classificacao = "abaixo do peso :("
    }

    else if(imc <25)
    {
        classificacao ="Com pesso ideal. Mandou bem!!"
    }
    else if(imc <30)
    {
        classificacao ="levemente acima do peso! :|"
    }
    else if(imc <35)
    {
        classificacao ="com obesidade grau I :("
    }
    else if(imc <40)
    {
        classificacao ="com obesidade grau II :("
    }
    else
    {
        classificacao ="com obesidade grau III :(. Tome cuidado"
    }

    return classificacao
}

function exibirResultado()
{
    const resultado = document.getElementById("resultado")
        //podemos pegar qualquer atributo do elemento, como: value, type,textContent(para div, p, a)
    const nome = document.getElementById("nome").value
        //pegamos o que está escrito dentro do inpút de id nome
    const peso = parseFloat(document.getElementById("peso").value.replace(",",".")) 
    const altura = parseFloat(document.getElementById("altura").value.replace(",",".")) 

    if(camposValidos())
    {
        const imc = calcularIMC(peso,altura)
        /*
            tem que a haver uma função para calcular, porque essa serve apenas para exibir o resultado.
            Assim, precisamos chamar a função e passar os argumentos para ela
        */    

        const classificacao = classificarIMC(imc)
        resultado.textContent = `${nome} seu IMC é ${imc.replace(".",",")} e você está ${classificacao}`
        //TEMPLATE STRING - Aceita variáveis. Usado com acento grave ``
    }
    else
    {
        resultado.textContent = `Preencha todos os campos para conseguir o resultado`
    }

    
}


//EVENTOS
  document.getElementById("calcular").addEventListener("click", exibirResultado)
    //botão calcular não vai ser declarado, pois só utilizaremos 1 vez
    //= document.querySelector("_____") Nos ajuda a selecionar classes, tags, ids, como se faz no css
    //EventListsener(_1_, _2_) => 1 é o evento que disparará a ação | 2 CALLBACK - nome da função(apenas nome, sem parentesis)