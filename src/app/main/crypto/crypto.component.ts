import { Component, OnInit } from '@angular/core';
import { appService } from '../service.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {

   constructor(private service:appService) { }

 chart:any = new Chart({
    chart: {
      type: 'line',
      backgroundColor: '#dbdbdb'
    },
    title: {
      text: 'Last one year price of Bitcoin'
    },
    credits: {
      enabled: false
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
      name: 'Price (USD)',
      data: [1, 2, 3],
      type: 'line'
    }]
  });
  loadChart:boolean=false;

   topFourCoin:any;
   C_Coins:any;
   ngOnInit(): void {
    
    this.loadChart=false;
    this.topFourCoin=[
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 59692,
    "market_cap": 1196576504159,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1196576504159,
    "total_volume": 47646350460,
    "high_24h": 61493,
    "low_24h": 58189,
    "price_change_24h": -1800.2649384491524,
    "price_change_percentage_24h": -2.92761,
    "market_cap_change_24h": -36299565917.368164,
    "market_cap_change_percentage_24h": -2.9443,
    "circulating_supply": 20048315,
    "total_supply": 20048315,
    "max_supply": 21000000,
    "ath": 126080,
    "ath_change_percentage": -52.65508,
    "ath_date": "2025-10-06T18:57:42.558Z",
    "atl": 67.81,
    "atl_change_percentage": 87930.22696,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2026-06-26T10:28:01.257Z"
  },
  {
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "current_price": 1552.28,
    "market_cap": 187292617623,
    "market_cap_rank": 2,
    "fully_diluted_valuation": 187292617623,
    "total_volume": 18136703602,
    "high_24h": 1641.13,
    "low_24h": 1517.21,
    "price_change_24h": -88.85802715123373,
    "price_change_percentage_24h": -5.41443,
    "market_cap_change_24h": -10780436053.887878,
    "market_cap_change_percentage_24h": -5.44266,
    "circulating_supply": 120683589.3012679,
    "total_supply": 120683589.3012679,
    "max_supply": null,
    "ath": 4946.05,
    "ath_change_percentage": -68.61583,
    "ath_date": "2025-08-24T19:21:03.333Z",
    "atl": 0.432979,
    "atl_change_percentage": 358410.81722,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
      "times": 33.777869159288166,
      "currency": "btc",
      "percentage": 3377.7869159288166
    },
    "last_updated": "2026-06-26T10:27:58.713Z"
  },{
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 59692,
    "market_cap": 1196576504159,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1196576504159,
    "total_volume": 47646350460,
    "high_24h": 61493,
    "low_24h": 58189,
    "price_change_24h": -1800.2649384491524,
    "price_change_percentage_24h": -2.92761,
    "market_cap_change_24h": -36299565917.368164,
    "market_cap_change_percentage_24h": -2.9443,
    "circulating_supply": 20048315,
    "total_supply": 20048315,
    "max_supply": 21000000,
    "ath": 126080,
    "ath_change_percentage": -52.65508,
    "ath_date": "2025-10-06T18:57:42.558Z",
    "atl": 67.81,
    "atl_change_percentage": 87930.22696,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2026-06-26T10:28:01.257Z"
  },
  {
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "current_price": 1552.28,
    "market_cap": 187292617623,
    "market_cap_rank": 2,
    "fully_diluted_valuation": 187292617623,
    "total_volume": 18136703602,
    "high_24h": 1641.13,
    "low_24h": 1517.21,
    "price_change_24h": -88.85802715123373,
    "price_change_percentage_24h": -5.41443,
    "market_cap_change_24h": -10780436053.887878,
    "market_cap_change_percentage_24h": -5.44266,
    "circulating_supply": 120683589.3012679,
    "total_supply": 120683589.3012679,
    "max_supply": null,
    "ath": 4946.05,
    "ath_change_percentage": -68.61583,
    "ath_date": "2025-08-24T19:21:03.333Z",
    "atl": 0.432979,
    "atl_change_percentage": 358410.81722,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
      "times": 33.777869159288166,
      "currency": "btc",
      "percentage": 3377.7869159288166
    },
    "last_updated": "2026-06-26T10:27:58.713Z"
  }];
      this.service.getCryptoCurrency()
      .subscribe((res:any)=>{
        res.current_price =  Math.round(res.current_price);
          this.getCoinHistory("bitcoin")
          this.topFourCoin=res.slice(0,4);
          this.C_Coins=res;
       console.log("res",res)
      })
   }

   coinName:any;
   loadcoinHistory:boolean=false;
  getCoinHistory(coinName: string) {
     this.chart.options.title.text = 'Last one year price of '+coinName;
    this.loadcoinHistory=false;
    this.service.getCryptoCurrencyHistory(coinName.toLowerCase())
      .subscribe((res: any) => {
        let monthlyPriceData:any=[];
        let PriceList:any=[];
        let MonthList:any=[];
        res.prices.forEach((dataPoint: any, index: any) => {
          let monthName = new Date(dataPoint[0]).toLocaleString('default', { month: 'short', year: '2-digit' });
          if(index==0){
            PriceList.push(Math.round(dataPoint[1] * 100));
            MonthList.push(monthName);
          
            monthlyPriceData.push({
            Date: new Date(dataPoint[0]),
            monthName: monthName,
            price: Math.round(dataPoint[1] * 100)
          })
          }else if( monthlyPriceData[monthlyPriceData.length-1]?.monthName !== monthName) {
            PriceList.push(Math.round(dataPoint[1] * 100));
            MonthList.push(monthName);

            monthlyPriceData.push({
            Date: new Date(dataPoint[0]),
            monthName: monthName,
            price: Math.round(dataPoint[1] * 100)
          })
          }
          
        })
        debugger;
        this.chart.options.series= [{
      name: 'Price (USD)',
      data: [1, 2, 3],
      type: 'line'
    }];
        this.chart.options.series[0].data = PriceList;
        this.chart.options.xAxis.categories = MonthList;
        this.loadChart = true;
        this.loadcoinHistory=true;
  })
}
}
