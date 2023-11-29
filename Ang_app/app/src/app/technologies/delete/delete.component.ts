import { Component, Output, Input, EventEmitter } from '@angular/core';
// import { MDBModalRef } from 'ng-uikit-pro-standard';
import { ModalService } from 'src/app/modal.service';

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

  @Input() foodDetails: any;
  @Output() deleteConfirmed = new EventEmitter<boolean>();

  constructor(private modalService: ModalService) {}
  closeModel() {
    this.modalService.closeModal();
  }

  confirmDelete() {
    // Emit an event to inform the parent component (AppComponent) that deletion is confirmed
    this.deleteConfirmed.emit(true);
  }

  cancelDelete() {
    // Emit an event to inform the parent component (AppComponent) that deletion is canceled
    this.deleteConfirmed.emit(false);
  }

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

}
