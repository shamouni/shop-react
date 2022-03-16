import {useState, useEffect, FC, ChangeEvent} from 'react'
import {TComment} from '../../interfaces/IProduct';
import CommentItem from './CommentItem';

interface IComment {
    data: TComment[];
    addComment: (input: TComment) => void
}


const Comments: FC<IComment> = ({data = [], addComment}) => {

    const [list, setList] = useState<TComment[]>([]);

    const [input, setInput] = useState({
        user: '',
        email: '',
        comment: ''
    });

    useEffect(() => {
        // Not a good practice, just for api simulation
        if(data && data.length > 0) {
            setList(data);
        }
    }, [data, data.length]);


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        });
    }

    const addHandle = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        addComment({
            ...input, 
            id: Math.ceil(Math.random() * 32767) + 1,
            like: 0,
            dislike: 0
        });

        setInput({
            user: '',
            email: '',
            comment: ''
        });
    }

    const voteComment = (id: number, action: string) => () => {

        // Prev like and dislike
        const {like, dislike} = data.find(i => i.id === id)!;

        const updated = list.map(i => {

            if(i.id === id) {

                let lk = 0;
                let dk = 0;
                
                if(action === 'like') {
                    lk = i.like > like ? like : like + 1;
                    dk = dislike;
                }
                else {
                    dk = i.dislike > dislike ? dislike : dislike + 1;
                    lk = like;
                }

                return {
                    ...i, 
                    like: lk, 
                    dislike: dk
                };
            }

            return i;
        });

        setList(updated);
    }


    const {user, email, comment} = input;

    return (
        <div className="comments">
            <div className="head flex-between">
                <h4 className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                    {list.length} comments
                </h4>
            </div>

            <div className="opinions">
                {(list instanceof Array) && list.map((i, k) => (
                    <CommentItem item={i} vote={voteComment} key={k} />
                ))}
            </div>

            <form id="form" className="form" onSubmit={addHandle}>
                <h4 className="head">Leave a comment</h4>
                <textarea value={comment} onChange={handleChange} name="comment" placeholder='How was this movie?' />
                <div className='flex'>
                    <input value={user} onChange={handleChange} type="text" name="user" placeholder='Name' className='mr-3' />
                    <input value={email} onChange={handleChange} type="email" name="email" placeholder='Email' className='ml-3' />
                </div>
                <button>Send it</button>
            </form>

        </div>
    )
}

export default Comments
