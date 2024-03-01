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
      <h2 className="mb-5 text-center text-3xl md:text-left">
        Related deals you might like for
      </h2>
      <div className="flex flex-col items-center gap-5 md:flex-row ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
