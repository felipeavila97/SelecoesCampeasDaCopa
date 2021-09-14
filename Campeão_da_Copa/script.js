function verificar() {
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    
    
    if(fano.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {    
    let ano = Number(fano.value)
    let selecao = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (ano == 1930 || ano == 1950) {
        selecao = 'Uruguai'
        img.setAttribute('src', 'uruguay.png')
    } else if (ano == 1934 || ano == 1938 || ano == 1982 || ano == 2006) {
        selecao = 'Itália'
        img.setAttribute('src', 'italy.png')
    } else if (ano == 1954 || ano == 1974 || ano == 1990 || ano == 2014) {
        selecao = 'Alemanha'
        img.setAttribute('src', 'germany.png')
    } else if (ano == 1958 || ano == 1962 || ano == 1970 || ano == 1994 || ano == 2002) {
        selecao = 'Brasil'
        img.setAttribute('src', 'brazil.png')
    } else if (ano == 1966) {
        selecao = 'Inglaterra'
        img.setAttribute('src', 'england.png')
    } else if (ano == 1978 || ano == 1986) {
        selecao = 'Argentina'
        img.setAttribute('src', 'argentina.png')
    } else if (ano == 1998 || ano == 2018) {
        selecao = 'França'
        img.setAttribute('src', 'france.png')
    } else if (ano == 2010) {
        selecao = 'Espanha'
        img.setAttribute('src', 'spain.png')
    } else {
        
        res.innerHTML = 'Neste ano não houve Copa do Mundo.'
    }
    
   if (selecao != '') { 
   res.style.textAlign = 'center'
   res.innerHTML = `A seleção que ganhou em ${ano} foi ${selecao}. <br>`
   res.appendChild(img)
   }
}

}
