import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  // technologies = [
  //   {
  //     name: 'Azure',
  //     imageUrl: 'http://www.indowestunited.com/images/t3.png',
  //     description: 'A powerful web application framework.'
  //   },
  //   {
  //     name:'amazon web services',
  //     imageUrl:'http://www.indowestunited.com/images/t1.jpg',
  //     description:'A powerful web application framework.'
  //   },
  //   {
  //     name:'ios',
  //     imageUrl:'http://www.indowestunited.com/images/t4.jpg',
  //     description:'A powerful web application framework.'
  //   },
  //   {
  //     name:'Android',
  //     imageUrl:'http://www.indowestunited.com/images/t5.jpg',
  //     description:'A powerful web application framework.'
  //   },
  //   {
  //     name:'.Net Framework',
  //     imageUrl:'http://www.indowestunited.com/images/t6.jpg',
  //     description:'A powerful web application framework.'
  //   },
  //   {
  //     name:'Microsoft Sql Server',
  //     imageUrl:'http://www.indowestunited.com/images/t7.jpg',
  //     description:'A powerful web application framework.'
  //   },
  //   {
  //     name:'java',
  //     imageUrl:'http://www.indowestunited.com/images/t8.jpg',
  //     description:'A powerful web application framework.'
  //   },
  //   {
  //     name:'Oracle',
  //     imageUrl:'http://www.indowestunited.com/images/t9.jpg',
  //     description:'A powerful web application framework.'
  //   },
  //   {
  //     name:'sales force',
  //     imageUrl:'http://www.indowestunited.com/images/t10.jpg',
  //     description:'A powerful web application framework.'
  //   }
    
  // ];


//   isUpdateMode = false;
//   selectedEmployee: Employee | null = null;
//   selectedTechnologies: string[] = [];


//   employeeForm: FormGroup;
//   submitted = false;
//   employees: Employee[] = [];
//   employee = {
//     name: '',
//     dob: '',
//     email: '',
//     gender: '',
//     technologies: []
//   };

//   constructor(private formBuilder: FormBuilder) {
//     this.employeeForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       dob: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       gender: '',
//       technologies: this.selectedTechnologies,
//       tech:'',
//       html:false,
//       css:false,
//       BigData:false,
//       Java:false,
//     });
//   }
//   // selectedGender: string = '';
 

  
//   onSubmit() {
//     if (this.employeeForm.valid) {
//       if (this.isUpdateMode) {
//         // Update employee details
//         if (this.selectedEmployee) {
//           const updatedEmployee: Employee = this.employeeForm.value;
          
//           this.employees = this.employees.map((employee) =>
//             employee === this.selectedEmployee ? updatedEmployee : employee
//           );
//         }
//         this.isUpdateMode = false;
//         this.selectedEmployee = null;
//       } else {
//         const selectedTechnologies: string[] = [];

        
//         // Add a new employee
//         this.employees.push(this.employeeForm.value);
//         console.log(this.employees)
            
//         // if (this.employeeForm.get('html').value) {
//         //   selectedTechnologies.push('html');
//         // }
        
//         // if (this.employeeForm.get('css').value) {
//         //   selectedTechnologies.push('css');
//         // }
//       }
//       this.employeeForm.reset();
//     }
//     this.submitted = true; // This line should be placed outside the if block.
//   }
  

//   editEmployee(employee: Employee) {
//     this.isUpdateMode = true;
//     this.selectedEmployee = employee;
//     this.selectedTechnologies = employee.technologies;
//     this.employeeForm.setValue(employee);
//   }

//   deleteEmployee(employee: Employee) {
//     const index = this.employees.indexOf(employee);
//     if (index !== -1) {
//       this.employees.splice(index, 1);
//     }
//     this.resetForm();
//   }
//   resetForm() {
//     this.employeeForm.reset();
//     this.selectedEmployee = null;
//     this.isUpdateMode = false;
//   }

foods: any[] = [];
foodToAdd: any = { name: '', type: '', calories: '', rating: '' }; // Data for adding a new food
foodToUpdate: any = null; // Data for updating an existing food
addFoodForm: FormGroup;
selectedValue: string = '';


