import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Promises';

  ngOnInIt() {
    console.log('This is init method');
  }
  
  simpleAlert() {
    Swal.fire('Hello World!');
  }
  
  alertWithSuccess() {
    Swal.fire('Thank you..', 'You submitted successfully!', 'success');
  }
  
  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it',
      cancelButtonText: 'No, Keep it'
    }).then((result) => {
      if(result.value) {
        Swal.fire(
          'Deleted',
          'Your imagianry file has been deleted.',
          'success'
        )
      } else if (result.dismiss == Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe',
          'error'
        )
      }
    })
  }
}
