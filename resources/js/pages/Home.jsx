// Home.js
import React from 'react';
import HomeLayout from '../Layout/HomeLayout';
import Hero from '../components/Home/Hero';
import Product from '../components/Home/Product';
// import Layout from '../Layout/Layout';
// import Dashboard from '../components/Homepage.jsx/dashboard';

const Home = () => {
  return (
    // <div className="flex flex-col min-h-screen">
    //   <Layout>
    //     {/* <div className="flex-grow p-4 bg-gray-100">
    //       <Dashboard />
    //     </div> */}
    //   </Layout>
    // </div>

    <HomeLayout>
      <Hero/>
      <Product/>
    </HomeLayout>
    
  );
}

export default Home;