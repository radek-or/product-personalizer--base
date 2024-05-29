import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ name, title, basePrice, sizes, colors }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [finalPrice, setFinalPrice] = useState(basePrice);

  useEffect(() => {
    const selectedSize = sizes.find(size => size.name === currentSize);
    const newPrice = basePrice + selectedSize.additionalPrice;
    setFinalPrice(newPrice);
  }, [currentSize, basePrice, sizes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Product: ${title}`);
    console.log(`Color: ${currentColor}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Price: ${finalPrice}$`);
  };

  return (
    <article className={styles.product}>
      <ProductImage
        name={name}
        title={title}
        currentColor={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {finalPrice}$</span>
        </header>
        <ProductForm
          basePrice={basePrice}
          sizes={sizes}
          colors={colors}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          handleSubmit={handleSubmit}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number.isRequired,
  })).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Product;
