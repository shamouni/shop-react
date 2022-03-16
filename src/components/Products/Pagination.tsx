import { FC } from 'react';
import {Link} from 'react-router-dom'

interface IProps {
    page: number;
    pages: number;
}

const Pagination: FC<IProps> = ({ page, pages }) => {

    const url = '/products?page=';

    return (
        <div className="pagination mt-16">
            <ul className="flex justify-center">
                {page > 1 && (
                    <li>
                        <Link to={url + (page - 1)}>
                            Previous
                        </Link>
                    </li>
                )}

                {[...Array(pages)].map((i, k) => (
                    <li key={k}>
                        <Link className={k + 1 === page ? 'active' : ''} to={url + (k + 1)}>
                            {k + 1}
                        </Link>
                    </li>
                ))}

                {page < pages && (
                    <li>
                        <Link to={url + (page + 1)}>
                            Next
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Pagination
