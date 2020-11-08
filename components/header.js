import Head from "next/head";
import { Input } from "antd";

import { useEffect, useRef, useState } from "react";

export default function Header({ pageTitle = "Page Title" }) {
  const searchInput = useRef(null);
  const title = useRef(null);
  const controlsHolder = useRef(null);
  const logo = useRef(null);
  const [searchInputStat, setSearchInputStat] = useState(true);

  const toggleSearchInput = () => {
    setSearchInputStat(!searchInputStat);
  };

  const search = (e) => {
    if (e.key === "Enter") alert(e.target.value);
  };

  useEffect(() => {
    searchInputStat
      ? (() => {
          searchInput.current.style.display = "none";
          title.current.style.display = "block";
          logo.current.style.display = "block";
          controlsHolder.current.className = "controls";
        })()
      : (() => {
          searchInput.current.style.display = "block";
          title.current.style.display = "none";
          logo.current.style.display = "none";
          controlsHolder.current.className = "controls-full-width";
        })();
  }, [searchInputStat]);

  const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      width="32px"
      height="32px"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );

  const SearchOfIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      fill="white"
      width="32px"
      height="32px"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <path d="M15.5,14h-0.79l-0.28-0.27C15.41,12.59,16,11.11,16,9.5C16,5.91,13.09,3,9.5,3C6.08,3,3.28,5.64,3.03,9h2.02 C5.3,6.75,7.18,5,9.5,5C11.99,5,14,7.01,14,9.5S11.99,14,9.5,14c-0.17,0-0.33-0.03-0.5-0.05v2.02C9.17,15.99,9.33,16,9.5,16 c1.61,0,3.09-0.59,4.23-1.57L14,14.71v0.79l5,4.99L20.49,19L15.5,14z" />
          <polygon points="6.47,10.82 4,13.29 1.53,10.82 0.82,11.53 3.29,14 0.82,16.47 1.53,17.18 4,14.71 6.47,17.18 7.18,16.47 4.71,14 7.18,11.53" />
        </g>
      </g>
    </svg>
  );

  return (
    <div className="container header">
      <Head>
        <title>Fashionista Fans</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="navbar flex">
        <div ref={logo} className="logo">
          Fashionista Fans
        </div>
        <div ref={title} className="page-title">
          {pageTitle}
        </div>
        <div ref={controlsHolder} className="controls">
          <div ref={searchInput} className="search-input">
            <Input onKeyDown={search} placeholder="Search" />
          </div>
          <a onClick={toggleSearchInput}>
            {searchInputStat ? <SearchIcon /> : <SearchOfIcon />}
          </a>
          <a>
            <img src="/assets/wishlist.png" width={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
