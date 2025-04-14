import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Datsumo = () => {
  const { onCheckboxChange, checkedItems } = useOutletContext();
  const datsumo01 = 'datsumo01';
  const datsumo02 = 'datsumo02';
  const datsumo03 = 'datsumo03';
  const datsumo04 = 'datsumo04';
  const datsumo05 = 'datsumo05';
  const datsumo06 = 'datsumo06';
  const single = 'single';
  const multi = 'multi';

  return (
    <div>
      <h3 style={{paddingBottom: '.3rem'}}>DATSUMO</h3>
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
      <td  className="part_name" rowSpan="2" >3部位</td>
      <td className={`price_list ${checkedItems["datsumo_001"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_001"
        data-group={datsumo01}
        data-type={single}
        data-price="32400" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_001"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_002"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_002"
        data-group={datsumo01}
        data-type={single}
        data-price="39800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_002"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["datsumo_003"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_003"
        data-group={datsumo01}
        data-type={single}
        data-price="68800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_003"] || false}
        />
        <span>68,800<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_004"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_004"
        data-group={datsumo01}
        data-type={single}     
        data-price="90800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_004"] || false}
        />
        <span>90,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["datsumo_005"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_005"
        data-group={datsumo01}
        data-type={multi}
        data-price="10800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_005"] || false}
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
      <td  className="part_name" rowSpan="2" >4部位</td>
      <td className={`price_list ${checkedItems["datsumo_006"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_006"
        data-group={datsumo02}
        data-type={single}
        data-price="32400" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_006"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_007"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_007"
        data-group={datsumo02}
        data-type={single}
        data-price="39800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_007"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["datsumo_008"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_008"
        data-group={datsumo02}
        data-type={single}
        data-price="68800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_008"] || false}
        />
        <span>68,800<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_009"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_009"
        data-group={datsumo02}
        data-type={single}     
        data-price="90800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_009"] || false}
        />
        <span>90,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["datsumo_010"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_010"
        data-group={datsumo02}
        data-type={multi}
        data-price="10800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_010"] || false}
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
      <td  className="part_name" rowSpan="2" >5部位</td>
      <td className={`price_list ${checkedItems["datsumo_011"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_011"
        data-group={datsumo03}
        data-type={single}
        data-price="32400" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_011"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_012"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_012"
        data-group={datsumo03}
        data-type={single}
        data-price="39800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_012"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["datsumo_013"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_013"
        data-group={datsumo03}
        data-type={single}
        data-price="68800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_013"] || false}
        />
        <span>68,800<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_014"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_014"
        data-group={datsumo03}
        data-type={single}     
        data-price="90800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_014"] || false}
        />
        <span>90,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["datsumo_015"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_015"
        data-group={datsumo03}
        data-type={multi}
        data-price="10800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_015"] || false}
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
      <td  className="part_name" rowSpan="2" >6部位</td>
      <td className={`price_list ${checkedItems["datsumo_016"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_016"
        data-group={datsumo04}
        data-type={single}
        data-price="32400" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_016"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_017"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_017"
        data-group={datsumo04}
        data-type={single}
        data-price="39800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_017"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["datsumo_018"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_018"
        data-group={datsumo04}
        data-type={single}
        data-price="68800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_018"] || false}
        />
        <span>68,800<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_019"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_019"
        data-group={datsumo04}
        data-type={single}     
        data-price="90800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_019"] || false}
        />
        <span>90,800<small>円</small></span>
        </label>
      </td>

      <td className={`price_list ${checkedItems["datsumo_020"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_020"
        data-group={datsumo04}
        data-type={multi}
        data-price="10800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_020"] || false}
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
      <td  className="part_name" rowSpan="2" >SKINCARE A</td>
      <td className={`price_list ${checkedItems["datsumo_021"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_021"
        data-group={datsumo05}
        data-type={single}
        data-price="32400" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_021"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_022"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_022"
        data-group={datsumo05}
        data-type={single}
        data-price="39800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_022"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_023"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_023"
        data-group={datsumo05}
        data-type={single}
        data-price="68800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_023"] || false}
        />
        <span>68,800<small>円</small></span>
        </label>
      </td>
      </tr>
      <tr>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
        <td className="price_per_once"><small>-</small></td>
      </tr>
      <tr>
      <td  className="part_name" rowSpan="2" >笑気麻酔</td>
      <td className={`price_list ${checkedItems["datsumo_026"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_026"
        data-group={datsumo06}
        data-type={single}
        data-price="32400" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_026"] || false}
        />
        <span>32,400<small>円</small></span>
        </label>
      </td>
      <td className={`price_list ${checkedItems["datsumo_027"] ? 'checked-cell' : ''}`}>
        <label>
        <input 
        type="checkbox" 
        name="datsumo_027"
        data-group={datsumo06}
        data-type={single}
        data-price="39800" 
        onChange={onCheckboxChange}
        checked={checkedItems["datsumo_027"] || false}
        />
        <span>39,800<small>円</small></span>
        </label>
      </td>
      </tr>
      <tr>
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

export default Datsumo;
