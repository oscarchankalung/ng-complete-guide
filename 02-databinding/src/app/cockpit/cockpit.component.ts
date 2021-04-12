import { Component, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverElementCreated = new EventEmitter<{
    serverType: string,
    serverName: string,
    serverContent: string}>();

  @ViewChild('serverNameInput', { static: true }) serverNameInput: ElementRef;
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void { 
  }

  onAddServerElement(serverType: string) {
    this.serverElementCreated.emit({
      serverType: serverType,
      serverName: this.serverNameInput.nativeElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
