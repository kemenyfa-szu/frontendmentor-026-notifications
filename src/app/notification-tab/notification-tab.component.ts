import { Component } from '@angular/core';
import { Notification } from '../notification';
import { Notifications } from '../notifications';

@Component({
  selector: 'app-notification-tab',
  templateUrl: './notification-tab.component.html',
  styleUrls: ['./notification-tab.component.sass'],
})
export class NotificationTabComponent {
  public notifications: Notification[] = Notifications;

  get notificationCount() {
    return this.notifications.filter((noti) => noti.unread).length;
  }

  markAllAsRead(): void {
    for (let notification of this.notifications) {
      notification.unread = false;
    }
    return;
  }
}
