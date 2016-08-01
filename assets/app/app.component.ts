import {Component} from '@angular/core';
import {HeaderComponent} from "./header.component";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";

@Component({
    selector: 'my-app',
    template: `
      <div class="container">
        <my-header></my-header>
      </div>
      <router-outlet></router-outlet>
    `,
    directives: [HeaderComponent, ROUTER_DIRECTIVES]

})
@Routes([
    {path: '/', component: MessagesComponent},
    {path: '/auth', component: AuthenticationComponent}
])
export class AppComponent {
}