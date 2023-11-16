import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const project = location.state?.project;
  console.log("project", project);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen-minus-footer bg-white">
      <div className="w-full flex flex-col min-h-screen-minus-footer justify-around items-center p-2">
        <h2 className="text-xl font-medium border-b-2 w-full">
          PROJECT: {project?.name}
        </h2>
        {project?.topImages && (
          <>
            <div className="flex flex-col md:flex-row md:w-4/6 w-full items-center justify-center mb-4  flex-shrink-0">
              <div className="flex md:h-full m-2">
                {project?.topImages.map((image, index) => (
                  <div key={index} className="flex ">
                    <img
                      className="h-full w-full object-cover overflow-hidden"
                      src={image}
                      alt={`image-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        <p>{project?.description}</p>
        <div className="flex md:m-2 p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4 align-items-center">
            {project?.images.map((image, index) => (
              <img
                className="h-full w-full object-cover drop-shadow-sm"
                key={index}
                src={image}
                alt={`image-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
