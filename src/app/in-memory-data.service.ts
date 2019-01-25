import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 1, name: 'Sachin Tendulkar' },
      { id: 2, name: 'MS Dhoni' },
      { id: 3, name: 'Rohit Sharma' },
      { id: 4, name: 'Yuvraj Singh' },
      { id: 5, name: 'Virat Kohli' },
      { id: 6, name: 'Suresh Raina' },
      { id: 7, name: 'Ravindra Jadeja' },
      { id: 8, name: 'R Ashwin' },
      { id: 9, name: 'Gautam Gambhir' },
      { id: 10, name: 'Dinesh Kartik' }
    ];
    return {players};
  }

  genid(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 1;
  }

}
