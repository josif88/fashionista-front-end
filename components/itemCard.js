import { Card, Carousel, Slider } from "antd";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef, useState } from "react";

export default function ItemCard({ uid,mediaHttpUrls, description, store }) {
  const [liked, setLiked] = useState(false);

  const goToStore = () => {
    console.log("go to store page");
  };

  const viewItem = () => {
    console.log("view item");
  };

  const like = () => {
    setLiked(!liked);
  };

  return (
    <Card
      className="card item-card"
      title={
        <a>
          <div className="card-title" onClick={goToStore}>
            <div className="store-thump">
              <LazyLoadImage className="round-image" src={store.logoHttpUrl} />
            </div>
            <div className="card-store-title">
              <h4>{store.name}</h4>
            </div>
          </div>
        </a>
      }
      cover={
        <Carousel className="item-carousel">
          {mediaHttpUrls.slice(0, 2).map((image, index) => (
            <div className="item-single-slide" key={index}>
              <LazyLoadImage effect="blur" className="filter" src={image} />
              <div className="item-image-overlay">
                <LazyLoadImage effect="blur" src={image} />
              </div>

              {mediaHttpUrls.slice(1, -1).length > 0 && (
                <div className="image-counter">
                  {"+" + mediaHttpUrls.slice(1, -1).length}
                </div>
              )}
            </div>
          ))}
        </Carousel>
      }
    >
      <div className="card-footer flex">
        <div className="item-card-desc">
          <Link href={`/item/${uid}`}>
            <a onClick={viewItem}>
              <h4>{description}</h4>
            </a>
          </Link>
        </div>
        <a>
          <div onClick={like} className="like-button">
            {liked ? (
              <img style={{ width: 32 }} src="/assets/unlike.png" />
            ) : (
              <img style={{ width: 32 }} src="/assets/like.png" />
            )}
          </div>
        </a>
      </div>
    </Card>
  );
}
