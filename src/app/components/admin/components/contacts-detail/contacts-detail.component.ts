import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {
  id!: number;
  user!: Observable<User>;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) {

  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe( (params) => this.id = params?.['id'] );
    // this.user = this.adminService.getPersonById(this.id);

    this.user = this.activatedRoute.data.pipe(
      map( (data) => data?.['user'] )
    );
  }
}
