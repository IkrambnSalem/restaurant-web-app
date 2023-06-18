import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat-admin',
  templateUrl: './plat-admin.component.html',
  styleUrls: ['./plat-admin.component.css']
})
export class PlatAdminComponent implements OnInit {
  platsTab: any = [];
  constructor(private platService: PlatService, private router: Router) { }

  ngOnInit() {
    this.platService.getallPlats().subscribe((data) => {
      this.platsTab = data.plats
    });
  }

  displayPlat(id) {
    this.router.navigate([`platInfo/${id}`]);
  }
  editPlat(id) {
    this.router.navigate([`edit-plat/${id}`]);
  }
  deletePlat(id) {
    this.platService.deletePlat(id).subscribe((response) => {
      console.log(response.message);
      this.platService.getallPlats().subscribe((data) => {
        this.platsTab = data.plats
      });

    });

  }

}
