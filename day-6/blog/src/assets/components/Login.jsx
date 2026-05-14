import { useForm } from "react-hook-form";
import { LuEyeClosed } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { themeContext } from "../context/themeApi";
import { Link, useNavigate } from "react-router";
import Swal from 'sweetalert2';


const Login = () => {
    const [show, setShow] = useState(true);
    const { userDatas, setLogged, setCurrentUser } = useContext(themeContext);
    const navigate = useNavigate();
 console.log(userDatas);
 

    const handleShow = () => {
        const newShow = show ? false : true;
        setShow(newShow);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const theme = localStorage.getItem('theme')
    const root = window.document.documentElement;
    root.classList.add(theme)



    const onFormSubmit = (formData) => {

        const { username, password } = formData;

        
       const isValidUser =userDatas.find((u) => u.username === username && u.password === password);

        if (isValidUser) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                width: '350px',
                customClass: {
                    popup: 'my-toast-margin'
                }
            });

            Toast.fire({
                icon: "success",
                title: "Logged in successfully"
            });


            setLogged(true);
            setCurrentUser(isValidUser);
            navigate('/');

        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,

            });
            Toast.fire({
                icon: "error",
                title: "Invalid credentials"
            })

        }
    };


    return (
        <div className="flex mx-auto justify-center dark:bg-slate-950 items-center min-h-screen ">
            <div>
                <h1 className="text-center text-2xl font-bold dark:text-slate-100">Login</h1>

                <form
                    onSubmit={handleSubmit(onFormSubmit)}
                    className="min-w-md max-w-[125] space-y-5 my-10 dark:bg-slate-800 dark:border-slate-700 bg-white border border-slate-200 shadow-xl px-8 py-10 rounded-2xl"
                >
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold dark:text-white text-slate-700">Username <span className="text-rose-500 text-[12px]">*</span></label>
                        <input
                            placeholder="Enter your username..."
                            className="w-full outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all duration-200"
                            {...register("username", { required: "Username is required" })}
                        />

                        {errors.username && <span className="text-rose-500 text-[12px]">{errors.username.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold dark:text-white text-slate-700">Password <span className="text-rose-500 text-[12px]">*</span></label>
                        <div className="w-full flex items-center outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all duration-200">
                            <input
                                type={show ? "text" : "password"}
                                placeholder="Enter your password..."
                                className="w-full outline-none  rounded-lg bg-slate-100  transition-all duration-200"
                                {...register("password", { required: "Password is required" })}
                            />
                            <button type="button" className="text-lg transition-all ease-in-out duration-300 delay-100 cursor-pointer" onClick={handleShow}>
                                {
                                    show ? <LuEyeClosed /> : <FaRegEye />
                                }
                            </button>
                        </div>

                        {errors.password && <span className="text-rose-500 text-[12px]">{errors.password.message}</span>}
                    </div>

                    <button type="submit" className="bg-purple-600 text-white w-full rounded-md py-1 mt-4">
                        Login
                    </button>

                    <div className="text-[12px] text-center -m-2">
                        <p className="dark:text-slate-100 cursor-pointer">Do you dont have account ? <span className="mx-2 text-rose-400 underline"><Link to="/Register">Create new account</Link> </span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
