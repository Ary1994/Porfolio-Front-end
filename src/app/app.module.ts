import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreMiComponent } from './component/sobre-mi/sobre-mi.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SkillsComponent } from './component/skills/skills.component';
import { FactsComponent } from './component/facts/facts.component';
import { NavbarMovileComponent } from './component/navbar-movile/navbar-movile.component';
import { PorfolioComponent } from './component/porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { LogoargComponent } from './component/logoarg/logoarg.component';
import { BannerComponent } from './component/banner/banner.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducaccionComponent } from './component/educaccion/educaccion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    NavbarComponent,
    SkillsComponent,
    FactsComponent,
    NavbarMovileComponent,
    PorfolioComponent,
    HeaderComponent,
    LogoargComponent,
    BannerComponent,
    ExperienciaComponent,
    EducaccionComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
