// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WindowService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {

  get windowRef() {
    return window
  }

}


