import { useState } from "react";
import useFetch from "./use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  if (pending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Some Error!</h1>;
  }

  return (
    <div>
      <h1>SCROLL TO TO AND BOTTOM APP</h1>
      <h3>This is the Top section</h3>
      <button>Scroll to Bottom</button>
      <ul style={{listStyle: 'none'}}>
       {
        data && data.products && data.products.length ? 
        data.products.map((item) => 
            <li>{item.title}</li>
        )
        : null
       }
      </ul>
      <button>Scroll to Top</button>
      <h3>This is Bottom section!</h3>
    </div>
  );
}
