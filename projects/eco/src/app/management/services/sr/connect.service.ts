import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

    constructor(private apiService: ApiService) {}
  
    database(): CustomDatabase {
      return new CustomDatabase(this.apiService);
    }
  }
  
  class CustomDatabase {
    constructor(private apiService: ApiService) {}
  
    ref(path: string): CustomDatabaseReference {
      return new CustomDatabaseReference(path, this.apiService);
    }
  }
  
  class CustomDatabaseReference {
    constructor(private path: string, private apiService: ApiService) {}
  
    set(data: any): void {
     
      // this.apiService.post(this.path, data)
      //   .subscribe(
      //     (response => console.log('Data set successfully:', response)),
      //     (error => console.error('Error setting data:', error))
      //   );
        
        this.apiService.post(this.path, data).subscribe(
        {
          next: ((response: any) => console.log('Data set successfully:', response)),
          error: ((error: any) => console.error('Error setting data:', error)), 
          complete: (() => console.log('Complete'))
        }
      );
      
    }
    
    

    
    // Add other methods like update, remove, etc.
  }