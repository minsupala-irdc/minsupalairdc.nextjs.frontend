
export async function getReports() {

  try {
    // check if you have .env file.. this should be in the root
    // public keys must start with "NEXT_PUBLIC_" <- this is a keyword
    const res = await fetch(`${[process.env.NEXT_PUBLIC_BACKEND_SERVER_API_GATEWAY]}/documents/reports`, {
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