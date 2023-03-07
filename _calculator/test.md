---

layout: page
title: Calculator Plati Anticipate

---

<div class="container-calc">
	<span>CALCULATOR CONSUM LUNAR PLITA INDUCTIE</span>
	<label for="putere" class="label">Puterea nominală a plitei (în W):</label>
	<input type="number" id="putere" class="input"><br>
	<label for="ore" class="label">Numărul de ore de utilizare pe zi:</label>
	<input type="number" id="ore" class="input"><br>
	<label for="pret" class="label">Prețul per kWh (în lei):</label>
	<input type="number" id="pret" class="input"><br>
	<button type="button" onclick="calculeazaConsum()" class="button">Calculează consumul</button><br>
	<p id="rezultat"></p>
</div>


<style>
		/* Stiluri pentru calculator */
		.container-calc {
			max-width: 740px;
			margin: 0 auto;
			padding: 30px;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		}
		.container-calc span {
			text-align: center;
			color: #333;
			margin-bottom: 30px;
			font-size: 20px;
		}
		.container-calc label {
			display: block;
			margin-bottom: 10px;
			font-size: 20px;
			color: #666;
		}
		.container-calc input[type="number"] {
			width: 100%;
			padding: 10px;
			border: none;
			border-radius: 5px;
			background-color: #f5f5f5;
			font-size: 16px;
			color: #333;
			margin-bottom: 20px;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
		}
		.container-calc button[type="button"] {
			background-color: #333;
			color: #fff;
			border: none;
			border-radius: 5px;
			padding: 10px 20px;
			font-size: 20px;
			cursor: pointer;
			margin-top: 20px;
		}
		.container-calc button[type="button"]:hover {
			background-color: #444;
		}
		#rezultat {
			font-size: 24px;
			color: #333;
			margin-top: 30px;
		}
	</style>

<script>
function calculeazaConsum() {
  // Obține valorile introduse de utilizator
  const putere = document.getElementById("putere").value;
  const ore = document.getElementById("ore").value;
  const pret = document.getElementById("pret").value;
  // Calculează consumul zilnic și lunar
  const consumZilnic = putere * ore / 1000;
  const consumLunar = consumZilnic * 30;
  // Calculează prețul consumului lunar
  const pretLunar = consumLunar * pret;
  // Afișează rezultatul
  const rezultat = document.getElementById("rezultat");
  rezultat.innerHTML = `Costul lunar al consumului este de ${pretLunar.toFixed(2)} lei.`;
}

</script>
 