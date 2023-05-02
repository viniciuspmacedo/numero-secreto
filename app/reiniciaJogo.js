document.body.addEventListener('click', e => {
   if(e.target.id === 'reset') reiniciaJogo() 
})


function reiniciaJogo(){
    window.location.reload()
}