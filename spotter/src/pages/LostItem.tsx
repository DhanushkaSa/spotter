

function LostItem() {


  return (
    <div className=" inset-0 overflow-auto h-full w-full px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex items-center justify-center">

      <div className="flex items-center space-x-20 animate-fade-in text-white">
        <div className="absolute top-5 left-5">
          <img
            src="/src/assets/spotter.jpg"
            className="w-[100px] rounded-full mx-5 animate-flip"
            alt="Spotter"
          />
        </div>

        <form>
          <h1 className="text-5xl text-center my-5 font-mono bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Ask for help....
          </h1>
          <div className="border rounded-2xl p-4 w-[800px] h-[1400px]">
            <div className="flex flex-col space-y-4 mx-5">
              <label
                htmlFor="name"
                className="text-2xl bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent font-mono"
              >
                Lost Item Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Item Name"
                className="border rounded-lg p-2 w-[600px] text-black"
              />

              <label
                htmlFor="photo"
                className="text-2xl bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent font-mono"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo"
                className="border rounded-lg p-2 w-[600px] text-white"
              />

              <label
                htmlFor="datetime"
                className="text-2xl bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent font-mono"
              >
                Date and Time
              </label>
              <input
                type="datetime-local"
                id="datetime"
                className="border rounded-lg p-2 w-[600px] text-black"
              />

              <label
                htmlFor="location"
                className="text-2xl bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent font-mono"
              >
                Location
              </label>

              <input type="text" id="location" placeholder="Go to the map then search location lost item" className="border rounded-lg p-2 w-[600px] text-black" />

              <div className="w-full"><iframe width="100%" height="500" className="my-0 mx-0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=University%20of%20Colombo,Faculty%20of%20Technology+(Spotter%20Community)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>

              <label htmlFor="description" className="text-2xl bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent font-mono">Description</label>
              <textarea
                id="description"
                cols={30}
                rows={10}
                className="border rounded-lg p-2 w-full text-black" placeholder="Write here..."></textarea>

              <div className="flex justify-center mt-6">
              <div className="text-xl bg-gradient-to-r text-center from-green-400 w-full font-mono via-green-500 to-green-600 text-black font-semibold rounded-lg py-1  hover:from-pink-500 hover:to-orange-500 ">
                                <button type="button">Send Details Community</button>
                                
                            </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LostItem;
