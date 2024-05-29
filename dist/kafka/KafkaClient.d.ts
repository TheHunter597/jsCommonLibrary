import { Kafka } from "kafkajs";
import { ClientId } from "./types";
declare class KafkaClientSingleton {
    private static instance;
    private client;
    private constructor();
    static getInstance(clientId: ClientId): Kafka;
    getClient(): Kafka;
}
export default KafkaClientSingleton;
