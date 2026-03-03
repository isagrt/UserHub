import { Component } from '@angular/core';
import { Container } from '../../components/container/container';
import { Card } from '../../components/card/card';
import { UserService } from '../../services/user';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    Container,
    Card,
  ],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  users: User[] = [];
  constructor(private userService: UserService){}

  ngOnInit(): void{
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data
    })
  }
}
