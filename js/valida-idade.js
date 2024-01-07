export default function ehMaiorDeIdade (campo){
    const dataNascimento = new Date(campo.value); /* o new date recebe o data de nascimento do html*/
    if( !validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuário não e maior de idade')
    }

    console.log(validaIdade(dataNascimento));
}

function validaIdade (data){
    const dataAtual = new Date(); /* a função date vazia () puxa a data atual ( o dia de hoje )*/
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    /* pega a data inserida pelo usuario e coloca 18 anos a mais , ai a proxima função pergunta se a data digitada e maio ou igual +18*/
    return dataAtual >= dataMais18
}
