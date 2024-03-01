import ProductImg from "../assets/download 1.png";
import diamond from "../assets/diamond.png";
import Tick from "../assets/loveItTick.png";
import Button from "./Button";
import ShowMoreButton from "./ShowMoreButton";

function ProductItem({ product }) {
  const {
    id,
    name,
    description,
    mainHighlights,
    rating,
    ratingDescription,
    bestChoice,
    offer,
    weLoveIt,
  } = product;

  return (
    <div className="relative grid grid-cols-[1fr_2fr_1fr] items-center justify-items-center gap-8">
      {bestChoice && (
        <p className="absolute -top-3 left-0 flex items-center gap-1 rounded-r-md bg-orange-500 px-2 py-1 text-sm text-orange-50">
          <img src={diamond} alt="" /> <span>Best Choice</span>
        </p>
      )}
      <div className="flex flex-col items-center gap-3">
        <img src={ProductImg} alt="Product" />
        <p className="text-sm text-stone-400">Builder 1</p>
      </div>
      <div>
        <p>
          <span className="font-bold">{name}- </span>
          {description}
        </p>
        {offer && (
          <span className="my-1 inline-block bg-stone-100 p-1 text-sm font-medium text-blue-500">
            {offer} Off
          </span>
        )}
        <h4 className="font-bold">Main Highlights</h4>
        {typeof mainHighlights[0] === "string" ? (
          <p className="pt-1 sm:ps-3">{mainHighlights}</p>
        ) : (
          <div className="flex flex-col gap-3 rounded-md bg-orange-50 px-2 py-1 sm:ms-3">
            {mainHighlights.map(({ rating, description }) => (
              <div key={description} className="flex items-center gap-2">
                <p className="bg-stone-50 p-1 text-blue-400">{rating}</p>
                <p>{description}</p>
              </div>
            ))}
          </div>
        )}
        {weLoveIt && (
          <div className="my-3">
            <p className="mb-1">Why we love it</p>
            <div>
              {weLoveIt.map((item) => (
                <div className="flex items-center gap-2">
                  <img src={Tick}></img>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <ShowMoreButton />
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="w-32 space-y-2 rounded-md bg-blue-50 px-4 py-2 text-center">
          <p className="text-3xl font-medium text-blue-800">{rating}</p>
          <p className="text-sm font-semibold text-blue-700">
            {ratingDescription}
          </p>
          <p className="text-xs">⭐⭐⭐⭐⭐</p>
        </div>
        <Button>View</Button>
      </div>
    </div>
  );
}

export default ProductItem;
