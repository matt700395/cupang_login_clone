window.onload=function(){

    const pw_show_hide = document.querySelector('.pw_show_hide');
    console.log(pw_show_hide);

    let i = true;
    pw_show_hide.addEventListener('click', function(){
        if(i==true){
            pw_show_hide.style.backgroundPosition = '-105px 0'
            i=false;
        }else{
            pw_show_hide.style.backgroundPosition = '-126px 0'
            i=true;
        }
    })


}//onload end