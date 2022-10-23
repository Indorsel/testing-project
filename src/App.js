// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false)
//   const [value, setValue] = useState('')

//   const onClick = () => setToggle(prev => !prev)
  
//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100)
//   }, [])

//   return (
//     <div>
//       <h1 data-testid='value-elem'>{value}</h1>
//       {toggle && <div data-testid='toggle-elem'>toggle</div>}
//       {data && <div style={{color: 'red'}}>data</div> }
//       <h1>Hello world</h1>
//       <button data-testid='toggle-btn' onClick={onClick}>Click</button>
//       <input onChange={e => setValue(e.target.value)} type='text' placeholder='input value....'/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};
export default App;