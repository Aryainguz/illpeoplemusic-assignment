"use client"
import Banner from "@/components/Banner";
import ExploreBeats from "@/components/Main";
import { dataContext } from "@/context/dataContext";
import { useContext, useEffect } from "react";
import Header from "../components/Header";


export default function Home() {

  const {setData} = useContext(dataContext);


  useEffect(() => {
    const getData = async () => {
        const res = await fetch("https://api-server.illpeoplemusic.com/api/v2/playlist/trending");
        const data = await res.json();
        console.log("data", data.playlists[0].beats);
        setData(data.playlists[0].beats);
  }
    getData();
  }, []);

  return (
    <div className="px-0 sm:px-12 text-white bg-[#1e1e1e]">
      <Header />
      <Banner />
      <ExploreBeats />
    </div>
  );
}
