
import React, { useState, useEffect } from 'react';
import styles from './Total.module.css';
import { RiResetLeftFill } from "react-icons/ri";

const Total = ({ totalPrice, resetCheckboxes }) => {
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
            <td style={{ background: "#fff" }}
            className={styles.totalPrice}><span>{totalPrice === 0 ? '0' : `${totalPrice.toLocaleString()}`}<small>円</small></span></td>
          </tr>
        </tbody>
      </table>
      <table style={{ borderTop: 'none', background: '#F5F5F5' }} className={styles.table}>
        <tbody>
          <tr>
            <th style={{ borderRight: 'none'}}
            className={styles.result_division_left}>
              <span>支払回数</span>
              <select value={installments} onChange={handleChange}>
                {Object.keys(rate).map((count) => (
                  <option key={count} value={count}>
                    {count}回
                  </option>
                ))}
              </select>
            </th>
            <th style={{ borderLeft: 'none'}} className={styles.result_division_left}>
              <span>月々分割料金</span>
             
              <span>
                {monthlyPrice > 0 ? `${monthlyPrice.toLocaleString()}円` : `${totalPrice.toLocaleString()}円`}
              </span>
            </th>
          </tr>
        </tbody>
      </table>
      <div style={{display: 'flex', justifyContent: 'end'}}>
        <button onClick={resetCheckboxes}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'rgb(199, 86, 86)',
          color: '#fff',
          border: 'none',
          borderRadius: '2px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <RiResetLeftFill />
        Reset
        </button>
      </div>
    </div>
  );
};

export default Total;
