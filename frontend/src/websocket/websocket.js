import { Client } from "@stomp/stompjs";

const WEBSOCKET_URL = "ws://localhost:8080/ws";

const client = new Client({
  brokerURL: WEBSOCKET_URL,
  reconnectDelay: 5000,
  debug: (msg) => console.log("[WebSocket] " + msg),
  onConnect: () => console.log("[WebSocket] Connected"),
  onStompError: (frame) => console.error("[WebSocket] Error:", frame),
});

export const sendTaskUpdate = (task) => {
  if (client.connected) {
    client.publish({
      destination: "/app/task-update",
      body: JSON.stringify(task),
    });
  } else {
    console.error("[WebSocket] Cannot send, client not connected");
  }
};

export const subscribeToTaskUpdates = (onMessage) => {
  if (client.connected) {
    client.subscribe("/topic/tasks", (message) => {
      const updatedTask = JSON.parse(message.body);
      onMessage(updatedTask);
    });
  } else {
    console.error("[WebSocket] Cannot subscribe, client not connected");
  }
};

client.activate();

export default client;
