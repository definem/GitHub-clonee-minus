import React from 'react'
import Stats from "../../public/assets/images/stats.png";
import VisitorCount from "../../public/assets/images/visitorCount.png";

const About = () => {
  return (
    <div className="container gap-[18px]">
      <p className="text-[14px]">
        definem <span className='text-[#7D8590]'>/</span> README<span className='text-[#7D8590]'>.md</span>
      </p>
      <div className="">
        <h1>Definem❤️‍🔥 | Developer </h1>
        <div>
          <h2 className='text-center'>
            Welcome to <span>Muhammadiyya</span>'s 's profile!👋🏻'
          </h2>
          <img className="w-[530px]" src={Stats.src} alt="Stats img" />
          <img src={VisitorCount.src} alt="VisitorCount img" />
        </div>
      </div>
    </div>
  );
}

export default About