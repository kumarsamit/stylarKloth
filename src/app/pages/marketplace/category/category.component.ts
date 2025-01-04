import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

	categoryListByGender: any = [
		{
			id: 1,
			name: "Men's Clothing",
		},
		{
			id: 1,
			name: "Women's Clothing",
		},
		{
			id: 1,
			name: "Kids's Clothing",
		},
		{
			id: 1,
			name: "Unisex's Clothing",
		}
	]

	categoryListBySeason: any = [
		{
			id: 1,
			name: "Summer Wear",
		},
		{
			id: 1,
			name: "Winter Wear",
		},
		{
			id: 1,
			name: "Rainwear",
		}
	]

	categoryListByAge: any = [
		{
			id: 1,
			name: "	Infants (0-2 years)",
		},
		{
			id: 1,
			name: "Toddlers (2-4 years)",
		},
		{
			id: 1,
			name: "Kids (5-12 years)",
		},
		{
			id: 1,
			name: "Teens (13-19 years)",
		}
	];

	categoryListByType: any = [
		{
			id: 1,
			name: "Tops",
		},
		{
			id: 1,
			name: "Bottoms",
		},
		{
			id: 1,
			name: "Suits & Sets",
		},
		{
			id: 1,
			name: "Innerwear",
		},
		{
			id: 1,
			name: "Sleepwear",
		},
		{
			id: 1,
			name: "Traditional wear",
		}
	]

}
