import React from "react";

const App = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="h-[600px] w-[600px] bg-blue-800 relative">
        <div className="svg-container  absolute -top-[68px] -right-[155px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <clipPath id="88e661c469">
                <path
                  d="M 88.136719 30 L 235.925781 30 L 235.925781 290.613281 L 88.136719 290.613281 Z M 88.136719 30"
                  clipRule="nonzero"
                />
              </clipPath>
              <clipPath id="af3190598f">
                <path
                  d="M 88.15625 30 C 95.046875 37.773438 100.894531 46.335938 105.214844 55.332031 C 120.484375 87.117188 110.097656 115.761719 100.054688 143.464844 C 89.921875 171.421875 80.347656 197.824219 97.816406 225 C 117.210938 255.164062 147.816406 267.421875 177.414062 279.273438 C 186.433594 282.886719 195.3125 286.449219 203.75 290.4375 L 235.683594 290.4375 L 235.683594 30 Z M 88.15625 30"
                  clipRule="nonzero"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#88e661c469)">
              <g clipPath="url(#af3190598f)">
                <image
                  href="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default App;
