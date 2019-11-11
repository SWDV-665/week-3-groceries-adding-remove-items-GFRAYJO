import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  items = [
    {
      itemName: 'Almond Milk',
      qty: 1
    },
    {
      itemName: 'Whole Grain Bread',
      qty: 2
    },
    {
      itemName: 'Eggs',
      qty: 1
    },
    {
      itemName: 'Asparagus',
      qty: 3
    },
    {
      itemName: 'Turkey Bacon',
      qty: 2
    },
];

constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

}

addItem() {
  console.log('Adding Item...');
  this.presentAlert();
}

async presentAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Add Item to the List',
    message: 'Specify the item and quantity',
    inputs: [
      {
        name: 'itemName',
        placeholder: 'Item Name'
      },
      {
        name: 'qty',
        placeholder: 'Quantity'
      },
    ],
    buttons: [
      {
      text: 'Cancel',
      handler: data => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'Save',
      handler: item => {
        console.log('Saved clicked', item);
        this.items.push(item);
      }
    }]
  });

  await alert.present();
}
async removeItem(n, index) {
  console.log('Remove Item - ', n, index);
  const toast = this.toastCtrl.create({
    message: 'Deleting Item - ' + n.itemName + ' ...',
    duration: 3000
});
  (await toast).present();

  this.items.splice(index, 1);
}

}
