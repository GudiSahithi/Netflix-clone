import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieAppServiceService } from '../../service/movie-app-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  constructor(private service:MovieAppServiceService){}
  ngOnInit(): void {
  }
  searchResult:any;

  searchForm=new FormGroup({
    'moviename':new FormControl(null)
});
  
  submitForm(){
    console.log(this.searchForm.value,'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result,'searchmovie##');
      this.searchResult=result.results;
    });
  }
}
