import { Kafka } from "kafkajs";
import { ClientId } from "./types";

class KafkaClientSingleton {
  private static instance: KafkaClientSingleton;
  private client: Kafka;

  private constructor(clientId?: ClientId) {
    this.client = new Kafka({
      clientId: clientId,
      brokers: [process.env.KAFKA_BROKER as string],
      retry: {
        initialRetryTime: 3000,
        retries: 20,
      },
    });
  }

  public static getInstance(clientId: ClientId): Kafka {
    if (!KafkaClientSingleton.instance) {
      KafkaClientSingleton.instance = new KafkaClientSingleton(clientId);
      return this.instance.getClient();
    }

    return this.instance.getClient();
  }

  public getClient(): Kafka {
    return this.client;
  }
}
export default KafkaClientSingleton;
