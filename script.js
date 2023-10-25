const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});






gsap.to("#main-text",{
    y:-60,
    
    opacity:1,
    duration:1.4,
    delay:1.4,
    
})

gsap.to("#about",{
    y:-40,
    
    duration:4,
    deelay:.2
})
gsap.to("#skil",{
    y:-40,
    
    duration:4,
    deelay:.2
})
gsap.from('#pageleft3-',{
    x:100,
    left:60,
    duration:.9,
    delay:1
})