constructor(private http: HttpClient, private formBuilder: FormBuilder, private modalService:ModalService) {
  this.addFoodForm = this.formBuilder.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    // calories: ['',Validators.required],
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    rating: ['', Validators.required]

  });
}

fetchData() {
  this.http.get<any>('https://localhost:7124/api/v1/foods').subscribe(data => {
    const ratingData = JSON.parse(localStorage.getItem('ratingData'));
    // this.foods = data.value;
    this.foods = ratingData;
  });

}

// addFood() {
//   if (this.addFoodForm.valid) {
//     const newFood = this.addFoodForm.value;
//     console.log(this.addFoodForm)

//     this.http.post<any>('https://localhost:7124/api/v1/foods', newFood).subscribe(response => {

//       this.foods.push(response);

//       this.addFoodForm.reset();
//     });
//   }
// }

showSuccessMessage = false;
UpdateMessage = false;
deleteMessage = false;
enteredRating: number;
isDeleteDialogVisible: boolean = false;

selectedFoodDetails!: any;


openDeleteDialog(id: number) {
  this.selectedFoodDetails = this.foods.find(food => food.id === id);
  this.isDeleteDialogVisible = true;
  this.modalService.openModal();
}

// openModel(){
//   const modelDiv = document.getElementById('myModel')
//   if(modelDiv){
//     modelDiv.style.display = 'block';
//   }
// }

openEdit(){
const modelEdit = document.getElementById('myModel')
if(modelEdit != null){
  modelEdit.style.display = 'block';
}
}

closeEdit(){
  const modalEdit = document.getElementById('myModel')
  if(modalEdit != null){
    modalEdit.style.display = 'none'
  }
}
addFood() {
  // localStorage.clear();
  // return;
  if (this.addFoodForm.valid) {
    const newFood = this.addFoodForm.value;
    this.foods.push(newFood);
    this.showSuccessMessage = true;
    // Calculate the "calories" value based on selected checkboxes
    const selectedCalories = ['checkbox1', 'checkbox2', 'checkbox3', 'checkbox4']
      .filter(checkboxName => newFood[checkboxName])
      .map(checkboxName => {
        switch (checkboxName) {
          case 'checkbox1':
            return 900;
          case 'checkbox2':
            return 1000;
          case 'checkbox3':
            return 1100;
          case 'checkbox4':
            return 1200; // If you have a checkbox 4
          default:
            return 0;
        }
      });
    const totalCalories = selectedCalories.reduce((acc: number, currentValue: number) => acc + currentValue, 0);
    newFood.calories = totalCalories;
    // Send a POST request to add the new food
    this.http.post<any>('https://localhost:7124/api/v1/foods', newFood).subscribe(response => {
      // this.foods.push(response);
      if (response.id) {
        this.http.get<any>('https://localhost:7124/api/v1/foods').subscribe(data => {
          // this.foods = data.value;
          const combinedData = this.foods.map((e, index) => {
            const id = data.value[index].id
            return { ...e, id }
          })
          localStorage.setItem('ratingData', JSON.stringify(combinedData));
        });
      }
      this.enteredRating = this.addFoodForm.value.rating;
      this.addFoodForm.reset();
      this.fetchData();
    });
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }
}


updateFood() {
  if (this.foodToUpdate) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `https://localhost:7124/api/v1/foods/${this.foodToUpdate.id}`;
    this.http.put(url, this.foodToUpdate, { headers }).subscribe(response => {
      const ratingData = JSON.parse(localStorage.getItem('ratingData'));
      const updatedData = ratingData.map((obj) =>{
        if(obj.id === this.foodToUpdate.id){
          const data = this.foodToUpdate;
          obj.name = data.name;
          obj.rating = data.rating;
          obj.type = data.type;
          obj.calories = data.calories;
          obj.checkbox1 = data.checkbox1;
          obj.checkbox2 = data.checkbox2;
          obj.checkbox3 = data.checkbox3;
          return obj;
        }
        else {
          return obj;
        }
      })
      // console.log(updatedData,'updated')
      localStorage.setItem('ratingData', JSON.stringify(updatedData));
      this.foodToUpdate = null; // Clear the update mode
      this.fetchData(); // Refresh the data after updating the food
    });
  }
  this.UpdateMessage = true;
  setTimeout(() => {
    this.UpdateMessage = false;
  }, 5000);
}


