import { useState } from "react"
import { TComment } from "../../interfaces/IProduct"
import Comments from "./Comments"
import Description from "./Description"
import Shipping from "./Shipping"


const Tabs = () => {

    const tabsName = ['Description', 'Reviews', 'Shipping & Delivery'];

    const [comments, setComments] = useState<TComment[]>([
        {
            id: 1, user: 'test', email: 'a@b.com', 
            comment: 'a text', like: 1, dislike: 0
        }
    ]);

    const [active, setActive] = useState<string>(tabsName[0]);
    const tabClick = (id: string) => () => setActive(id);

    const addComment = (c: TComment) => {
        setComments([...comments, c]);
    }

    return (
        <div className="tabs mt-10 pb-14 border border-gray-200">
            <div className="container-full px-7 2xl:px-20 mx-auto">

                <ul className="buttons">
                    {tabsName.map(i => (
                        <li 
                            key={i} 
                            onClick={tabClick(i)}
                            className={i === active ? 'active' : ''}>
                                {i}
                            </li>
                    ))}
                </ul>
                
                {active === tabsName[0] && <Description />}
                {active === tabsName[1] && <Comments data={comments} addComment={addComment} />}
                {active === tabsName[2] && <Shipping />}
                
            </div>
        </div>
    )
}

export default Tabs
