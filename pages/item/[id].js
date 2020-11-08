import Footer from "../../components/footer";
import Header from "../../components/header";
import { useEffect } from "react";
import Slider from "../../components/slider";
import { useItemStore } from "../../stores'/itemStore";

const ItemPage = (props) => {
  //zustand
  const {
    uid,
    setUid,
    description,
    setDescription,
    setMediaHttpUrls,
    store,
    setStore,
  } = useItemStore();

  useEffect(() => {
    setUid(props.item.data.uid);
    setDescription(props.item.data.description);
    setMediaHttpUrls(props.item.data.mediaHttpUrls);
    setStore(props.item.data.store);
  }, []);

  return (
    <div>
      <Header pageTitle={description} />
      <main className="content container">
        {/* store info */}
        <div className="store-info-bar flex">
          <img className="round-image" src={store.logoHttpUrl} />
          <h3>{store.name}</h3>
          <div className="default-button">
            <img
              style={{ height: 20, width: 20, marginRight: 5 }}
              src={'/assets/store.png'}
            />
            visit store
          </div>
        </div>
        {/* end of store info */}
        <Slider />
      </main>
      <Footer />
    </div>
  );
};

//get latest items data and pass it to item list components
export async function getServerSideProps({ params }) {
  let itemUid = params.id;
  const resp = await fetch(`https://fashionista.fans/api/item/${itemUid}`);
  const item = await resp.json();

  return {
    props: {
      item,
    },
  };
}

export default ItemPage;
