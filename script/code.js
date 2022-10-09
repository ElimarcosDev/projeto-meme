function clique(){
    
    var video = document.getElementById('video')
    var botao = document.getElementById('bot')
    video.setAttribute('autoplay', 'i')

    if(video.style.display == 'block'){
        video.style.display = 'none'
    }
    else{
        video.style.display = 'block'
    }
    

    

}