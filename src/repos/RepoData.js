import React from 'react'
import './RepoData.css'
export default function RepoData({item, flag}) {
    if (flag%2 === 0){
        return (
          <div className='RepoDataLeft'>
              <div className='RepoName'>{item.name}</div>
              <div className='RepoDesc'>{item.description}</div>
              <div className='RepoLang'>{item.language}</div>
          </div>

          )
        }else{

            return (
                <div className='RepoDataRight'>
              <div className='RepoName'>{item.name}</div>
              <div className='RepoDesc'>{item.description}</div>
              <div className='RepoLang'>{item.language}</div>
          </div>

)
}
}