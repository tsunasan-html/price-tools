import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Aga = () => {
  const { onCheckboxChange, checkedItems } = useOutletContext();
  const aga01 = 'aga01';
  const aga02 = 'aga02';
  const single = 'single';
  const multi = 'multi';

  return (
    <div>
      <h3 style={{paddingBottom: '.3rem'}}>AGA</h3>
      <table>
      <tbody>
      <tr>
          <td className="table_gold" rowSpan="2">平日</td>
          <td className="table_topTimes" colSpan="4">回数</td>
      </tr>
      <tr>
        <th className="table_times">3ヶ月</th>
        <th className="table_times">6ヶ月</th>
        <th className="table_times">12ヶ月</th>
        <th className="table_times">24ヶ月</th>
      </tr>
      <tr>
      <td  className="part_name" rowSpan="2">フィナステリド</td>
      <td className={`price_list ${checkedItems["aga_001"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="aga_001"
        data-price="32400"
        data-group={aga01}
        data-type={single}    
        onChange={onCheckboxChange}
        checked={checkedItems["aga_001"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["aga_002"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="aga_002"
        data-group={aga01}
        data-type={single}    
        data-price="39800" 
        onChange={onCheckboxChange}
        checked={checkedItems["aga_002"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["aga_003"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="aga_003"
        data-group={aga01}
        data-type={single}    
        data-price="68800" 
        onChange={onCheckboxChange}
        checked={checkedItems["aga_003"] || false}
        />
        <span>68,800<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["aga_004"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="aga_004"
        data-group={aga01}
        data-type={multi}    
        data-price="90800" 
        onChange={onCheckboxChange}
        checked={checkedItems["aga_004"] || false}
        />
        <span>90,800<small>円</small></span>
        </label>
      </td>
      </tr>
      <tr>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
      </tr>

      <tr>
      <td  className="part_name" rowSpan="2">デュタステリド</td>
      <td className={`price_list ${checkedItems["aga_005"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="aga_005"
        data-price="32400"
        data-group={aga02}
        data-type={single}    
        onChange={onCheckboxChange}
        checked={checkedItems["aga_005"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["aga_006"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="aga_006"
        data-group={aga02}
        data-type={single}    
        data-price="39800" 
        onChange={onCheckboxChange}
        checked={checkedItems["aga_006"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["aga_007"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="aga_007"
        data-group={aga02}
        data-type={single}    
        data-price="68800" 
        onChange={onCheckboxChange}
        checked={checkedItems["aga_007"] || false}
        />
        <span>68,800<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["aga_008"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="aga_008"
        data-group={aga02}
        data-type={multi}    
        data-price="90800" 
        onChange={onCheckboxChange}
        checked={checkedItems["aga_008"] || false}
        />
        <span>90,800<small>円</small></span>
        </label>
      </td>
      </tr>
      <tr>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
      </tr>
      <tr>
        <td className="td__text" colSpan='6'>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus!</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, unde.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, perspiciatis?</li>
          </ul>
        </td>
      </tr>

      </tbody>
      </table>
    </div>
  );
};

export default Aga;
