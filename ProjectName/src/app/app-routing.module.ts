import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Binding1Component } from './demo/binding1/binding1.component';
import { TwoWaysBinding2Component } from './demo/two-ways-binding2/two-ways-binding2.component';
import { Eventbinding3Component } from './demo/eventbinding3/eventbinding3.component';
import { Four0four4Component } from './demo/four0four4/four0four4.component';
import { Propertymodel5Component } from './demo/propertymodel5/propertymodel5.component';
import { Thepipes6Component } from './demo/thepipe6/thepipe6.component';
import { Custompipes7Component } from './demo/custompipes7/custompipes7.component';
import { CalculetteComponent } from './exo/calculette/calculette.component';
import { ConvertisseurComponent } from './exo/convertisseur/convertisseur.component';
import { StructuralsDirectives8Component } from './demo/structurals-directives8/structurals-directives8.component';
import { Exos3CustomCartsComponent } from './exo/custom-carts3/custom-carts3.component';
import { AttributesDirectives9Component } from './demo/attributes-directives9/attributes-directives9.component';
import { AttributesDirectivesCustom10Component } from './demo/attributes-directives-custom10/attributes-directives-custom10.component';
import { CustomsDirectives4Component } from './exo/customs-directives4/customs-directives4.component';
import { ParentComponent } from './demo/input-output11/parent/parent.component';
import { ParentComponentExo } from './exo/Input-Output-Exo5/parent/parent.component';
import { Di12Component } from './demo/di12/di12.component';

const routes: Routes = [                              // A rajouter pour le routeur HomeComponent.
  {path: "", component: HomeComponent},

  // Simple path pour le routage :
  // {path:"demo/binding1", component: Binding1Component},
  // {path:"demo/two-ways-binding2", component: TwoWaysBinding2Component},
  // {path:"demo/eventbinding3", component: Eventbinding3Component},
  // {path:"demo/four0four4", component: Four0four4Component},
  // {path:"demo/propertymodel5", component: Propertymodel5Component},
  // {path:"demo/thepipe6", component : Thepipes6Component},
  // {path:"demo/custompipes7", component: Custompipes7Component},

  // Path imbriqué pour routage :
  {path: "demo", children : [
    {path:"binding1", component: Binding1Component},
    {path:"two-ways-binding2", component: TwoWaysBinding2Component},
    {path:"eventbinding3", component: Eventbinding3Component},
    {path:"four0four4", component: Four0four4Component},
    {path:"propertymodel5", component: Propertymodel5Component},
    {path:"thepipe6", component : Thepipes6Component},
    {path:"custompipes7", component: Custompipes7Component},
    {path: "structuralsDirectives8", component: StructuralsDirectives8Component},
    {path: "attributes-directives9", component: AttributesDirectives9Component},
    {path: "attributes-directives-custom10", component: AttributesDirectivesCustom10Component},
    {path: "input-output11", component : ParentComponent},
    {path: "di12", component: Di12Component}
  ]},

  {path: "exo", children : [
    {path:"calculette", component: CalculetteComponent},
    {path:"convertisseur", component: ConvertisseurComponent},
    {path:"customCards3", component: Exos3CustomCartsComponent},
    {path:"customs-directives4", component: CustomsDirectives4Component},
    {path: "in-out-exo5", component: ParentComponentExo}
  ]},
  
  {path: "**", component: Four0four4Component}   // Pour rediriger vers page 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],    // /!\ Utiliser {useHash : true} sur Mac
  exports: [RouterModule]
})
export class AppRoutingModule { }
