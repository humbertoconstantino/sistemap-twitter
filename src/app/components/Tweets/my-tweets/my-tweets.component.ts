import { TweetsService } from './../tweets.service';

import { Component, OnInit } from '@angular/core';
import { MyTweet, TweetLocal } from '../my-tweets.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.scss']
})
export class MyTweetsComponent implements OnInit {


  constructor(private tweetService: TweetsService) { }

  teste: boolean = false
  tweets: MyTweet[] | undefined
  
  ngOnInit(): void {
    this.tweetService.read().subscribe(tweets => {
    this.tweets = tweets
    })
  }

  meutweets: MyTweet = {
    user: "Humberto Constantino",
    content: "",
    image: "https://i.imgur.com/GRj2rSi.png",
    screen_name: "humbertoand"
  }

  liked() {
    this.tweetService.showMessage("Tweet Curtido com sucesso!\n Somente ilustração")
  }

  createTweet(): void {
    this.tweetService.create(this.meutweets).subscribe(() => {
      this.tweetService.showMessage("Tweet feito")
    });
  }
}
