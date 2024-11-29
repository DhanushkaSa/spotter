import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

function Login() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleUsername(event: any) {
        setUsername(event.target.value);
    }

    function handlePassword(event: any) {
        setPassword(event.target.value);

    }

    const navigate = useNavigate();

    let loginSuccess = false;

    async function handleSubmit() {


        const response = await axios.get("http://localhost:8080/user");
        console.log(response.data);
        response.data.forEach((info: any) => {
            if (username === info.email && password === info.password) {
                console.log("success");
                toast.success("Login successful !!!", {
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

                setTimeout(() => {
                    navigate("/home");
                }, 5000);

                loginSuccess = true;
            }
        })

        if (!loginSuccess) {
            toast.error("Login failed !!!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,

            })

        }


    }
    return (
        <div className="absolute inset-0 overflow-auto h-full w-full px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex items-center justify-center">
            <div className="flex items-center space-x-20 animate-fade-in">


                <div className="flex-shrink-0 ">

                    <img src="/src/assets/Picture1.png" alt="picture" width={400} height={100} className="rounded-full" />
                </div>

                <div>
                    {/* <img src="/src/assets/spotter.jpg" width={70} className="mt-3 inline-flex rounded-full"/> */}
                    <h1 className="text-4xl my-3  bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent p-5   font-mono inline-flex">Welcome to Our Spotter Community !!</h1>
                    <div className="border-2 w-[500px] h-[510px] rounded-xl text-5xl text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent p-5">

                        <div className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent font-mono">
                            <h1>Spotter Login</h1>
                            <img src="/src/assets/users.jpg" width={100} className="mx-auto mt-5 rounded-full " />

                            <div className="text-xl text-center mx-5 my-5">
                                <p className="text-left">Username</p>
                                <input
                                    type="email"
                                    className="text-xl w-[400px] h-[40px] text-black rounded-lg px-3 my-2"
                                    placeholder="Email"
                                    onChange={handleUsername}
                                    required
                                />
                            </div>

                            <div className="text-xl text-center mx-5 my-3">
                                <p className="text-left">Password</p>
                                <input
                                    type="password"
                                    className="text-xl w-[400px] h-[40px] text-black rounded-lg px-3 my-2"
                                    placeholder="Password"
                                    onChange={handlePassword}
                                    required
                                />
                            </div>
                            <div className="text-sm text-right m-3 text-white underline font-semibold">
                                <Link to="/register">Create Account</Link>
                            </div>

                            <div className="text-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-black font-semibold rounded-lg py-1  hover:from-pink-500 hover:to-orange-500 ">
                                <button type="button" onClick={handleSubmit}>Login</button>
                                <ToastContainer className="text-sm " />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;
