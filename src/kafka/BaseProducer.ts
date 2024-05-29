import { Kafka, Producer } from "kafkajs";
import { MainEvent } from "./types";

export default abstract class BaseProducer<T extends MainEvent> {
  protected client: Kafka;
  protected producer: Producer;
  protected abstract topic: T["topic"];
  protected connected: boolean = false;
  constructor(client: Kafka) {
    this.client = client;
    this.producer = client.producer();
  }
  public async start(): Promise<void> {
    try {
      await this.producer.connect();
      this.connected = true;
    } catch (error) {
      console.log("Error connecting the producer: ", error);
      throw new Error("Error connecting the producer: " + error);
    }
  }
  async sendMessage(message: T["producerMessage"]) {
    if (!this.connected) {
      throw new Error("Producer not connected please run start() function.");
    }
    await this.producer.send({
      topic: this.topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  }
  async gracefulShutdown() {
    try {
      await this.producer.disconnect();
      console.log("Kafka producer has been gracefully shut down.");
      process.exit(0);
    } catch (error) {
      console.error("Error during graceful shutdown:", error);
      process.exit(1);
    }
  }
}
