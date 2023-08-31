
import React, { useContext, useState } from "react";
// import io from "socket.io-client";
import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";
// import { Link } from "react-router-dom";
import UserModal from "../UserProfleCard/ViewUserProfile/ViewUserProfile";

interface UserProfileCardProps {
  student: {
    name: string;
    uid: string;
    _id: number;
    // Add other properties of your student object
  };
}

const FriendRequest: React.FC<UserProfileCardProps> = ({ student }) => {
  const {onlineUsers } = useContext(AuthContext) as AuthContextType;
  // Check if the connected user's online status is true
  const isUserOnline = onlineUsers[student.uid] === true;

  const [showModal, setShowModal] = useState(false);
  const [id, SetId] = useState<number>(0);

  const openModal = (id: number) => {
    SetId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        onMouseLeave={closeModal}
        className="bg-white shadow-md rounded-md p-4 relative border "
      >
        <div className="flex items-center cursor-pointer">
          <div
            onClick={() => openModal(student._id)}
            className="w-16 h-16 bg-blue-500 rounded-full cursor-pointer"
          >
            <img src={""} className="rounded-full cursor-pointer" alt="" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{student.name}</h2>
           
          </div>
          <div
            className={`ml-2 w-2 h-2 rounded-full ${
              isUserOnline ? "bg-green-500" : "bg-gray-400"
            }`}
          ></div>
        </div>

        <div className="my-6">
         
        </div>

        <div className="mt-10 flex justify-between">
          <button className="p-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring">
            Delete
          </button>
        
            <button className="p-1 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring">
              Accept
            </button>
    
        </div>
        {showModal && (
          <div className=" absolute">
            <UserModal
              student={student}
              id={id}
              showModal={showModal}
              closeModal={closeModal}
            ></UserModal>
          </div>
        )}
      </div>
    </>
  );
};

export default FriendRequest;