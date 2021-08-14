
const calcular = document.getElementById('calcular');



function calcularImc ()
{
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== ''  && peso !== '')
    {
        const imc = (peso / (altura * altura)).toFixed(2);
        //toFixed arredonda os números de acordo com o n° de casas decimais do ()


        let classificao = "";

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
    }

    else
    {
        resultado.textContent = "Preencha todos os campos";
    }


}

calcular.addEventListener('click', calcularImc);