import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { HomeComponent } from "./home.component/home.component"; 
import { PlacesComponent } from "./places.component/places.component"; 
import { TrailsComponent } from "./trails.component/trails.component"; 

export const ADMIN_ROUTES : Routes = [
    {
        // /admin -> /admin/shop
        path: 'admin',
        component: AdminLayout,
        children: [
            // /admin/home
            {path:"home", component: HomeComponent},
            // /admin/places
            {path:"places", component: PlacesComponent},
            {path:"trails", component: TrailsComponent},
            // /admin
            {path: '', pathMatch: 'full', redirectTo: 'home' }
        ]
            
    }
]