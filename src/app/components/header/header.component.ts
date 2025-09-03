import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="flex flex-col justify-between items-center p-4 bg-transparent">
      <div class="flex flex-row justify-between items-center gap-10 mb-4">
        @for(navigation of nav; track $index){
        <ul >
          <li class="transform transition duration-400 hover:scale-105"><a class="text-white uppercase cursor-pointer ">{{navigation.title}} ></a></li>
        
        </ul>
        }
        
      </div>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

 nav = [
    {
      title: 'A propos de nous',
      link: '/about-us'
    },
    {
      title: 'Commander un bouquet',
      link: '/order'
    },
    {
      title: 'Mariages',
      link: '/weddings'
    },
    {
      title: 'Deuil',
      link: '/mourning'
    },
    {
      title: 'Entreprise',
      link: '/business'
    }
  ]
}
