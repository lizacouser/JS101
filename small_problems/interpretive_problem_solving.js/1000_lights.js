/*
-1 to count switches
-switches correspond to 1 light
-lights start off
-flip every switch
-flip even switches
-flip every third switch
-do this count times

-input count number of switches
-output is array of lights that are on after count passes

Examples:
function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


Data:
-input number
-output array
-internal:
  -array containing on/off toggle at various indexes (on/off)

Algorithm:
-initialize an on/off tracker array containing count elements, filled with 'off'
['off', 'off', 'off', 'off']

-for loop, let round start with 1, round <= count, round ++
  -onOrOff = map onOrOff(lightOnOrOff, lightIndex)
    -set lightNumber to lightIndex + 1
    -if lightNumber % round === 0
      -return toggleSwitch(lightOnOrOff);
    else return lightOnOrOFf

toggleLight(onOrOff)
given on or off
if on return off
else return on
*/

function lightsOn(switchCount) {
  // make light trackers
  let lightTracker = [];
  lightTracker.length = switchCount;
  lightTracker.fill('off');

  for (let round = 1; round <= switchCount; round += 1) {
    lightTracker = lightTracker.map((lightPower, lightIndex) =>{
      let lightNumber = lightIndex + 1;
      if (lightNumber % round === 0) {
        return toggleSwitch(lightPower);
      } else {
        return lightPower;
      }
    });
  }

  return lightTracker.map((power, index) => {
    if (power === 'on') return index + 1;
    else return 'off';
  }).filter(power => power !== 'off');
}

function toggleSwitch(onOrOff) {
  return onOrOff === 'off' ? 'on' : 'off';
}

lightsOn(5);

// with object

function lightsOn(switchCount) {
  // make light trackers
  let powerTracker = {};
  for (let lightSwitch = 1; lightSwitch <= switchCount; lightSwitch += 1) {
    powerTracker[lightSwitch] = 'off';
  }

  for (let round = 1; round <= switchCount; round += 1) {
    Object.keys(powerTracker).forEach(lightNumber => {
      if (Number(lightNumber) % round === 0) {
        powerTracker[lightNumber] = toggleSwitch(powerTracker[lightNumber]);
      }
    });
  }
  return Object.keys(powerTracker).filter(lightNumber => powerTracker[lightNumber] === 'on');
}

function toggleSwitch(onOrOff) {
  return onOrOff === 'off' ? 'on' : 'off';
}

console.log(lightsOn(100));