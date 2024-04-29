import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CustomerComponent } from './components/customer/customer.component';
import { DepotsComponent } from './components/depots/depots.component';
import { ProductComponent } from './components/product/product.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { OrderComponent } from './components/order/order.component';
import { RequirementsPlanningComponent } from './components/requirements-planning/requirements-planning.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ProductionsComponent } from './components/productions/productions.component';

export const routes: Routes = [
    {
        path: "login",
        component:LoginComponent
    },
    {
        path: "requirements-planning/:orderId",
        component: RequirementsPlanningComponent,
        canActivate:[() => inject(AuthService).isAuthenticated()]
    },
    {
        path:"",
        component:LayoutsComponent,
        canActivateChild: [() => inject(AuthService).isAuthenticated()],
        children:[
            {
                path: "",
                component:HomeComponent
            },
            {
                path:"customers",
                component:CustomerComponent
            },
            {
                path:"depots",
                component:DepotsComponent
            },
            {
                path:"products",
                component: ProductComponent
            },
            {
                path:"recipes",
                component: RecipeComponent
            },
            {
                path:"recipe-details/:id",
                component: RecipeDetailComponent
            },
            {
                path:"orders",
                component: OrderComponent
            },
            {
                path: "invoices/:type",
                component: InvoicesComponent
            },
            {
                path: "productions",
                component: ProductionsComponent
            }
        ]
    }
];
