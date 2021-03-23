import React from "react";
import Avatar from "./Avatar";

const AvatarCards = ({ avatarsArray }) => {
  return (
    <div className="avatars-grid">
      {avatarsArray.map((singleAvatar) => {
        return (
          <React.Fragment key={singleAvatar.id}>
            <Avatar avatar={singleAvatar} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AvatarCards;
