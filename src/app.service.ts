import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './dto/get-user-request.dto';
import { OrderCreatedEvent } from './events/order-created.event';

@Injectable()
export class AppService {
  constructor (
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    console.log('Order created event received here', orderCreatedEvent);
    this.authClient.send('get_user', new GetUserRequest(orderCreatedEvent.userId),).subscribe((user) => {
      console.log('Response received', user, orderCreatedEvent.price);
    }
    );
  };

}