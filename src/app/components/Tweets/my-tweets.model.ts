import { prepareEventListenerParameters } from "@angular/compiler/src/render3/view/template";

export interface MyTweet {
    id?: number;
    user: string;
    content?: string;
    image?: string;
    screen_name?: string;
}

export interface TweetLocal{
    content?: string;
}


export interface ApiTweet {
    data: UserTweet[]

}

export class Tweet{
    constructor(
    public text: string
    ) {}
}

export interface Search{
    user: string;
}


export class UserTweet {

    constructor(
        public id: string = '',
        public name: string = '',
        public screen_name: string = '',
        public profile_image_url: string = '',
        public tweets: Tweet[] = []
    ) {}
}


 