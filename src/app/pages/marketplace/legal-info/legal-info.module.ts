import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'privacy-policies',
		component: PrivacyPoliciesComponent
	},
	{
		path: 'terms-and-conditions',
		component: TermsAndConditionsComponent
	}
];


@NgModule({
	declarations: [
		PrivacyPoliciesComponent,
		TermsAndConditionsComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)

	]
})
export class LegalInfoModule { }
