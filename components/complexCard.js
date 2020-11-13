import { Card } from "antd";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ComplexCard({ uid, name, logoHttpUrl }) {
  return (
    <Link href={`/complex/${uid}`}>
      <a>
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
              <h4 style={{ textAlign: "center" }}>{name}</h4>
            </div>
          </div>
        </Card>
      </a>
    </Link>
  );
}
