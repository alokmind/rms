import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus;
  
  constructor(private dataService: DataService, private router: Router){
    this.menus = this.dataService.getlocations();
  }  

  ngOnInit(): void {
  }

  selectLocation(locIndex, branchIndex){
    this.router.navigate([ '/categories/'+locIndex+'/'+branchIndex ]);
  }

}
