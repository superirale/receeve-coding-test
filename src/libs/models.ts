export interface IEventData {
    provider: string;
    timestamp: number;
    event: string;
}

export interface IStorage {
    save(tableName: string, data: any[]): void;
}
export interface INotifier {
    publish(data: IEventData): void;
}

export class StorageContext {

    /**
     * @type {IStorage} T
    */
    private strategy: IStorage;

    constructor(strategy: IStorage) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: IStorage) {
        this.strategy = strategy;
    }

    public save(tableName: string, data: any): void {
        this.strategy.save(tableName, data);
    }
}

export class NotifierContext {
    /**
     * @type {INotifier} T
    */
    private strategy: INotifier;

    constructor(strategy: INotifier) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: INotifier) {
        this.strategy = strategy;
    }

    public publish(data: IEventData): void {
        this.strategy.publish(data);
    }
}