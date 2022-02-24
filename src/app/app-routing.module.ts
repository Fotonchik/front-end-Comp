import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DVDComponent } from './dvd/dvd.component';
import { NotFounddpageComponent } from './not-founddpage/not-founddpage.component';
import { ProcessorComponent } from './processor/processor.component';
import { VideoCardpageComponent } from './video-cardpage/video-cardpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RAMpageComponent } from './rampage/rampage.component';
import { PeripheralNetworkDevicesPageComponent } from './peripheral-network-devices-page/peripheral-network-devices-page.component';
import { AdditionalComponentsPageComponent } from './additional-components-page/additional-components-page.component';
import { IbpPageComponent } from './ibp-page/ibp-page.component';
import { SystemBoardPageComponent } from './system-board-page/system-board-page.component';
//import { TitleComponent } from './title/title.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';


const appRoutes: Routes=[
    {path:'dvd', component:DVDComponent },
    //{path:'title', component:TitleComponent },
    {path:'add', component:AddBlogComponent },
    {path:'blog:id', component:BlogDetailsComponent },
    {path:'blog', component:BlogListComponent },
    {path:'System-Board', component:SystemBoardPageComponent },
    {path:'RAM', component:RAMpageComponent },
    {path:'peripheral-network', component:PeripheralNetworkDevicesPageComponent },
    {path:'Addon', component:AdditionalComponentsPageComponent },
    {path:'ibp-page', component:IbpPageComponent },
    
    {path:'Processor', component:ProcessorComponent },
    {path:'', component:HomepageComponent },
    {path:'VideoCard', component:VideoCardpageComponent }
    //{path:'**', component:NotFounddpageComponent }
    
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
