# These tools are for developers who wants to support the project


# WebSocket Consumer

This Python script connects to a WebSocket and extracts the "data" field from the received messages if the 
"level" field is -1.

If charging is not working as expected you can use this script to support the project.

## Prerequisites

- Python 3.x
- websockets library (`pip install websockets`)

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the repository directory:
   ```bash
   cd your-repo
   ```

3. Install the required dependencies:
   ```bash
   pip install websockets
   ```

4. Run the script with the WebSocket IP address:
   ```bash
   python websocket_consumer.py --ip_address <websocket-ip-address>
   ```
   Replace `<websocket-ip-address>` with the actual IP address of the WebSocket.

5. The script will continuously consume messages from the WebSocket and print the extracted "data" field 
if the "level" is -1.

## License

This project is licensed under the [MIT License](LICENSE).
