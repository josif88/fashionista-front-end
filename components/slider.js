import { Carousel, Image } from "antd";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import  useItemStore from "../stores/itemStore";

export default function Slider() {
  const { mediaHttpUrls } = useItemStore();

  const carouselControls = useRef();

  return (
    <div
      className="overLay"
      onClick={() => {
        carouselControls.current.next();
      }}
    >
      <Carousel ref={carouselControls}>
        {mediaHttpUrls.map((imgUrl, index) => (
          <div key={index} className="single-slide">
            <div className="slide-overlay">
              <div>
                <Image
                  style={{ height: 300, objectFit: "cover" }}
                  src={imgUrl}
                />
              </div>
            </div>
            <LazyLoadImage src={imgUrl} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
