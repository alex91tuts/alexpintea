---

layout: calculator
title: "CALCULATOR INVESTIȚIE ISTORICĂ MSCI WORLD"
date: 2023-05-04
categorie: "FINANCIAR"

---

<form id="investment-form">
        <label for="startYear">Anul de începere:</label>
        <select id="startYear" name="startYear">
            <!-- Anii vor fi generati din JavaScript -->
        </select>
        <label for="endYear">Anul de încheiere:</label>
        <select id="endYear" name="endYear">
				
            <!-- Anii vor fi generati din JavaScript -->
        </select>
				<br>
				<span id="yearsDifference">Numărul de ani: <span id="yearsDifferenceValue" style="font-weight: bold;"></span></span>
        <label for="initialValue">Valoarea inițială a investiției:</label>
        <input type="number" id="initialValue" name="initialValue" value="0" step="1">
        <label for="monthlyContribution">Contribuția lunară:</label>
        <input type="number" id="monthlyContribution" name="monthlyContribution" value="0" step="1">
        <label for="annualIncrease">Creștere anuală a sumei investite (%):</label>
        <input type="number" id="annualIncrease" name="annualIncrease" value="0" step="0.01">
        <button type="submit">Calculează</button>
   </form>
 <div id="results" style="display: none;">
		<p>Valoarea finală a investiției: <span id="finalValue">0</span></p>
	  <p>Valoarea totală a sumei investite: <span id="totalInvested">0</span></p>
		<canvas id="chart"></canvas>
</div>

<div markdown="1" style="margin-top: 60px;">

---
## Cum funcționează?

Acest calculator de investiții este conceput pentru a estima valoarea unei investiții pe termen lung în MSCI World Index, având în vedere o sumă inițială investită, contribuții lunare, o creștere anuală a sumei investite și perioada de timp în care se fac investițiile. 
	
MSCI World Index este un indice bursier care urmărește performanța a peste 1.500 de acțiuni din 23 de țări dezvoltate, oferind o reprezentare largă a pieței globale de acțiuni.

Funcționare:

1. Selectați anul de început și anul de sfârșit al perioadei de investiție. Ulterior introducerii anilor calculatorul vă va afișa care este numărul total de ani.
2. Introduceți suma inițială investită în MSCI World Index.
3. Introduceți contribuția lunară, care reprezintă suma pe care dorește să o investească în fiecare lună.
4. Introduceți creșterea anuală a sumei investite, care reprezintă procentul cu care contribuția lunară va crește în fiecare an.
5. Calculatorul estimează valoarea investiției pe baza datelor istorice de randament al MSCI World Index între anii 1979 și 2022.
6. Rezultatele sunt afișate într-un grafic și un tabel care prezintă valoarea totală a investiției și valoarea totală a sumei investite de-a lungul anilor.

Acest calculator este doar un instrument estimativ și nu garantează rezultate exacte sau performanța viitoare a investiției. 
	
Performanța trecută a MSCI World Index nu este un indicator al performanței viitoare. Investițiile în acțiuni și pe piața bursieră sunt supuse riscurilor, iar valoarea investiției dvs. poate fluctua în funcție de condițiile pieței. 
	
---
## Despre indicele bursier MSCI WORLD
	
Indicele MSCI World este un indice bursier internațional care măsoară performanța pieței de acțiuni din 23 de țări dezvoltate. 

Acesta este unul dintre cei mai utilizați indici de piață pentru a evalua performanța globală a piețelor de acțiuni și a fondurilor de investiții. 

Indicele a fost creat de Morgan Stanley Capital International (MSCI) și reprezintă aproximativ 85% din capitalizarea bursieră liberă ajustată a pieței din țările dezvoltate.

Indicele MSCI World include acțiuni din următoarele țări: Australia, Austria, Belgia, Canada, Danemarca, Finlanda, Franța, Germania, Hong Kong, Irlanda, Israel, Italia, Japonia, Norvegia, Noua Zeelandă, Olanda, Portugalia, Singapore, Spania, Suedia, Elveția, Regatul Unit și Statele Unite ale Americii.

