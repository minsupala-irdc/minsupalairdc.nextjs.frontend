// api/reports.ts

import { request } from "http";

// const BASE_URL = 'http://localhost:8000/api';
const BASE_URL = 'https://suc.minsupalairdc.com/api'

export async function getReports() {
  // alert("attempting to get reports");
  try {
    const res = await fetch(`${BASE_URL}/documents`, {
    // const res = await fetch(`https://suc.minsupalairdc.com/api/documents`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization headers here if needed
      },
      cache: 'no-store', // optional: prevents Next.js from caching
    });

    if (!res.ok) {
      alert('Something went wrong when fetching data')
      throw new Error(`Error fetching reports: ${res.status}`);
    }
    const data = await res.json();
    
    return data;
  } catch (error: any) {
    console.error('getReports error:', error.message);
    return null;
  }
}
export async function submitDocumentRequest(requestData: {
  document_id: string;
  first_name: string;
  last_name: string;
  email: string;
  institution?: string;
  subject: string;
  message: string;
}) {
  // alert('attempting to submit')
  // alert(JSON.stringify(requestData));

  try {
    const response = await fetch(`${BASE_URL}/document-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Validation error:', error);
      alert('Please correct the form and try again.');
      return;
    }

    const result = await response.json();
    console.log('Request successful:', result);
    alert('Your request has been submitted!');
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  }
}
