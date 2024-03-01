import Arrow from "../assets/showMoreArrow.png";

function ShowMoreButton() {
  return (
    <button className="mt-2 flex items-center text-blue-400 ">
      Show more{"  "}
      <span className="mt-1">
        <img src={Arrow} alt="" />
      </span>
    </button>
  );
}

export default ShowMoreButton;
