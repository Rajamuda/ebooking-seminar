import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, List, LoadingController, ModalController, ToastController } from '@ionic/angular';

import { Mahasiswa } from '../../interfaces/mahasiswa';
import { SeminarOptions } from '../../interfaces/seminar-options';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {
  mahasiswa: Mahasiswa = {username: '', name: '', nim: ''};
  seminar: SeminarOptions = {from_date: new Date().toISOString(), to_date: new Date().toISOString(), field: ''};
  min_date: string;
  max_date: string;
  date_isset: boolean = false;

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
    this.setSeminarDate();
  }

  ngAfterViewInit() {
    this.getMahasiswa();
  }

  async getMahasiswa() {
    this.mahasiswa = await this.user.getMahasiswa();
  }

  setSeminarDate() {
    const now = new Date();
    this.seminar.from_date = new Date(now.setDate(now.getDate()+7)).toISOString();
    this.seminar.to_date = new Date(now.setDate(now.getDate()+7)).toISOString();
    this.date_isset = true;
  }

  searchSeminar(form: NgForm) {
    console.log(form);
  }

}
