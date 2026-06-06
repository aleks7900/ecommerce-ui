import {
    Client
} from "@stomp/stompjs";

export function connectOrderSocket(
    onMessage: (
        message: {
            orderId: string;
            status: string;
        }
    ) => void
) {

    const client =
        new Client({

            brokerURL:
                "ws://localhost:8088/ws"
        });

    client.onConnect =
        () => {

            client.subscribe(

                "/topic/orders",

                message => {

                    onMessage(
                        JSON.parse(
                            message.body
                        )
                    );
                }
            );
        };

    client.activate();

    return client;
}