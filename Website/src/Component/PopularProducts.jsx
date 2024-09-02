import React from 'react';
// import './PopularProducts.css';

const products = [
    {
        id: 1,
        brand: 'TOPSHOP',
        name: 'Poplin Displaced Wrap Dress',
        price: '$80.00',
        images: [
            'https://preview.colorlib.com/theme/essence/img/product-img/product-2.jpg',
            'https://preview.colorlib.com/theme/essence/img/product-img/product-3.jpg',
        ],
    },
    {
        id: 2,
        brand: 'MANGO',
        name: 'PETITE Crepe Wrap Mini Dress',
        price: '$55.00',
        oldPrice: '$75.00',
        images: [
            'https://preview.colorlib.com/theme/essence/img/product-img/product-3.jpg',
            'https://preview.colorlib.com/theme/essence/img/product-img/product-4.jpg',
        ],
    },
    {
        id: 3,
        brand: 'TOPSHOP',
        name: 'PETITE Belted Jumper Dress',
        price: '$80.00',
        images: [
            'https://preview.colorlib.com/theme/essence/img/product-img/product-4.jpg',
            'https://preview.colorlib.com/theme/essence/img/product-img/product-5.jpg',
        ],
    },
    {
        id: 4,
        brand: 'TOPSHOP',
        name: 'Knot Front Mini Dress',
        price: '$80.00',
        images: [
            'https://preview.colorlib.com/theme/essence/img/product-img/product-1.jpg',
            'https://preview.colorlib.com/theme/essence/img/product-img/product-2.jpg',
        ],
    },
];

const PopularProducts = () => (
    <div className="d7">
        <h1>Popular Products</h1>
        <div className="d8">
            {products.map((product) => (
                <div key={product.id} className="d9">
                    <div className="d11">
                        {product.images.map((img, index) => (
                            <img key={index} src={img} alt="" className={index === 0 ? 'img1' : 'img2'} />
                        ))}
                        <div className="d12">
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                    <h5>{product.brand}</h5>
                    <p>{product.name}</p>
                    <br />
                    <a className="a5" href="">
                        {product.oldPrice && <del>{product.oldPrice}</del>}
                        &nbsp;&nbsp;&nbsp;{product.price}
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default PopularProducts;
