import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { DataService } from './data.service';
import { SearchVegetablePipe } from './search-vegetable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    SearchVegetablePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
