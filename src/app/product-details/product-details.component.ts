import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgClass, NgIf, NgStyle} from "@angular/common";
import {IProduct} from "../catalog/product.model";

@Component({
  selector: 'bot-product-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName
  }

  getDiscountedClasses(product: IProduct) {
    return product.discount > 0 ? ['strikethrough'] : [];
  }

  addToCart(product: IProduct) {
  }
}
