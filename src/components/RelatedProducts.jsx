import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "WebBuilder 1",
    description: "Computer  Modern clasic with wix support",
    offer: "20",
    limitedTime: true,
    price: "49.96",
  },
  {
    id: 2,
    name: "WebBuilder 2",
    description: "Computer  Modern clasic with wix support",
    offer: "20",
    limitedTime: true,
    price: "49.96",
  },
  {
    id: 3,
    name: "WebBuilder 3",
    description: "Computer  Modern clasic with wix support",
    offer: "20",
    limitedTime: true,
    price: "49.96",
  },
];

function RelatedProducts() {
  return (
    <section className="py-9">
      <h2 className="text-3xl ">Related deals you might like for</h2>
      <div className="flex items-center justify-between gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
