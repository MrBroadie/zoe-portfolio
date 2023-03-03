const ImageList = (image) => {
  return (
    <div className="flex flex-col hover:scale-105 transition ease-in-out delay-50 w-full">
      <img
        className="h-full object-cover drop-shadow-sm"
        src={image.image.source}
        alt={image.image.title}
      />
      <button className=" bg-slate-400 hover:bg-slate-500 hover:underline rounded-b-lg text-white text-lg p-2">
        {image.image.project}
      </button>
    </div>
  );
};

export default ImageList;
