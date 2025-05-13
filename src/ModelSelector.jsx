import React from 'react';
import './ModelSelector.css';

function ModelSelector({ selectedModel, setSelectedModel }) {
  return (
    <div className="selector-container">
      <label className="selector-label">Select Crop:</label>
      <select
        className="selector-dropdown"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        <option value="">Choose a crop</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="bean">Bean</option>
        <option value="cauliflower">Cauliflower</option>
        <option value="citrus">Citrus</option>
        <option value="corn">Corn</option>
        <option value="grape">Grape</option>
        <option value="guava">Guava</option>
        <option value="kiwi">Kiwi</option>
        <option value="mango">Mango</option>
        <option value="melon">Melon</option>
        <option value="onion">Onion</option>
        <option value="orange">Orange</option>
        <option value="papaya">Papaya</option>
        <option value="peach">Peach</option>
        <option value="pear">Pear</option>
        <option value="pepper">Pepper</option>
        <option value="pineapple">Pineapple</option>
        <option value="plum">Plum</option>

        <option value="hops">Hops</option>
        <option value="potato">Potato</option>
        <option value="pumpkin">Pumpkin</option>
        
        <option value="raspberry">Raspberry</option>

        <option value="rice">Rice</option>
        <option value="sorghum">Sorghum</option>
        <option value="sugarcane">Sugarcane</option>
        
        <option value="strawberry">Strawberry</option>
        <option value="sunflower">Sunflower</option>
        <option value="sweetpotato">Sweet Potato</option>

        <option value="tea">Tea</option>
        <option value="wheat">Wheat</option>
        <option value="tomato">Tomato</option>
        <option value="watermelon">Watermelon</option>
        <option value="zucchini">Zucchini</option>

      </select>
    </div>
  );
}

export default ModelSelector;
