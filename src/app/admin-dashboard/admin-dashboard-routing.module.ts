import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { FirstCounterComponent } from './home/first-counter/first-counter.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { SolutionWeProvideComponent } from './home/solution-we-provide/solution-we-provide.component';
import { WhatWeBuildComponent } from './home/what-we-build/what-we-build.component';
import { MenusComponent } from './menus/menus.component';
import { OurPartnersComponent } from './products/our-partners/our-partners.component';
import { OurProductsComponent } from './home/our-products/our-products.component';
import { ProductBannerComponent } from './products/product-banner/product-banner.component';
import { WhatWeBuiltComponent } from './products/what-we-built/what-we-built.component';

import { ServiceProvideComponent } from './solutions/service-provide/service-provide.component';
import { SolutionProvideComponent } from './solutions/solution-provide/solution-provide.component';
import { SolutionTestimonialComponent } from './solutions/solution-testimonial/solution-testimonial.component';
import { SolutionbannerComponent } from './solutions/solutionbanner/solutionbanner.component';
import { HomeTestimonialComponent } from './home/home-testimonial/home-testimonial.component';
import { HomePartnarsComponent } from './home/home-partnars/home-partnars.component';
import { AboutBannerComponent } from './aboutus/about-banner/about-banner.component';
import { AboutServicesForBusinessComponent } from './aboutus/about-services-for-business/about-services-for-business.component';
import { AboutWorkingProcessComponent } from './aboutus/about-working-process/about-working-process.component';
import { AboutLatestVideosComponent } from './aboutus/about-latest-videos/about-latest-videos.component';

const routes: Routes = [
  {  path:"",component: MenusComponent,

children :[

   // routing for Home Module
  
   {  path:"home/homebanner",component: HomeBannerComponent},
   {  path:"home/firstcounter",component: FirstCounterComponent},
   {  path:"home/solution-we-provide",component: SolutionWeProvideComponent},
   {  path:"home/What-We-Built",component: WhatWeBuildComponent},
   {  path:"home/our-products",component: OurProductsComponent},
   {  path:"home/testimonial",component: HomeTestimonialComponent},
   {  path:"home/partnars",component: HomePartnarsComponent},


  // routing for AboutUs Module
  {  path:"aboutus/aboutbanner",component: AboutBannerComponent},
  {  path:"aboutus/ServicesForBusiness",component: AboutServicesForBusinessComponent},
  {  path:"aboutus/ourworkingprocess",component: AboutWorkingProcessComponent},
  {  path:"aboutus/aboutvideo",component: AboutLatestVideosComponent},



   // routing for Solution Module
   {  path:"solutionbanner",component: SolutionbannerComponent},
   {  path:"serviceProvide",component: ServiceProvideComponent},
   {  path:"solutionProvide",component: SolutionProvideComponent},
   {  path:"solutionTestimonial",component: SolutionTestimonialComponent},


    // routing for Products Module
    {  path:"productsbanner",component: ProductBannerComponent},
    {  path:"our_Products",component: OurProductsComponent},
    {  path:"what_we_built",component: WhatWeBuiltComponent},
    {  path:"our_partners",component: OurPartnersComponent},




],

}  
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
