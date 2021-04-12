import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstServerVersion: number = 0;
  serverElements = [
    {type: 'server', name: 'testserver', content: 'just a test'},
  ];

  onServerElementCreated(serverData: {serverType: string, serverName: string, serverContent: string}){
    this.serverElements.push({
      type: serverData.serverType,
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onUpdateFirst() {
    this.firstServerVersion++;
    this.firstServerVersion === 1
    ? this.serverElements[0].name += '.version1'
    : this.serverElements[0].name = this.serverElements[0].name.replace(/\d+$/, String(this.firstServerVersion));
  }

  onDestoryFirst() {
    this.serverElements.splice(0, 1);
  }
}
