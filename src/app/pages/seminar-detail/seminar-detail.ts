import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, List, LoadingController, ModalController, ToastController } from '@ionic/angular';

import { Mahasiswa } from '../../interfaces/mahasiswa';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-seminar-detail',
  templateUrl: 'seminar-detail.html',
  styleUrls: ['./seminar-detail.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeminarDetailPage {
  mahasiswa: Mahasiswa = {username: '', name: '', nim: ''};
  data_isset: boolean = false;
  seminar_data: any;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public user: UserData,
    public http: HttpClient
  ) { }

  ionViewWillEnter() {
    this.getMahasiswa();
    this.getSeminarDetail();
  }

  ngAfterViewInit() {
  }

  async getMahasiswa() {
    this.mahasiswa = await this.user.getMahasiswa();
    console.log(this.mahasiswa);
    this.data_isset = true;
  }

  getSeminarDetail() {
    
  }

}
