import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCard";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getCombinedAnimeData } from "../../slicers/animeSlice";
function Home() {
  const dispatch = useDispatch();

  // Selectors
  const { promos, top } = useSelector((state) => state.anime);

  // Fetch airing today
  useEffect(() => {
    dispatch(getCombinedAnimeData());
  }, [dispatch]);

  console.log("Top movies ===", promos, top);

  return (
    <div className="home relative">
      <Navbar />
      <div className="hero relative">
        <img
          src={hero_banner}
          alt=""
          className="w-full [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_20%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)] 
            [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_30%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)] 
            mask-type-luminance"
        />
        <div className="hero-caption absolute w-full md:pl-[6%] pl-[4%] bottom-0">
          <img
            src={hero_title}
            alt=""
            className="md:w-[90%] w-[40%] max-w-[420px] md:mb-4.5 mb-2.5"
          />
          <p className="max-w-[700px] md:text-[17px] text-[10px] md:mb-5 mb-2.5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-2.5 mb-12.5">
            <button className="border-0 h-0 outline-0 px-5 py-4 inline-flex items-center text-black hover:bg-[#ffffffbf] font-semibold bg-white rounded-[4px] cursor-pointer w-auto md:text-[15px] text-[10px]">
              <img src={play_icon} alt="" className="w-[20px] mr-2" />
              Play
            </button>

            <button className="border-0 h-0 outline-0 px-5 py-4 inline-flex items-center text-white hover:bg-[#6d6d6e66] font-semibold bg-[#6d6d6eb3] rounded-[4px] cursor-pointer md:text-[15px] text-[10px]">
              <img src={info_icon} alt="" className="w-[25px] mr-2" />
              More Info
            </button>
          </div>
          <div className="md:flex hidden">
            <TitleCard category={promos} className="mb-0" />
          </div>
        </div>
      </div>
      <div className="md:pl-[6%] pl-[4%]">
        <TitleCard title={"Blockbuster Movies"} category={top} />
        <TitleCard title={"Only on Netfilx"} category={promos} />
        <TitleCard title={"Upcoming"} category={promos} />
        <TitleCard title={"Top pick for you"} category={top} />{" "}
        {/* show top anime here */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
