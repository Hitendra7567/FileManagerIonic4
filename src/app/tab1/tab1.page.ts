import { Component } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileServiceService } from '../Services/file-service.service';
import { File } from '@ionic-native/file/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dirList: any = [];

  constructor(
    public file: File,
    public fileOpener: FileOpener,
    public fileService: FileServiceService,
    private router: Router
  ) {
    this.file.listDir(this.file.externalRootDirectory, '')
      .then((list) => {
        list.forEach((element: any) => {
          if (element.name.indexOf('.') !== 0) {
            if (element.isDirectory) {
              element['icon'] = 'folder';
            } else {
              if (element.name.includes(".jpg")) {
                element['icon'] = "images";
              } else if (element.name.includes(".mp3")) {
                element['icon'] = "musical-note";
              } else if (element.name.includes(".mp4")) {
                element['icon'] = "videocam";
              } else {
                element['icon'] = "document";
              }
            }
            this.dirList.push(element);
          }
        });
      });
  }

  openInternalDir(dir) {
    // this.router.navigate(['sub-folder'], dir);
    this.router.navigate(['/sub-folder'], {
      queryParams: dir,
    });
    // this.navCtrl.push("SubFolderPage", { data: dir });
  }
}
