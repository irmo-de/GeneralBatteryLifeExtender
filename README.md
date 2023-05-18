![shelly](https://github.com/irmo-de/ShellyBatteryLifeSaver/assets/20524312/82293dc5-e5b4-4426-b0fc-485c48549fb1)

# ShellyBatteryLifeSaver (Shelly Plug S Battery Charging Script)
Shelly plug S script to charge a battery to approximate 80% to extend the life of the battery

This script is designed to charge a battery connected to a Shelly Plug S smart home automation device to approximately 90% in order to extend the battery's lifespan. The script utilizes a state machine to control the charging process and monitor the power consumption of the charger.

## Prerequisites

Before running this script, make sure you have the following:

- A Shelly Plug S device
- The Shelly Plug S API documentation: [Shelly Plug S API](https://shelly-api-docs.shelly.cloud/#shelly-plug-s)


## Shelly Plug S Device Purchase Options

- **United States (US):**
  - Official Shelly Store: [Shelly Plug S - US](https://shelly.cloud/products/shelly-plug-s-smart-home-automation-device/?ref=us)
  - Amazon US: [Shelly Plug S on Amazon US](https://www.amazon.com/s?k=shelly+plug+s)

- **United Kingdom (UK):**
  - Official Shelly Store: [Shelly Plug S - UK](https://shelly.cloud/products/shelly-plug-s-smart-home-automation-device/?ref=uk)
  - Amazon UK: [Shelly Plug S on Amazon UK](https://www.amazon.co.uk/s?k=shelly+plug+s)

- **Europe:**
  - Official Shelly Store: [Shelly Plug S - Europe](https://shelly.cloud/products/shelly-plug-s-smart-home-automation-device/?ref=europe)
  - Amazon Europe: [Shelly Plug S on Amazon Europe](https://www.amazon.de/s?k=shelly+plug+s)


## Installation

To install and run the script, follow these steps:

1. Download the script file from the repository.
2. Ensure you have the necessary dependencies installed, including the Shelly API library.
3. [Optional and normally not needed] Configure the constants in the script according to your requirements:
   - `timer_resolution`: Set the interval (in milliseconds) for calling the state machine.
   - `stop_charge_percentage`: Set the battery charge percentage at which the charging process should stop.
4. Save the changes to the script file.

## Usage

To use the script, follow these instructions:

1. Connect your Shelly Plug S device to your power source and battery.
2. Ensure your device is connected to the network and accessible.
3. Run the script on a device with the necessary dependencies installed.
4. The script will execute the charging process automatically, monitoring the power consumption of the charger and adjusting the charging state accordingly.
5. The LED color on the Shelly Plug S device will indicate the current state of the statemachine:
   - Blue: Setup state
   - Yellow: Learning state
   - Green: Charging state
   - Red: Shutdown state

## Release Notes

- 2023-05-18: Improved the learning of the power consumption of the charger.
- 2023-05-14: Added LED color to indicate the state of the statemachine.
- 2023-05-13: Initial release.

## Author

- Irmo Ebel
- Date: 2023-05-13
