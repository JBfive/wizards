import { Component, OnInit } from '@angular/core';
import { WebsocketService} from '../websocket.service';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styleUrls: ['./enemies.component.scss']
})
export class EnemiesComponent implements OnInit {
  enemies: any = null;
  state: any = null;

  constructor(private _wss: WebsocketService) { }

  ngOnInit() {
    const obs = this._wss.getObservable();
    obs.subscribe((state) => {
      this.state = state;
      console.log(this.state);
      if (this.state) {
        this.getEnemies();
        this.convertTokens();
      }
    });
  }


  getEnemies() {
    // for (let person of this.state.players) {
    //   if (this._wss.playerid !== person.socketid) {
    //     this.enemies.push(person);
    //     console.log(this.enemies);
    //   }
    // }
    this.enemies = this.state.players.filter((enemy) => {
      return this._wss.playerid !== enemy.socketid;
    });
    console.log(this.enemies);
  }

  convertTokens() {
    for (let j = 0; j < this.enemies.length; j++) {
        let tokens = [];
        for (let i = 0; i < this.enemies[j].aptokens; i++) {
          tokens.push(i);
        }
        this.enemies[j].aptokens = tokens;
        tokens = [];
        for (let i = 0; i < this.enemies[j].hptokens; i++) {
          tokens.push(i);
        }
        this.enemies[j].hptokens = tokens;
      }
  }
}
