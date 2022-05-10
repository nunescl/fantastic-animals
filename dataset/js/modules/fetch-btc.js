export default function initFetchBtc() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((btc) => {
      const btcPrice = document.querySelector('.btc-price');
      btcPrice.innerText = (100 / btc.USD.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(Error(error));
    });
}
