import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentenceContainerModule } from './content/sentence-container/sentence-container.module';
import { LayoutModule } from './layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';
import { StoryContainerModule } from './content/story-container/story-container.module';

const config: SocketIoConfig = { url: 'http://localhost:3030' };

@NgModule({
  declarations: [AppComponent],
  providers: [CookieService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    SentenceContainerModule,
    StoryContainerModule,
    SocketIoModule.forRoot(config),
  ],
})
export class AppModule {}
