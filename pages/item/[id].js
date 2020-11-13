import Footer from "../../components/footer";
import Header from "../../components/header";
import { useEffect } from "react";
import Slider from "../../components/slider";
import  useItemStore  from "../../stores/itemStore";
import ItemCard from "../../components/itemCard";
import moment from "moment";

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
          <div className="flex">

          <img className="round-image" src={store.logoHttpUrl} />
          <h3 style={{ marginLeft : 20}}>{store.name}</h3>
          </div>
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
      <div className="info-container">
  <h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C18.636 0 24 5.376 24 12C24 18.636 18.636 24 12 24C5.376 24 0 18.636 0 12C0 5.376 5.376 0 12 0ZM11.58 5.916C11.088 5.916 10.68 6.312 10.68 6.816V12.876C10.68 13.188 10.848 13.476 11.124 13.644L15.828 16.452C15.972 16.536 16.128 16.584 16.296 16.584C16.596 16.584 16.896 16.428 17.064 16.14C17.316 15.72 17.184 15.168 16.752 14.904L12.48 12.36V6.816C12.48 6.312 12.072 5.916 11.58 5.916Z" fill="#200E32"/>
</svg>
{moment(moment(props.item.data.date).format("YYYYMMDD"), "YYYYMMDD").fromNow()}</h3>

<h3><svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 29C11.433 29 13 27.2091 13 25C13 22.7909 11.433 21 9.5 21C7.567 21 6 22.7909 6 25C6 27.2091 7.567 29 9.5 29Z" stroke="#200E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.5 29C28.433 29 30 27.2091 30 25C30 22.7909 28.433 21 26.5 21C24.567 21 23 22.7909 23 25C23 27.2091 24.567 29 26.5 29Z" stroke="#200E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1053 3H28.7895L34 13M6.21053 25H2.73684V17L6.21053 25ZM1 1H20.1053V25L1 1ZM13.1579 25H23.5789H13.1579ZM30.5263 25H34V13H20.1053L30.5263 25Z" stroke="#200E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9H10" stroke="#200E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Delivery available</h3>
 <h3 className="Blue"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.024 0C18.84 0 24 5.58838 24 11.982C24 19.3971 17.952 24 12 24C10.032 24 7.848 23.4712 6.096 22.4377C5.484 22.0651 4.968 21.7887 4.308 22.005L1.884 22.7261C1.272 22.9184 0.72 22.4377 0.9 21.7887L1.704 19.0966C1.836 18.7241 1.812 18.3275 1.62 18.015C0.588 16.1162 0 14.0371 0 12.018C0 5.69654 5.052 0 12.024 0ZM17.508 10.4917C16.656 10.4917 15.972 11.1768 15.972 12.03C15.972 12.8713 16.656 13.5684 17.508 13.5684C18.36 13.5684 19.044 12.8713 19.044 12.03C19.044 11.1768 18.36 10.4917 17.508 10.4917ZM11.976 10.4917C11.136 10.4797 10.44 11.1768 10.44 12.018C10.44 12.8713 11.124 13.5563 11.976 13.5684C12.828 13.5684 13.512 12.8713 13.512 12.03C13.512 11.1768 12.828 10.4917 11.976 10.4917ZM6.444 10.4917C5.592 10.4917 4.908 11.1768 4.908 12.03C4.908 12.8713 5.604 13.5684 6.444 13.5684C7.296 13.5563 7.98 12.8713 7.98 12.03C7.98 11.1768 7.296 10.4917 6.444 10.4917Z" fill="white"/>
</svg>
Message </h3>
<h3 className="Pink">
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.66287 0.426472C7.88261 -0.338115 10.2845 -0.0629785 12.2943 1.15817L12.627 1.37197L12.9657 1.15697C14.8711 0.00176 17.1314 -0.306929 19.2585 0.319534L19.5941 0.426552C24.2333 2.02597 26.3104 7.45031 24.7499 12.6406C23.9675 15.0549 22.6843 17.244 20.9904 19.0483C18.6855 21.4453 16.1447 23.562 13.417 25.3581L13.1275 25.5509C12.8334 25.7466 12.4618 25.7499 12.1648 25.5595L11.8546 25.3606C9.1232 23.562 6.58233 21.4453 4.26952 19.04C2.58359 17.244 1.30038 15.0549 0.511351 12.6194C-1.04354 7.44717 1.02507 2.0254 5.66287 0.426472ZM11.8417 3.18446C10.1944 1.97875 8.12628 1.65479 6.22931 2.30821C2.63679 3.54676 1.0081 7.81552 2.26367 11.9929C2.95423 14.1238 4.08638 16.0552 5.56524 17.6307C7.77315 19.9268 10.2069 21.9543 12.8135 23.6708L12.6332 23.5491L13.2242 23.1511C15.2874 21.7246 17.2307 20.1057 19.0277 18.3175L19.6947 17.639C21.1815 16.0552 22.3136 14.1238 22.9976 12.0141C24.2586 7.81951 22.6228 3.54774 19.0283 2.30852C17.0365 1.62427 14.8623 2.01619 13.1823 3.36299C12.8597 3.62156 12.4177 3.62656 12.0902 3.37533L11.8417 3.18446ZM17.5203 5.38853C19.1895 5.95903 20.3732 7.5593 20.5209 9.43937C20.5636 9.98337 20.1861 10.4614 19.6777 10.5072C19.1693 10.5529 18.7225 10.149 18.6797 9.60498C18.5944 8.51892 17.9134 7.59821 16.9581 7.27171C16.4721 7.10559 16.2039 6.54937 16.3592 6.02934C16.5144 5.50932 17.0343 5.22242 17.5203 5.38853Z" fill="white"/>
</svg>

  Add to wishlist
</h3>
        </div>
        {/* end of buttons and labels */}
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
