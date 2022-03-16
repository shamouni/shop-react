import React, { FC, useState } from 'react';
import { TCart } from '../interfaces/IProduct';
import ShopContext from './context';

interface IP {
  children: React.ReactNode
}

const Provider: FC<IP> = ({ children }) => {

  const [carts, setCarts] = useState<TCart[]>([]);

  const addCart = (product: TCart) => {

    const found = carts.find(i => i.id === product.id);

    if(found) {
      const updated = carts.map(i => {
        if(i.id === product.id) {
          return { ...i, count: i.count + 1 }
        }
        return i;
      });

      setCarts(updated);
    }
    else {
      setCarts([ ...carts, product ]);
    }
    
  }

  const removeCart = (id: number) => {
    const updated = carts.filter(i => i.id !== id);
    setCarts(updated);
  }

  const updateCart = (id: number, count: number) => {
    
    if(count > 0) {
      const updated = carts.map(i => {
        if(i.id === id) {
          return { ...i, count }
        }
        return i;
      });

      setCarts(updated);
    }
    else {
      removeCart(id);
    }
  }


  return (
    <ShopContext.Provider value={{ carts, addCart, removeCart, updateCart }}>
      {children}
    </ShopContext.Provider>
  )
};

export default Provider;
