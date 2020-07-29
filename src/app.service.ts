import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    writeText(): string {
        return 'localhost 3000/todo crud'
    }
}
