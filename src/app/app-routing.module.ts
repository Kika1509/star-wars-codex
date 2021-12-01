import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from "./characters/characters.component";
import {CharacterDetailsComponent} from "./characters/character-details/character-details.component";


const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'home', component: CharactersComponent },
  { path: 'details/:id',
    component: CharacterDetailsComponent,
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
