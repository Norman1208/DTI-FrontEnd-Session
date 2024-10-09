import burger from '@/assets/icons/burger.svg'
import { FC } from 'react';

const About: FC = () => {


    return (
        <>
            <div className="w-[1440px] flex p-[80px] gap-[calc(1440px-1200px)]">
                    <div className="fixed top-4 right-4"> 
                        <img src={burger} alt="" />
                    </div>
                <div className="text-[40px] text-normal font-bold">
                    About
                </div>
                <div className="w-[839px] gap-0 text-[27px] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </div>
            </div>
        </>
    );
}

export default About;