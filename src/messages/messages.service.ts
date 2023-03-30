import { Message } from './entities/message.entity';
import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Thibaut', text: 'Hello world!' }];

  create(createMessageDto: CreateMessageDto) {
    return this.messages.push(createMessageDto)
  }

  findAll() {
    return this.messages;
  }
}
