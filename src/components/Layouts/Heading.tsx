import { FC } from "react"

interface IProps {
    title: string;
    desc: string; 
}

const Heading: FC<IProps> = ({title, desc}) => {
    return (
        <div className="heading text-center my-5">
            <h3 className="text-2xl md:text-3xl font-bold mb-1">{title}</h3>
            <p className="text-gray-500 text-sm">{desc}</p>
        </div>
    )
}

export default Heading
