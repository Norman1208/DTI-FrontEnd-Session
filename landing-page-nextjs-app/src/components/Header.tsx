import { FC } from "react";


const Header: FC = () => {
    return (
        <header className="absolute top-0 left-0 w-[calc(100%-160px)] py-6 px-20 z-[2]">
            <nav className="flex justify-between text-lg font-normal">
                <div>
                    @Ayush Barnwal
                </div>
                <div className="flex gap-4">
                    <a href="/public">About</a>
                    <a href="#work">Work</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>

        </header>
    ); 
}

export default Header;