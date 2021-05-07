import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtheridComponent } from './components/otherid/otherid.component';
import { MyTweetsComponent } from './components/Tweets/my-tweets/my-tweets.component';
import { UserIdComponent } from './components/user-id/user-id.component';

const routes: Routes = [{
  path: "",
  component: MyTweetsComponent,
},
{
  path: "findId",
  component: OtheridComponent
},
{
  path: "myProfile",
  component: MyTweetsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
