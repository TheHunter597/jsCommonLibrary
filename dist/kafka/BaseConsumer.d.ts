import { Kafka, Consumer } from "kafkajs";
import { MainEvent } from "./types";
export default abstract class BaseConsumer<T extends MainEvent> {
    protected abstract topic: T["topic"];
    protected abstract groupId: T["group"];
    protected client: Kafka;
    protected abstract consumer: Consumer;
    abstract consume(): void;
    constructor(client: Kafka);
    createConsumer(): Consumer;
    start(): Promise<void>;
    gracefulShutdown(): Promise<void>;
}
