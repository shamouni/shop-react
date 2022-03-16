import { FC } from "react";

interface IProps {
    closeCart: () => void
}

const SidebarCartHeading: FC<IProps> = ({ closeCart }) => {
    return (
        <div className="head flex justify-between items-center font-bold py-3 px-5 border-b border-gray-300">
            <h4 className='text-lg'>Shopping Cart</h4>
            <span onClick={closeCart} className='flex text-sm cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close
            </span>
        </div>
    );
};

export default SidebarCartHeading
