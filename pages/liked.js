import Header from "../components/header";
import Footer from "../components/footer";
import Items from "../components/items";
import { useEffect, useState } from "react";

export default function Home(props) {
  let [likedItems, setLikedItems] = useState();

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    };

    fetch("http://fashionista.fans/api/user/likedItems", requestOptions)
      .then((result) => result.json())
      .then((data) => setLikedItems(data));

    console.log(likedItems);
  }, []);

  return (
    <div>
      <Header pageTitle={"Whats New"} />
      {likedItems && <Items items={likedItems} />}
      <Footer />
    </div>
  );
}
