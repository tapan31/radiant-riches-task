const arr = ["Home", "Hosting For All", "Hosting", "Hosting6", "Hosting5"];

function BreadCrumbs() {
  return (
    <div className="hidden items-center justify-start py-2 sm:flex">
      {arr.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && <span className="mx-2 font-semibold">{">"}</span>}
            <p className="text-sm text-stone-500">{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BreadCrumbs;
