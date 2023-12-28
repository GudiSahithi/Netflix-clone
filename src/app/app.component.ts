import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent,SearchComponent,MovieDetailsComponent,RouterLink,RouterLinkActive,HttpClientModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'netflix';
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
      this.navbg={
        'background-color':'#000000'
      }
    }
    else{
      this.navbg={}
    }
  }
}
