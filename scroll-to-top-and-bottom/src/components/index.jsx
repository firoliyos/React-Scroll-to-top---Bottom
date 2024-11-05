import { useRef, useState } from "react";
import useFetch from "./use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=200",
    {}
  );

  const bottomRef = useRef(null)
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  function handleScrollToTop() {
    window.scrollTo({
        top: 0, 
        left : 0, 
        behavior: 'smooth'
    })
  }

  if (pending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Some Error!</h1>;
  }

  return (
    <div style={{padding: '10px', margin: "20px"}}>
      <h1>SCROLL TO TOP AND BOTTOM APP</h1>
      <h3>This is the Top section</h3>
      <button onClick={handleScrollToBottom} style={{padding: '10px', margin: "20px", background:'black', color: 'yellow'}}>Scroll to Bottom</button>
      <ul style={{listStyle: 'none'}}>
       {
        data && data.products && data.products.length ? 
        data.products.map((item) => 
            <li style={{padding: '10px', background: 'aliceblue', color: 'green' }}>{item.title}</li>
        )
        : null
       }
      </ul>
      <button onClick={handleScrollToTop} style={{padding: '10px', margin: "20px", background:'black', color: 'yellow'}}>Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is Bottom section!</h3>
    </div>
  );
}
