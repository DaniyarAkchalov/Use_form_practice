import React from "react";
import s from "./index.module.css";
import { useForm } from "react-hook-form";

export default function FormItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => console.log(data);
  const firstnameRegister = register("firstname", {
    required: "*First name is required",
  });
  const lastnameRegister = register("lastname", {
    required: "*Last name is required",
  });
  const ageRegister = register("age", {
    required: "* Please enter number for age",
  });

  return (
    <form className={s.form_item} onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        name="firstname"
        placeholder="Firstname"
        {...firstnameRegister}
      />
      <div>{errors.firstname && <p>{errors.firstname?.message}</p>}</div>
      <input
        type="text"
        name="lastname"
        placeholder="Lastname"
        {...lastnameRegister}
      />
      <div>{errors.lastname && <p>{errors.lastname?.message}</p>}</div>
      <input type="text" name="age" placeholder="Age" {...ageRegister} />
      <div>{errors.age && <p>{errors.age?.message}</p>}</div>
      <button>Send</button>
    </form>
  );
}
