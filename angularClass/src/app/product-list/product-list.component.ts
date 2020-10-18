import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  jsonIterable = [
    {
      id: 'p1',
      category: 'CAT_1',
      title: 'Esta es la clase de los niños 1',
      image: 'assets/01.jpg',
      description: 'My Description',
      action: 'Read more ..',
      urlAction: 'https://elpais.com/noticias/premios-the-best-fifa/',
    },
    {
      id: 'p2',
      category: 'CAT_1',
      title: 'Esta es la clase de los niños 2',
      image: 'assets/02.jpg',
      description: 'My Description',
      action: 'Read more ..',
      urlAction: 'https://elpais.com/noticias/premios-the-best-fifa/',
    },
    {
      id: 'p3',
      category: 'CAT_2',
      title: 'Esta es la clase de los niños 3',
      image: 'assets/03.jpg',
      description: 'My Description',
      action: 'Read more ..',
      urlAction: 'https://elpais.com/noticias/premios-the-best-fifa/',
    },
    {
      id: 'p4',
      category: 'CAT_2',
      title: 'Esta es la clase de los niños 3',
      image: 'assets/04.jpg',
      description: 'My Description',
      action: 'Read more ..',
      urlAction: 'https://elpais.com/noticias/premios-the-best-fifa/',
    },
    {
      id: 'p5',
      category: 'CAT_2',
      title: 'Esta es la clase de los niños 3',
      image: 'assets/05.jpg',
      description: 'My Description',
      action: 'Read more ..',
      urlAction: 'https://elpais.com/noticias/premios-the-best-fifa/',
    },
    {
      id: 'p6',
      category: 'CAT_3',
      title: 'Esta es la clase de los niños 3',
      image: 'assets/06.jpg',
      description: 'My Description',
      action: 'Read more ..',
      urlAction: 'https://elpais.com/noticias/premios-the-best-fifa/',
    },
  ];
  constructor(
    private activatedRoute: ActivatedRoute
    ) {
    const id = this.activatedRoute.snapshot.params.category;

    //const id = window.location.pathname.split('/').pop();

    this.jsonIterable =
    this.jsonIterable.filter((p) => (p.category === id));
  }



  quienDioClick(yo): void {
    console.log('desde el padre: ', yo);
  }

  ngOnInit(): void {
  }

}
