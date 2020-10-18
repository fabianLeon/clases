import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent{

  constructor(private router: Router){}
  jsonIterable = [
    {
      id: 'CAT_1',
      title: 'Esta es la clase de los niños 1',
      image: 'assets/leonel.jpeg',
      description: 'My Description',
      action: 'Read more ..',
      urlAction: 'https://elpais.com/noticias/premios-the-best-fifa/',
    },
    {
      id: 'CAT_2',
      title: 'Esta es la clase de los niños 2',
      image: 'assets/leonel.jpeg',
      description: 'My Description',
      action: 'Read more ..',
      urlAction: 'https://elpais.com/noticias/premios-the-best-fifa/',
    },
    {
      id: 'CAT_3',
      title: 'Esta es la clase de los niños 3',
      image: 'assets/leonel.jpeg',
      description: 'My Description',
      action: 'Read more ..',
      urlAction: 'https://elpais.com/noticias/premios-the-best-fifa/',
    },
  ];

  quienDioClick(yo): void {
    this.router.navigate(['/product/' + yo.id]);
  }

}
