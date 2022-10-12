import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';      // Routeur de base
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import * as M from 'materialize-css';


// ******************************************************
// Home
import { HomeComponent } from './home/home.component';

// Shared
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { RenderDirective } from './Shared/directives/render.directive';
import { HightlightDirective } from './Shared/directives/hightlight.directive';
import { BolderDirective } from './Shared/directives/bolder.directives';
import { ToasterPersoDirective } from './Shared/directives/toaster-perso.directive';
import { BoundedParagraphDirective } from './Shared/directives/bounded-paragraph.directives';

// Demos :
import { Binding1Component } from './demo/binding1/binding1.component';
import { TwoWaysBinding2Component } from './demo/two-ways-binding2/two-ways-binding2.component';
import { Eventbinding3Component } from './demo/eventbinding3/eventbinding3.component';
import { Four0four4Component } from './demo/four0four4/four0four4.component';
import { Propertymodel5Component } from './demo/propertymodel5/propertymodel5.component';
import { Thepipes6Component } from './demo/thepipe6/thepipe6.component';
import { Custompipes7Component } from "./demo/custompipes7/custompipes7.component";
import { StructuralsDirectives8Component } from './demo/structurals-directives8/structurals-directives8.component';
import { AttributesDirectives9Component } from './demo/attributes-directives9/attributes-directives9.component'
import { AttributesDirectivesCustom10Component } from './demo/attributes-directives-custom10/attributes-directives-custom10.component';
import { ParentComponent } from './demo/input-output11/parent/parent.component';
import { ChildComponent } from './demo/input-output11/child/child.component';

// Exos :
import { CalculetteComponent } from './exo/calculette/calculette.component';
import { ConvertisseurComponent } from './exo/convertisseur/convertisseur.component';
import { Exos3CustomCartsComponent } from './exo/custom-carts3/custom-carts3.component';
import { CustomsDirectives4Component } from './exo/customs-directives4/customs-directives4.component';
// Exo 5
import { ParentComponentExo } from "./exo/Input-Output-Exo5/parent/parent.component";
import { ChildComponentExo } from "./exo/Input-Output-Exo5/child/child.component";
// Exo 6


// Pipes :
import { PowPipe } from './demo/custompipes7/pow.pipes';
import { ConvertDegresPipe } from './exo/convertisseur/convertDegres.pipe';
import { CurrencyConvertorPipe } from './exo/convertisseur/currencyConvertor.pipe';
import { InvertorPipe } from './exo/convertisseur/invertor.pipe';
import { SecondToYearMonthDaysPipe } from "./exo/convertisseur/convertTime.pipe";
import { UnComponent } from './demo/obs20/un/un.component';
import { DeuxComponent } from './demo/obs20/deux/deux.component';
import { TroisComponent } from './demo/obs20/trois/trois.component';
import { Exos6PromiseComponent } from './exo/promise-exo6/promise-exo6.component';
// ******************************************************


M.AutoInit()


// Décorateur :
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Binding1Component,
    TwoWaysBinding2Component,
    Eventbinding3Component,
    CalculetteComponent,
    Four0four4Component,
    Propertymodel5Component,
    Thepipes6Component,
    Custompipes7Component,
    PowPipe,
    ConvertisseurComponent,
    ConvertDegresPipe,
    CurrencyConvertorPipe,
    InvertorPipe,
    SecondToYearMonthDaysPipe,
    StructuralsDirectives8Component,
    Exos3CustomCartsComponent,
    AttributesDirectives9Component,
    AttributesDirectivesCustom10Component,
    RenderDirective,
    HightlightDirective,
    BolderDirective,
    ToasterPersoDirective,
    BoundedParagraphDirective,
    CustomsDirectives4Component,
    ParentComponent,
    ChildComponent,
    
    // Demo Obs 20
    UnComponent,
    DeuxComponent,
    TroisComponent,
    // Exo 5
    ParentComponentExo,
    ChildComponentExo,
    
    // Exo 6 :
    Exos6PromiseComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],                          // BLL : Business Logic Layer (Règles) Ajout utiliseur age > 18ans + HTTP (API)
  bootstrap: [AppComponent]
})
export class AppModule { }
