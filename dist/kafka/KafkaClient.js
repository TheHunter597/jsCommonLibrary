"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
class KafkaClientSingleton {
    constructor(clientId) {
        this.client = new kafkajs_1.Kafka({
            clientId: clientId,
            brokers: [process.env.KAFKA_BROKER],
        });
    }
    static getInstance(clientId) {
        if (!KafkaClientSingleton.instance) {
            KafkaClientSingleton.instance = new KafkaClientSingleton(clientId);
            return this.instance.getClient();
        }
        return this.instance.getClient();
    }
    getClient() {
        return this.client;
    }
}
exports.default = KafkaClientSingleton;
