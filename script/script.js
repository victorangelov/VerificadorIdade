
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] - verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('style','border-radius: 50%')
        img.setAttribute('width','250')
        img.setAttribute('height','250')

        if (fsex[0].checked){
            genero = 'homem'
            if(idade > 0 && idade < 11){
                //criança
                img.setAttribute('src','img/menino.jpeg')
            } else if(idade < 18){
                //adolecente
                img.setAttribute('src','img/jovemh.jpeg')
            } else if(idade < 59){
                //adulto
                img.setAttribute('src','img/adulto.jpeg')
            }else{
                //velho
                img.setAttribute('src','img/velho.jpeg')
            }
        } else if(fsex[1].checked){
            genero = 'mulher'
            if(idade > 0 && idade < 11){
                //criança
                img.setAttribute('src','img/menina.jpeg')
            } else if(idade < 18){
                //adolecente
                img.setAttribute('src','img/jovemm.jpeg')
            } else if(idade < 59){
                //adulto
                img.setAttribute('src','img/adulta.jpeg')
            }else{
                //velho
                img.setAttribute('src','img/velha.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        res.appendChild(img)
    }  
}
