import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { CompanyComponent } from './company/company.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    ProjectComponent,
    CompanyComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

console.log('%cHello!', 'color:orange;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 4px black;font-weight:bold');
console.log('%cThanks for checking out my portfolio!', 'color:orange;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 2px black;font-weight:bold');
console.log('%cIf you\'re in here looking to see how this page is built, I\'ll save you a bit of time, this app is on my GitHub! %chttps://github.com/Burn-E99/ean-milligan-portfolio/', 'color:orange;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 2px black;font-weight:bold', 'color:lightblue;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold');
console.log('%c~Ean Milligan', 'color:orange;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 2px black;font-weight:bold');
