import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-card',
  standalone: true,  // 👈 FALTAVA ISSO
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {

  @Input() user!: User;

}
