import React, { useState } from 'react';
import { submitDocumentRequest } from '../api/reports';

type AppPopoutProps = {
  onClose: () => void;
  title: string;
  authorName: string;
  uid: string; // Assuming uid is a string as per your usage in useState
};

export function AppDocumentRequestPopup({
  onClose,
  title,
  authorName,
  uid,
}: AppPopoutProps) {
  const [formData, setFormData] = useState({
    user_id: uid, // uid is used here, ensure it's compatible with the expected type for user_id in submitDocumentRequest
    first_name: '',
    last_name: '',
    email: '',
    institution: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // The fix is here: Pass formData directly, not wrapped in another object.
    try {
      await submitDocumentRequest(formData); // <--- FIX: Changed from {formData} to formData
      onClose(); // Close the modal on success
    } catch (error) {
      console.error('Request failed:', error);
      // You might want to add some user feedback here, e.g., an alert or a state to show an error message
    }
  };

  return (
    <div className="text-left fixed inset-0 z-50 flex items-center justify-center bg-gray-100/40 md:bg-gray-100/30">
      <div className="relative bg-white w-[300px] right-5 md:right-0 md:w-xl rounded-lg p-3 md:p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold text-blue-700">Document Request</h2>
        <p className="mb-2 text-sm text-gray-500">
          Send message to the author to get a copy of the report
        </p>

        <div className="border-t pt-2 border-gray-200">
          <p className="text-sm mt-1 text-gray-700">Document requested</p>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-sm text-gray-500">{authorName}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div>
            <label className="block text-sm font-semibold text-gray-600">First Name</label>
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
            <label className="block text-sm font-semibold text-gray-600">Last Name</label>
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
            <label className="block text-sm font-semibold text-gray-600">Email</label>
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
            <label className="block text-sm font-semibold text-gray-600">Institution</label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">Subject</label>
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
            <label className="block text-sm font-semibold text-gray-600">Message</label>
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
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}