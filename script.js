
const calcular = document.getElementById('calcular');



function calcularImc ()
{
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value.replace(",",".");
      //recebe os dados de dentro do input e, caso tenha sido utilizado a virgula para o decimal, já tranforma para ponto (facilitand o calculo posterior)
    const peso = document.getElementById('peso').value.replace(",",".");
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== ''  && peso !== '')
       //verifica se os campos foram preenchidos
    {
        const imc = (peso / (altura * altura)).toFixed(2);
        //toFixed arredonda os números de acordo com o n° de casas decimais do ()


        let classificao = "";
          //variável que recebera um texto específico de acordo com o if else if. Ajudará na composição da frase final

        if (imc < 18.5)
        {
            classificao = 'abaixo do peso :|';
        }

        else if ( imc >= 18.5 && imc < 25)
        {
            classificao = "com peso ideal. Parabéns!! :)";
        }

        else if (imc >= 25 && imc <30)
        {
            classificao = "levemente acima do peso :|";
        }

        else if (imc >=30 && imc <35)
        {
            classificao = "com obesidade grau I :|";
        }

        else if (imc >=35 && imc <40)
        {
            classificao = "com obesidade grau II :|";
        }

        else
        {
            classificao = "com obesidade grau III :| Cuidado!";
        }


        resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${classificao}`;
          //juntanto o resultado, o valor da classificação e contatenando tudo isso à frase final
    }

    else
    {
        resultado.textContent = "Preencha todos os campos";
    }


}

calcular.addEventListener('click', calcularImc);
  //adicionando ouvinte de açãopara o botão