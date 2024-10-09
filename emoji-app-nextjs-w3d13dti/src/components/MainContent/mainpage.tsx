'use client'
import { FC } from "react";
import Emoji from "./emoji";


const MainPage: FC = () => {

    return (
        <div className=" pl-5 flex w-[382px] justify-center items-center pb-10">
            <div className="bg-[#F8DD84] h-[841px]">
                <div className="pt-[170px] flex justify-center items-center">
                    <h1 className="text-center font-normal text-[#4C9BB9] w-[340px] text-[40px] justify-center items-center">What&apos;s your <span className="text-[#1C5469]">emoji</span> today?</h1>
                </div>
                <div className="pt-[100px] flex flex-col justify-center items-center">
                    <span className="text-[#4A7582] text-[20px] font-sans">Click it!</span>
                    <Emoji />
                </div>

                <div className="pt-[200px] flex justify-center">
                    <p className="text-[#4A7582] text-center w-[184px]">You’re sad and you know it. just give up, don’t try.</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage;