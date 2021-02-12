(function(){

  var flame = new TimelineMax({
    repeat:-1,
    yoyo:true,
    onStart: flicker
  });

  var flamingo = new TimelineMax({
    repeat: -1,
    repeatDelay: 4,
    yoyo: true,
    onStart: flamingoNod
  });

  var leafTopBlue = new TimelineMax({
    repeat: -1,
    yoyo: true,
    onStart: leafTopBlueWave
  })

  var leafBottomBlue = new TimelineMax({
    repeat: -1,
    yoyo: true,
    onStart: leafBottomBlueWave
  })

  var leafBottomGreen = new TimelineMax({
    repeat: -1,
    yoyo: true,
    onStart: leafBottomGreenWave
  })

  var leafTopYellow = new TimelineMax({
    repeat: -1,
    yoyo: true,
    onStart: leafTopYellowWave
  })



  // Flame animation
  function flicker() {
    flame
      .to(flameouter1, 0.2, {opacity: 0.8, ease: RoughEase.ease.config({ template:  Power3.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})})
      .to(flameouter1, 0.1, {scaleX:0.8, transformOrigin:"center bottom", ease:RoughEase.ease})
      .to(flameouter1, 0.15, {scaleY:0.9, transformOrigin:"center bottom", ease:RoughEase.ease}, "-=0.3")

      .to(flameinner1, 0.2, {opacity: 0.9, ease: RoughEase.ease.config({ template:  Power3.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})}, "-=0.2")
      .to(flameinner1, 0.1, {scaleX:0.8, transformOrigin:"center bottom", ease:RoughEase.ease}, "-=0.25")
      .to(flameinner1, 0.1, {scaleY:0.9, transformOrigin:"center bottom", ease:RoughEase.ease}, "-=0.1")
  }

  // Flamingo animation
  function flamingoNod() {
    flamingo
      .to(".flHead", 0.5, {rotation: 5, ease: Power2.easeIn, svgOrigin: "40 10"})
      .to(".flHead", 0.5, {rotation: 0, ease: Power2.easeIn, svgOrigin: "40 10"})
  }

  // Leaf Top Blue Wave animation
  function leafTopBlueWave() {
    leafTopBlue.to(".leaftopblue2", 2, {rotation: 1.5, ease: Power2.easeInOut, transformOrigin:"left bottom"})
  }

  // Leaf bottom blue wave animation
  function leafBottomBlueWave() {
    leafBottomBlue.to(".leafBottomBlue", 2, {rotation: -3, ease: Power2.easeInOut, transformOrigin:"right bottom", delay:0.25});
  }

  // Leaf bottom green wave animation
  function leafBottomGreenWave() {
    leafBottomGreen.to(".leafBottomGreen", 2, {rotation: -3, ease: Power2.easeInOut, transformOrigin:"center bottom", delay:0.15});
  }

  // Leaf top yellow wave animation
  function leafTopYellowWave() {
    leafTopYellow.to(".leafTopYellow", 2, {rotation: 2.25, ease: Power2.easeInOut, transformOrigin:"left bottom", delay:0.2});
  }

})();
