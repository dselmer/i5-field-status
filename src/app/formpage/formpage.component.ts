import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam/public_api';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent {
  stream:any = null;
  trigger: Subject<void> = new Subject();
  previewImage: string = '';
  btnLabel: string = 'Take a Pic' 
  status!: string;

get $trigger(): Observable<void> {
    return this.trigger.asObservable(); 
}

snapshot(event: WebcamImage) {
  console.log(event); 
  this.previewImage = event.imageAsDataUrl;
  this.btnLabel = 'Re-take Pic'
}

  isShowing:boolean=false;
  showVideo() {
    this.isShowing=!this.isShowing;
  }
  checkPermissions() {
    navigator.mediaDevices.getUserMedia({
      video:{
        width: 500,
        height: 500
      }
    }).then((res) => {
      console.log("response", res);
      this.stream = res;
      this.status = 'My camera is being accessed';
      this.btnLabel = 'Take a Pic';
      if (!this.isShowing) {
        this.isShowing=true;
      }
    }).catch(err =>{
      console.log(err);
      if(err?.message === 'Permission denied') {
        this.status = 'Permission denied please try again by approving webcam access';
      } else {
          this.status = 'You may not have a webcam connected to your system. Please try again....';
        }
    })
  }

  captureImage(){
     this.trigger.next();   
  }

sumbit(){
  console.log(this.previewImage);
}






}





