import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Welly Susanto';
  
  item = [{
    nama : 'Buah kelengkeng',
    harga : 10000
  },{
    nama : 'Buah jeruk',
    harga : 15000
  }];

  itemArr = [1,2,3,4];

  show : boolean = false;

  user = {
    nama : ''
  };

  Pesan = '';
  KlikButton(){
    this.Pesan = 'Tombol di tekan';
  }
}