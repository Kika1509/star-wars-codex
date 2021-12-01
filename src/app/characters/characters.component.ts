import {Component, OnInit, ViewChild} from '@angular/core';
import {CharactersService} from "../shared/characters.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Character} from "../shared/models/character";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  displayedColumns = ['name', 'gender', 'birth_year'];
  dataSource: MatTableDataSource<Character>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  charactersList: Character[] = [];

  constructor(private characterService: CharactersService,
              private router: Router
  ) {}

  ngOnInit() {
    this.charactersList = this.characterService.getCharactersInformation();
    this.dataSource = new MatTableDataSource(this.charactersList);
    console.log(this.dataSource);
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

  getRecord(row: any) {
    var id = row.url.substr(row.url.length - 2);
    this.router.navigate(['details/' + id]);
  }

}
