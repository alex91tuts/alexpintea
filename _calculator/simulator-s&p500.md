---

layout: page
title: "CALCULATOR INVESTIȚIE ISTORICĂ S&P 500"
date: 2023-04-27

---

<form id="investment-form">
		<label for="startYear">Anul de început (1983):</label>
		<input type="number" id="startYear" name="startYear" min="1983" required>

		<label for="endYear">Anul de sfârșit:</label>
		<input type="number" id="endYear" name="endYear" min="1983" required>

		<label for="initialInvestment">Investiție inițială:</label>
		<input type="number" id="initialInvestment" name="initialInvestment" min="0" step="0.01" required>

		<label for="monthlyContribution">Contribuție lunară:</label>
		<input type="number" id="monthlyContribution" name="monthlyContribution" min="0" step="0.01">

		<button type="submit">Calculează</button>
</form>
<div id="results" style="display:none;">
		<h2>Rezultate</h2>
		<p class="rez">Valoarea finală a investiției: <span id="finalValue">0</span><span>   RON</span></p>
		<canvas id="chart"></canvas>
</div>

<div markdown="1" style="margin-top: 60px;">
---
## Cum funcționează?

Acest calculator este un instrument util conceput pentru a simula performanța investițiilor în indicele S&P 500 pe baza datelor istorice.

Este destinat celor interesați de investiții pe termen lung și poate ajuta utilizatorii să estimeze valoarea finală a investiției lor, ținând cont de contribuțiile lunare și de randamentele anuale ale S&P 500.

**Caracteristicile calculatorului includ:**
	
**Un formular de intrare care permite utilizatorilor să introducă următoarele valori:**
- Anul de începere al investiției, 
- Anul de încheiere al investiției, 
- Valoarea inițială a investiției, 
- Contribuția lunară

**O secțiune de rezultate care afișează valoarea finală a investiției utilizând datele introduse de utilizator și randamentele anuale ale S&P 500.**

**Un grafic interactiv care ilustrează evoluția valorii investiției de-a lungul perioadei de timp specificate. Acesta vă ajută să vizualizați performanța investiției în timp.**

Acest calculator este destinat să ofere o estimare a performanței investițiilor pe baza datelor istorice și nu trebuie considerat ca o garanție a performanței viitoare.

Cu toate acestea, poate servi ca un punct de plecare util pentru planificarea investițiilor pe termen lung și pentru a înțelege mai bine riscurile și recompensele asociate cu investițiile în S&P 500.
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
body {
    max-width: 800px;
    margin: 0 auto;
}

	.rez {
		font-size: larger;
		font-weight: bold;
	}	
form {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    align-items: center;
}
input {
		border: solid 1px lightgray;
    border-radius: 5px;
    padding: 5px;
    color: #6a6464;
    font-weight: bold;		
	}
label {
    font-weight: bold;
}

button {
    grid-column: span 2;
  	background-color: transparent;
    background-image: linear-gradient(260deg, #8062d4 0%, #41dcab 100%);
    text-decoration: none;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    border: none;
    color: white;
    border-radius: 3px;
    text-transform: uppercase;
    padding: 14px 16px;
    font-weight: 600;
		margin-top: 20px;
}
</style>

<script>

const sp500Returns = {
    1983: 0.2213,
    1984: 0.0613,
    1985: 0.3168,
    1986: 0.1862,
    1987: 0.0521,
    1988: 0.1652,
    1989: 0.3164,
    1990: -0.0321,
    1991: 0.3048,
    1992: 0.0775,
    1993: 0.1003,
    1994: 0.0121,
    1995: 0.3725,
    1996: 0.2268,
    1997: 0.3336,
    1998: 0.2845,
    1999: 0.2090,
    2000: -0.0910,
    2001: -0.1189,
    2002: -0.2211,
    2003: 0.2864,
    2004: 0.1088,
    2005: 0.0496,
    2006: 0.1593,
    2007: 0.0543,
    2008: -0.3670,
    2009: 0.2647,
    2010: 0.1506,
    2011: 0.0203,
    2012: 0.1603,
    2013: 0.3231,
    2014: 0.1374,
    2015: 0.0138,
    2016: 0.1196,
    2017: 0.2183,
    2018: -0.0624,
    2019: 0.3149,
    2020: 0.1844,
		2021: 0.2689,
		2022: -0.1944,
		2023: 0.5640
};

document.getElementById("investment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const startYear = parseInt(document.getElementById("startYear").value);
    const endYear = parseInt(document.getElementById("endYear").value);
    const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
    const monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value);
		
    let investmentValue = initialInvestment;
    const yearlyValues = [{ year: startYear, value: investmentValue, annualReturn: 0 }];

    for (let year = startYear; year < endYear; year++) {
        const annualReturn = sp500Returns[year];

        investmentValue *= (1 + annualReturn);
        investmentValue += (monthlyContribution * 12);

        yearlyValues.push({ year: year + 1, value: investmentValue, annualReturn: annualReturn });
    }

     document.getElementById("finalValue").textContent = Math.floor(investmentValue).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    document.getElementById("results").style.display = "block";

    // Generarea graficului
    const chartData = {
        labels: yearlyValues.map(yv => yv.year),
        datasets: [
            {
                label: 'Valoarea investiției',
                data: yearlyValues.map(yv => yv.value),
                yAxisID: 'y1',
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 4
            }
        ]
    };

    const chartConfig = {
        type: 'line',
        data: chartData,
        options: {
            scales: {
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        text: 'Valoarea investiției',
                        display: true
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    };

    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, chartConfig);
});



</script>
