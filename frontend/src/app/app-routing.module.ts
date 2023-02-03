import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenceContainerComponent } from './content/sentence-container/sentence-container.component';
import { StoryContainerComponent } from './content/story-container/story-container.component';

const routes: Routes = [
  {
    path: '',
    component: SentenceContainerComponent
  },
  {
    path: 'popular-stories',
    component: StoryContainerComponent
  },
  {
    path: 'random-stories',
    component: StoryContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
