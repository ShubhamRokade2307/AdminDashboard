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
import { MahavirAVSolutionComponent } from './footer/mahavir-av-solution/mahavir-av-solution.component';
import { ContactInfoComponent } from './footer/contact-info/contact-info.component';
import { NewsletterComponent } from './footer/newsletter/newsletter.component';
import { HomeContactUsComponent } from './home/home-contact-us/home-contact-us.component';
import { HomeWhyChooseMahavirComponent } from './home/home-why-choose-mahavir/home-why-choose-mahavir.component';
import { AboutCardsComponent } from './aboutus/about-cards/about-cards.component';
import { AboutIncreasingBusinessComponent } from './aboutus/about-increasing-business/about-increasing-business.component';
import { SolutionContactusComponent } from './solutions/solution-contactus/solution-contactus.component';
import { BlogsBannerComponent } from './blogs/blogs-banner/blogs-banner.component';
import { BlogsCardsComponent } from './blogs/blogs-cards/blogs-cards.component';
import { ContactusContactComponent } from './contactus/contactus-contact/contactus-contact.component';
import { HeaderinfoComponent } from './header/headerinfo/headerinfo.component';
import { AudioVideoSolutionsComponent } from './home/audio-video-solutions/audio-video-solutions.component';

const routes: Routes = [
  {
    path: '',
    component: MenusComponent,

    children: [
      // routing for Home Module

      { path: 'home/homebanner', component: HomeBannerComponent },
      { path: 'home/firstcounter', component: FirstCounterComponent },
      {
        path: 'home/solution-we-provide',
        component: SolutionWeProvideComponent
      },
      { path: 'home/What-We-Built', component: WhatWeBuildComponent },
      { path: 'home/our-products', component: OurProductsComponent },
      { path: 'home/testimonial', component: HomeTestimonialComponent },
      { path: 'home/partnars', component: HomePartnarsComponent },
      { path: 'home/contactus', component: HomeContactUsComponent },
      { path: 'home/video', component: AudioVideoSolutionsComponent },
      {
        path: 'home/whychoosemahavir',
        component: HomeWhyChooseMahavirComponent
      },

      // routing for AboutUs Module
      { path: 'aboutus/aboutbanner', component: AboutBannerComponent },
      { path: 'aboutus/aboutcards', component: AboutCardsComponent },
      {
        path: 'aboutus/aboutbusinesstechnology',
        component: AboutIncreasingBusinessComponent
      },
      {
        path: 'aboutus/ServicesForBusiness',
        component: AboutServicesForBusinessComponent
      },
      {
        path: 'aboutus/ourworkingprocess',
        component: AboutWorkingProcessComponent
      },
      { path: 'aboutus/aboutvideo', component: AboutLatestVideosComponent },

      // routing for Solution Module
      { path: 'solutionbanner', component: SolutionbannerComponent },
      { path: 'serviceProvide', component: ServiceProvideComponent },
      { path: 'solutionProvide', component: SolutionProvideComponent },
      { path: 'solutionTestimonial', component: SolutionTestimonialComponent },
      { path: 'solutioncontactus', component: SolutionContactusComponent },

      // routing for Products Module
      { path: 'productsbanner', component: ProductBannerComponent },
      { path: 'our_Products', component: OurProductsComponent },
      { path: 'what_we_built', component: WhatWeBuiltComponent },
      { path: 'our_partners', component: OurPartnersComponent },

      // routing for BLOGS Module
      { path: 'blog/banner', component: BlogsBannerComponent },
      { path: 'blog/cards', component: BlogsCardsComponent },

      // routing for ContactUs Module
      { path: 'contactus', component: ContactusContactComponent },

      // routing for Footer Module
      {
        path: 'footer/mahavirAvSolution',
        component: MahavirAVSolutionComponent
      },
      { path: 'footer/contactinfo', component: ContactInfoComponent },

      { path: 'footer/newsletter', component: NewsletterComponent },

      // routing for Header Module
      { path: 'header', component: HeaderinfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {}
