import React, {useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import CoreFeature from 'sections/core-feature';
//import Feature from 'sections/feature';
//import PartnerSection from 'sections/partner';
//import WorkFlow from 'sections/workflow';
import Dashboard from 'sections/dashboard';
//import TestimonialCard from 'sections/testimonial';
//import SecurePayment from 'sections/secure-payment';
import Package from 'sections/package';
import Faq from 'sections/faq';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function IndexPage() {
  
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      alert('Order placed! you will receive an email with a download link, license key, and structures to help you start.');
    }

    if (query.get('canceled')) {
     alert('Order canceled! please try again.');
    }
  }, []);

  
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="WhiteLister" />
          <Banner />
          <KeyFeature />
          <CoreFeature /> 
          {/* <Feature /> */}
          {/* <PartnerSection /> */}
          {/* <WorkFlow /> */}
          <Dashboard />
          {/* <TestimonialCard /> */}
          {/* <SecurePayment /> */}
          <Package />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}