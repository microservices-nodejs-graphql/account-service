export interface MessageBrokerPort {
    update<T>(tableName: string, domain);    
}