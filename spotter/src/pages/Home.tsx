import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="relative w-full  h-screen  overflow-hidden animate-fade-in">
            {/* Background Video */}
            <video
                src="/src/assets/video.mp4"
                className="absolute top-0 object-cover blur-sm "
                autoPlay
                loop
                muted

            ></video>

            {/* Main Content */}
            <div className="relative px-5 py-10">
                <div className="text-white ">
                    {/* Header Section */}
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <img
                            src="/src/assets/spotter.jpg"
                            className="w-[100px] rounded-full mx-5 animate-flip"
                            alt="Spotter"
                        />

                        {/* Buttons */}
                        <div className="flex space-x-5">
                            <Link to="/lostitem">
                                <button
                                    type="button"
                                    className="inline-flex px-4 py-2 border-none bg-gradient-to-r from-blue-500 to-purple-700 text-white h-10 rounded-lg hover:from-green-400 hover:to-blue-500 hover:text-black"
                                >
                                    Find Lost Item


                                </button>
                            </Link>
                            <button
                                type="button"
                                className="inline-flex px-4 py-2 border-none bg-gradient-to-r from-blue-500 to-purple-700 text-white h-10 rounded-lg hover:from-green-400 hover:to-blue-500 hover:text-black"
                            >
                                Community Members
                            </button>
                            <button
                                type="button"
                                className="inline-flex px-4 py-2 border-none bg-gradient-to-r from-blue-500 to-purple-700 text-white h-10 rounded-lg hover:from-green-400 hover:to-blue-500 hover:text-black"
                            >
                                About Us
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border mx-5 my-5 inline-flex  bg-white opacity-70 w-[400px] h-[480px] rounded-xl">
                    <div className="">
                        <h1 className="text-2xl p-2 mx-24 bg-gradient-to-r from-teal-500 to-blue-800 bg-clip-text text-transparent font-mono font-bold">Core Features</h1>
                        <p className="p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-mono font-bold">Easy Registration: Quickly log lost or found items with categories, locations, and photos.</p>
                        <p className="p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-mono font-bold">Smart Search: Use filters to find items that match specific criteria.</p>
                        <p className="p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-mono font-bold">User Profiles: Manage personal lost and found items through a personalized account.</p>
                        <p className="p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-mono font-bold">Communication Hub: Safely message and arrange returns via an integrated messaging system.</p>
                    </div>

                </div>

                <div className="border mx-5 my-5 inline-flex bg-white opacity-70 w-[400px] h-[480px] rounded-2xl">
                    <div className="">
                        <h1 className="text-2xl p-2 mx-24 bg-gradient-to-r from-teal-500 to-blue-800 bg-clip-text text-transparent font-mono font-bold">How Spotter Works</h1>
                        <p className="p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-mono font-bold">Report: Users log lost or found items with details and pictures.</p>
                        <p className="p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-mono font-bold">Match: A smart algorithm suggests matches based on item descriptions.</p>
                        <p className="p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-mono font-bold">Connect: Users communicate securely to arrange the return.</p>
                        <p className="p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-mono font-bold">Return: Items are reunited with their rightful owners, promoting a helpful community.</p>
                    </div>
                </div>

                <div className="border mx-5 my-5 inline-flex bg-white opacity-70 w-[400px] h-[480px] rounded-2xl">
                    <div className="">
                        <h1 className="text-2xl p-2 mx-24 bg-gradient-to-r from-teal-500 to-blue-800 bg-clip-text text-transparent font-mono font-bold">Unique Selling Points</h1>
                        <p className="p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-mono font-bold">Crowdsourced Power: Uses community efforts to locate items.</p>
                        <p className="p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-mono font-bold">Borderless Search: Connects users across different locations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
