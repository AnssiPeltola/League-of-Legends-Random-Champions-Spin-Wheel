let theWheel = new Winwheel({
  canvasId: "canvas",
  numSegments: 5,
  fillStyle: "#5D00D3",
  lineWidth: 0.3,
  textAlignment: "center", // inner, center, outer
  outerRadius: 300, // Manage size
  pointerAngle: 0, // Test pointer angle
  //   rotationAngle: -30,
  segments: [
    { fillStyle: "#eae56f", text: "Support" },
    { fillStyle: "#89f26e", text: "Bottom" },
    { fillStyle: "#7de6ef", text: "Middle" },
    { fillStyle: "#e7706f", text: "Jungle" },
    { fillStyle: "#7000FF", text: "Top" },
  ],
  // Test Winning segment arrow point angle
  //   pointerGuide: {
  //     display: true,
  //     strokeStyle: "red",
  //     lineWidth: 3,
  //   },

  animation: {
    type: "spinToStop", // Type of animation.
    duration: 7, // How long the animation is to take in seconds.
    spins: 4, // The number of complete 360 degree rotations the wheel is to do.

    // Remember to do something after the animation has finished specify callback function.
    callbackFinished: "alertPrize()",
  },
});

// This function called after the spin animation has stopped.
function alertPrize() {
  // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
  let winningSegment = theWheel.getIndicatedSegment();

  // Basic alert of the segment text which is the prize name.
  alert("Your role in the next game is " + winningSegment.text + "!");
}
