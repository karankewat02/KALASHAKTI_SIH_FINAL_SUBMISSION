import React from 'react'
import Styles from './Sidesection.module.css'
const seller = () => {

  const data=[
    {name:"Seller1" ,product:"Product1", region:"Jabalpur",id:"1",desc:"Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes",productimage:"https://images.unsplash.com/photo-1633685894176-9f715a092b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
    {name:"Seller2" ,product:"Product1", region:"Jabalpur",id:"2",desc:"Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes" ,productimage:"https://images.unsplash.com/photo-1633685894176-9f715a092b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  },
    {name:"Seller3" ,product:"Product1", region:"Jabalpur",id:"3",desc:"Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes" ,productimage:"https://images.unsplash.com/photo-1633685894176-9f715a092b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  },
    {name:"Seller4" ,product:"Product1", region:"Jabalpur",id:"5",desc:"Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes" ,productimage:"https://images.unsplash.com/photo-1633685894176-9f715a092b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  },
    {name:"Seller5" ,product:"Product1", region:"Jabalpur",id:"6",desc:"Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes" ,productimage:"https://images.unsplash.com/photo-1633685894176-9f715a092b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  },
    {name:"Seller6" ,product:"Product1", region:"Jabalpur",id:"7",desc:"Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes" ,productimage:"https://images.unsplash.com/photo-1633685894176-9f715a092b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  },
  ]
  return (
    <>
    <div className="Unapprovedlist">
      <ul  className={Styles.toplist} >
        <li>Sno</li>
        <li>Seller Name</li>
        <li>Product Name</li>
        <li>Region</li>
      </ul>
      {data.map((user)=>(
        <div className={Styles.listbox}>
        <ul className={Styles.productlist}>
          <li>{`${user.id}`}</li>
        <li >{`${user.name} `}</li>
        <li >{`${user.product} `}</li>
        <li >{`${user.region} `}</li>
        </ul>
        <br />
        <h4>Product images</h4>
        <br />
        <ul className={Styles.productlist}>
        <img className={Styles.productimg} src={user.productimage} alt="" />
        <img className={Styles.productimg} src={user.productimage} alt="" />
        <img className={Styles.productimg} src={user.productimage} alt="" />
        <img className={Styles.productimg} src={user.productimage} alt="" />
        </ul>
        <br />
        <p>{`${user.desc}`}</p>
        <br />
        <button className={Styles.Approve}>Approve</button>
        </div>
        
      ))}
    </div>
    
    </>
  )
}

export default seller