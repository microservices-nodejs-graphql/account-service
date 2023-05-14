import { Inject, Injectable } from "@nestjs/common";
import { MessageBrokerPort } from "../infraestructure/ports/int/message-broker.port";
import { ConfigService } from "src/config/config.service";
import { KafkaEventMessageAdapter } from "../infraestructure/adapters/out/kafka-event-message.adapter";
import { EventMessagePort } from "../infraestructure/ports/out/event-message.port";

@Injectable()
export class MessageBrokerUseCase implements MessageBrokerPort {
    constructor(
        @Inject(KafkaEventMessageAdapter) private readonly eventMessagePort: EventMessagePort,
        private readonly configService: ConfigService
        ) {}

    async update<T>(tableName: string, domain: any) {
        await setTimeout(() => {
            this.eventMessagePort.sendMessage(this.configService.get('KAFKA_PRODUCER_TOPIC'), JSON.stringify(
                {
                    tableName,
                    message: {
                        id: domain.id,
                        status: "ACTIVE"
                    }
                }
            ))
        }, 20000);
    }
    
}