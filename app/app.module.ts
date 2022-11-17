import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SimpleComponent } from './simple/simple.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, 
  MatCardModule, 
  MatTabsModule, 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
  ],
  declarations: [ AppComponent, HelloComponent, SimpleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
