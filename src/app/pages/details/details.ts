import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Container } from '../../components/container/container';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-details',
  imports: [
    Container,
    CommonModule, RouterLink
  ],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  user: User | null = null;
  loading: boolean = true;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private cdr : ChangeDetectorRef
  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.loading = true;
    this.error = false

     this.userService.getUserById(id).subscribe({
    next: (data) => {
      this.user = data;
      this.loading = false;
      this.cdr.detectChanges();

    },
    error: () => {
      this.error = true;
      this.loading = false;


    }
  });
  }
}
