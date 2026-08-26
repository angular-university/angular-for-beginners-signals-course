import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpLoadingInterceptor } from './shared/loading-indicator/http-loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptors([httpLoadingInterceptor]))],
};
