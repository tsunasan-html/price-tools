
import React, { useState, useEffect } from 'react';
import styles from './Total.module.css';

const Total = ({ totalPrice }) => {
  const [installments, setInstallments] = useState(1);
  const [dividedPrice, setDividedPrice] = useState(0);
  const [monthlyPrice, setMonthlyPrice] = useState(0);

  const rate = {
    1: 0,
    3: 1.09,
    6: 1.9,
    12: 3.56,
    18: 5.22,
    24: 6.91,
    36: 10.34,
    48: 13.83,
    60: 17.04,
    84: 24.74,
  };

  useEffect(() => {
    if (installments === 1 || totalPrice === 0) {
      setDividedPrice(0);
      setMonthlyPrice(0);
    } else {
      
      const totalWithRate = Math.floor(totalPrice + (totalPrice * rate[installments]) / 100);
      
      const monthly = Math.floor(totalWithRate / installments); 
      const monthlyRounded = Math.floor(monthly / 100) * 100;
      
      setDividedPrice(totalWithRate);
      setMonthlyPrice(monthlyRounded); 
    }
  }, [installments, totalPrice]);

  const handleChange = (e) => {
    setInstallments(Number(e.target.value));
  };

  return (
    <div>
      <h3 style={{paddingBottom: '.3rem'}} >Total</h3>
      <table style={{ textAlign: 'center', borderBottom: 'none'}} className={styles.table}> 
        <tbody>
          <tr className={styles.total_text}>
            <th className={styles.result_top}>合計</th>
          </tr>
          <tr>
            <td 
            className={styles.totalPrice}><span>{totalPrice === 0 ? '0' : `${totalPrice.toLocaleString()}`}<small>円</small></span></td>
          </tr>
        </tbody>
      </table>
      <table style={{ borderTop: 'none' }} className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.result_division_left}>
              <span>支払回数</span>
              <select value={installments} onChange={handleChange}>
                {Object.keys(rate).map((count) => (
                  <option key={count} value={count}>
                    {count}回
                  </option>
                ))}
              </select>
            </th>
            <th className={styles.result_division_left}>
              <span>月々分割料金</span>
             
              <span>
                {monthlyPrice > 0 ? `${monthlyPrice.toLocaleString()}円` : `${totalPrice.toLocaleString()}円`}
              </span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Total;
