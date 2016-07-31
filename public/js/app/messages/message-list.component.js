"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_1 = require("./message");
var message_component_1 = require("./message.component");
var MessageListComponent = (function () {
    function MessageListComponent() {
        this.messages = [
            new message_1.Message("A new message1", null, "Max"),
            new message_1.Message("A new message2", null, "Bob"),
            new message_1.Message("A new message3", null, "Susy"),
            new message_1.Message("A new message4", null, "Frank")
        ];
    }
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n      <section class=\"col-md-8 col-md-offset-2\">\n        <my-message *ngFor=\"let message of messages\"[message]=\"message\" (editClicked)=\"message.content = $event\"></my-message>\n      </section>  \n    ",
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFVckQ7SUFBQTtRQUNJLGFBQVEsR0FBYztZQUNsQixJQUFJLGlCQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztZQUMxQyxJQUFJLGlCQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztZQUMxQyxJQUFJLGlCQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztZQUMzQyxJQUFJLGlCQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztTQUMvQyxDQUFDO0lBQ04sQ0FBQztJQWhCRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxzTkFJVDtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQ2pDLENBQUM7OzRCQUFBO0lBUUYsMkJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDRCQUFvQix1QkFPaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2UuY29tcG9uZW50XCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgIDxteS1tZXNzYWdlICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCJbbWVzc2FnZV09XCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKT1cIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiPjwvbXktbWVzc2FnZT5cbiAgICAgIDwvc2VjdGlvbj4gIFxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IHtcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdID0gW1xuICAgICAgICBuZXcgTWVzc2FnZShcIkEgbmV3IG1lc3NhZ2UxXCIsIG51bGwsIFwiTWF4XCIpLFxuICAgICAgICBuZXcgTWVzc2FnZShcIkEgbmV3IG1lc3NhZ2UyXCIsIG51bGwsIFwiQm9iXCIpLFxuICAgICAgICBuZXcgTWVzc2FnZShcIkEgbmV3IG1lc3NhZ2UzXCIsIG51bGwsIFwiU3VzeVwiKSxcbiAgICAgICAgbmV3IE1lc3NhZ2UoXCJBIG5ldyBtZXNzYWdlNFwiLCBudWxsLCBcIkZyYW5rXCIpXG4gICAgXTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
