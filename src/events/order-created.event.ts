export class OrderCreatedEvent {
  constructor(
    public readonly userId: string,
    public readonly orderId: string,
    public readonly price: number) {}

    toString() {
        return JSON.stringify({
            userId: this.userId,
            orderId: this.orderId,
            price: this.price
        });
    }
}