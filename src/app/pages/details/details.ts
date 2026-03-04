import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Container } from '../../components/container/container';
import { UserService } from '../../services/user';
import { User } from '../../models/user';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, Container, RouterLink],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class Details implements OnInit {

  user: User | null = null;
  loading: boolean = true;
  notFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      this.loading = true;
      this.notFound = false;

      this.userService.getUserById(id).subscribe({
        next: (data) => {
          this.user = data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          if (err.status === 404) {
            this.notFound = true;
          }
          this.loading = false;
        }
      });

    });

  }
}
