import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories;
  urlData;
  catName;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute,) {
    this.route.params.subscribe((res) => {
      this.urlData = res;
      if(window.location.href.indexOf('sub-categories') > -1){
        let data:any = this.dataService.getSubCategories(this.urlData);
        this.categories = data.data;
        this.catName = data.catName ? data.catName : 'Data Not Available';
      }else{
        this.categories = this.dataService.getCategories(this.urlData);
      }
    })
   }

  ngOnInit(): void {
  }

  selectSubCategory(index){
    if(!this.urlData.cat){
      this.router.navigate([ '/sub-categories/'+this.urlData.loc+'/'+this.urlData.br +'/'+ index]);
    }    
  }

  backToCat(){
    this.router.navigate([ '/categories/'+this.urlData.loc+'/'+this.urlData.br]);
  }

}
