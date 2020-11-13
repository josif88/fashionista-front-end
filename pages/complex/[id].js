import { Tabs } from "antd";
import Footer from "../../components/footer";
import Header from "../../components/header";
import StoreList from "./../../components/storeList";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import mapboxgl from "mapbox-gl";

const { TabPane } = Tabs;

const ComplexPage = (props) => {
  const [complex, setComplex] = useState({});
  const [storeList, setStoreList] = useState([]);
  // Map box begin
  mapboxgl.accessToken =
    "pk.eyJ1Ijoieml5YWRzcGFyb3ciLCJhIjoiY2tnemI2enVvMDZ0eDJ6cWx1OWRxbWJ2ciJ9.VJ_fTMyFzce0hqYs8Jpq8w";
  let map = new mapboxgl.Map({
    container: "mapContainer",
    center: [complex.mapLocation.lng, complex.mapLocation.lat], // starting position [lng, lat]
    zoom: 10.15, // starting zoom
    style: "mapbox://styles/mapbox/streets-v11",
  });

  // Map box end

  useEffect(() => {
    setComplex(props.complex.data);
    setStoreList(props.complex.data.stores);
  }, []);

  return (
    <div className="single-complex">
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Header pageTitle={complex.name} />
      <main className="content container">
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Stores" key="1">
            <StoreList storeList={storeList} />
          </TabPane>
          <TabPane tab="Info" key="2" style={{ direction: "rtl" }}>
            <h1> {complex.address} </h1>
            <h1>موقعنا على الخريطة</h1>
            <div id="mapContainer" style={{ width: "100%", height: 400 }}></div>
          </TabPane>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

//get latest items data and pass it to item list components
export async function getServerSideProps({ params }) {
  let complexUid = params.id;
  const resp = await fetch(
    `https://fashionista.fans/api/complex/${complexUid}`
  );
  const complex = await resp.json();
  return {
    props: {
      complex,
    },
  };
}

export default ComplexPage;
