import { Component, OnInit } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageTitle: string = 'Acme Product Management';
  currentTab: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void{
    this.productService.pathName.subscribe({
      next: pathName => {
        setTimeout(() => this.currentTab = pathName)
      }
    });
  }
}
