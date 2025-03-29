"use server";

export async function fetchNowPlayingAction() {
  const apiKey = process.env.LASTFM_API_KEY;

  if (!apiKey) {
    throw new Error("API key is not set");
  }
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=hody_&api_key=${apiKey}&format=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API responded with status: ${response.status}`);
  }

  return response.json();
}
