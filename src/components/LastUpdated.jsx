import Tick from "../assets/tick.png";
import iButton from "../assets/iButton.png";

function LastUpdated() {
  return (
    <section className="mt-5">
      <hr />
      <div className="flex items-center justify-between py-3 sm:gap-5">
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-1">
            <img src={Tick} alt="" />
            <p className="text-xs sm:text-sm">
              Last Updated - February 22, 2020{" "}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <img src={iButton} alt="" />
            <p className="text-xs sm:text-sm">Advertising Disclosure </p>
          </div>
        </div>
        <select
          name="select"
          id="select"
          className="cursor-pointer text-xs sm:text-sm"
        >
          <option value="top">Top Relevent</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <hr />
    </section>
  );
}

export default LastUpdated;
