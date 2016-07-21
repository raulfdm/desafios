function validaString(str) {

    if (/[0-9]/.test(str)) {
        return "Não pode haver números na string";
    } else {
        
        var qtde = 0;
        var letraAtual;
        var letraAnterior;
        var resultado = '';

        for (var index = 0; index < str.length; index++) {
            
            letraAnterior = str[index - 1];
            letraAtual = str[index];

            if (letraAnterior == letraAtual) {
                qtde++;
                continue;
            } else {
                if (qtde > 1) {
                    resultado += (qtde + letraAtual);
                    qtde = 0;
                } else if (qtde == 1) {
                    resultado += (letraAtual);
                } else {
                    qtde = 1;
                    resultado += letraAtual;
                }
            }
        }
        return resultado;
    }
}

var str = 'aaaaabbbbbbbbcccccpqrstuv';

console.log(validaString(str));