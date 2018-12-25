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
  data_isset: boolean = false;
  date_permitted: string;
  year_permitted: number;
  submitted: boolean = false;

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
    this.getMahasiswa();
  }

  ngAfterViewInit() {
  }

  async getMahasiswa() {
    this.mahasiswa = await this.user.getMahasiswa();
    console.log(this.mahasiswa);
    this.data_isset = true;
  }

  setSeminarDate() {
    const now = new Date();
    this.seminar.from_date = new Date(now.setDate(now.getDate()+7)).toISOString();
    this.date_permitted = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()
    this.year_permitted = now.getFullYear()+1;
    this.seminar.to_date = new Date(now.setDate(now.getDate()+7)).toISOString();
  }

  isValidDate(date) {
    const current = new Date(date);

    if(current < new Date(this.date_permitted)){
      return false;
    }

    if(current.getFullYear() > this.year_permitted){
      return false;
    }

    return true;
  }

  searchSeminar(form: NgForm) {
    if(form.valid){
      console.log(form);
      let from = new Date(this.seminar.from_date).getTime();
      let to = new Date(this.seminar.to_date).getTime();
      this.router.navigateByUrl(`/search/${from}/${to}/${this.seminar.field}`);
    }

  }

}
