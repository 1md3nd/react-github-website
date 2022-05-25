import Axios from 'axios'
import React ,{useState , useEffect} from 'react'
import './repos.css'
import RepoData from './RepoData';
export default function Repos({props}) {
const [Repos, setRepos] = useState([]);

useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
        const result = await Axios.get(props);
        console.log(result.data);
        setRepos(result.data);
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [props])

    
    
  return (
    <div className='ReposComponent'>
            <div className='RepoWindow'>
                {
                    Repos.map((item, index)=>
                    {
                        return <RepoData item={item} flag={index}/>
                    }
                    )}
            </div>
       
            </div>
  )
}
