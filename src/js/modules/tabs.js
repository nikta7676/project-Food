

function tabs (tabsSelector,tabsContentSelector,tabsParentSelector,activeClass){
    const tabs = document.querySelectorAll(tabsSelector),
    tabContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

        function hideTabContent(){
        tabs.forEach(item =>{
        item.classList.remove(activeClass);
        });

        tabContent.forEach((item)=>{
        item.style.display ="none";
        item.classList.remove('fade');
        });
    }
        function showTabContent(i = 0){
        tabs[i].classList.add(activeClass);
        tabContent[i].style.display = 'block';
        tabContent[i].classList.add('fade'); 
    };

        tabsParent.addEventListener("click", (event)=>{
        const target = event.target;
        if(target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent(); 
                    showTabContent(i);
                }
            });
        }
        });

    hideTabContent();
    showTabContent();

}

export default tabs;