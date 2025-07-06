export async function getActivities() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_GATEWAY}/activities`, {
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
    // there data here 
    
    
    return data;
  } catch (error: any) {
    console.error('getReports error:', error.message);
    return null;
  }
}