

    // on pressing enter
    addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn1").click();
    }
    });

      // on clicking button
      function func()
        {
            var str = document.getElementById("symbol").value;
            var api = 'https://cloud.iexapis.com/stable/stock/';
            var api_key = '/quote?token=pk_4b541c56c998491e9b6c905a35a880e9';
            var url = api + str + api_key;
                console.log(url)

            async function getData(){
                const response = await fetch(url);
                const data = await response.json();
                const { companyName, symbol, iexRealtimePrice, previousClose, isUSMarketOpen } = data;


                document.getElementById('name').textContent = companyName;
                document.getElementById('sym').textContent = symbol;

                var price = iexRealtimePrice;
                let dollarUS = Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                });
                document.getElementById('price').textContent = dollarUS.format(price);
                document.getElementById('pclose').textContent = dollarUS.format(previousClose);
                document.getElementById('hours').textContent = isUSMarketOpen;

                console.log('Log1: ', companyName);
                console.log('Log2: ', iexRealtimePrice);
                console.log('Log3: ', isUSMarketOpen);
            }
            getData()
            .then(response => {
                console.log('Function ran successfully');
            })
            .catch(error => {
                alert('Please enter a valid symbol');
                console.log('Error raised');
                console.error(error);
            });
        }

