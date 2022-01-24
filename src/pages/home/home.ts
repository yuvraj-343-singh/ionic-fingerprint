import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private faio: FingerprintAIO) {

  }

  public showFingeerprintAuthentication() {

    this.faio.isAvailable().then((result: any) => {
      console.log(result)

      this.faio.show({
        cancelButtonTitle: 'Cancel',
        description: "Some biometric description",
        disableBackup: true,
        title: 'Scanner Title',
        fallbackButtonTitle: 'FB Back Button',
        subtitle: 'This SubTitle'
      })
        .then((result: any) => {
          console.log(result)
          alert("Successfully Authenticated!")
        })
        .catch((error: any) => {
          console.log(error)
          alert("Match not found!")
        });

    })
      .catch((error: any) => {
        console.log(error)
      });
  }

}
