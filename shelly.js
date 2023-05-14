// Shelly plug S script to charge a battery to a appproximate 80% to extend the life of the battery

// For more information about the Shelly Plug S see:
// https://shelly.cloud/products/shelly-plug-s-smart-home-automation-device/

// For more information about the Shelly Plug S API see:
// https://shelly-api-docs.shelly.cloud/#shelly-plug-s

// Program summary:
// The script is using a statemachine to charge the battery to 80% and then stop charging.
// For the first 5 minutes we monitor the power consumption of the charger. This mean value is used to calculate the tolerance for contant voltage charging.

// Author: Irmo Ebel
// Date: 2023-05-13


// define constants

let timer_resolution = 5000; // calling the state machine every 5 seconds
let state_timer = 0; // internal timer for statemachine to learn the power consumption of the charger
let average_power = 0; // average power consumption of the charger over 3 minutes
let state = 0; // state of the statemachine
let current_average_power = 0; // current average power consumption of the charger
let stop_charge_power = 0; // power consumption of the charger when the battery is aprox 80% charged (reached when 10% of the average power is consumed)
let current_power = 0; // current power consumption of the charger

let cnt_initial_measurements = 0; // counter for the initial measurements

let circular_buffer = [0.0,0.0,0.0]; // circular buffer for the last 3 values that return the average of the last 3 values
let circular_buffer_index = 0; // index of the circular buffer


function stubCB(res, error_code, error_msg, ud) {}


function GetCurrentPowerOfSwitch() {
  Shelly.call( "switch.getstatus", {
      id: 0,
    },
    function (result, error_code, error_message) {
      current_power = result.apower;
      print ("Current power consumption of the charger: " , current_power , " W")
    });
}


// circular buffer for the last 3 values that return the average of the last 3 values
function GetAveragePowerOfLastThreeMeasurements() {
  Shelly.call( "switch.getstatus", {
      id: 0,
    },
    function (result, error_code, error_message) {
      // build average over 3 measurements

      // update circular buffer
      circular_buffer[circular_buffer_index] = result.apower;
      circular_buffer_index++;
      if (circular_buffer_index > 2) {
        circular_buffer_index = 0;
      }

      // calculate average
      let sum = 0;
      for (let i = 0; i < 3; i++) {
        sum += circular_buffer[i];
      }
      average_power = sum / 3;
      print ("Average power consumption of the charger: " , average_power , " W")
    });
}; 

// state machine


let stateMachine = [
// state 0: Setup up the plug
  function () {
      print("Setup up the plug");

      // Set the plug to turn on when power is restored
      Shelly.call("switch.set", { id: 0, on: true}, stubCB, null);
      state_timer = 0;
      cnt_initial_measurements = 0;
      GetCurrentPowerOfSwitch();

      // if current power is less then 3W we ignore the measurement
      if (current_power < 3.0) {
        return; // ignore measurement
      }
      average_power = current_power;
      state = 1;
  },

  // state 1: Learning state
  function () {
        print("Learning state");
        // wait for 5 minutes to learn the power consumption of the charger by using the timer_resolution
        if (state_timer < 300000) {
          state_timer += timer_resolution;
          
          // Get the current power consumption of the charger
          GetCurrentPowerOfSwitch();

          // if current power is less then 3W we ignore the measurement
          if (current_power < 3.0) {
            return; // ignore measurement
          }

          // Calculate continues average average_power and update with current_power using a more precise algorithm
          cnt_initial_measurements = cnt_initial_measurements + 1;
          average_power = average_power + (current_power - average_power) / cnt_initial_measurements;
          print ("Average power consumption of the charger: " , average_power , " W")

          
          return;
        }

        // If average power is less then 3W we have not learned the power consumption of the charger yet
        // so we go back to state 1
        if (average_power < 3.0) {
          state = 1;
          return;
        }


        // Update circular buffer with average power
        circular_buffer[0] = average_power;
        circular_buffer[1] = average_power;
        circular_buffer[2] = average_power;
        circular_buffer_index = 0; 

        stop_charge_power = average_power * 0.95; // 95% of average power

        print ("Stop charging when power consumption of the charger is less then: " , stop_charge_power , " W")

        // Ok we go the next state
        state = 2;
    },

   // state 2: Charging state
    function () {
        print("Monitoring battery power consumption");
        // if arverage power is less then 3 W then we have not learned the power consumption of the charger yet
        // so we go back to state 1

      
        // if the current average power is less then average power then we have reached the 80% charge of the battery
        // so we go to state 3
        GetAveragePowerOfLastThreeMeasurements();
        if (average_power < stop_charge_power) {
                  state = 3;
             return;
        }
    },

   // state 3: Shutdown the plug
    function () {
        print("Shutdown the plug");
        
        // Set the plug to turn off when power is restored
        Shelly.call("switch.set", { id: 0, on: false}, stubCB, null);
        average_power = 0;
    }
];


let stateTimer = Timer.set(timer_resolution, true, function () {
    stateMachine[state]();
});



//

//Timer.set(5000, true, CheckPowerOfSwitch);