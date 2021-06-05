import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserComponent = () => {
  const users = useSelector((state) => state.AllUsers.Users);
  
  const renderList = users.map((users) => {
    const { id, title } = users;
    return (
      <>
        <div className="user-container" key={id}>
          <Link to={`/user/${id}`}>
                    <div className="user">
                        <h3>USER { id}</h3>
              <h1> {title} </h1>
            </div>
          </Link>
        </div>
      </>
    );
  });

  return <> {renderList}</>;
};