Indicele MSCI World este ponderat în funcție de capitalizarea bursieră, ceea ce înseamnă că acțiunile companiilor cu o capitalizare bursieră mai mare au o pondere mai mare în indice. 

Acest lucru înseamnă că performanța acestor companii va avea un impact mai mare asupra valorii indicelui.

Investitorii folosesc adesea MSCI World ca un benchmark pentru a evalua performanța portofoliilor lor, a fondurilor mutuale și a altor instrumente de investiții, deoarece acesta oferă o imagine de ansamblu a pieței globale de acțiuni. 

În plus, există numeroase fonduri de investiții pasive, cum ar fi fondurile de investiții în acțiuni (ETF-uri), care urmăresc să replice performanța indicelui MSCI World, permițând investitorilor să obțină expunere pe piața globală de acțiuni prin intermediul unui singur instrument de investiții.

Este important de menționat că, deși indicele MSCI World oferă o imagine largă a piețelor de acțiuni dezvoltate, nu include piețele emergente, cum ar fi China, India, Brazilia și Rusia. 

Pentru a obține o reprezentare mai cuprinzătoare a piețelor globale de acțiuni, investitorii pot utiliza MSCI All Country World Index (ACWI), care include atât piețele dezvoltate, cât și cele emergente.

---
## Sectoare de piață și companii

Indicele MSCI World acoperă o gamă largă de domenii și sectoare economice, incluzând tehnologia, sănătatea, serviciile financiare, industria, energia, bunurile de larg consum, serviciile de comunicații și utilitățile. 

Acest lucru îi permite să reflecte performanța globală a pieței de acțiuni și să ofere o diversificare adecvată investitorilor.

Datorită ponderării în funcție de capitalizarea bursieră, companiile mai mari au un impact mai mare asupra valorii indicelui. În acest momennt, unele dintre cele mai mari companii incluse în MSCI World sunt:

1. **Apple Inc. (SUA)** - Un gigant tehnologic care produce și vinde o gamă variată de produse electronice și servicii, cum ar fi iPhone, iPad, Mac, Apple Watch, Apple TV și iCloud.
2. **Microsoft Corporation (SUA)** - O companie tehnologică globală care se concentrează pe dezvoltarea și licențierea de software, dispozitive și servicii în cloud, precum Windows, Office, Azure și LinkedIn.
3. **Amazon.com Inc. (SUA)** - Un gigant al comerțului electronic și al serviciilor în cloud care oferă o gamă largă de produse și servicii, inclusiv vânzări de bunuri de consum, servicii media digitale și Amazon Web Services (AWS).
4. **Alphabet Inc. (SUA)** - Compania-mamă a Google, care se ocupă cu activități în domeniul internetului, tehnologiei, inteligenței artificiale și publicității online.
5. **Facebook Inc. (SUA)** - O companie de tehnologie și servicii de social media, care deține și operează platforme populare precum Facebook, Instagram, WhatsApp și Messenger.

Este important de menționat că, de-a lungul timpului, ponderarea companiilor și a sectoarelor în cadrul indicelui MSCI World se poate schimba în funcție de evoluția capitalizării bursiere și a pieței. 

Prin urmare, este esențial ca investitorii să se informeze în mod constant despre cele mai recente actualizări ale indicelui și să analizeze portofoliul lor în consecință pentru a menține o diversificare optimă.

