import { WebSocketGateway } from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';

@WebSocketGateway(SOCKET_PORT)
export class CourseGateway {}
