    function cloSeModal(modalSelector){
    const modal = document.querySelector(modalSelector)    
    modal.classList.remove("show");
    modal.classList.add('hide');
    document.body.style.overflow =""; 
    }

    function openModal(modalSelector,modalInTime){
   const modal = document.querySelector(modalSelector);    
    modal.classList.add("show");
    modal.classList.remove('hide');
    document.body.style.overflow ="hidden";
    console.log(modalInTime);
    if(modalInTime){
      clearInterval(modalInTime)
    }
    }


function modal(triggerSelector, modalSelector, modalInTime){
    const btn = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);
    
    btn.forEach(item =>{

    item.addEventListener("click", ()=> openModal(modalSelector,modalInTime));
    });
    
    modal.addEventListener('click', e => {
        if(e.target === modal || e.target.getAttribute("data-close")==""){
        cloSeModal(modalSelector);
    }
    });
    document.addEventListener('keydown', (e)=>{
    if(e.code === 'Escape' && modal.classList.contains("show")){
        cloSeModal(modalSelector);
    }
    });

   

    function showModalByScroll() {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal(modalSelector,modalInTime);
        window.removeEventListener('scroll', showModalByScroll);
    }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {cloSeModal};
export {openModal};