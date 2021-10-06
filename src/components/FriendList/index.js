import React from 'react';
import './index.css';
import FriendListStyles from "./FriendListStyles";

const FriendListItem = ({avatar,name,isOnline}) => {
    return (
    <div className="box-friend">
        <FriendListStyles status={isOnline} />
        <img title="my-img" src={avatar} alt="my-img" />
        <p>{name}</p>
    </div>
)
};

export const FriendList = ({ friends }) => {
    const FriendInfo = friends.map(({avatar,name,isOnline})=><FriendListItem avatar={avatar} name={name} isOnline={isOnline}/>)
    
     return <div className="boxs-friends">{FriendInfo}</div>
}
