import { Observable } from "rxjs/observable";
import { of } from "rxjs/observable/of";

import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

import { MessageService } from "./message.service";

@Injectable()
export class HeroService {
  constructor(private messageService : MessageService) { }

  getHeroes () : Observable<Hero[]> {
    this.messageService.add("HeroService : fetched Heroes");
    return of(HEROES);
  }

  getHero(id : Number) : Observable<Hero> {
    this.messageService.add(`Hero Service : fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
