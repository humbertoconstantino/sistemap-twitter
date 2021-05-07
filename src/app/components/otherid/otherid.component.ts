import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyTweet, Search, Tweet, UserTweet } from '../Tweets/my-tweets.model';
import { TweetsService } from '../Tweets/tweets.service';

@Component({
  selector: 'app-otherid',
  templateUrl: './otherid.component.html',
  styleUrls: ['./otherid.component.scss']
})
export class OtheridComponent implements OnInit {

  user: UserTweet = new UserTweet()

  buscar: string = ''

  constructor(private tweetService: TweetsService) {}

  ngOnInit(): void {}

  showTweets(){
    this.tweetService.searchUser(this.buscar).subscribe(data =>{
      this.user = data.data[0]
        this.user.tweets = [ new Tweet("Tweet 1"), new Tweet("Tweet 2"), new Tweet("Tweet 3")]
    })
  }

}
