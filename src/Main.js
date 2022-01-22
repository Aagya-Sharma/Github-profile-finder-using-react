import React from 'react';

import Table from './Table';
const Main = ({items,search,setSearch,handleSubmit,username,setUsername,handleUser}) => {
  return (
      <main className='Main'>
          <form className='searchForm' onSubmit={handleSubmit}>
              <input 
                type='text'
                autoFocus
                id='search'
                placeholder='search by username'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
          </form>
          {items &&
            <Table items ={items}
            username = {username}
            setUsername ={setUsername}
            handleUser ={handleUser}
            />
           }
      </main>
  )
}

export default Main;
