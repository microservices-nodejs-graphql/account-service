import { Controller, Inject } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { MessageBrokerUseCase } from "src/accounts/application/message-broker.usecase";
import { MessageBrokerPort } from "src/accounts/infraestructure/ports/int/message-broker.port";

@Controller()
export class KafkaMessageBrokerAdapter {
    constructor(
        @Inject(MessageBrokerUseCase) private readonly messageBrokerPort: MessageBrokerPort
    ) {}

    @MessagePattern('topic-consumer-service')
    async consumeEvent(@Payload() payload: any) {
        const obj = JSON.parse(JSON.stringify(payload));
        this.messageBrokerPort.update(obj.tableName, obj.message);
    }
}