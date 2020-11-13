import Head from "next/head";
import { Input } from "antd";
import Link from "next/link";

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
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.65 23.4814C23.2105 22.9056 24.1089 22.9056 24.6694 23.4814L28.3736 26.5746H28.4379C29.1874 27.3582 29.1874 28.6287 28.4379 29.4123C27.6885 30.1959 26.4735 30.1959 25.724 29.4123L22.65 25.7677L22.5334 25.6315C22.3161 25.347 22.1961 24.9923 22.1961 24.6246C22.1961 24.1956 22.3594 23.7842 22.65 23.4814ZM12.4376 0C15.7362 0 18.8998 1.37015 21.2323 3.80904C23.5648 6.24793 24.8752 9.55578 24.8752 13.0049C24.8752 20.1873 19.3067 26.0098 12.4376 26.0098C5.56849 26.0098 0 20.1873 0 13.0049C0 5.82249 5.56849 0 12.4376 0Z"
        fill="#200E32"
      />
    </svg>
  );

  const Wishlist = () => (
    <svg
      width="29"
      height="31"
      viewBox="0 0 29 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.8089 19.0999C26.5329 19.0999 28.7393 21.6531 28.7393 24.8031C28.7393 27.9513 26.5329 30.5044 23.8089 30.5044C21.0864 30.5044 18.8784 27.9513 18.8784 24.8031C18.8784 21.6531 21.0864 19.0999 23.8089 19.0999ZM11.6538 22.371C12.847 22.371 13.8156 23.491 13.8156 24.8707C13.8156 26.2486 12.847 27.3704 11.6538 27.3704H2.22626C1.03308 27.3704 0.0645142 26.2486 0.0645142 24.8707C0.0645142 23.491 1.03308 22.371 2.22626 22.371H11.6538ZM4.99496 0.504425C7.71905 0.504425 9.9254 3.05759 9.9254 6.20575C9.9254 9.35575 7.71905 11.9089 4.99496 11.9089C2.27246 11.9089 0.0645142 9.35575 0.0645142 6.20575C0.0645142 3.05759 2.27246 0.504425 4.99496 0.504425ZM26.5791 3.70785C27.7707 3.70785 28.7393 4.82785 28.7393 6.20575C28.7393 7.58548 27.7707 8.70548 26.5791 8.70548H17.1516C15.9584 8.70548 14.9898 7.58548 14.9898 6.20575C14.9898 4.82785 15.9584 3.70785 17.1516 3.70785H26.5791Z"
        fill="#200E32"
      />
    </svg>
  );

  return (
    <div className="container header">
      <Head>
        <title>Fashionista</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="navbar flex">
        <div ref={logo} className="logo">
          Fashionista
        </div>

        <div ref={title} className="page-title">
          {pageTitle}
        </div>
        <div ref={controlsHolder} className="controls">
          <div ref={searchInput} className="search-input">
            <Input onKeyDown={search} placeholder="Search" />
          </div>
          <a onClick={toggleSearchInput}>
            <SearchIcon />
          </a>
          <Link href={`/liked`}>
            <a style={{ marginLeft: 10 }}>
              <Wishlist />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
