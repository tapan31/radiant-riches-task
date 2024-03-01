import ProductItem from "./ProductItem";

const products = [
  {
    id: 1,
    name: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlights: [
      "What You Get]: Receive the WixPro website builder suite",
      "access to premium design templates, an extensive library of widgets and apps",
      "and detailed step-by-step guides.",
    ],
    rating: 9.8,
    ratingDescription: "Exceptional",
    bestChoice: true,
    offer: null,
  },
  {
    id: 2,
    name: "SiteCraft 68-Inch Ultimate Web Design Studio- ",
    description:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    mainHighlights: [
      "[What You Get]: Gain access to the SiteCraft design studio",
      "featuring a robust selection of design elements",
      "SEO optimization tools, and e-commerce integrations.",
    ],
    rating: 9.5,
    ratingDescription: "Excellent",
    bestChoice: true,
    offer: null,
  },
  {
    id: 3,
    name: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlights: [
      "What You Get]: Receive the WixPro website builder suite",
      "access to premium design templates, an extensive library of widgets and apps",
      "and detailed step-by-step guides.",
    ],
    rating: 9.3,
    ratingDescription: "Excellent",
    bestChoice: false,
    offer: null,
  },
  {
    id: 4,
    name: "CDK Resposive Builder",
    description:
      ": An extensive library of widgets and apps, and detailed step-by-step guides",
    mainHighlights: [
      {
        rating: 9.9,
        description: "Building Responsive",
      },
      {
        rating: 8.9,
        description: "Cool",
      },
      {
        rating: 8.9,
        description: "Docs",
      },
    ],
    rating: 9.3,
    ratingDescription: "Excellent",
    bestChoice: false,
    offer: "26%",
    weLoveIt: ["Documentation", "Easy Use", "Out of Box"],
  },
];

function Products() {
  return (
    <section className="my-5 space-y-16 pt-4  md:space-y-11 ">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Products;
