"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { submitDocumentRequest } from "@/app/api/documents";


type Report = {
  document_id: string;
  first_name: string;
  last_name: string;
  email: string;
  institution: string;
  subject: string;
  message: string;
  affiliation: string;
};


type ReportProps = {
  params: Promise<{id: string}>
};



export default function DynamicReportPage( {params}:  ReportProps) {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const school = searchParams.get("school");
  
    const [formData, setFormData] = useState<Report>({
      document_id: "",
      first_name: "",
      last_name: "",
      email: "",
      institution: "",
      subject: "",
      message: "",
      affiliation: "",
    });
  

    
  useEffect(() => {
    let isMounted = true; // Flag to prevent setting state on unmounted component

    const fetchDocumentId = async () => {
      try {
        const resolvedParams = await params;
        if (isMounted) { // Only update state if the component is still mounted
          setFormData((prev) => ({
            ...prev,
            document_id: resolvedParams.id,
          }));
        }
      } catch (error) {
        console.error("Failed to fetch document ID:", error);
        // Handle error, maybe set document_id to a default or show an error message
      }
    };

    fetchDocumentId();

    // Cleanup function to set isMounted to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, [params]); // Dependency array now correctly contains the Promise itself,
                      // or a derived stable value from it if possible.
                      // If paramsPromise itself can change, this is correct.
                      // More commonly, you'd extract the 'id' and put it here if available directly.

    

  const router = useRouter();

  // You can skip the loading state if you're only using `document`
  // if (!article) return <p className="text-center mt-10">Loading...</p>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (isSubmitting) return; // Prevent multiple clicks
  setIsSubmitting(true);

  try {
    await submitDocumentRequest(formData);
    router.back();
  } catch (error) {
    console.error('Request failed:', error);
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <div className="mx-auto max-w-3xl my-16 px-4">
      <div className=" flex flex-col">
        {/* Close Button */}

        <h2 className="text-lg font-semibold text-blue-700">
          Document Request
        </h2>
        <p className="mb-2 text-sm text-gray-500">
          Send message to the author to get a copy of the report named{" "}
          <span className="font-bold">{title}</span>
          by <span className="font-bold">school</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Institution
            </label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="block text-sm font-semibold text-gray-600">
              Affiliation
            </label>

            <label>
              <input
                type="radio"
                name="affiliation"
                value="Faculty"
                checked={formData.affiliation === "Faculty"}
                onChange={handleChange}
                className="mr-4"
              />
              Faculty
            </label>

            <label>
              <input
                type="radio"
                name="affiliation"
                value="General public"
                checked={formData.affiliation === "General public"}
                onChange={handleChange}
                className="mr-4"
              />
              General Public
            </label>

            <label>
              <input
                type="radio"
                name="affiliation"
                value="Government officer"
                checked={formData.affiliation === "Government officer"}
                onChange={handleChange}
                className="mr-4"
              />
              Government Officer
            </label>

            <label>
              <input
                type="radio"
                name="affiliation"
                value="Researcher"
                checked={formData.affiliation === "Researcher"}
                onChange={handleChange}
                className="mr-4"
              />
              Researcher
            </label>

            <label>
              <input
                type="radio"
                name="affiliation"
                value="Student"
                checked={formData.affiliation === "Student"}
                onChange={handleChange}
                className="mr-4"
              />
              Student
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Purpose
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full border border-gray-300 p-2"
              required
            />
          </div>

          <div className="text-right">
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
                {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
