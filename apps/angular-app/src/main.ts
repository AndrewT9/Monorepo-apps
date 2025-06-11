import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@test-monorepo-proj-2/shared-component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
