import React, { useCallback, useState } from "react";

import "./SignUp.css";
import TextInput from "../components/TextInput";
import LinkButton from "../components/LinkButton";
import Button from "../components/Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = useCallback(() => {
    // TODO: Add saving logic
    console.log("Save email and password", email, password);
  }, [email, password]);

  return (
    <div className="container">
      <div className="floating-box">
        <h1 className="title">Login</h1>
        <p className="secondary-text">
          Staying isolated for 2 weeks can be though and we know it. That’s why
          we will help you .
        </p>
        <TextInput placeholder="Email" type="email" onChange={setEmail} />
        <TextInput
          placeholder="Password"
          type="password"
          onChange={setPassword}
        />
        <Button onClick={onClick} className="button" />
        <LinkButton text="I don’t have an account yet" />
      </div>
    </div>
  );
};

export default SignUp;
