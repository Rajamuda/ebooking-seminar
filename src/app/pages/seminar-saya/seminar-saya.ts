import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, List, LoadingController, ModalController, ToastController } from '@ionic/angular';

import { Mahasiswa } from '../../interfaces/mahasiswa';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-seminar-saya',
  templateUrl: 'seminar-saya.html',
  styleUrls: ['./seminar-saya.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeminarSayaPage {
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
    this.getJadwalSeminar();
  }

  ngAfterViewInit() {
  }

  async getMahasiswa() {
    this.mahasiswa = await this.user.getMahasiswa();
    console.log(this.mahasiswa);
    this.data_isset = true;
  }

  getJadwalSeminar() {
    this.http.get('assets/data/seminar.json').subscribe(data => {
      this.seminar_data = data;
      console.log(this.seminar_data);
    });
  }

}
