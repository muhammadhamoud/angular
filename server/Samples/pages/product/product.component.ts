import {Component, OnInit, NgZone} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Params, Router} from "@angular/router";


import { AuthService } from '../../services/index';
import { ProductService } from '../../services/index';
import { BasketService } from  '../../services/index';
import { DbAbstractionLayerService } from '../../services/index';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  id: string;
  
  product;

  /**
   * Product attributes
   */
  attributes = [];

  /**
   * Product tags
   */
  tags = [];

  /**
   * Attributes that user must choose
   */
  attributesToChoose = [];

  /**
   * Is user authorized
   */
  isAuth = false;

  /**
   * Items of product
   */

  items : number = 1;

  constructor(protected productService: ProductService,
              protected route: ActivatedRoute,
              protected basket: BasketService,
              protected zone: NgZone,
              protected router: Router,
              protected dal: DbAbstractionLayerService,
              protected authService: AuthService){
  }

  ngOnInit() {
    this.dal.getAuth().onAuthStateChanged(data => {
      if(data == null) {
        this.isAuth = false;
      } else { 
        this.isAuth =true;
      }
    });
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
      this.productService.getOneProduct(this.id).subscribe( product => {
        if(product.val() === 0) {
          this.product = {};
        } else if(product.val()){
          this.zone.run(() => {
            this.product = product.val()[0]['_source'];
            this.product['id'] = product.val()[0]['_id'];
          });
          this.getAttributes();
          this.getTags();
        }
      });

    });
  }
  /**
   * Get attributes of product
   */
  getAttributes(){
    let attributes = this.product['attributes'];
    if(attributes){
      for(let attrId in attributes){
      if(attributes.hasOwnProperty(attrId)){
        let attributeChilds = this.product['attributes'][attrId];
        this.productService.getOneAttribute(attrId).subscribe( attribute => {
          if(attribute.val()){
            let attributeObj = {
              id: '',
              name: '',
              childNames: []
            };
            attributeObj['id'] = attribute.val()['_id'];
            attribute = attribute.val()['_source'];
            attributeObj['name'] = attribute.name;
            for (let i = 0; i < attributeChilds.length; i++){
              let childKey = attributeChilds[i];
              for(let j = 0; j < attribute.childs.length; j++){
                if(childKey === attribute.childs[j].key){
                  attributeObj.childNames.push({
                    name: attribute.childs[j].name,
                    key: attribute.childs[j].key
                  });
                }
              }
            }
            this.zone.run(() => {
              this.attributes.push(attributeObj);
              if(attributeObj.childNames.length > 1){
                attributeObj['selectedValue'] = attributeObj.childNames[0].key;
                this.attributesToChoose.push(attributeObj);
              }
            });
          }
        });
      }
    }
    }
    
  }

  /**
   * Get tags of product
   */
  getTags(){
    let tags = this.product['tags'];
    if(tags){
      for (let i = 0; i < tags.length; i++){
      this.productService.getOneTag(tags[i]).subscribe( data => {
        if(data.val()){
          let tag = data.val()[0]['_source'];
          this.zone.run(() => {
            this.tags.push(tag);
          });
        }
      });
    }
    }
  }

  /**
   * Set value of selected attribute
   * @param index index in {@link attributesToChoose}
   * @param value 
   */
  changedAttrSelect(index, value){
    this.attributesToChoose[index]['selectedValue'] = value;
  }

  /**
   * Add product to basket
   */
  buyProduct(){
    let buyObj = this.generateBuyObject();
    this.basket.addProduct(buyObj);
  }

  generateBuyObject() {
    let buyObj = {
      id: this.id,
      fullId: this.id + "?",
      attributes: [],
      product: this.product,
      items: +this.items
    };
    buyObj.attributes = this.attributesToChoose.map(item => {
      let obj = {
        id: item.id,
        name: item.name,
        value: item.selectedValue
      };
      buyObj.fullId += "" + obj.id + "=" + obj.value + ";";
      return obj;
    });
    return buyObj;
  }

  /**
   * Redirect to login page
   */
  login(){
    this.router.navigate(['login']);
  }

}
