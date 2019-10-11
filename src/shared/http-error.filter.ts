import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  Logger,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    if (request) {
      const status = exception.getStatus
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

      const errorResponse = {
        code: status,
        timestamp: new Date().toLocaleDateString(),
        path: request.url,
        method: request.method,
        message:
          exception.message.message || exception.message || 'Internal Error',
      };

      Logger.error(
        `Not able to ${request.method} ${request.url}`,
        JSON.stringify(errorResponse),
        'ExceptionFilter',
      );

      response.status(404).json(errorResponse);
    }
  }
}
