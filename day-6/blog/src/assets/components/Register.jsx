import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { themeContext } from "../context/themeApi";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Register = () => {

    const { userDatas, setUserDatas } = useContext(themeContext)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onFormSubmit = (data) => {
        let newUser = {
            ...data
        }
        console.log(newUser);

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,


        });

        Toast.fire({
            icon: "success",
            title: "Register successfully"
        });

        setUserDatas([...userDatas, newUser])
        navigate("/Login")

    };

    return (
        <>
            <div className="flex mx-auto justify-center dark:bg-slate-950 items-center min-h-screen ">
                <div>
                    <h1 className="text-center text-2xl font-bold dark:text-slate-100">
                        Register
                    </h1>

                    <form
                        onSubmit={handleSubmit(onFormSubmit)}
                        className="min-w-md max-w-[125] space-y-5 my-10 dark:bg-slate-800 dark:border-slate-700 bg-white border border-slate-200 shadow-xl px-8 py-10 rounded-2xl"
                    >
                        <label className="text-sm font-semibold dark:text-white text-slate-700">
                            Fullname<span className="text-rose-500 text-[12px]">*</span>
                        </label>
                        <div className="w-full flex items-center outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all duration-200">
                            <input
                                type="text"
                                placeholder="Enter your Fullname..."
                                className="w-full outline-none  rounded-lg bg-slate-100  transition-all duration-200"
                                {...register("fullname", { required: "Fullname is required" })}
                            />

                            {errors.Fullname && (
                                <span className="text-rose-500 text-[12px]">
                                    {errors.Fullname.message}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold dark:text-white text-slate-700">
                                Username <span className="text-rose-500 text-[12px]">*</span>
                            </label>
                            <input
                                placeholder="Enter your username..."
                                className="w-full outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all duration-200"
                                {...register("username", { required: "Username is required" })}
                            />

                            {errors.username && (
                                <span className="text-rose-500 text-[12px]">
                                    {errors.username.message}
                                </span>
                            )}
                        </div>

                        <label className="text-sm font-semibold dark:text-white text-slate-700">
                            Password <span className="text-rose-500 text-[12px]">*</span>
                        </label>
                        <div className="w-full flex items-center outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all duration-200">
                            <input
                                type="text"
                                placeholder="Enter your password..."
                                className="w-full outline-none  rounded-lg bg-slate-100  transition-all duration-200"
                                {...register("password", { required: "Password is required" })}
                            />

                            {errors.password && (
                                <span className="text-rose-500 text-[12px]">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        <label className="text-sm font-semibold dark:text-white text-slate-700">
                            Role <span className="text-rose-500 text-[12px]">*</span>
                        </label>
                        <div className="w-full flex items-center outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all duration-200">
                            <input
                                type="text"
                                placeholder="Enter your Role..."
                                className="w-full outline-none  rounded-lg bg-slate-100  transition-all duration-200"
                                {...register("role", { required: "Role is required" })}
                            />

                            {errors.password && (
                                <span className="text-rose-500 text-[12px]">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-purple-600 text-white w-full rounded-md py-1 mt-4"
                        >
                            Register
                        </button>

                        <div className="text-[12px] text-center -m-2">
                            <p className="dark:text-slate-100 cursor-pointer">
                                Do you  have an account ?{" "}
                                <span className="mx-2 text-rose-400 underline">
                                    <Link to='/Login'>Login</Link>
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
