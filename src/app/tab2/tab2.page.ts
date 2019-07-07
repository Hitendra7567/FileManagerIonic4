import { Component } from '@angular/core';
import { FileServiceService } from '../Services/file-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public fileService: FileServiceService,
    public router: Router
  ) {
    this.fileService.getRootDirectory();
  }

  openData(category) {
    this.router.navigate(['/sub-dashboard'], {
      queryParams: category,
    });
  }
}
