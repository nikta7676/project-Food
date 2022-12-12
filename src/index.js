    import tabs from   "./js/modules/tabs";
    import modal from "./js/modules/modal";
    import form  from "./js/modules/form";
    import calc  from "./js/modules/calc";
    import cards from "./js/modules/cards";
    import slider from "./js/modules/slider";
    import timer from "./js/modules/timer";
    import {openModal} from "./js/modules/modal";

window.addEventListener('DOMContentLoaded', () => {
        const modalInTime = setTimeout(()=> openModal(".modal", modalInTime), 3000);
          tabs(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active");
          modal('[data-modal]', ".modal", modalInTime);
          form('form',modalInTime);
          calc();
          cards();
          slider({
            container:".offer__slider",
            nextArrow:".offer__slider-next",
            prevArrow:".offer__slider-prev",
            slide:".offer__slide",
            totalCounter:"#total",
            currentCounter:"#current",
            wrapper:".offer__slider-wrapper",
            field:".offer__slider-inner"
          });
          timer(".timer", "2023-01-01");
});