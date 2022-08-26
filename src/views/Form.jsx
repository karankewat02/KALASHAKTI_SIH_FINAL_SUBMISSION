import React, { Component } from 'react'

export default class Form extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings =
        { "appId": "402ee2a38b73d828342689246987096c", "popupWidget": true, "automaticChatOpenOnNavigation": true };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }





  render() {
    return (
      <>
        <div style={{  }}>
          <h2 style={{ color: "#fff" }} > FAQ</h2>
          <br />
          <div className='form'>
            {/* <Spline scene="https://prod.spline.design/1eBk0VF5T2Ysak7B/scene.splinecode" /> */}
            <details>
              <summary>What is NFT?</summary>
              <p>A non-fungible token is a record on a blockchain which is associated with a particular digital or physical asset. The ownership of an NFT is recorded in the blockchain, and can be transferred by the owner, allowing NFTs to be sold and traded</p>
            </details>
            <details>
              <summary>Can we set any price for are NFT?</summary>
              <p>yes you can set any amount of SOL you see right!</p>
            </details>
            <details>
              <summary>How much is Royalty per NFT?</summary>
              <p>10%! This value is subject to change without prior information</p>
            </details>
            <details>
              <summary>How can we see Transaction detail?</summary>
              <p>we use Solana for our Marketplace and being open chain their is 100% transparency you can click on address available on NFT card to get redirected to Solana Explorer and you will be able to see complete Transaction detail</p>
            </details>
            
          </div>
        </div>
      </>

    )
  }
}
