import type { NextPage } from "next";
import Image from "next/image";
import Header from "../src/components/Header";

import ImageDips from "../src/assets/img/dipstrategy-color.jpeg";
import { useMemo, useRef } from "react";

const Home: NextPage = () => {

  const section = useRef([
    {
      label: "E-COMMERCE DEVELOPMENT",
      value:
        "you want to get the best out of yout bussines and turn mere visitors into payking custommers? Sell yout products on a secure platform and not worry about the technical details? we will help you implement your E-Commerce platform",
    },
    {
      label: "INTEGRATION 3RD PARTY WEB SERVICES",
      value:
        "you want to get the best out of yout bussines and turn mere visitors into payking custommers? Sell yout products on a secure platform and not worry about the technical details? we will help you implement your E-Commerce platform",
    },
    {
      label: "HOSTING MAINTENANCE",
      value:
        "you want to get the best out of yout bussines and turn mere visitors into payking custommers? Sell yout products on a secure platform and not worry about the technical details? we will help you implement your E-Commerce platform",
    },
    {
      label: "DESIGN UI/UX",
      value:
        "you want to get the best out of yout bussines and turn mere visitors into payking custommers? Sell yout products on a secure platform and not worry about the technical details? we will help you implement your E-Commerce platform",
    },
    {
      label: "SEO SERVICES",
      value:
        "you want to get the best out of yout bussines and turn mere visitors into payking custommers? Sell yout products on a secure platform and not worry about the technical details? we will help you implement your E-Commerce platform",
    },
  ]).current;

  const _renderSectionOne = useMemo(() => {
    return (
      <div className="min-h-screen min-w-full bg-slate-900 bg-gradient-to-r from-purple-500 to-pink-500 pt-5 relative">
        <Image
          src={ImageDips}
          alt="Picture of the author"
          width={300}
          height={250}
          className="rotate-90"
        />
        <span className="text-9xl flex align-text-bottom absolute bottom-0">
          WE ASSIST YOU IN SOLVING TOMMOROW`S
        </span>
      </div>
    );
  }, []);

  const _renderSectionTwo = useMemo(() => {
    const renderContentSection1 = () => {
      return (
        <div className="mt-16 border-b-2 border-neutral-100  py-24 mx-24 flex flex-row justify-between">
          <div>
            <span className="text-7xl text-slate-100">Our Services</span>
          </div>
          <div className="ml-8 px-14 max-w-2xl">
            <span className="text-3xl text-slate-100">
              we`ve worked with a wide array of clients across the globe to
              apply design fundamentals of elegance, simplicity
            </span>
          </div>
        </div>
      );
    };
  
    const renderContentSection2 = () => {
      return section?.map((e, index) => (
        <div
          key={index.toString()}
          className="mt-16 border-b-2 border-neutral-100 items-center justify-center pb-10 mx-24 flex flex-row justify-between"
        >
          <div>
            <span className="text-2xl max-w-xs text-slate-100">{e.label}</span>
          </div>
          <div className="ml-8 px-14 max-w-2xl text-left">
            <span className="text-xl text-slate-100">{e.value}</span>
          </div>
          <div className="p-3 h-15 bg-yellow-500 flex justify-center items-center">
            Learn More
          </div>
        </div>
      ));
    };
  
    return (
      <div className="min-h-screen min-w-full bg-slate-900 relative flex flex-col">
        <div>
          <span className="text-9xl text-white">PROBLEMS TODAY</span>
        </div>
        {renderContentSection1()}
        {renderContentSection2()}
      </div>
    );
  
  }, [section]);

  return (
    <>
      <Header />
      {_renderSectionOne}
      {_renderSectionTwo}
    </>
  );
};

export default Home;
