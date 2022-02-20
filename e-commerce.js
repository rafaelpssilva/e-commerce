function displayMenu () {
    const larguraTela = window.innerWidth
    if (larguraTela < 1000) {
        console.log('a')
        document.querySelector('.ul-list-mobile').classList.toggle('display-block')
        document.querySelector('.ul-list-mobile').classList.toggle('display-none')
    } 
}


