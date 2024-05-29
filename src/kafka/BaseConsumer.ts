import { Kafka, Consumer } from "kafkajs";
import { MainEvent } from "./types";
export default abstract class BaseConsumer<T extends MainEvent> {
  protected abstract topic: T["topic"];
  protected abstract groupId: T["group"];
  protected client: Kafka;
  protected abstract consumer: Consumer;
  abstract consume(): void;
  constructor(client: Kafka) {
    this.client = client;
  }
  createConsumer() {
    return this.client.consumer({
      groupId: this.groupId,
    });
  }
  async start() {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({ topic: this.topic, fromBeginning: true });
    } catch (e) {
      console.log(e);
    }
  }
  async gracefulShutdown() {
    try {
      await this.consumer.disconnect();
    } catch (e) {
      console.log(e);
    }
  }
}
