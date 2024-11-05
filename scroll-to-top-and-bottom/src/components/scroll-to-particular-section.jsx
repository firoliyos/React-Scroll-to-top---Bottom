

export default function ScrollToSection() {

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
    return(
        <div>
            <h1>SCROLL TO A PARTICULAR SECTION</h1>
            <button>Click to scroll</button>
            {
                data.map(item => <div style={item.style}>
                    <h3>{item.label}</h3>
                </div>
                )
            }
        </div>
    )
}