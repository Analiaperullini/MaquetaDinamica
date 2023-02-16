import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { BannerComponent } from './banner/banner.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ErrorComponent } from './error/error.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panel/panel.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RegistroComponent } from './registro/registro.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    LoginComponent,
    BannerComponent,
    EducacionComponent,
    ErrorComponent,
    ExperienciaComponent,
    FooterComponent,
    PanelComponent,
    PresentacionComponent,
    ProyectosComponent,
    RegistroComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
