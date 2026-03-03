import { Component, Input } from '@angular/core';
import { Container } from '../../components/container/container';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user';
@Component({
  selector: 'app-details',
  imports: [
    Container,
    CommonModule
  ],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(id).subscribe(data => {
      this.user =data;
    });
  }
}
