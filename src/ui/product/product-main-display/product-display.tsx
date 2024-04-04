'use client'

import { useState } from 'react';
import { Interface } from './utils/interface';
import products from './utils/products';
import ProductView from '@/ui/product/product-detail-view/product-view';
import Cartlogo from '../../../../public/cart.svg'
import Image from 'next/image';



export default function ProductDisplay() {
  const [selectedProduct, setSelectedProduct] = useState<Interface | null>(null);

  const handleClick = (product: Interface) => {
    setSelectedProduct(product);
  };

  return (
    <div className="bg-white">
      {selectedProduct ? (
        <ProductView />
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" onClick={() => handleClick(product)}>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="mt-4 text-sm text-gray-700 font-semibold">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price} <span className="text-gray-500 font-light">MRB</span></p>
                  </div>
                  <Image src={Cartlogo}
                    alt="cart-logo"
                    className="group-hover:opacity-75 "
                    width={45} height={45} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
