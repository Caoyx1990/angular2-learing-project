import { Component, OnInit } from "@angular/core";
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
    heros: Hero[] = [];
    constructor(private heroService: HeroService) {
        
    }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heros = heroes.slice(1, 5));
    }

}