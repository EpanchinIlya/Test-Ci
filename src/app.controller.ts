import { Get, Controller, Redirect } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
@Controller()
export class AppController {
  @Get()
  @Redirect('/docs')
  @ApiExcludeEndpoint()
  redirectToSwagger() {
    return;
  }

  @Get('/hello')
  hello() {
    return 'Hello developer10 Ilya';
  }
}
