function menuPrincipal() {
    //Texto onde apresento a loja
    alert('Olá, tudo bem com você? Somos a loja de animais exóticos e vendemos belos mafagafos, temos filhotes, adultos e gravidos. Fique a vontade para escolher!');

    //Aqui eu chamo a função para iniciar as compras
    mafagafoFilhote()
}

function mafagafoFilhote() {
    //Primeiro eu pergunto quantos mafagafos filhotes o cliente quer, assim será mais facil fazer a soma e descontos.
    let quantidadeMafagafoFilhote = parseInt(prompt('Quantos mafagafos filhotes você quer, caso seja nenhum digite zero:'));

    //Como eu não sei se a quantidade de mafagafos que o cliente quer eu não consigo saber se ele terá desconto. Então eu crio a variavel primeiro e depois eu adiciono o valor com o possivel desconto.
    let valorTotalMafagafoFilhote;

    //Aqui eu já deixo o preço do mafagafo filhote para ficar mais facil de executar a logica
    const precoMafagafoFilhote = 1000;

    if (quantidadeMafagafoFilhote == 0) { //Aqui o cliente não quer mafagafos filhotes então eu chamo a função de mafagafos adultos.
        alert('Sem problemas vamos para os mafagafos adultos');

        //Estou chamando a função de mafagafos adultos para o sistema fazer a contagem do proximo
        mafagafoAdulto()

    } else if (quantidadeMafagafoFilhote < 15) { //Nesse caso o cliente quer menos de 15 mafagafos então ele não terá desconto.
        let resultadoSemDesconto = precoMafagafoFilhote * quantidadeMafagafoFilhote;
        alert('Maravilha! no total ficou ' + resultadoSemDesconto + ' reais, vamos agora para os filhotes adultos...');

        //Aqui eu estaria atribuindo valor a variavel "valorTotalMafagafoFilhote", pois o sistema já teria as informações necessarias
        valorTotalMafagafoFilhote = resultadoSemDesconto;

        //Estou chamando a função de mafagafos adultos para o sistema fazer a contagem do proximo
        mafagafoAdulto()

    } else if (quantidadeMafagafoFilhote > 14) { //Nesse caso o cliente quer mais de 14 mafagafos então ele terá desconto.
        let resultadoComDesconto = (precoMafagafoFilhote * quantidadeMafagafoFilhote) * 0.93;
        alert('Maravilha você ganhou desconto! no total ficou ' + resultadoComDesconto + ' reais, vamos agora para os filhotes adultos...');

        //Aqui eu estaria atribuindo valor a variavel "valorTotalMafagafoFilhote", pois o sistema já teria as informações necessarias
        valorTotalMafagafoFilhote = resultadoComDesconto;

        //Estou chamando a função de mafagafos adultos para o sistema fazer a contagem do proximo
        mafagafoAdulto()

    }

}

function mafagafoAdulto() { //Aqui eu estou reciclando a estrutura da função "mafagafoFilhote" para ficar padronizado

    //Primeiro eu pergunto quantos mafagafos adultos o cliente quer.
    let quantidadeMafagafoAdulto = parseInt(prompt('Quantos mafagafos adultos você quer, caso seja nenhum digite zero:'));

    let valorTotalMafagafoAdulto;

    //Aqui eu já deixo o preço do mafagafo adulto para ficar mais facil de executar a logica
    const precoMafagafoAdulto = 1000;

    if (quantidadeMafagafoAdulto == 0) { //Aqui o cliente não quer mafagafos adultos então eu chamo a função de mafagafos gravidos.
        alert('Sem problemas vamos para os mafagafos gravidos...');

        //Estou chamando a função de mafagafos adultos para o sistema fazer a contagem do proximo
        mafagafoGravido()

    } else {
        let resultado = precoMafagafoAdulto * quantidadeMafagafoAdulto;
        alert('Maravilha! no total ficou ' + resultado + ' reais, vamos agora para os filhotes gravidos...');

        valorTotalMafagafoAdulto = resultado;

        //Estou chamando a função de mafagafos gravidos para o sistema fazer a contagem do proximo
        mafagafoGravido()
    }


}

function mafagafoGravido() { //Aqui eu estou reciclando a estruturas das outras funções para ficar padronizado

    //Primeiro eu pergunto quantos mafagafos gravidos o cliente quer.
    let quantidadeMafagafoGravido = parseInt(prompt('Quantos mafagafos gravidos você quer, caso seja nenhum digite zero:'));

    let valorTotalMafagafoGravido;

    //Aqui eu já deixo o preço do mafagafo gravido para ficar mais facil de executar a logica
    const precoMafagafoGravido = 1000 * 1.50;

    if (quantidadeMafagafoGravido === 0) { //Aqui o cliente não quer mafagafos gravidos então eu chamo a função de soma total.
        alert('Sem problemas vamos para a soma total...');

        //Estou chamando a função de soma total para o sistema fazer a contagem.
        valorTotalDosMafagafo()

    } else {
        let resultado = precoMafagafoGravido * quantidadeMafagafoGravido;
        alert('Maravilha! no total ficou ' + resultado + ' reais, vamos agora para soma total...');

        valorTotalMafagafoGravido = resultado;

        //Estou chamando a função de soma total para o sistema fazer a contagem.
        valorTotalDosMafagafo()
    }
}

function valorTotalDosMafagafo(quantidadeMafagafoFilhote, valorTotalMafagafoFilhote, quantidadeMafagafoAdulto, valorTotalMafagafoAdulto, quantidadeMafagafoGravido, valorTotalMafagafoGravido) {

    //Aqui eu coloco todos os mafagafos que o cliente quer
    let totalDeMafagafos = quantidadeMafagafoFilhote + quantidadeMafagafoAdulto + quantidadeMafagafoGravido;

    //Aqui eu coloco a soma total da compra dele
    let SomaTotalDaCompra = valorTotalMafagafoFilhote + valorTotalMafagafoAdulto + valorTotalMafagafoGravido;

    // Caso o cliente tenha o desconto de 7% aqui vai ficar armazenado o valor com desconto
    let totalDaCompra;

    if (totalDeMafagafos < 8) { // Aqui ele tem menos de 8 mafagafos então ele não terá desconto
        alert('No total sua compra ficou ' + SomaTotalDaCompra + ' reais. Cuide deles muito bem!');
    } else {
        //Aqui eu estaria atribuindo valor a variavel "totalDaCompra", pois o sistema já teria as informações necessarias
        totalDaCompra = SomaTotalDaCompra * 0.93;

        alert('Otimas noticias, como você comprou mais que 7 mafagafos você tem 7% de desconto! No total fica: ' + totalDaCompra + ' reais. Cuide deles muito bem!')

    }
}

menuPrincipal()