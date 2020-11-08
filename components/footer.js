import Link from "next/link";

export default function Footer() {
  const style = { width: 25 };

  return (
    <footer className="footer flex container">
      <Link href={"/"}>
        <a>
          <div className="icon-container">
            <img src="/assets/shirt.png" style={style} />
            <h4>New</h4>
          </div>
        </a>
      </Link>
      <Link href={"/complexes"}>
      <a>
        <div className="icon-container">
          <img src="/assets/dashboard.png" style={style} />
          <h4>Complex</h4>
        </div>
      </a>
      </Link>
      <a>
        <div className="icon-container">
          <img src="/assets/star.png" style={style} />
          <h4>Following</h4>
        </div>
      </a>
    </footer>
  );
}
