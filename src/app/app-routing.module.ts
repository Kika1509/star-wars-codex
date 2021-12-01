import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from "./characters/characters.component";
import {CharacterDetailsComponent} from "./characters/character-details/character-details.component";
import {FilmsComponent} from "./films/films.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: CharactersComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'details/:id',
    component: CharacterDetailsComponent,
  },
  { path: 'films',
    component: FilmsComponent,
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
