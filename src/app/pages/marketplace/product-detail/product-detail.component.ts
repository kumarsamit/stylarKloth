import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {


  constructor(private dialogRef: MatDialogRef<ProductDetailComponent>) {}

  close() {
    this.dialogRef.close();
  }

}
