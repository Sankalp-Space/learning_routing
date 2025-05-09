import React from "react";
import Img from "public/img.jpg";
import Image from "next/image";

const Imagination = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={Img} fill alt="Pic" style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"/>
      </div >
      <div className="flex items-center justify-center pt-64">
        <h1>just listen the melodies</h1>
      </div>
    </div>
  );
};

export default Imagination;
