import { Component, inject } from '@angular/core';
import { LoadingIndicator } from './loading-indicator';
import { GlobalLoadingService } from './global-loading.service';

@Component({
  selector: 'global-loading',
  imports: [LoadingIndicator],
  template: `<loading-indicator [visible]="loadingService.loading()" />`,
})
export class GlobalLoading {
  protected readonly loadingService = inject(GlobalLoadingService);
}
