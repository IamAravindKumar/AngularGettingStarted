import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.updateCurrentTabstate('home');
  }
}
