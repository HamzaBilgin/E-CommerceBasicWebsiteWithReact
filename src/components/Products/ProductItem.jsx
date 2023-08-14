import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = ({product}) => {
  const { name, description, img, price } = product;

  return (
   <Card>
    <img src={img} alt={img} />
    <h3 className="product-title">{name}</h3>
    <p>{description}</p>
    <div className="product-info">
        <span className="price">{price}₺</span>
      </div>
      <button className="add-to-cart">
        Sepete Ekle
      </button>
   </Card>
  );
};

export default ProductItem;
