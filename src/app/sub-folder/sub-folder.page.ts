import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { FileServiceService } from '../Services/file-service.service';

@Component({
  selector: 'app-sub-folder',
  templateUrl: './sub-folder.page.html',
  styleUrls: ['./sub-folder.page.scss'],
})
export class SubFolderPage implements OnInit {

  dirList: any = [];
  name: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public file: File,
    public fileService: FileServiceService
  ) {
    this.route.queryParams.subscribe(params => {
      console.log('params', params);
      if (params) {
        const data = params;
        this.name = params.name;
        console.log('data =>', data);
        this.file.listDir(this.file.externalRootDirectory, data.fullPath.substring(1))
          .then((list) => {
            // list.forEach((element: any) => {
            //   if (element.isDirectory) {
            //     this.array.push(element)
            //   }
            // });
            list.forEach((element: any) => {
              if (element.isDirectory) {
                element['icon'] = "folder";
              } else {
                if (element.name.includes("jpg")) {
                  element['icon'] = "images";
                } else if (element.name.includes("mp3")) {
                  element['icon'] = "musical-note";
                } else if (element.name.includes("mp4")) {
                  element['icon'] = "videocam";
                } else {
                  element['icon'] = "document";
                }
              }
              this.dirList.push(element);
            });
          });
      }
    });

  }

  openInternalDir(dir) {
    this.router.navigate(['/sub-folder'], {
      queryParams: dir,
    });
  }

  ngOnInit() {
  }

}
