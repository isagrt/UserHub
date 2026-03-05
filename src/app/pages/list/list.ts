import { Component } from '@angular/core';
import { Container } from '../../components/container/container';
import { Card } from '../../components/card/card';
import { UserService } from '../../services/user';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    Container,
    Card,
    FormsModule
  ],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  users: User[] = []; /* guarda os usuários que vem da API */
  loading: boolean = true;
  error: boolean = false;
  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({ /* chama o metodo getUsers, recebe um Observable e usa subscribe() para executar a resposta da API */
      next: (data) => {
        console.log(data); /* Teste */
        this.users = data /* salva o usuario */
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => { /* se ocorrer erro mostra mensagem e para o carregamento */
        this.error = true;
        this.loading = false;
      }
    });
  }

  searchTerm: string = '';

  get filteredUsers(): User[] {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) /* filtra o usuario a partir do nome e converte para lowerCase */
    );
  }
}
