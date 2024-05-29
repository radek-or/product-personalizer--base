import React from "react";
import PropTypes from "prop-types";
import styles from "./ProductForm.module.scss";
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";

const ProductForm = ({
	basePrice,
	sizes,
	colors,
	currentColor,
	currentSize,
	setCurrentColor,
	setCurrentSize,
	handleSubmit,
}) => (
	<form onSubmit={handleSubmit} className={styles.productForm}>
		<OptionSize
			sizes={sizes}
			currentSize={currentSize}
			setCurrentSize={setCurrentSize}
		/>
		<OptionColor
			colors={colors}
			currentColor={currentColor}
			setCurrentColor={setCurrentColor}
		/>
		<Button className={styles.button} type="submit">
			<span className="fa fa-shopping-cart" />
		</Button>
	</form>
);

ProductForm.propTypes = {
	basePrice: PropTypes.number.isRequired,
	sizes: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			additionalPrice: PropTypes.number.isRequired,
		})
	).isRequired,
	colors: PropTypes.arrayOf(PropTypes.string).isRequired,
	currentColor: PropTypes.string.isRequired,
	currentSize: PropTypes.string.isRequired,
	setCurrentColor: PropTypes.func.isRequired,
	setCurrentSize: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
