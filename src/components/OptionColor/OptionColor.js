import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
};

const OptionColor = ({ colors, currentColor, setCurrentColor }) => (
  <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
      {colors.map(color => (
        <li key={color}>
          <button
            type="button"
            className={clsx(prepareColorClassName(color), { [styles.active]: color === currentColor })}
            onClick={() => setCurrentColor(color)}
          />
        </li>
      ))}
    </ul>
  </div>
);

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;
