import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { MergedMapOperatorComponent } from './merged-map-operator/merged-map-operator.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TakeOperatorComponent } from './take-operator/take-operator.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { SubjectbehaviourComponent } from './subjectbehaviour/subjectbehaviour.component';
import { SecondsubBehaviourComponent } from './subjectbehaviour/secondsub-behaviour/secondsub-behaviour.component';


@NgModule({
  declarations: [
    AppComponent,
    FromOperatorComponent,
    MergedMapOperatorComponent,
    ForkJoinComponent,
    TakeOperatorComponent,
    AsyncPipeComponent,
    SubjectbehaviourComponent,
    SecondsubBehaviourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
