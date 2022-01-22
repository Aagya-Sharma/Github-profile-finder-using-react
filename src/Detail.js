import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = ({repositories,setRepositories,data,setData}) => {
  const {uname} = useParams()
  const[username,setUsername ] = useState('')
  const[isLoading,setIsLoading] = useState(true)
  
  //to get the data of the particular  user
  useEffect(()=>{
    console.log(uname)
    const handleUser = async()=>{
      try {
          const response = await fetch(`https://api.github.com/users/${uname}/repos`,{
          method: "GET",
          headers: {
            Authorization: `token  ${process.env.REACT_APP_Key}` 
          }
        })
        const user = await fetch(`https://api.github.com/users/${uname}`,{
          method: "GET",
          headers: {
            Authorization: `token  ${process.env.REACT_APP_Key}` 
          }
        })
        const repo = await response.json();
        setRepositories(repo)
        const userdata = await user.json();
        setData(userdata)
        } catch (err) {
        console.log(err);
      }finally{
        setIsLoading(false)
      }
    }
    handleUser();
    setRepositories([])
    setData({})
  },[])

  return (
     <main className='main'>
       {isLoading && 
          <>
          <p>Fetching Data...</p>
          <p>May take some time</p>
          </>
       }
       {!isLoading &&
          <>
            <h2>{data.login}</h2>
            <p>Bio: {data.bio}</p>
            <p>{data.followers} followers</p>
            <p>{data.following} following</p>
            <h2 className='repolist'>Repositories List</h2>
            {repositories.map(repo=>(
              <div className='repolist' key={repo.id}>
              <p>{repo.name}</p>
              </div>
            ))}
          </>
      }
     </main>
  )
};

export default Detail;
