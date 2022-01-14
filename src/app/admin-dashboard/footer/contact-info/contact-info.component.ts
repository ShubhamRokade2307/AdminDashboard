import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { STEPPER_HELPERS } from '../../material-widgets/stepper/helpers.data';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},
  {position: 4, name: 'Beryllium', weight: 9.0122},
  
];
@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';

  fileToUpload: File | null;
  imageUrlOfLogoforedit: any;
  showimageprewiew: boolean;
  logoFileNameFile: any;
  imageUrlOfLogo: any;

  displayedColumns: string[] = ['position', 'name', 'weight', 'Action'];
  dataSource = ELEMENT_DATA;
 
  	constructor(private formBuilder: FormBuilder) { }

  	ngOnInit() {


  	
  	}




    uploadFileEvt(imgFile: any) {
      if (imgFile.target.files && imgFile.target.files[0]) {
        this.fileAttr = '';
        Array.from(imgFile.target.files).forEach((file: File) => {
          this.fileAttr += file.name + ' - ';
        });
  
        // HTML5 FileReader API
        let reader = new FileReader();
        reader.onload = (e: any) => {
          let image = new Image();
          image.src = e.target.result;
          image.onload = rs => {
            let imgBase64Path = e.target.result;
          };
        };
        reader.readAsDataURL(imgFile.target.files[0]);
        
        // Reset if duplicate image uploaded again
        this.fileInput.nativeElement.value = "";
      } else {
        this.fileAttr = 'Choose File';
      }
    }




    handleFileInput($event: any) {
      console.log($event.target.files.item(0));
      this.fileToUpload = $event.target.files.item(0)
    }
  
    /*preview of image before upload */
    handleLogoFileInput(file: any) {
      this.showimageprewiew = true;
      var item = file.item(0);
      this.logoFileNameFile = file.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrlOfLogo = event.target.result;
      }
      reader.readAsDataURL(this.logoFileNameFile as File);
    }
  


  }