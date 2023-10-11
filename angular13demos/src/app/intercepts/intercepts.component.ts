import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-intercepts',
  template: ``,
  styles: [``]
})
export class InterceptsComponent {
  constructor(private http:HttpClient){}

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data=>{ 

    });
    this.http.get('https://jsonplaceholder.typicode.com/posts/2/commentsxyz')
      .subscribe(data=>{ 

    });
    this.http.get('https://jsonplaceholder.typicode.com/comments/2')
      .subscribe(data=>{ 

    });

  }
}
