import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

export class CustomValidators {

  static syncForbiddenProjectName(control: FormControl) : {[s: string]: boolean} {
    if (control.value && control.value.toLowerCase() === 'test') {
      return {'projectNameIsForbidden': true}
    } else {
      return null;
    }
  }
  
  static asyncForbiddenProjectName(control: FormControl) : Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(CustomValidators.syncForbiddenProjectName(control))
      }, 1000)
    })
  }
}
