export async function GET() {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true',
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Bitcoin price');
    }

    const data = await response.json();

    // Log the raw API data to ensure it's being fetched properly
    console.log('API Data:', data);

    const result = {
      bitcoin: {
        usd: data.bitcoin.usd || 0,
        usd_24h_change: data.bitcoin.usd_24h_change || 0,
        inr: data.bitcoin.inr || 0,
        inr_24h_change: data.bitcoin.inr_24h_change || 0,
      },
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch Bitcoin price' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
