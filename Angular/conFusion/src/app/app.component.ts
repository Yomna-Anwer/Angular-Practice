//this provides us with the ability to define a component
//So, this will define one component that forms part of our Angular application. 
import { Component } from '@angular/core'; 

// this is a component decorator
@Component({
  selector: 'app-root', // make it able to use as a tag in the HTML file
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion';
}
