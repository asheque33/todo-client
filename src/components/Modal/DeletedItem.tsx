import React from "react";

const DeletedItem = ({ isOpen, setIsOpen }) => {
  const handleModal = () => {
    setIsOpen(false);
  };
  console.log(isOpen);
  return (
    <div
      onClick={handleModal}
      className="flex items-center justify-center z-50 bg-[#f5f5f5]"
    >
      <div className="bg-white shadow-md rounded-md w-full max-w-md">
        <p>Are you sure you want to delete this todo item?</p>
      </div>
    </div>
  );
};

export default DeletedItem;
