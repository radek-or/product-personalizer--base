import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => (
  <div className={styles.sizes}>
    <h3 className={styles.optionLabel}>Sizes</h3>
    <ul className={styles.choices}>
      {sizes.map(size => (
        <li key={size.name}>
          <button
            type="button"
            className={clsx({ [styles.active]: size.name === currentSize })}
            onClick={() => setCurrentSize(size.name)}
          >
            {size.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number.isRequired,
  })).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
