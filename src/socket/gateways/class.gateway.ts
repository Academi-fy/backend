import { MessageBody, SubscribeMessage } from '@nestjs/websockets';
import { ClassService } from 'src/rest/class';
import { Gateway } from '../entities';

export class ClassGateway extends Gateway {
  constructor(private classService: ClassService) {
    super();
  }

  @SubscribeMessage('CLASS_COURSE_ADD')
  async handleClassCourseAdd(@MessageBody() body: any) {
    //TODO (auch return type)
  }

  @SubscribeMessage('CLASS_COURSE_REMOVE')
  async handleClassCourseRemove(body: any) {
    //TODO (auch return type)
  }

  @SubscribeMessage('CLASS_USER_ADD')
  async handleClassUserAdd(body: any) {
    //TODO (auch return type)
  }

  @SubscribeMessage('CLASS_USER_REMOVE')
  async handleClassUserRemove(body: any) {
    //TODO (auch return type)
  }
}
