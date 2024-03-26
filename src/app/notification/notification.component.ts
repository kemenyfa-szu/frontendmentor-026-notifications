import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass'],
})
export class NotificationComponent implements OnInit {
  @Input()
  notification!: Notification;

  constructor() {}

  ngOnInit(): void {}
}
