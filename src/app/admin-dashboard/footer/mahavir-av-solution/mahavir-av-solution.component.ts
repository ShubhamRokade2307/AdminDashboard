import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  selector: 'app-mahavir-av-solution',
  templateUrl: './mahavir-av-solution.component.html',
  styleUrls: ['./mahavir-av-solution.component.scss']
})
export class MahavirAVSolutionComponent implements OnInit {
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




   
  
  }