//alert ('Olá Mundo!')
function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //abaixo a checagem [depois apagar essa linha]
            if(fsex[0].checked){
                gênero = 'Homem'
                //HOMEM
                if (idade >=0 && idade < 10){
                    //BEBÊ
                        img.setAttribute('src', 'bebe-m.png')
                } else if (idade >=11 && idade < 18){
                    //CRIANÇA
                        img.setAttribute('src', 'adolescente-m.png')
                }else if (idade < 30) {
                    //JOVEM
                        img.setAttribute('src', 'jovem-m.png')
                } else if (idade < 50) {
                    //ADULTO
                        img.setAttribute('src', 'adulto-m.png')
                } else {
                    //IDOSO
                        img.setAttribute('src', 'idoso-m.png')
                }
            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                //MULHER
                if (idade >=0 && idade < 10){
                    //BEBÊ
                        img.setAttribute('src', 'bebe-f.png')
                } else if (idade >=11 && idade < 18){
                    //CRIANÇA
                        img.setAttribute('src', 'adolescente-f.png')
                }else if (idade < 30) {
                    //JOVEM
                        img.setAttribute('src', 'jovem-f.png')
                } else if (idade < 50) {
                    //ADULTO
                        img.setAttribute('src', 'adulta-f.png')
                } else {
                    //IDOSO
                        img.setAttribute('src', 'idosa-f.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)
    }
}