import { Routes } from "@angular/router";
import { WeddingsComponent } from "./weddings.component";

export const routes :Routes = [
    {
        path:'',
        component:WeddingsComponent,
        children: [{
            path:'', redirectTo:'weddings', pathMatch:'full'
        },
    {
        path:'place',
        loadComponent: async ()=> (await import('./views/place/place.component')).PlaceComponent
    },
    {
        path:'ceremonyLaic',
        loadComponent: async () => (await import('./views/ceremonyLaic/ceremony-laic.component')).CeremonyLaicComponent
    },
    {
        path:'accessory',
        loadComponent: async () => (await import('./views/accessory/accessory.component')).AccessoryComponent
    },
    {
        path:'ceremonyReligious',
        loadComponent: async () => (await import('./views/ceremonyReligious/ceremony-religious.component')).CeremonyReligiousComponent
    }
]
    }
]