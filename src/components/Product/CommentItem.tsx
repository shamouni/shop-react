import { FC } from 'react';
import { TComment } from '../../interfaces/IProduct';

const ROOT = process.env.REACT_APP_ROOT;

interface IProps {
    item: TComment, 
    vote: (id: number, action: string) => any
}


const CommentItem: FC<IProps> = ({ item, vote }) => {

    const {id, user, comment, like, dislike} = item;

    return (
        <div className='item'>
            <div className="c-info">
                <span>
                    <i className="fa fa-user mr-1" aria-hidden="true"></i>
                    <b>{user}</b>
                    <time>{getDate()}</time>
                </span>
                <div className='vote flex'>
                    <span className="like flex items-center mr-2" onClick={vote(id, 'like')}>
                        <img src={`${ROOT}/images/like.svg`} alt='like' className='mr-1' width={16} height={16} />
                        {like || 0}
                    </span>
                    <span className='dislike flex items-center' onClick={vote(id, 'dislike')}>
                        <img src={`${ROOT}/images/dislike.svg`} alt='like' className='mr-1' width={16} height={16} />
                        {dislike || 0}
                    </span>
                </div>
            </div>
            <p>{comment}</p>
        </div>
    );
};

export default CommentItem;


const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return (yyyy + '-' + mm + '-' + dd);
}