let theWheel; // Declare theWheel in the global scope
// Define the API URL
const apiUrl =
  "http://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/champion.json";

// This gets the names from Object. But the One under this gets names from inside Object from names. I saw that there were champion named Monkey King which is not a real name for Wukong!

// Use the Fetch API to make a GET request
// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json(); // Parse the JSON response
//   })
//   .then((data) => {
//     // Handle the JSON data here
//     const championNames = Object.keys(data.data); // Extract champion names
//     // Create an array of wheel segments based on champion names
//     const wheelSegments = championNames.map((championName) => {
//       return {
//         fillStyle: "#CEA9FE", // Set the background color for the wheel segment
//         text: championName, // Assign the champion name as the text for the segment
//       };
//     });

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON response
  })
  .then((data) => {
    // Handle the JSON data here
    const championData = data.data; // Extract champion data
    const championNames = Object.values(championData).map(
      (champion) => champion.name
    ); // Extract champion names

    // Create an array of wheel segments based on champion names
    const wheelSegments = championNames.map((championName) => {
      return {
        fillStyle: "#CEA9FE", // Set the background color for the wheel segment
        text: championName, // Assign the champion name as the text for the segment
      };
    });

    // Makes the wheel
    theWheel = new Winwheel({
      canvasId: "canvas",
      numSegments: championNames.length, // Sets that many segments that there is heroes!
      //   fillStyle: "#5D00D3", // Sets background color for wheel
      textFontSize: 11, // FontSize
      lineWidth: 0.3, // How thick lines are in wheel
      textAlignment: "outer", // inner, center, outer
      outerRadius: 360, // Manage size
      //   rotationAngle: -30, // Rotates spinwheel
      segments: wheelSegments,

      // Test Winning segment arrow point angle
      //   pointerAngle: 0, // Test pointer angle
      //   pointerGuide: {
      //     display: true,
      //     strokeStyle: "red",
      //     lineWidth: 3,
      //   },

      animation: {
        type: "spinToStop", // Type of animation.
        duration: 10, // How long the animation is to take in seconds.
        easing: "back.out(0.25)", // Modifies how animation works https://greensock.com/ease-visualizer
        spins: 2, // The number of complete 360-degree rotations the wheel is to do.

        // What happens after spin is finished. It calls alertRole function
        callbackFinished: alertChampion,
      },
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// This function called after the spin animation has stopped.
function alertChampion() {
  // Call getIndicatedSegment() function to return the pointer to the segment pointed to on the wheel.
  let winningSegment = theWheel.getIndicatedSegment();

  // Basic alert of the segment text which is the chosen champion.
  alert("Your champion in the next game is " + winningSegment.text + "!");
}
