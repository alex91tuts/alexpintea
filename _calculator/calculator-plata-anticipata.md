---

layout: page
title: CALCULATOR PLĂȚI ANTICIPATE CU SCĂDEREA PERIOADEI

---

<div class="container row">
  <div class="calculator col-lg-6 col-12">
    <form>
      <label for="currentBalance">Soldul curent al împrumutului:</label>
      <input type="number" id="currentBalance" min="0" step="0.01" required>
      <label for="interestRate">Rata dobânzii anuale:</label>
      <input type="number" id="interestRate" min="0" step="0.01" required>
      <label for="minimumPayment">Rata lunară curentă:</label>
      <input type="number" id="minimumPayment" min="0" step="0.01" required>
      <label for="extraPayment">Plată suplimentară lunară:</label>
      <input type="number" id="extraPayment" min="0" step="0.01" required>
      <button type="submit" id="calculateBtn">Calculează</button>
    </form>
  </div>

  <div class="results col-lg-6 col-12 table-responsive">
    <table id="results" class="table">
      <thead>
        <tr>
          <th>Lună</th>
          <th>Soldul rămas</th>
          <th>Plăți totale</th>
          <th>Dobândă totală plătită</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
</div>

<style>
	@media only screen and (max-width: 600px) {
		.results {
			padding-left: 5px;
			}
		.results table th {
			font-size: 10px !important;
			padding: 1px;
			}
		.results tbody tr {
			font-size: 13px;
			}
		}	
.container {
  margin: 0 auto;
}
.calculator {
}
.calculator h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
}
.calculator form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}
.calculator label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
}
.calculator input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.calculator button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #12787b;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.calculator button[type="submit"]:hover {
  background-color: #0062cc;
}
.results {
}
.results table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.results table th,
.results table td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
}
.results table th {
  background-color: #12787b;
  color: #fff;
  font-size: 16px;
}
.results table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
	}
</style>

<script>
const currentBalanceInput = document.getElementById("currentBalance");
const interestRateInput = document.getElementById("interestRate");
const minimumPaymentInput = document.getElementById("minimumPayment");
const extraPaymentInput = document.getElementById("extraPayment");
const calculateBtn = document.getElementById("calculateBtn");
const resultsTable = document.getElementById("results");
calculateBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const currentBalance = parseFloat(currentBalanceInput.value);
  const interestRate = parseFloat(interestRateInput.value) / 100 / 12;
  const minimumPayment = parseFloat(minimumPaymentInput.value);
  const extraPayment = parseFloat(extraPaymentInput.value);
  let balance = currentBalance;
  let month = 0;
  let totalInterestPaid = 0;
  let totalAmountPaid = 0;
  resultsTable.querySelector("tbody").innerHTML = "";
  while (balance > 0) {
    month++;
    const interest = balance * interestRate;
    const totalPayment = Math.min(minimumPayment + extraPayment, balance + interest);
    const principal = totalPayment - interest;
    balance -= principal;
    totalInterestPaid += interest;
    totalAmountPaid += totalPayment;
    const row = `
      <tr>
        <td>${month}</td>
        <td>${balance.toFixed(0)}</td>
        <td>${totalAmountPaid.toFixed(0)}</td>
        <td>${totalInterestPaid.toFixed(0)}</td>
      </tr>
    `;
    resultsTable.querySelector("tbody").innerHTML += row;
  }
});

</script>