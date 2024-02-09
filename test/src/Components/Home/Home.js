import React, { lazy, Suspense } from 'react';

// Import other components normally
const Header = lazy(() => import('../Header/Header'));
const Banner = lazy(() => import('../Banner/Banner'));
const Form = lazy(() => import('../Form/Form'));
const CardService = lazy(() => import('../CardService/CardService'));
const VideoCard = lazy(() => import('../VideoCard/VideoCard'));
const LoanContainer = lazy(() => import('../LoanContainer/LoanContainer'));
const VideoCard2 = lazy(() => import('../VideoCard2/VideoCard2'));
const InsuranceContainer = lazy(() => import('../InsuranceContainer/InsuranceContainer'));
const Footer = lazy(() => import('../Footer/Footer'));
const Writings1 = lazy(() => import('../Writings/Writings1'));
const Testimonials = lazy(() => import('../Testimonials/Testimonials'));
const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Banner />
      <Form />
      <CardService />
      <Writings1/>
      <VideoCard />
      <LoanContainer />
      <VideoCard2 />
      <InsuranceContainer />
      <Testimonials />
      <Footer />
    </Suspense>
  );
}

export default Home;
