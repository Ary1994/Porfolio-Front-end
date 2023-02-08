import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreMiComponent } from './component/sobre-mi/sobre-mi.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SkillsComponent } from './component/skills/skills.component';
import { FactsComponent } from './component/facts/facts.component';
import { NavbarMovileComponent } from './component/navbar-movile/navbar-movile.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    NavbarComponent,
    SkillsComponent,
    FactsComponent,
    NavbarMovileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
