import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InvalidComponent } from './invalid/invalid.component';

export const routes: Routes = [

	{
		path : '',
		component : WelcomeComponent
	},

	{
		path : 'books',
		component : BooksComponent
	},

	{
		path : 'technologies',
		component : TechnologiesComponent
	},

	{
		path : "**",
		component : InvalidComponent
	},
	
];
