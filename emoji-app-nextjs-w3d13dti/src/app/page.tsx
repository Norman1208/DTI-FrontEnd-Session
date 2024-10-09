// import Image from "next/image";
'use client';
import Header from "@/components/Header";
import MainPage from "@/components/MainContent/mainpage";

export default function Home() {
  return (
    <div className="w-[430px] bg-[#FAF4E1]">
        <Header />
        <MainPage/>
    </div>
  );
}
