import ProductDisplay from '@/ui/product/product-main-display/product-display';
import StoreNavigation from '@/ui/store-navigation';
import React from 'react';

export default function Home() {
    return (
        <div>
            <StoreNavigation />
            <ProductDisplay />
        </div>
    );
}
