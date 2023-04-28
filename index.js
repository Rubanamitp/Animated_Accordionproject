let item=document.getElementsByClassName('item')
let iconOpen=document.getElementsByClassName('iconOpen')
let iconClose=document.getElementsByClassName('iconClose')
let icon=document.getElementsByClassName('icon')

// console.log(item)
for(let i=0;i<item.length;i++){
    iconClose[i].style.display='none'
    item[i].addEventListener('click',(e)=>{
        // console.log(e.target)
        if(item[i].classList.toggle('active')){
            iconOpen[i].style.display='none'
            iconClose[i].style.display='block'
        }
        else{
            iconOpen[i].style.display='block'
            iconClose[i].style.display='none'
        }
    })
}