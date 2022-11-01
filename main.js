let toggleBtn = document.querySelector('#toggle');
let closeBtn = document.querySelector('#close');
closeBtn.addEventListener('click',function(e){
    e.preventDefault()
    const mobileView1= document.querySelector('.mobile-view').style.display='none'
})
toggleBtn.addEventListener('click',function(e){
    e.preventDefault();
    const mobileView= document.querySelector('.mobile-view').style.display='flex'

})

window.addEventListener('resize',function(){
    if(screen.width > 480){
        document.querySelector('.mobile-view').style.display='none'
    }
})

let bottom = document.querySelector('.footer')
let getStartedBtn = document.querySelector('.get-started')
getStartedBtn.addEventListener("click",function (e){
    e.preventDefault()
   window.scrollTo({behavior:'smooth',top:document.body.scrollHeight})
})

