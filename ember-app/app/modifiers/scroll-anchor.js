import Modifier from 'ember-modifier';

export default class ScrollAnchorModifier extends Modifier {
  modify(element, [scrollPosition], { relative }) {
    const anchor = window.localStorage.getItem('anchor');
    if (anchor) {
      window.location.hash = '#' + anchor;
    } else {
      window.location.hash = '#home';
    }
    // let mouseX;
    // let mouseY;
    // document.addEventListener('mousemove', event => {
    //   mouseX = event.clientX;
    //   mouseY = event.clientY;
    //   const scrollTarget = document.elementFromPoint(mouseX, mouseY);
    //   if(scrollTarget==null)return;

    //   console.log(scrollTarget.id);
    //   switch(scrollTarget.id){
    //     case 'home':
    //       window.localStorage.setItem('anchor',scrollTarget.id )
    //       break;
    //     case 'features':
    //       window.localStorage.setItem('anchor',scrollTarget.id )
    //       break;
    //     case 'contact':
    //       window.localStorage.setItem('anchor',scrollTarget.id )
    //       break;
    //   }
    // });

    // document.addEventListener("scroll", (event)=>{
    //    const scrollTarget = document.elementFromPoint(mouseX, mouseY);
    //    console.log('scrollTarget ',scrollTarget.id);
    //     switch(scrollTarget.id){
    //       case 'home':
    //         window.localStorage.setItem('anchor',scrollTarget.id )
    //         break;
    //       case 'features':
    //         window.localStorage.setItem('anchor',scrollTarget.id )
    //         break;
    //       case 'contact':
    //         window.localStorage.setItem('anchor',scrollTarget.id )
    //         break;
    //     }
    // });
  }
}
