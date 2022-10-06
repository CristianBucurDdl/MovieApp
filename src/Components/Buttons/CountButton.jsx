import { useState } from "react";
// export const Button = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>count{count}</button>;
//       <button onClick={() => setCount(0)}>reset</button>;
//     </>
//   );
// };
export const Button = ({ e }) => {
  const [favArr, setFavArr] = useState([]);
  const [count, setCount] = useState(0);
  const handleFav = () => {
    if (!favArr.includes(e)) {
      setFavArr([...favArr, e]);
    } else {
      let index = favArr.indexOf(e);
      favArr.splice(index, 1);
      setFavArr([...favArr]);
    }
  };

  return (
    <>
      <button onClick={() => handleFav()}>count{count}</button>;
      <button onClick={() => setCount(count + 1)}>reset</button>;
    </>
  );
};
