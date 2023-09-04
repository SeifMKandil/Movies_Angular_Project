import { Component } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

   movieDetail:any;
  
  
  constructor(private service:MovieApiService , private route: ActivatedRoute) {}
  title = 'Movies_Project';
  id = this.route.snapshot.params['id'];
  private detailUrl  = 'https://api.themoviedb.org/3/movie/' + this.id + '?api_key=f2d7215515a34f350462609e31a408ef';
  ngOnInit() {
    this.service.get_Movies_Details(this.detailUrl).subscribe(response => {
      
      this.movieDetail = response;
    })

}
}