import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SelectedUser } from "../Redux/actions/UserAction";

export const UserDetail = () => {
  const user = useSelector((state) => state.User);
  console.log("this is ths is s s", user);
  const { body, title } = user;
  const { Id } = useParams();
  const dispatch = useDispatch();
  console.log("hello ", Id);

  const fetchUserDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${Id} `)
      .catch((err) => {
        console.log("err is ", err);
      });
    dispatch(SelectedUser(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    if (Id && Id !== "") fetchUserDetail();
  }, []);

  return (
    
    <div className="ui grid container">
      {Object.keys(user).length === 0 ? (
        <div>...loading
        </div>
        

      ) : (
          
        <div className="detail-page">
      <h1 className="PAGE-DETAIL">  DETAIL PAGE....</h1>
          <div className="title-detail">
            <h1>{title}</h1>
          </div>
          <div className=""> <h3 className="body-detail"> {body} </h3></div>
        </div>
      )}
    </div>
  );
};

