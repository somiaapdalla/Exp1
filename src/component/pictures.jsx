import { useState } from "react";
import image1 from "../assets/farmajo.jpg";
import image2 from "../assets/xasan.jpeg";
import image3 from "../assets/img4.jpg"
import image4 from "../assets/img3.jpg"
import image5 from "../assets/img5.jpeg"


function Presents() {
  const [index, setIndex] = useState(0);

  const handleIncrement = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleDecrement = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const images = [image1, image2 ,image3,image4 ,image5];

  return (
    <div className="mt-10 flex flex-col items-center">
      <img
        src={images[index]}
        alt="President"
        className="w-80 h-80  rounded-lg "
      />

      <div className="mt-10 mb-10">
        <button
          onClick={handleDecrement}
          className="bg-blue-500 px-10 py-3 rounded-lg text-white mr-5"
        >
          Preview
          
        </button>
        <button
          onClick={handleIncrement}
          className="bg-blue-500 px-10 py-3 rounded-lg text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Presents;
