import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    OverallQual: 5,
  OverallCond: 5,
  LotArea: 8000,
  GrLivArea: 1500,
  GarageCars: 2,
  TotalBsmtSF: 1000,
  YearBuilt: 2000,
  FullBath: 2,
  BedroomAbvGr: 3,
  // Neighborhood: "NAmes",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/predict/",
        formData
      );

      setResult(res.data.predicted_price);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="head" 
      style={{ padding: "30px" }}>
      <h1>House Price Prediction</h1>

      <div className="inside">
       <form  onSubmit={handleSubmit}>
        <h2>Overall Quality</h2>
        <input name="OverallQual" placeholder="OverallQual" onChange={handleChange} />
        <br />
        <h2>Overall Condition</h2>
        <input name="OverallCond" placeholder="OverallCond" onChange={handleChange} />
        <br />
        <h2>Lot Area</h2>
        <input name="LotArea" placeholder="LotArea" onChange={handleChange} />
        <br />
        <h2>Living Area</h2>
        <input name="GrLivArea" placeholder="GrLivArea" onChange={handleChange} />
        <br />
        <h2>Garage Cars</h2>
        <input name="GarageCars" placeholder="GarageCars" onChange={handleChange} />
        <br />
        <h2>Total Basement Area</h2>
        <input name="TotalBsmtSF" placeholder="TotalBsmtSF" onChange={handleChange} />
        <br />
        <h2>Year Of Built</h2>
        <input name="YearBuilt" placeholder="YearBuilt" onChange={handleChange} />
        <br />
        <h2>Full Bathroom</h2>
        <input name="FullBath" placeholder="FullBath" onChange={handleChange} />
        <br />
        <h2>Bedroom Abvove Ground</h2>
        <input name="BedroomAbvGr" placeholder="BedroomAbvGr" onChange={handleChange} />
        <br />
        
        {/* <h2>Neighbhorhood</h2> */}
        {/* <label>Neighborhood</label>

        <label>Neighborhood</label> */}
{/* 
        <select
          name="Neighborhood"
          value={formData.Neighborhood}
          onChange={handleChange}
        >
          <option value="NAmes">North Ames</option>
          <option value="CollgCr">College Creek</option>
          <option value="NridgHt">Northridge Heights</option>
          <option value="NoRidge">Northridge</option>
          <option value="StoneBr">Stone Brook</option>
          <option value="OldTown">Old Town</option>
          <option value="Gilbert">Gilbert</option>
          <option value="Somerst">Somerset</option>
          <option value="Sawyer">Sawyer</option>
          <option value="Edwards">Edwards</option>
        </select>
        <br/> */}


       <button type="submit">Predict</button>
      </form>

      </div>

      <h3>Predicted Price:  { result}</h3>
    </div>
  );
}

export default App;