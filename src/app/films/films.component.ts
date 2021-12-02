import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Character} from "../shared/models/character";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CharactersService} from "../shared/characters.service";
import {Router} from "@angular/router";
import {Films} from "../shared/models/films";
import {FilmsService} from "../shared/films.service";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  displayedColumns = ['title'];
  dataSource: MatTableDataSource<Films>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  filmsList: Films[] = [];

  constructor(private filmsService: FilmsService,
              private router: Router
  ) {}

  ngOnInit() {
    this.filmsList = this.filmsService.getFilmsInformation();
    this.dataSource = new MatTableDataSource(this.filmsList);
    this.ngAfterViewInit();
  }

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: any) {
  let filterValue = event.target.value;
  filterValue = filterValue.trim();
  filterValue = filterValue.toLowerCase();
  this.dataSource.filter = filterValue;
}

}
