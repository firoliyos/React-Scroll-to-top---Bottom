import { useRef } from "react"


export default function ScrollToSection() {
    
    const ref = useRef()
    const data = [
        {
          label: 'First Card',
          style : {
            width: '100%',
            height: '600px',
            backgroundColor: 'red'
          }  
        },
        {
            label: 'Second Card',
            style : {
              width: '100%',
              height: '600px',
              backgroundColor: 'green'
            }  
          },
          {
            label: 'Third Card',
            style : {
              width: '100%',
              height: '600px',
              backgroundColor: 'blue'
            }  
          },
          {
            label: 'Fourth Card',
            style : {
              width: '100%',
              height: '600px',
              backgroundColor: 'yellow'
            }  
          },
          {
            label: 'Fifth Card',
            style : {
              width: '100%',
              height: '600px',
              backgroundColor: 'orange'
            }  
          }
    ]

    function handleScrollToSection() {
        let position = ref.current.getBoundingClientRect().top
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    }
    return(
        <div>
            <h1>SCROLL TO A PARTICULAR SECTION</h1>
            <button onClick={handleScrollToSection}>Click to scroll</button>
            {
                data.map((item,index) => <div ref={index === 2 ? ref : null} style={item.style}>
                    <h3>{item.label}</h3>
                </div>
                )
            }
        </div>
    )
}