import { Kafka, Producer } from "kafkajs";
import { MainEvent } from "./types";
export default abstract class BaseProducer<T extends MainEvent> {
    protected client: Kafka;
    protected producer: Producer;
    protected abstract topic: T["topic"];
    protected connected: boolean;
    constructor(client: Kafka);
    start(): Promise<void>;
    sendMessage(message: T["producerMessage"]): Promise<void>;
    gracefulShutdown(): Promise<void>;
}
