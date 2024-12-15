import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/pages/auth/sign-in/sign-in.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	constructor(private dialog: MatDialog) {
	}

	loginPopup() {
		this.dialog.open(SignInComponent, {
			width: '450px',
			maxWidth:'90vw',
			data: { message: 'Hello from AppComponent!' }
		});
	}

}
