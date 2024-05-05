import Footer from "@/components/footer/page";
import Header from "@/components/navbar/page";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row min-h-screen justify-center items-center">
        <h1 className="my-4 text-2xl">This is a Home page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
