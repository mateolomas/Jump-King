import { testSupport } from "./testSupport.js";

const mpHands = window;
const drawingUtils = window;
const controls = window;
var salto = 0;
const controls3d = window;
const game = document.getElementById("canvas_game");
const gameCtx = game.getContext("2d");

const gameCanvas = document.getElementById("canvas");

const eventKeyboardLeft = new KeyboardEvent("keydown", { key: "ArrowLeft" });
const eventKeyboardRight = new KeyboardEvent("keydown", { key: "ArrowRight" });
//SPACE HOLD FOR 1 SEC
const eventKeyboardSpace = new KeyboardEvent("keydown", { key: " " });

testSupport([{ client: "Chrome" }]);

// Our input frames will come from here.
const videoElement = document.getElementsByClassName("input_video")[0];
const canvasElement = document.getElementsByClassName("output_canvas")[0];
const controlsElement = document.getElementsByClassName("control-panel")[0];
const canvasCtx = canvasElement.getContext("2d");
const config = {
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${mpHands.VERSION}/${file}`;
  },
};
// We'll add this to our control panel later, but we'll save it here so we can
// call tick() each time the graph runs.
const fpsControl = new controls.FPS();
// Optimization: Turn off animated spinner after its hiding animation is done.
const spinner = document.querySelector(".loading");
spinner.ontransitionend = () => {
  spinner.style.display = "none";
};
const landmarkContainer = document.getElementsByClassName(
  "landmark-grid-container"
)[0];
const grid = new controls3d.LandmarkGrid(landmarkContainer, {
  connectionColor: 0xcccccc,
  definedColors: [
    { name: "Left", value: 0xffa500 },
    { name: "Right", value: 0x00ffff },
  ],
  range: 0.2,
  fitToGrid: false,
  labelSuffix: "m",
  landmarkSize: 2,
  numCellsPerAxis: 4,
  showHidden: false,
  centered: false,
});
function onResults(results) {
  // Hide the spinner.
  document.body.classList.add("loaded");
  // Update the frame rate.
  fpsControl.tick();
  // Draw the overlays.
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
    results.image,
    0,
    0,
    canvasElement.width,
    canvasElement.height
  );
  /* canvasCtx.fillRect(100, 100, 0.2 * 300, 0.4 * 300); */

  if (results.multiHandLandmarks && results.multiHandedness) {
    for (let index = 0; index < results.multiHandLandmarks.length; index++) {
      const classification = results.multiHandedness[index];
      const isRightHand = classification.label === "Right";

      const landmarks = results.multiHandLandmarks[index];

      canvasCtx.fillStyle = "#FF0000";
      canvasCtx.fillRect(
        landmarks[0].x * canvasElement.width,
        landmarks[0].y * canvasElement.height,
        25,
        25
      );
      canvasCtx.fillStyle = "#000000";
      canvasCtx.fillRect(
        landmarks[12].x * canvasElement.width,
        landmarks[12].y * canvasElement.height,
        25,
        25
      );

      canvasCtx.fillStyle = "#FF001A";
      canvasCtx.fillRect(
        landmarks[4].x * canvasElement.width,
        landmarks[4].y * canvasElement.height,
        25,
        25
      );
      canvasCtx.fillStyle = "#00001A";
      canvasCtx.fillRect(
        landmarks[8].x * canvasElement.width,
        landmarks[8].y * canvasElement.height,
        25,
        25
      );

      /*       canvasCtx.save(); */

      //calcute distance between two points
      const x1Jump = landmarks[0].x * 100;
      const y1Jump = landmarks[0].y * 100;
      const x2Jump = landmarks[12].x * 100;
      const y2Jump = landmarks[12].y * 100;

      const x1Left = landmarks[4].x * 100;
      const y1Left = landmarks[4].y * 100;
      const x2Left = landmarks[8].x * 100;
      const y2Left = landmarks[8].y * 100;

      //calculate angle between two points x1,y1 and x2,y2
      const angle =
        ((Math.atan2(y1Left - y1Jump, x1Left - x1Jump) * 180) / Math.PI) * -1;
      console.log({ angle });

      const distanceJump = Math.sqrt(
        (x2Jump - x1Jump) ** 2 + (y2Jump - y1Jump) ** 2
      );

      console.log({ distanceJump });

      if (angle < 20) {
        player.leftHeld = true;
        gameCtx.clearRect(0, 0, game.width, game.height);
        gameCtx.font = "50px Arial white";
        gameCtx.fillStyle = "white";
        gameCtx.fillText("left", 10, 50);
        console.log(" moving left");
      } else if (angle > 20) {
        player.leftHeld = false;
        gameCtx.clearRect(0, 0, game.width, game.height);
        gameCtx.font = "50px Arial white";
        gameCtx.fillStyle = "white";
        gameCtx.fillText("left", 10, 50);
        console.log("left stop");
      }
      if (angle > 120 && angle < 180) {
        player.leftHeld = true;
        gameCtx.clearRect(0, 0, game.width, game.height);
        gameCtx.font = "50px Arial white";
        gameCtx.fillStyle = "white";
        gameCtx.fillText("left", 10, 50);
        console.log(" moving left");
      } else if (angle > 60 && angle < 120) {
        player.leftHeld = false;
        gameCtx.clearRect(0, 0, game.width, game.height);
        gameCtx.font = "50px Arial white";
        gameCtx.fillStyle = "white";
        gameCtx.fillText("left", 10, 50);
        console.log("left stop");
      }

      if (angle > 0 && angle < 60) {
        player.rightHeld = true;

        gameCtx.clearRect(0, 0, game.width, game.height);
        gameCtx.font = "50px Arial white";
        gameCtx.fillStyle = "white";
        gameCtx.fillText("right", 10, 50);
        console.log(" moving right");
      } else if (angle > 60 && angle < 120) {
        player.rightHeld = false;
        gameCtx.clearRect(0, 0, game.width, game.height);
        gameCtx.font = "50px Arial white";
        gameCtx.fillStyle = "white";
        gameCtx.fillText("right", 10, 50);
        console.log("right stop");
      }

      if (distanceJump < 30 && salto === 1) {
        player.jumpHeld;
        player.Jump();
        salto = 0;
      }

      if (distanceJump > 30) {
        salto = 1;
      }

      gameCtx.font = "50px Arial white";
      gameCtx.fillStyle = "white";
      gameCtx.fillText(angle, 100, 50);

      gameCtx.font = "50px Arial white";
      gameCtx.fillStyle = "white";
      gameCtx.fillText(distanceJump, 200, 70);

      drawingUtils.drawConnectors(
        canvasCtx,
        landmarks,
        mpHands.HAND_CONNECTIONS,
        { color: isRightHand ? "#00FF00" : "#FF0000" }
      );
      drawingUtils.drawLandmarks(canvasCtx, landmarks, {
        color: isRightHand ? "#00FF00" : "#FF0000",
        fillColor: isRightHand ? "#FF0000" : "#00FF00",
        radius: (data) => {
          return drawingUtils.lerp(data.from.z, -0.15, 0.1, 10, 1);
        },
      });
    }
  }
  canvasCtx.restore();
  if (results.multiHandWorldLandmarks) {
    // We only get to call updateLandmarks once, so we need to cook the data to
    // fit. The landmarks just merge, but the connections need to be offset.
    const landmarks = results.multiHandWorldLandmarks.reduce(
      (prev, current) => [...prev, ...current],
      []
    );
    const colors = [];
    let connections = [];
    for (let loop = 0; loop < results.multiHandWorldLandmarks.length; ++loop) {
      const offset = loop * mpHands.HAND_CONNECTIONS.length;
      const offsetConnections = mpHands.HAND_CONNECTIONS.map((connection) => [
        connection[0] + offset,
        connection[1] + offset,
      ]);
      connections = connections.concat(offsetConnections);
      const classification = results.multiHandedness[loop];
      colors.push({
        list: offsetConnections.map((unused, i) => i + offset),
        color: classification.label,
      });
    }
    grid.updateLandmarks(landmarks, connections, colors);
  } else {
    grid.updateLandmarks([]);
  }
}
const hands = new mpHands.Hands(config);
hands.onResults(onResults);
// Present a control panel through which the user can manipulate the solution
// options.
new controls.ControlPanel(controlsElement, {
  selfieMode: true,
  maxNumHands: 1,
  modelComplexity: 0,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
})
  .add([
    new controls.StaticText({ title: "MediaPipe Hands" }),
    fpsControl,
    new controls.Toggle({ title: "Selfie Mode", field: "selfieMode" }),
    new controls.SourcePicker({
      onFrame: async (input, size) => {
        const aspect = size.height / size.width;
        let width, height;
        if (window.innerWidth > window.innerHeight) {
          height = window.innerHeight;
          width = height / aspect;
        } else {
          width = window.innerWidth;
          height = width * aspect;
        }
        canvasElement.width = width;
        canvasElement.height = height;
        await hands.send({ image: input });
      },
    }),
    new controls.Slider({
      title: "Max Number of Hands",
      field: "maxNumHands",
      range: [1, 4],
      step: 1,
    }),
    new controls.Slider({
      title: "Model Complexity",
      field: "modelComplexity",
      discrete: ["Lite", "Full"],
    }),
    new controls.Slider({
      title: "Min Detection Confidence",
      field: "minDetectionConfidence",
      range: [0, 1],
      step: 0.01,
    }),
    new controls.Slider({
      title: "Min Tracking Confidence",
      field: "minTrackingConfidence",
      range: [0, 1],
      step: 0.01,
    }),
  ])
  .on((x) => {
    const options = x;
    videoElement.classList.toggle("selfie", options.selfieMode);
    hands.setOptions(options);
  });
