"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BaseProducer {
    constructor(client) {
        this.connected = false;
        this.client = client;
        this.producer = client.producer();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.producer.connect();
                this.connected = true;
            }
            catch (error) {
                console.log("Error connecting the producer: ", error);
                throw new Error("Error connecting the producer: " + error);
            }
        });
    }
    sendMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                throw new Error("Producer not connected please run start() function.");
            }
            yield this.producer.send({
                topic: this.topic,
                messages: [{ value: JSON.stringify(message) }],
            });
        });
    }
    gracefulShutdown() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.producer.disconnect();
                console.log("Kafka producer has been gracefully shut down.");
                process.exit(0);
            }
            catch (error) {
                console.error("Error during graceful shutdown:", error);
                process.exit(1);
            }
        });
    }
}
exports.default = BaseProducer;
