import {Component} from '@angular/core';
import {Message} from "./message";
import {MessageComponent} from "./message.component";
@Component({
    selector: 'my-message-list',
    template: `
      <section class="col-md-8 col-md-offset-2">
        <my-message *ngFor="let message of messages"[message]="message" (editClicked)="message.content = $event"></my-message>
      </section>  
    `,
    directives: [MessageComponent]
})
export class MessageListComponent {
    messages: Message[] = [
        new Message("A new message1", null, "Max"),
        new Message("A new message2", null, "Bob"),
        new Message("A new message3", null, "Susy"),
        new Message("A new message4", null, "Frank")
    ];
}