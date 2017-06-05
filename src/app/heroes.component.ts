import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls : ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit { 
  selectedHero: Hero;
  heros: Hero[];

  constructor(private heroService: HeroService, private router: Router ) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heros = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heros = heroes);
  }

  gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heros.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heros = this.heros.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero == null;}
      });
  }
}

