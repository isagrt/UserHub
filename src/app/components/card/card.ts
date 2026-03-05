import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {

  @Input() user!: User; /* guarda um objeto do tipo User */

}
