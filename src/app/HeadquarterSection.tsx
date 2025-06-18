
const instituteName = "Mindanao State University - Institute of Management";
const fullAddress =
    "56F9+R4V, Shariff Aguak - Cotabato City Rd, Datu Odin Sinsuat, Maguindanao, Philippines";


export default function HeadquartersSection() {
    return (
        <section
            id="map-location"
            className="w-full bg-white py-25 flex flex-col items-center justify-center relative overflow-hidden"
        >
            {/* Decorative Background Element */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-70"></div>



            <div className="relative z-10 max-w-7xl  sm:text-4xl lg:text-5xl  w-full mx-auto text-center px-4 sm:px-6 lg:px-8">
                <p className="text-3xl  font-extrabold text-gray-800 leading-tight mb-6 drop-shadow-sm font-montserrat">
                    MINSUPALA-IRDC <span className="text-blue-600">Headquarters</span>
                </p>

                <p className="mb-10 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                    We look forward to welcoming you to our facility!
                </p>

                <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.7777397715808!2d124.217656!3d7.1754256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32563760dca77263%3A0x5a167ff3a829d8a8!2sMindanao%20State%20University%20Graduate%20School!5e1!3m2!1sen!2sph!4v1715760000000!5m2!1sen!2sph"
                        width="100%"
                        height="550"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}