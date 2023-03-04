---

layout: page
title: Calculator Plati Anticipate

---

<script>
		window.onload = function() {
			var canvas = document.getElementById("myCanvas");
			var ctx = canvas.getContext("2d");
			// Definim valorile graficului
			var data = [20, 35, 45, 55, 70, 80];
			var labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
			// Definim dimensiunile canvas-ului
			canvas.width = 600;
			canvas.height = 400;
			// Calculăm distanța dintre puncte
			var distance = canvas.width / (data.length - 1);
			// Desenăm axele
			ctx.beginPath();
			ctx.moveTo(50, 350);
			ctx.lineTo(550, 350);
			ctx.moveTo(50, 350);
			ctx.lineTo(50, 50);
			ctx.stroke();
			// Desenăm punctele graficului
			ctx.beginPath();
			ctx.strokeStyle = "red";
			ctx.moveTo(50, 350 - data[0]);
			for (var i = 1; i < data.length; i++) {
				ctx.lineTo(50 + (i * distance), 350 - data[i]);
			}
			ctx.stroke();
			// Adăugăm etichete pentru axă
			ctx.fillStyle = "black";
			ctx.font = "14px Arial";
			for (var i = 0; i < labels.length; i++) {
				ctx.fillText(labels[i], 50 + (i * distance) - 15, 375);
			}
		};
	</script>
<body>
	<canvas id="myCanvas"></canvas>
</body>
