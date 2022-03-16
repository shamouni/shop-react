import { FC } from "react";

interface IProps {
    sum: number
}

const SidebarCheckout: FC<IProps> = ({ sum }) => {

    const checkoutClick = () => alert('No payment gateway is connected!');

    return (
        <div className='px-5 py-4 font-bold border border-t border-gray-200'>
            <div className="flex justify-between text-[1rem] mb-5">
                <strong className='text-gray-600'>Sub Total: </strong>
                <span className='text-green-600'>${sum.toFixed(2)}</span>
            </div>
            <a onClick={checkoutClick} href="#!" className="bg-gray-100">View Cart</a>
            <a onClick={checkoutClick} href="#!" className=" bg-green-700 text-white mt-2">View Cart</a>
        </div>
    );
};

export default SidebarCheckout
