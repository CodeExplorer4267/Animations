var main=document.querySelector('#main')
// var scroll=new LocomotiveScroll({
//     el:main,
//     smooth:true,
// })
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    // An object defining the initial scroll coordinates on a smooth instance. For example: { x: 0, y: 1000 }
    // initPosition:{
    //     x:0,
    //     y:1000
    // }
//    direction:'horizontal',-->for scrolling direction
    // lerp:0.01--->defines the smoothness intensity, closer the value to 0 the smoother it is.
    
});