import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {

  public data;

  constructor() {

      this.data = null;
    }
  
    public storeRecipes(data):void{
      this.data = data;
    }

    public getstoredRecipes(){
      return this.data;
    }

}


