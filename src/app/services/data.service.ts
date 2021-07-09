import { Injectable } from '@angular/core';
import RawData from '../data/catalog';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  rawData = RawData;

  constructor() {}

  getlocations() {
    return this.rawData.data.locations.map((item) => {
      return {
        location: item.name,
        branches: item.branches.map((e) => {
          return e.name;
        }),
      };
    });
  }

  getCategories(location) {
    try {
      return this.rawData.data.locations[parseInt(location.loc)].branches[
        parseInt(location.br)
      ].categories.map((item) => {
        return {
          image: item.image,
          name: item.name,
        };
      });
    } catch {
      return 'error';
    }
  }

  getSubCategories(location) {
    let filteredData = [];
    try {
      this.rawData.data.locations[parseInt(location.loc)].branches[
        parseInt(location.br)
      ].categories[parseInt(location.cat)].subcategories.forEach((item) => {
        if (item.image) {  // removing data which has no image or name is 'NA'
          filteredData.push(item);
        }
      });
      if (filteredData.length) {
        return {
          catName:
            this.rawData.data.locations[parseInt(location.loc)].branches[
              parseInt(location.br)
            ].categories[parseInt(location.cat)].name,
          data: filteredData,
        };
      } else {
        return {data:'error'};
      }
    } catch {
      return 'error';
    }
  }
}
