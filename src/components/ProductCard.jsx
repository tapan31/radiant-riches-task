import ProductImg from "../assets/download 1.png";
import Button from "./Button";

function calculateDiscountedPrice(price, offer) {
  const discountedPrice = Number(price) - Number(price) * (Number(offer) / 100);
  console.log(discountedPrice, price, offer);
  return discountedPrice.toFixed(2);
}

function ProductCard({ product }) {
  const { name, description, price, offer, limitedTime } = product;

  return (
    <div className="flex flex-col gap-2 px-4 py-2">
      <div className="self-center px-4 py-6">
        <img src={ProductImg} alt="" />
      </div>
      <div className="space-x-2">
        {offer && (
          <span className="rounded-md bg-stone-100 p-1 text-sm font-medium text-blue-400">
            {offer}% Off
          </span>
        )}
        {limitedTime && (
          <span className="rounded-md bg-stone-100 p-1 text-sm font-medium text-blue-400">
            Limited Time
          </span>
        )}
      </div>
      <div>
        <h4 className="pb-2 text-center font-bold">{name}</h4>
        <p>{description}</p>
      </div>
      <div className="space-x-2">
        <span className="text-lg">
          ${calculateDiscountedPrice(price, offer)}
        </span>
        <span className="text-xs text-stone-400">${price}</span>
        <span className="text-xs text-red-400">{offer}% Off</span>
      </div>
      <Button type="card">View Deal</Button>
    </div>
  );
}

export default ProductCard;
