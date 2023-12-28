import { Component,OnInit, importProvidersFrom } from '@angular/core';
import { MovieAppServiceService } from '../../service/movie-app-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule,HttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent  implements OnInit{
  getMovieDetailsResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  constructor(private service:MovieAppServiceService,private router:ActivatedRoute){}
  ngOnInit(): void {
    let getParamId=this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'getmoviedetails#');
      this.getMovieDetailsResult=result;
    });
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getMovieVideo#');
      result.results.forEach((element:any) => {
        if(element.type=="Trailer"){
          this.getMovieVideoResult=element.key;
        }
        
      });
    });
  }

  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'moviecast#');
      this.getMovieCastResult=result.cast;
    });
  }

}
