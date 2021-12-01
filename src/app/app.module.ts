import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { HttpClientModule} from "@angular/common/http";
import {CharactersService} from "./shared/characters.service";
import {AppRoutingModule} from "./app-routing.module";
import { ModalModule} from "ngx-modialog";
import {BootstrapModalModule} from "ngx-modialog/plugins/bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from "./shared/app.material-module";
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterDetailsComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    BootstrapModalModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSlideToggleModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
