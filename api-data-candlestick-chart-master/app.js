// let ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade')
// let ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@kline_1m')
let ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=ethusdt@trade/btcusdt@trade/bnbusdt@trade')

let stockPriceElement = document.getElementById('stock-price')
let lastprice = null

ws.onmessage = (event) => {
    // console.log(event.data);
    let stockObject = JSON.parse(event.data);
    // // console.log(stockObject.p)
    let price = parseFloat(stockObject.data.p).toFixed(2);
    stockPriceElement.innerText = price;
    stockPriceElement.style.color = !lastprice || lastprice === price ? 'black': price > lastprice? 'green' : 'red'
    lastprice = price;
}
//event.data
// {"e":"trade","E":1637043762003,"s":"ETHEUR","t":52543972,"p":"3802.95000000","q":"0.09790000","b":1171669117,"a":1171669124,"T":1637043762002,"m":true,"M":true}
// {"stream":"btcusdt@trade","data":{"e":"trade","E":1637045345408,"s":"BTCUSDT","t":1147021583,"p":"60820.04000000","q":"0.00075000","b":8276483137,"a":8276482373,"T":1637045345408,"m":false,"M":true}}
// {"stream":"ethusdt@trade","data":{"e":"trade","E":1637045345429,"s":"ETHUSDT","t":674415618,"p":"4332.89000000","q":"0.00300000","b":6661503522,"a":6661503547,"T":1637045345429,"m":true,"M":true}}