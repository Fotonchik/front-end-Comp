import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TitleComponent } from './title.component';
import { DVDComponent } from './dvd/dvd.component';
import { ProcessorComponent } from './processor/processor.component';
import { VideoCardpageComponent } from './video-cardpage/video-cardpage.component';
import { NotFounddpageComponent } from './not-founddpage/not-founddpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RAMpageComponent } from './rampage/rampage.component';
import { IbpPageComponent } from './ibp-page/ibp-page.component';
import { AdditionalComponentsPageComponent } from './additional-components-page/additional-components-page.component';
import { PeripheralNetworkDevicesPageComponent } from './peripheral-network-devices-page/peripheral-network-devices-page.component';
import { SystemBoardPageComponent } from './system-board-page/system-board-page.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DVDComponent,
    ProcessorComponent,
    VideoCardpageComponent,
    NotFounddpageComponent,
    HomepageComponent,
    RAMpageComponent,
    IbpPageComponent,
    AdditionalComponentsPageComponent,
    PeripheralNetworkDevicesPageComponent,
    SystemBoardPageComponent,
    //TitleComponent,
    AddBlogComponent,
    BlogDetailsComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
