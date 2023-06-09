function validaChute(chute){
    const numero = +chute;

    if(chuteEhNumero(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido!</div>
        `
        return
    }

    if(chuteMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido!</div>
        <div>Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(numero === numeroSorteado){
        document.body.innerHTML = `
        <div class="acertou">
            <h2>Você acertou!!!</h2>
            <h3>O número secreto era ${numeroSorteado}</h3>

            <button id="reset" class="btn-reset">Jogar novamente</button>
        </div>
        `
    } else if(numero < numeroSorteado){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-up-long"></i></div> 
        `
    } else{
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-down-long"></i></div> 
        `
    }
}

function chuteEhNumero(numero) {
    return Number.isNaN(numero);
}

function chuteMaiorOuMenorPermitido(numero){
    return numero < menorValor || numero > maiorValor
}

