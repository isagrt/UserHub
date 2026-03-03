import { Component, Input } from '@angular/core';
import { Container } from '../../components/container/container';
import { User } from '../../models/user';
@Component({
  selector: 'app-details',
  imports: [
    Container
  ],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  @Input() user!: User;
}
