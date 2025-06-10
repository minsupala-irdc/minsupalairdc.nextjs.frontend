export default function Project2Highlights(){
    return (
           <section
      id="highlights"
      className="w-full bg-gray-50 min-h-[66.66667vh] flex flex-col items-center justify-center py-25 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl w-full mx-auto text-center">
        <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-8 px-5 md:px-0">
          Establishment and Preservation of Indigenous Fish and Crop Products
        </h1>

        {/* <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10  px-3 md:px-0">
          The Indigenous Crops and Fish Research and Preservation Center aims to
          **conserve and promote indigenous crops and fish species unique to the
          region**. This project aims to develop indigenous products while
          preserving traditional knowledge, biodiversity, and cultural heritage
          associated with these agricultural produce, while also creating market
          opportunities for local farmers.
        </p> */}

<p className="text-justify text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 px-5 md:px-0">
  The Indigenous Crops and Fish Research and Preservation Center aims to
  <span className="text-blue-700 text-bold"> conserve and promote indigenous crops and fish species unique to the
  region</span>. This project aims to develop indigenous products while
  preserving traditional knowledge, biodiversity, and cultural heritage
  associated with these agricultural produce, while also creating market
  opportunities for local farmers.
</p>

        <div className="flex flex-col items-center justify-center text-gray-700 font-semibold text-lg mb-10">
          {/* Project Cost (aligned to the left within its own space) */}
          <div className="flex items-center mb-6">
            {" "}
            {/* Added mb-6 for spacing below */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>
              Project Cost:{" "}
              <span className="font-bold text-blue-600">45,000,000 PhP</span>
            </span>
          </div>

          {/* Duration and Dates (horizontal on medium screens and above) */}
          <div className="flex items-center flex-col sm:flex-row text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">
            {" "}
            {/* Adjusted spacing */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3 mb-2 sm:mb-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
              <span>
                Duration:{" "}
                <span className="font-bold text-blue-600">12 months</span>
              </span>
              <span className="hidden sm:inline-block text-gray-400">|</span>{" "}
              {/* Separator for horizontal display, now gray */}
              <span>
                Start Date:{" "}
                <span className="font-bold text-blue-600">January 1, 2025</span>
              </span>
              <span className="hidden sm:inline-block text-gray-400">-</span>{" "}
              {/* Separator for horizontal display, now gray */}
              <span>
                End Date:{" "}
                <span className="font-bold text-blue-600">
                  December 31, 2025
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}