import {Component, OnInit} from '@angular/core';
import { Push } from 'typescript';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'TeztServer';
  serverCreated = false;
  servers = ['TestServer ' , 'TestServer 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreatServers() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is" + this.serverName;
    this.servers.push(this.serverName);

  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }


}
