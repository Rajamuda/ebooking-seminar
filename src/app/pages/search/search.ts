import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, List, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { Mahasiswa } from '../../interfaces/mahasiswa';
import { SeminarOptions } from '../../interfaces/seminar-options';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  styleUrls: ['./search.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchPage {
  mahasiswa: Mahasiswa = {username: '', name: '', nim: ''};
  filter: SeminarOptions = {from_date: '', to_date: '', field: []};
  data_isset: boolean = false;
  seminar_data: any;
  segment: string = 'teknik';
  count: any = {teknik: 0, hewan: 0, tumbuhan: 0, ekonomi: 0, sosial: 0};


  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public user: UserData,
    public http: HttpClient,
    public route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.filter.from_date = new Date(parseInt(this.route.snapshot.paramMap.get('fromDate'))).toISOString();
    this.filter.to_date = new Date(parseInt(this.route.snapshot.paramMap.get('toDate'))).toISOString();
    this.filter.field = this.route.snapshot.paramMap.get('field');

    this.segment = this.filter.field.split(",")[0];

    this.getMahasiswa();
    this.getSeminarData();
  }

  ngAfterViewInit() {
  }

  async getMahasiswa() {
    this.mahasiswa = await this.user.getMahasiswa();
    console.log(this.mahasiswa);
    this.data_isset = true;
  }

  getSeminarData() {
    this.http.get('assets/data/seminar.json').subscribe(data => {
      this.seminar_data = data[this.segment];
      
      this.count.teknik = data['teknik'].length;
      this.count.hewan = data['hewan'].length;
      this.count.ekonomi = data['ekonomi'].length;
      this.count.tumbuhan = data['tumbuhan'].length;
      this.count.sosial = data['sosial'].length;

      console.log(this.seminar_data);
    });
  }

  changeField() {
    console.log(this.segment);
    this.getSeminarData();  
  }

}
