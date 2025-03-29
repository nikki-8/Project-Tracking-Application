import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

const useWebSocket = (topic, onMessage) => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const stompClient = new Client({
      brokerURL: "ws://localhost:8080/ws",
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Connected to WebSocket");
        stompClient.subscribe(topic, (message) => {
          onMessage(JSON.parse(message.body));
        });
      },
    });

    stompClient.activate();
    setClient(stompClient);

    return () => {
      stompClient.deactivate();
    };
  }, [topic, onMessage]);

  return { client };
};

export default useWebSocket;
