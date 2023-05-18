"""
WebSocket Consumer Script

This script connects to a WebSocket and extracts the "data" field from the received messages
if the "level" field is -1.

Author: Irmo
Date: 2023-05-18

Instructions:
- Install dependencies by running: `pip install websockets`
- Run the script with the WebSocket IP address: `python websocket_consumer.py --ip_address 
<websocket-ip-address>`

"""

import asyncio
import argparse
import websockets

def extract_data(message):
    """
    Extracts the 'data' field from the given message if the 'level' field is -1.

    Args:
        message (str): The message received from the WebSocket.

    Returns:
        str: The extracted 'data' field if 'level' is -1, None otherwise.
    """
    try:
        # Parse the message as a dictionary
        entry = eval(message)
    except SyntaxError:
        return None
    
    # Check if the 'level' field exists and is -1
    if 'level' in entry and entry['level'] == -1:
        # Extract the 'data' field and remove newlines
        data = entry.get('data', '')
        return data.replace('\n', '')

    return None

async def consume_websocket(ip_address):
    """
    Consumes messages from the WebSocket and extracts the 'data' field if 'level' is -1.

    Args:
        ip_address (str): The IP address of the WebSocket.

    """
    # Connect to the WebSocket
    async with websockets.connect(ip_address) as websocket:
        while True:
            # Receive a message from the WebSocket
            message = await websocket.recv()

            # Extract data from the message
            data = extract_data(message)

            # Print the extracted data if level is -1
            if data is not None:
                print(data)

if __name__ == '__main__':
    # Set up the argument parser
    parser = argparse.ArgumentParser(description='Consume data from a WebSocket and extract the data field 
if level is -1.')
    parser.add_argument('ip_address', help='IP address for the WebSocket')

    # Parse the command-line arguments
    args = parser.parse_args()
    ip_address = args.ip_address

    # Run the WebSocket consumer
    asyncio.get_event_loop().run_until_complete(consume_websocket(ip_address))

