import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { LoginComponent } from './components/login/login.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { AppRoutingModule } from './app-routing.module'
import { RouterLinkWithHref, RouterOutlet } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, LoginComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLinkWithHref,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
