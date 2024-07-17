import "./styles.css";

var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  <div class="container">
    <div class="left-section">
      <div class="logo-container">
        <img src="./src/assets/bg-triangles.png" alt="Logo" class="logo-triangles">
      </div>
      <h1 class="title">Unique Element Challenge</h1>

      <div class="section target">
        <h2>Target</h2>
        <p>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</p>
      </div>

      <div class="section considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Values are duplicated only twice.</li>
          <li>There is only one non duplicate value.</li>
          <li>The non duplicate value can be placed anywhere on the array.</li>
          <li>The result must be an integer.</li>
        </ul>
      </div>
    </div>

    <div class="right-section">
      <div class="logo-ancert">
        <img src="./src/assets/logo-ancert.svg" alt="Logo" class="logo">
      </div>
      <div class="section test-data">
        <h2>Test Data</h2>
        <div class="data">${arrayTest}</div>
      </div>

      <div class="result-container">
        <div class="expected-result">
          <h2>Expected result</h2>
          <div class="result">4</div>
        </div>
        <div class="your-result">
          <h2>Your result</h2>
          <div class="result">4</div>
        </div>
      </div>
    </div>
  </div>
`;
