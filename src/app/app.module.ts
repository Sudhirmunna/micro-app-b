import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkOneComponent } from './link-one/link-one.component';
import { LinkTwoComponent } from './link-two/link-two.component';

@NgModule({
  declarations: [AppComponent, LinkOneComponent, LinkTwoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!customElements.get('micro-app-b')) {
      const myCustomElement = createCustomElement(AppComponent, {
        injector: this.injector
      });
      customElements.define('micro-app-b', myCustomElement);
    }
  }
}