// deleteFood(id: number): void {
//   if (id) {console.log(id, 'display')
//     // Display a confirmation dialog
//     const userConfirmed = confirm('Are you sure you want to delete this food?');

//     if (userConfirmed) {
//       const url = `https://localhost:7124/api/v1/foods/${id}`;

//       this.http.delete(url).subscribe(
//         (response) => {
//           if (response === null) {
//             const ratingData = JSON.parse(localStorage.getItem('ratingData')) || [];
//             const newRating = ratingData.filter((e) => e.id !== id);
//             localStorage.setItem('ratingData', JSON.stringify(newRating));
//           }
//           this.fetchData();
//           this.deleteMessage = true;
//           this.selectedFoodDetails = true;
//           setTimeout(() => {
//             this.deleteMessage = false;
//           }, 5000);
//         },
//         (error) => {
//           console.error('Error deleting food:', error);
//           this.deleteMessage = false; // Set this to false to avoid showing the success message on error
//         }
//       );
//     } else {
//       // User clicked "Cancel" in the confirmation dialog
//       console.log('Deletion canceled by user.');
//     }
//   }
// }

onDeleteConfirmed(isConfirmed: boolean): void {
  if (isConfirmed && this.selectedFoodDetails && this.selectedFoodDetails.id) {
    const idToDelete = this.selectedFoodDetails.id;
    const url = `https://localhost:7124/api/v1/foods/${idToDelete}`;

    this.http.delete(url).subscribe(response => {
      if (response === null) {
        const ratingData = JSON.parse(localStorage.getItem('ratingData')) || [];
        const newRating = ratingData.filter((e) => e.id !== idToDelete);
        localStorage.setItem('ratingData', JSON.stringify(newRating));
      }
      this.fetchData();
      console.log("deleted", idToDelete);
      this.deleteMessage = true;
      setTimeout(() => {
        this.deleteMessage = false;
      }, 5000);
    });
  }
  // Clear selectedFoodDetails after deletion or cancellation
  this.selectedFoodDetails = null;
}

cancelDelete() {
  this.isDeleteDialogVisible = false;
}

selectedType!: string;

updateSelectedType(type: string) {
  this.selectedType = type;
}
selectedCalorie!: number;

updatedSelectedCalorie(types: number) {
  this.selectedCalorie = types
}

updateSelectedValue() {
  const selectedCheckboxes = ['Checkbox 1', 'Checkbox 2', 'Checkbox 3', 'Checkbox 4']
    .filter(checkboxName => this.addFoodForm.get(checkboxName)?.value);

  this.selectedValue = selectedCheckboxes.join(', ');
}

userRating: number | null = null;
onRatingChanged(rating: number): void {
  this.userRating = rating;
  
}

updateEnteredRating(){
  this.enteredRating = this.addFoodForm.value.rating;  }

getStarArray(rating: number): any[] {
  const stars = Array(5).fill('empty');
  const integerPart = Math.floor(rating);
  const decimalPart = rating - integerPart;

  for (let i = 0; i < integerPart; i++) {
    stars[i] = 'filled';
  }

  if (decimalPart > 0) {
    const percentage = decimalPart * 100;
    if (percentage >= 15 && percentage < 95) {
      // If decimal part is between 25% and 75%, set the star to partially filled
      stars[integerPart] = `partial-${percentage}`;
    } else if (percentage >= 95) {
      // If decimal part is 75% or more, set the next star to be fully filled
      stars[integerPart] = 'filled';
    }
  }

  return stars;
}

getTooltipText(star: string, rating: number): string {
  if (star.startsWith('partial-')) {
    const percentage = parseInt(star.replace('partial-', ''), 10);
    // return `${rating} - ${percentage}% Filled`;
    return `${rating} out of 5`;
  } else if (star === 'filled') {
    return `${rating} out of 5`;
  } else {
    return `${rating} out of 5`;
  }
}



}

// interface Employee {
//   name: string;
//   dob: string;
//   email: string;
//   gender: string;
//   technologies: [];
//   tech: string;
//   html:boolean;
//   css:boolean;
//   BigData:boolean;
//   Java:boolean;
// }
