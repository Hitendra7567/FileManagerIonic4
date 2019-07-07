import { Component, OnInit } from '@angular/core';
import { FileServiceService } from '../Services/file-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-dashboard',
  templateUrl: './sub-dashboard.page.html',
  styleUrls: ['./sub-dashboard.page.scss'],
})
export class SubDashboardPage implements OnInit {

  list: any = [];
  name: any;

  constructor(
    public fileService: FileServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      console.log('params', params[0]);
      const data = params[0];
      if (data === 'i') {
        this.name = 'Images';
        this.list = this.fileService.image;
      } else if (data === 'm') {
        this.name = 'Music';
        this.list = this.fileService.music;
      } else if (data === 'v') {
        this.name = 'Video';
        this.list = this.fileService.video;
      } else {
        this.name = 'Documents';
        this.list = this.fileService.doc;
      }
    });
  }

  ngOnInit() {
  }

}
