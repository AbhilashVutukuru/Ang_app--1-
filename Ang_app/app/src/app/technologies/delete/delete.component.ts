import { Component, Output, Input, EventEmitter, Inject } from '@angular/core';
// import { MDBModalRef } from 'ng-uikit-pro-standard';
import { ModalService } from 'src/app/modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  // @Input() foodName: string = '';
  // @Input() selectedFoodDetails : any;
  // @Output() deleteConfirmed = new EventEmitter<number>();
  // @Output() deleteCanceled = new EventEmitter<number>();

  // confirmDelete() {
  //   this.deleteConfirmed.emit();
  // }

  // cancelDelete() {
  //   this.deleteCanceled.emit();
  // }

  //   confirmDelete(id:number): void {
  //   // Emit the ID of the selected food for deletion
  //   this.deleteConfirmed.emit(this.selectedFoodDetails.id);
  //   console.log(this.selectedFoodDetails.id,'delete')
  // }

  //   confirmDelete(id: number): void {
  //   // Emit the ID of the selected food for deletion
  //   this.deleteConfirmed.emit(id);
  //   this.selectedFoodDetails = null;
  //   setTimeout(() => {
  //     this.selectedFoodDetails = false;
  //     // Set selectedFoodDetails to null after successful deletion
  //     // console.log('selectedFoodDetails:', this.selectedFoodDetails);
  //   }, 3000);
  // }

  // @Input() foodDetails: any;
  // @Output() deleteConfirmed = new EventEmitter<boolean>();

  // constructor(private modalService: ModalService) {}
  // closeModel() {
  //   this.modalService.closeModal();
  // }

  // confirmDelete() {
    
  //   this.deleteConfirmed.emit(true);
  // }

  // cancelDelete() {
    
  //   this.deleteConfirmed.emit(false);
  // }

  // openModel(){
  //   const modalDiv = document.getElementById('myModel')
  //   if(modalDiv != null){
  //     modalDiv.style.display= 'none';
  //   }
  // }

  // closeModel(){
  //   const modalDiv = document.getElementById('myModel')
  //   if(modalDiv){
  //     modalDiv.style.display= 'none';
  //   }
  // }

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmDelete(): void {
    this.dialogRef.close(true);
  }

  cancelDelete(): void {
    this.dialogRef.close(true);
  }

}

// const inputVariable = "123457788";

// // Split the string into two parts
// const halfLength = Math.floor(inputVariable.length / 2);
// const firstPart = inputVariable.slice(0, halfLength);
// const secondPart = inputVariable.slice(halfLength);

// // Reverse each part and store in an array
// const reversedParts = [
//   firstPart.split('').reverse().join(''),
//   secondPart.split('').reverse().join('')
// ];

// // Display the result
// console.log("Original Input:", inputVariable);
// console.log("Reversed Parts:", reversedParts);
