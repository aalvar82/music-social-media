import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  constructor() { }
  @Input() friendsList: string[][] = [];
  ngOnInit(): void {
  }

}
