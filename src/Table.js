import React from 'react';
import {Link} from 'react-router-dom';

const Table = ({items,setUsername,username,handleUser}) => {
  return (
  <>
   {items.map(item=>(
    <main className="list" key={item.id}>
    <img src={item.avatar_url} alt={item.avatar_url}/>
    <h2><Link to={`/details/${item.login}`}>{item.login}</Link></h2> 
    </main>
   ))}
  </>
  )
}

export default Table;
