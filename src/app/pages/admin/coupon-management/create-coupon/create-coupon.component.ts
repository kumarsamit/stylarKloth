import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.scss']
})
export class CreateCouponComponent {

    heading: any = '';
    modalType: any = '';
    loader: boolean = false;
    categoryData:any='';
    categoryFormGroup = new FormGroup({
      parentCategoryName: new FormControl('', [Validators.required]),
      parentCategoryDescription: new FormControl('', [Validators.required]),
    })
  
    constructor(
      private _request: RequestService,
      private _snackbar: SnackbarService,
      private _router: Router,
      private _dialogRef: MatDialogRef<CreateCouponComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private fb: FormBuilder
  
    ) {
      this.heading = data.heading;
      this.modalType = data.type;
      this.categoryData = data.data
  
      if(data.data){
        this.categoryFormGroup.patchValue({
          parentCategoryName : this.categoryData.name,
          parentCategoryDescription : this.categoryData.description,
        })
      }
    }
    closePopup(type: any) {
      this._dialogRef.close(type);
    }
  
}
