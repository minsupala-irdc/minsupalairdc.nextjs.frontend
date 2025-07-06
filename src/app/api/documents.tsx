
export async function submitDocumentRequest(requestData: {
  document_id: string;
  first_name: string;
  last_name: string;
  email: string;
  institution?: string;
  subject: string;
  message: string;
  affiliation: string;
}) {
  // alert('attempting to submit')
  // alert(JSON.stringify(requestData));

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_GATEWAY}/document-request`, {
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



