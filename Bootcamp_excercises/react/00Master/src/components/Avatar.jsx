import React from "react";

const Avatar = ({ avatar }) => {
  return (
    <div className="avatar">
      <div>{`${avatar.firstName} ${avatar.lastName}`}</div>
      <img src={avatar.img} alt={avatar.name} />
    </div>
  );
};

export default Avatar;
