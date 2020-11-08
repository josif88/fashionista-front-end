import { Card } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";

export default function StoreCard({ name, logoHttpUrl }) {
  const viewStore = () => {
    console.log("view store");
  };

  return (
    <a onClick={viewStore}>
      <Card
        title={<></>}
        className="card item-card"
        cover={
          <LazyLoadImage
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
            effect="blur"
            src={logoHttpUrl}
          />
        }
      >
        <div className="card-footer flex">
          <div className="item-card-desc">
            <h4>{name}</h4>
          </div>
        </div>
      </Card>
    </a>
  );
}
