gsap.from('#page1 .box',{
    scale:0,
    rotate:360,
    duration:1,
    delay:1
})
gsap.from('#page2 .box',{
    scale:0,
    rotate:360,
    duration:1,
    // scrollTrigger:'#page2 .box'
    scrollTrigger:{
        trigger:'#page2 .box',
        scroller:'body',
        markers:true,//to set the markers
        // start:"top 50%",//marker's start point
        // end:"top 25%"
        scrub:3
    }
})
gsap.from('#page3 .box',{
    scale:0,
    rotate:360,
    duration:1,
    // scrollTrigger:'#page3 .box'
})