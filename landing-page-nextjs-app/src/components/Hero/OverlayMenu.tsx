import {FC} from 'react';

const OverlayMenu: FC = () => {
    return (
        <div className='absolute top-[50%] right-0 translate-x-[72px] translate-y-[-50%] flex gap-[28px] justify-center align-center bg-black p-5 radius-[10px] text-white hover:translate-x-0'>
            <span>👋</span><span>Ayush</span>
        </div>
    );
}

export default OverlayMenu;