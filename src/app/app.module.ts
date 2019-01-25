import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainContainerComponent} from './components/main-container.component';
import {NoteContainerComponent} from './components/note-container.component';
import {NoteCreatorComponent} from './components/note-creator.component';
import {NoteCardComponent} from './components/note-card.component';
import {AppBarComponent} from './components/app-bar.component';


@NgModule({
  declarations: [
    AppComponent, MainContainerComponent, NoteContainerComponent, NoteCreatorComponent, NoteCardComponent, AppBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
