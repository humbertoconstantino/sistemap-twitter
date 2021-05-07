import { ApiTweet, MyTweet, Tweet, UserTweet } from './my-tweets.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  baseUrl = "http://localhost:3000"
  baseUrlJsonServer =  "http://localhost:3001/tweets"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
        
      }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 500,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  // CRIANDO TWEET NA API JSON-SERVER
  create(tweet: MyTweet):Observable<MyTweet>{
    return this.http.post<MyTweet>(this.baseUrlJsonServer, tweet)
  }

  // LENDO OS TWEETS DA API JSON-SERVER //
  read(): Observable<MyTweet[]> {
   return this.http.get<MyTweet[]>(this.baseUrlJsonServer)
   }
  
  // GET NA API DO TWITTER (ARQUIVO DISPONIBILIZADO POR VOCÊS QUE SE ENCONTRA NA PASTA BACKEND-TWITTER)
  searchUser(user: string): Observable<ApiTweet>{
    return this.http.get<ApiTweet>(this.baseUrl + `/users_search?q=${user}`)
  }
}