</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
body {
    max-width: 800px;
    margin: 0 auto;
}
	#results  {
		margin-top: 20px;
		font-weight: bold;
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
select {
		border: solid 1px lightgray;
    border-radius: 5px;
    padding: 5px;
    color: #6a6464;
    font-weight: bold;
		font-size: large;
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
// Randamentele anuale ale S&P 500
const sp500Returns = {
    1979: 0.1839,
    1980: 0.3226,
    1981: -0.0490,
    1982: 0.1889,
    1983: 0.2214,
    1984: 0.0611,
    1985: 0.3289,
    1986: 0.4166,
    1987: 0.2281,
    1988: 0.2480,
    1989: 0.3154,
    1990: -0.0710,
    1991: 0.3011,
    1992: -0.0322,
    1993: 0.2755,
    1994: 0.0128,
    1995: 0.1735,
    1996: 0.2312,
    1997: 0.1627,
    1998: 0.2345,
    1999: 0.2703,
    2000: -0.1367,
    2001: -0.1572,
    2002: -0.2065,
    2003: 0.3084,
    2004: 0.1494,
    2005: 0.0851,
    2006: 0.2069,
    2007: 0.0965,
    2008: -0.4016,
    2009: 0.3060,
    2010: 0.1273,
    2011: -0.0537,
    2012: 0.1552,
    2013: 0.2643,
    2014: 0.0430,
    2015: -0.0184,
    2016: 0.0790,
    2017: 0.2342,
    2018: -0.0844,
    2019: 0.2774,
    2020: 0.1542,
		2021: 0.2235,
		2022: -0.1773
};

document.addEventListener("DOMContentLoaded", function () {
    // Generarea anilor în dropdown-uri
    const startYearSelect = document.getElementById("startYear");
    const endYearSelect = document.getElementById("endYear");

    for (let year = 1979; year <= 2022; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.text = year;
        startYearSelect.add(option);

        const endOption = document.createElement("option");
        endOption.value = year;
        endOption.text = year;
        endYearSelect.add(endOption);
    }
});

function updateYearsDifference() {
  const startYear = parseInt(document.getElementById("startYear").value);
  const endYear = parseInt(document.getElementById("endYear").value);
  const yearsDifference = endYear - startYear;

  document.getElementById("yearsDifferenceValue").textContent = yearsDifference;
}

document.getElementById("startYear").addEventListener("change", updateYearsDifference);
document.getElementById("endYear").addEventListener("change", updateYearsDifference);

updateYearsDifference(); // Afișează diferența inițială a anilor


document.getElementById("investment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const startYear = parseInt(document.getElementById("startYear").value);
    const endYear = parseInt(document.getElementById("endYear").value);
    let investmentValue = parseFloat(document.getElementById("initialValue").value);
    let monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value);
    const annualIncrease = parseFloat(document.getElementById("annualIncrease").value) / 100;

    const yearlyValues = [{ year: startYear, value: investmentValue }];

    let totalInvested = investmentValue;
    let contributions = [];
    for (let year = startYear; year < endYear; year++) {
        const annualReturn = sp500Returns[year]; // Folosiți anul în sine ca și cheie

        investmentValue *= (1 + annualReturn);
        investmentValue += (monthlyContribution * 12);
        totalInvested += (monthlyContribution * 12);
        contributions.push(monthlyContribution * 12);

        // Creșterea anuală a sumei investite
        monthlyContribution *= (1 + annualIncrease);

        yearlyValues.push({ year: year + 1, value: investmentValue });
    }

    document.getElementById("finalValue").textContent = Math.floor(investmentValue).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    document.getElementById("totalInvested").textContent = Math.floor(totalInvested).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    document.getElementById("results").style.display = "block";

    // Crearea graficului
    const ctx = document.getElementById("chart").getContext("2d");
    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: yearlyValues.map(item => item.year),
            datasets: [
                {
                    label: "Valoarea totală a investiției",
                    data: yearlyValues.map(item => item.value),
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    fill: false,
                },
                {
                    label: "Valoarea totală a sumei investite",
                    data: yearlyValues.map((item, index) => {
                        if (index === 0) {
                            return parseFloat(document.getElementById("initialValue").value);
                        }
                        let investedValueForYear = parseFloat(document.getElementById("initialValue").value);
                        for (let i = 0; i < index; i++) {
                            investedValueForYear += contributions[i];
                        }
                        return investedValueForYear;
                    }),
                    borderColor: "rgba(255, 99, 132, 1)",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    fill: false,
                }
            ],
        },
        options: {
            responsive: true,
            scales: {
               
            x: {
                title: {
                    display: true,
                    text: "Ani"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Valoare"
                }
            }
        }
    },
});
});

</script>
