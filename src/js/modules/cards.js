import {getResource} from "../service/service";


function cards(){
    class NewObjectMenu{
        constructor(img,altimg,title,descr,price,selector,...classes){
            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.classes = classes;
            this.price = price;
            this.selector = document.querySelector(selector);
            this.transfer = 27;
            this.transferToUdh();
        }

        transferToUdh(){
            this.price = this.price*this.transfer;
        }

        loadToDocument(){
            const element = document.createElement('div');

            if(this.classes.length == 0){
                this.classes = "menu__item";
                element.classList.add(this.classes);
            }else{
                this.classes.forEach(item => {
                    element.classList.add(item);
                });
            }
            element.innerHTML = `<div><img src=${this.img} alt=${this.altimg}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>`;
        this.selector.append(element);
    }


        
    }

    
    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img,altimg,title,descr,price})=>{
                new NewObjectMenu(img,altimg, title,descr,price,".menu .container").loadToDocument();
            });
        });

}

export default cards;