import { Module } from "@nestjs/common";
import { ConfigurationModule } from "src/config/config.module";
import { KafkaMessageBrokerAdapter } from "./infraestructure/adapters/in/events/kafka-message-broker.adapter";
import { MessageBrokerUseCase } from "./application/message-broker.usecase";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ConfigService } from "src/config/config.service";
import { KafkaEventMessageAdapter } from "./infraestructure/adapters/out/kafka-event-message.adapter";

@Module({
    imports: [
        ConfigurationModule,
        ClientsModule.registerAsync([
            {
                name: 'KAFKA_ACCOUNT_SERVICE',
                imports: [ConfigurationModule],
                useFactory: async (configService: ConfigService) => ({
                    transport: Transport.KAFKA,
                    options: {
                        client: {
                            brokers: [configService.get('KAFKA_BROKER')],
                        }
                    }
                }),
                inject: [ConfigService],
            }
        ])
    ],
    controllers: [
        KafkaMessageBrokerAdapter
    ],
    providers: [
        MessageBrokerUseCase,
        KafkaEventMessageAdapter
    ],
})
export class AccountModule { }