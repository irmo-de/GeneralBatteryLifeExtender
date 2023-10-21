
# Save Money, Save the Earth 🍃 : Boost Your Battery Life by 100%


# Extend Your Battery Life by Up to 100%* :battery: :recycle:

Help save the environment and reduce costs by extending the life of your battery. 

---

## How Does It Work?

Most chargers used for eBikes, eScooters, mobile phones, etc., charge battery cells to 4.2V to maximize capacity. However, this is not optimal for battery longevity.

By charging them only to 4.1V per cell, you can prolong the battery's lifetime by up to 100%.

In numerical terms: a lithium-ion cell charged to 4.20V/cell typically delivers 300–500 cycles. If charged to only 4.10V/cell, the life can be prolonged to 600–1,000 cycles.

You might ask why manufacturers opt for a higher voltage. The answer is simple: consumers demand optimal range and runtime, and a shorter battery lifespan encourages more frequent purchases. For instance, a replacement battery for the Cowboy 4 eBike costs around 500 USD.

This open-source solution enables charging your battery to 4.10V, striking a balance between longevity and range/runtime.

---

## What Do You Need?

- A Shelly Plug Plus
- 5 minutes for setup

The setup guide is provided at the end of this document.

> **Note:** Ensure you have a Shelly Plug *Plus* model, not the previous model called Shelly Plug.

---

## What Will You Get?

A set-and-forget solution. Simply plug in the Shelly and the charger, and you're done. Use it to charge while you're on the go, in the office, or at home. No additional hardware or network is needed.

---

## Who Helped Develop This?

This idea was conceived in a large international eScooter forum for enthusiasts. Special shoutouts to Pedalheld56, ScooterFreak, FrankA, and Dennis who conducted endless tests with different battery models. Ultimately, thousands of measurements were analyzed, leading to a relatively simple algorithm that supports nearly every type of battery.

To help more individuals contribute to the planet and save on expenses, this open-source project has found a new home here on GitHub.

---

## Setup Guide

## Prerequisites

Before running this script, make sure you have the following:

- A Shelly Plus Plug S device
- The Shelly Plus Plug S API documentation: [Shelly Plus Plug S API](https://shelly-api-docs.shelly.cloud/#shelly-plug-s)

## Shelly Plus Plug S Device

You can purchase the Shelly Plus Plug S device from the official Shelly store or other authorized retailers:

  - Official Shelly Store: [Shelly Plus Plug S](https://www.shelly.cloud/en/products/shop/shelly-plus-plug-s)


## Installation

To install and run the script, follow these steps:

1. Download the script file from the repository.
2. Ensure you have the necessary dependencies installed, including the Shelly Plus Plug S API library.
3. Configure the constants in the script according to your requirements:
   - `timer_resolution`: Set the interval (in milliseconds) for calling the state machine.
   - `stop_charge_percentage`: Set the battery charge percentage at which the charging process should stop.
4. Save the changes to the script file.

## Usage

To use the script, follow these instructions:

1. Connect your Shelly Plus Plug S device to your power source and battery.
2. Ensure your device is connected to the network and accessible.
3. Run the script on a device with the necessary dependencies installed.
4. The script will execute the charging process automatically, monitoring the power consumption of the plug and adjusting the charging state accordingly.
5. The LED color on the Shelly Plus Plug S device will indicate the current state of the state machine:
   - Blue: Setup state
   - Yellow: Learning state
   - Green: Charging state
   - Red: Shutdown state

## Release Notes

- 2023-05-18: Improved the learning of the power consumption of the plug.
- 2023-05-14: Added LED color to indicate the state of the state machine.
- 2023-05-13: Initial release.

## Author

- Irmo Ebel
- Date: 2023-05-13


// Your setup guide goes here

---

\* Based on information from [Battery University](https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries#:~:text=If%20charged%20to%20only%204.10,the%20capacity%20the%20battery%20stores).

