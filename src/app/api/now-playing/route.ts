export async function GET() {
  try {
    const apiKey = process.env.LASTFM_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API key missing" }), {
        status: 500,
      });
    }

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=hody_&api_key=${apiKey}&format=json`;

    const res = await fetch(url, { cache: "no-store" });
    console.log("API Response Status:", res.status);

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch: ${res.status}` }),
        {
          status: res.status,
        }
      );
    }

    const data = await res.json();
    console.log("Fetched Data:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Fetch Error:", error);
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ error: error.message || "Unknown error" }),
        {
          status: 500,
        }
      );
    }
  }
}
