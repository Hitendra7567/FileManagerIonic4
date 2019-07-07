import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  array: any = [];
  image: any = [];
  music: any = [];
  video: any = [];
  doc: any = [];
  other: any = [];
  isLoad: any = true;
  constructor(
    public file: File,
    public fileOpener: FileOpener,
    public toastController: ToastController
  ) { }

  async getRootDirectory() {
    await this.file.listDir(this.file.externalRootDirectory, '')
      .then(async (list) => {
        this.array = list;
        for (let i = 0; i < this.array.length; i++) {
          if (this.array[i].isDirectory) {
            await this.file.listDir(this.file.externalRootDirectory, this.array[i].fullPath.substring(1))
              .then(async (interList) => {
                for (let j = 0; j < interList.length; j++) {
                  await this.array.push(interList[j]);
                }
              }).catch(error => {
                console.log('Error in File =>', error);
              });
          }
        }
      });
    this.getFilterFile(this.array);
  }

  async getFilterFile(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.includes('.jpg')) {
        this.image.push(arr[i]);
      } else if (arr[i].name.includes('.mp3')) {
        this.music.push(arr[i]);
      } else if (arr[i].name.includes('.mp4')) {
        this.video.push(arr[i]);
      } else if (arr[i].name.includes('.pdf') || arr[i].name.includes('.doc')) {
        this.doc.push(arr[i]);
      } else {
        this.other.push(arr[i]);
      }
    }
    this.isLoad = false;
  }

  async openFile(path) {
    if (path.includes('.jpg') || path.includes('.jpeg')) {
      this.fileOpener.open(this.file.externalRootDirectory + path, 'image/jpeg')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    } else if (path.includes('.mp3')) {
      this.fileOpener.open(this.file.externalRootDirectory + path, 'audio/mpeg')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    } else if (path.includes('.pdf')) {
      this.fileOpener.open(this.file.externalRootDirectory + path, 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    } else if (path.includes('.mp4')) {
      this.fileOpener.open(this.file.externalRootDirectory + path, 'video/mp4')
        .then(() => console.log('File is opened'))
        .catch(e => {
          console.log('Error opening file', e
          )
        });
    } else {
      this.presentToast('No app to open view this file');
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }
}
