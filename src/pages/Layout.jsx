import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Total from '../components/Total'
import selectionRules from '../data/selectionRules';
import Navigation from '../components/Navigation';


const Layout = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [total, setTotal] = useState(0);

  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const price = Number(event.target.getAttribute('data-price'));
    const isChecked = event.target.checked;
    const group = event.target.getAttribute('data-group');
    const isSingle = event.target.getAttribute('data-type') === 'single';

    setCheckedItems(prev => {
      let updated = { ...prev };

      if (isSingle && group) {
        const groupKeys = selectionRules[group]?.single || [];
        groupKeys.forEach(key => delete updated[key]);
        if (isChecked) updated[name] = true;
      } else {
        updated[name] = isChecked;
      }

      return updated;
    });

    setTotal(prevTotal => {
      if (isSingle && group) {
        const groupKeys = selectionRules[group]?.single || [];
        let deducted = 0;
        groupKeys.forEach(key => {
          const el = document.querySelector(`input[name="${key}"]`);
          if (checkedItems[key] && el) {
            deducted += Number(el.getAttribute('data-price'));
          }
        });
        return prevTotal - deducted + (isChecked ? price : 0);
      } else {
        return isChecked ? prevTotal + price : prevTotal - price;
      }
    });
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh'}}>
      <aside style={ {padding: '2rem 0 2rem 2rem', color: 'rgb(249, 249, 249)'}}
        className='sidebar'>
        <h3>Treatment List</h3>
        <Navigation />
      </aside>

      <main style={{ flex: 4, padding: '2rem', background: 'rgb(249, 249, 249)' }}>
        <Outlet context={{ 
          onCheckboxChange: handleCheckboxChange, 
          checkedItems 
        }} />
      </main>

      <div style={{ textAlign: 'center', flex: 1, padding: '2rem 2rem 2rem 0', background: 'rgb(249, 249, 249)'}}>
        <Total totalPrice={total} />
      </div>
    </div>
  )
}

export default Layout;
