function slider ({container,slide,nextArrow,prevArrow,totalCounter, currentCounter,wrapper,field}){
    let offset = 0;
    let slaiderIndex = 1;
    const slider = document.querySelectorAll(slide),
          prev = document.querySelector(prevArrow),
          bigSlid = document.querySelector(container),
          next = document.querySelector(nextArrow),
          current = document.querySelector(currentCounter),
          total = document.querySelector(totalCounter),
          sliderWrapper = document.querySelector(wrapper),
          width = window.getComputedStyle(sliderWrapper).width,
          sliderFilder = document.querySelector(field);

          
          sliderFilder.style.width = 100 * slider.length + "%";
          sliderFilder.style.display = "flex";
          sliderFilder.style.transition = ".5s all";
        
          sliderWrapper.style.overflow = "hidden";
          if(slider.length < 10){
            current.textContent = `0${slaiderIndex}`;
         }else{
            current.textContent = slaiderIndex;
        }
        
         slider.forEach((item) =>{
                item.style.width = width;
          })


        bigSlid.style.position = 'relative';

        const indicators = document.createElement("ol"),
                dots =[];
        indicators.classList.add("carousel-indicators");

        bigSlid.append(indicators);


        for(let i = 0; i < slider.length; i++){
            const dot = document.createElement("li");
            dot.setAttribute("data-slide-to", i+1);
            dot.classList.add("dot");
            indicators.append(dot);
            dots.push(dot);

            if(i==0){
                dot.style.opacity = 1;
            }
        }


          next.addEventListener("click", ()=>{

            if(offset == +width.slice(0, width.length -2) *(slider.length-1)){
                offset = 0;
            }else{
                offset += +width.slice(0, width.length -2);
            }

            sliderFilder.style.transform = `translateX(-${offset}px)`;


           if(slaiderIndex == slider.length){
                slaiderIndex =1;
           }else {
                slaiderIndex ++;
           }

           if(slider.length > 10){
            total.textContent = slider.length;
           }else{
            total.textContent = `0${slider.length}`;
           }

           if(slider.length < 10){
            current.textContent = `0${slaiderIndex}`;
            }else{
            current.textContent = slaiderIndex;
            }

            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slaiderIndex-1].style.opacity = "1";

          });

          dots.forEach(dot =>{
            dot.addEventListener("click", (e)=>{
                const slideT = e.target.getAttribute("data-slide-to");

                slaiderIndex = slideT;

                offset = +width.slice(0, width.length-2) * (slideT-1);

                sliderFilder.style.transform = `translateX(-${offset}px)`;

                dots.forEach(dot => dot.style.opacity = ".5");

                dots[slaiderIndex-1].style.opacity = 1;

                if(slaiderIndex < 10){
                    current.textContent = `0${slaiderIndex}`;
                }else{
                    current.textContent = slaiderIndex;
                }

            });
          });

          prev.addEventListener('click', ()=>{
            if(offset == 0){
                offset += +width.slice(0, width.length -2) *(slider.length-1);
            }else{
                offset -= +width.slice(0, width.length -2);
            }

            sliderFilder.style.transform = `translateX(-${offset}px)`;


            if(slaiderIndex == 1){
                slaiderIndex = slider.length;
            }else{
                slaiderIndex--;
            }

            if(slider.length < 10){
                current.textContent = `0${slaiderIndex}`;
            }else{
                current.textContent = slaiderIndex;
            }

            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slaiderIndex-1].style.opacity = "1";

            });
            
}

export default slider;