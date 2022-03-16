
export interface IState {
    product: {
        id: number;
        title: string;
        price: number;
        category: string; 
        desc: string;
    }
}

export type TProduct = IState["product"];

export type TComment = {
    id: number;
    user: string;
    email: string;
    comment: string;
    like: number;
    dislike: number;
}

export type TCart = {
    id: number;
    title: string;
    price: number;
    count: number;
  }