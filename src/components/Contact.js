import React, { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import ErrorMessage from "./errorMessage";
import { db } from "../firebase";

const Contact = () => {
  const {
    errors,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [email, setEmail] = useState("");

  const [loader, setLoader] = useState(false);

  const onSubmit = (e) => {
    //e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        email: email,
      })
      .then(() => {
        setLoader(false);
        alert("Your email has been submitted 👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setEmail("");
  };

  return (
    <form
      class="w-full flex-w flex-c-m validate-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div class="wrap-input100 validate-input where1">
        <input
          class="input100 placeholder0 s2-txt2"
          placeholder="Email"
          value={email}
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>

        <ErrorMessage error={errors.email} style={{ fontWeight: "bolder" }} />
      </div>
      <span class="focus-input100"></span>

      <button
        class="flex-c-m size3 s2-txt3 how-btn1 trans-04 where1"
        type="submit"
        disabled={isSubmitting}
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Notify Me!
      </button>
    </form>
  );
};

export default Contact;
