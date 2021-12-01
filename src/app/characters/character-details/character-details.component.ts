import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CharactersService} from "../../shared/characters.service";
import {HomeWorld} from "../../shared/models/homeWorld";
import {Character} from "../../shared/models/character";
import {Films} from "../../shared/models/films";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  detailsData: Character;
  homeData: HomeWorld;
  filmData: Array<any>;
  filmsList: Films[] = [];
  homeWorldUrl: string;
  messages: object;
  public href: string = "";
  film: Films;

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  async ngOnInit() {
    this.detailsData = new Character();
    this.homeData = new HomeWorld();
    this.href = this.router.url;
    var id = this.href.substr(this.href.length - 1);
    this.detailsData = await this.characterService.getCharactersById(id);
    this.homeData = await this.characterService.getHomeworldByUrl(this.detailsData.homeworld);
    for (let filmUrl of this.detailsData.films) {
      this.film = await this.characterService.getFilmByUrl(filmUrl);
      this.filmsList.push(this.film);
    }
  }

}
