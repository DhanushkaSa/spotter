import axios from "axios";

import { useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const [fullname, setFullName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");


    function handleFullName(event: any) {
        setFullName(event.target.value);
    }

    function handlePhone(event: any) {
        setPhone(event.target.value);
    }

    function handleEmail(event: any) {
        setEmail(event.target.value);
    }

    function handlePassword(event: any) {
        setPassword(event.target.value);
    }

    function handleConfirmPassword(event: any) {
        setConfirmPassword(event.target.value);
    }

    const navigate = useNavigate();





    async function createAccount() {
        try {
            if (password === confirmPassword && fullname !== "" && phone !== "" && email !== "" && password !== "" && confirmPassword !== "") {
                const response = await axios.post("http://localhost:8080/user", {
                    name: fullname,
                    email: email,
                    phone: phone,
                    password: confirmPassword,

                });

                toast.success("Successfully registerd !!!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                console.log(fullname, email, phone, password)
                console.log("success");

                setTimeout(() => {
                    navigate("/");
                }, 5000);

                // navigate("/");
                





            } else {
                toast.error("Password does not match or all fields are empty !!!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        } catch (error) {
            toast.error("Registration failed. Please try again !!!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            console.log("Fail", error)
        }


    }




    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };




    return (
        <div className="absolute inset-0 overflow-auto h-full w-full px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className="text-white animate-fade-in">
                <h1 className="text-5xl text-center font-mono bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Register our Spotter community...
                    <div>
                        <div className="border-2 w-[500px] h-[850px] rounded-xl text-5xl mx-auto mt-5 text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent p-5">
                            <div className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent font-mono">
                                <h1>Create Account</h1>

                                <div>
                                    <img src="/src/assets/users.jpg" width={100} className="mx-auto mt-5 rounded-full" />
                                </div>


                                <div className="text-xl text-center mx-5 my-5">
                                    <p className="text-left">Full name</p>
                                    <input
                                        type="text"
                                        className="text-xl w-[400px] h-[40px] text-black rounded-lg px-3 my-2"
                                        placeholder="Full name"
                                        onChange={handleFullName}
                                        required
                                    />
                                </div>

                                <div className="text-xl text-center mx-5 my-3">
                                    <p className="text-left">Phone</p>
                                    <input
                                        type="text"
                                        className="text-xl w-[400px] h-[40px] text-black rounded-lg px-3 my-2"
                                        placeholder="Phone number"
                                        onChange={handlePhone}
                                        required
                                    />
                                </div>

                                <div className="text-xl text-center mx-5 my-3">
                                    <p className="text-left">Email</p>
                                    <input
                                        type="email"
                                        className="text-xl w-[400px] h-[40px] text-black rounded-lg px-3 my-2"
                                        placeholder="Email"
                                        onChange={handleEmail}
                                        required
                                    />
                                </div>

                                <div className="text-xl text-center mx-5 my-3">
                                    <p className="text-left">Password</p>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="text-xl w-[400px] h-[40px] text-black rounded-lg px-3 my-2"
                                            placeholder="Password"
                                            onChange={handlePassword}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        >
                                            {showPassword ? "🙈" : "👁️"}
                                        </button>
                                    </div>
                                </div>


                                <div className="text-xl text-center mx-5 my-3">
                                    <p className="text-left">Confirm Password</p>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            className="text-xl w-[400px] h-[40px] text-black rounded-lg px-3 my-2"
                                            placeholder="Confirm your password"
                                            onChange={handleConfirmPassword}
                                            required
                                        />

                                    </div>
                                </div>

                                <div className="text-xl bg-gradient-to-r my-10 from-green-400 via-green-500 to-green-600 text-black font-semibold rounded-lg py-1 hover:from-pink-500 hover:to-orange-500">
                                    <button type="button" onClick={createAccount}>Register</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </h1>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;
