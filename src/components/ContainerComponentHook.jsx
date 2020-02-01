import React, { useState, useEffect } from "react";

const ContainerCompnentHook = () => {
  const [firstName, setFirstName] = useState("");
  return (
    <div>
      <input
        type='text'
        onChange={e => {
          setFirstName(e.target.value);
        }}
      />
      {firstName}
    </div>
  );
};

export default ContainerCompnentHook;
