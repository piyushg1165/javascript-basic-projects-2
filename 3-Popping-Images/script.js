const throttleFunction=(func, delay)=>{
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
      }
    }

    document.querySelector('.rectangle').addEventListener("mousemove", throttleFunction((details)=>{
      var div = document.createElement("div");
      div.classList.add('imagediv');
      div.style.left = details.clientX + 'px';
      div.style.top = details.clientY + 'px';

      let img = document.createElement("img");
      img.setAttribute("src" , "image.jpg");
      div.appendChild(img);

      document.body.appendChild(div);

      gsap.to(img , {
        y:"0",
        ease: Power1,
        duration: .6
      });
      gsap.to(img , {
        y:"100%",
        ease: Power2,
        delay: .6
      });
      setTimeout(function(){
        div.remove();
      } , 900);
    }, 200));