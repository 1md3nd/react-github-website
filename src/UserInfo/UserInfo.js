import React from 'react'
import './UserInfo.css'
import Repos from '../repos/repos'
export default function UserInfo({repos}) {
  return (
      <div>

    <div className='UserInfoComponent'>
        <div>
            <img className='UserAvtar' src={repos["avatar_url"]}></img>
        </div>
    <div className='UserDetails'>
        <div className='UserName'>{repos["name"]}</div>
        <div className='UserBio'>{repos["bio"]}</div>
        <div className='UserLoc'>{repos["location"]}</div>
        <div className='UserFollow'>Following: {repos["following"]}</div>
        <div className='UserFollowes'>Followes: {repos["followers"]}</div>
        <a className='UserLink' href={repos["html_url"]}>{repos["html_url"]}</a>
        <a href={repos["blog"]}>{repos["blog"]}</a>
    </div>
    </div>
    <Repos props={repos["repos_url"]}/>
      </div>
  )
}
