import { useNavigate } from "react-router-dom";

const ImageList = (image) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/details/${image.image.project}`);
  };

  const buttonStyle =
    "flex flex-col hover:underline text-white hover:scale-105 transition ease-in-out delay-50 w-full";

  const buttonDisabledStyle = "flex flex-col text-white w-full";
  return (
    <button
      className={image.image.disabled ? buttonDisabledStyle : buttonStyle}
      onClick={handleButtonClick}
      disabled={image.image.disabled}
    >
      <img
        className="h-full w-full object-cover drop-shadow-sm"
        src={image.image.source}
        alt={image.image.title}
      />
      <p className=" bg-slate-400 rounded-b-lg text-lg p-2 w-full">
        {image.image.project}
      </p>
    </button>
  );
};

export default ImageList;
