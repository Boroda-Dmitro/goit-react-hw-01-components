import PropTypes from 'prop-types';

export const FriendListItem = ({name, avatar, isOnline}) => {
    return (
        <li className="item">
        <span className={isOnline? "status online" : "status offline"}></span> 
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li> 
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };