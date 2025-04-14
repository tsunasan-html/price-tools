import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Skincare = () => {
  const { onCheckboxChange, checkedItems } = useOutletContext();
  const skincare01 = 'skincare01';
  const skincare02 = 'skincare02';
  const skincare03 = 'skincare03';
  const single = 'single';
  const multi = 'multi';

  return (
    <div>
      <h3 style={{paddingBottom: '.3rem'}}>SKINCARE</h3>
      <table>
      <tbody>
      <tr>
          <td className="table_gold" rowSpan="2">平日</td>
          <td className="table_topTimes" colSpan="4">回数</td>
          <td className="table_topRight" colSpan="1">コース後</td>
      </tr>
      <tr>
        <th className="table_times">1回</th>
        <th className="table_times">6回</th>
        <th className="table_times">12回</th>
        <th className="table_times">18回</th>
        <th className="table_times">コース後1回</th>
      </tr>
      <tr>
      <td  className="part_name" rowSpan="2">ダーマペン</td>
      <td className={`price_list ${checkedItems["skincare_001"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_001"
        data-group={skincare01}
        data-type={single}   
        data-price="32400" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_001"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["skincare_002"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_002"
        data-price="39800" 
        data-group={skincare01}
        data-type={single}    
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_002"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["skincare_003"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_003"
        data-group={skincare01}
        data-type={single}   
        data-price="68800" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_003"] || false}
        />
        <span>68,800<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["skincare_004"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_004"
        data-group={skincare01}
        data-type={single}       
        data-price="90800" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_004"] || false}
        />
        <span>90,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["skincare_005"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_005"
        data-group={skincare01}
        data-type={multi}   
        data-price="10800" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_005"] || false}
        />
        <span>10,800<small>円</small></span>
        </label>
      </td>
      
      </tr>
      <tr>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
      </tr>

      <tr>
      <td  className="part_name" rowSpan="2">ウーバーピール</td>
      <td className={`price_list ${checkedItems["skincare_006"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_006"
        data-group={skincare02}
        data-type={single}   
        data-price="32400" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_006"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["skincare_007"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_007"
        data-price="39800" 
        data-group={skincare02}
        data-type={single}    
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_007"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["skincare_008"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_008"
        data-group={skincare02}
        data-type={single}   
        data-price="68800" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_008"] || false}
        />
        <span>68,800<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["skincare_009"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_009"
        data-group={skincare02}
        data-type={single}       
        data-price="90800" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_009"] || false}
        />
        <span>90,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["skincare_010"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_010"
        data-group={skincare02}
        data-type={multi}   
        data-price="10800" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_010"] || false}
        />
        <span>10,800<small>円</small></span>
        </label>
      </td>
      
      </tr>
      <tr>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
      </tr>

      <tr>
      <td  className="part_name" rowSpan="2">肌質改善</td>
      <td className={`price_list ${checkedItems["skincare_011"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_011"
        data-group={skincare03}
        data-type={single}   
        data-price="32400" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_011"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["skincare_012"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_012"
        data-price="39800" 
        data-group={skincare03}
        data-type={single}    
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_012"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["skincare_013"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_013"
        data-group={skincare03}
        data-type={single}   
        data-price="68800" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_013"] || false}
        />
        <span>68,800<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["skincare_014"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_014"
        data-group={skincare03}
        data-type={single}       
        data-price="90800" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_014"] || false}
        />
        <span>90,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["skincare_015"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="skincare_015"
        data-group={skincare03}
        data-type={multi}   
        data-price="10800" 
        onChange={onCheckboxChange}
        checked={checkedItems["skincare_015"] || false}
        />
        <span>10,800<small>円</small></span>
        </label>
      </td>
      
      </tr>
      <tr>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
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

export default Skincare;
