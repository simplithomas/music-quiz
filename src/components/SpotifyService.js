import axios from 'axios';

const CLIENT_ID = 'dfa386e473fa434e8c8780f5470f0b18';
const CLIENT_SECRET = '1c1fc6fcfdbc46b593365d52e81ca3eb';

let accessToken;

export const getAccessToken = async () => {
  if (accessToken) return accessToken;

  const auth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  accessToken = response.data.access_token;
  return accessToken;
};
import { searchTracks } from './SpotifyService';

// Använd funktionen för att hämta låtar baserat på en söksträng
const fetchTracks = async () => {
  const tracks = await searchTracks("Beatles");
  console.log(tracks);
};

// Kalla på fetchTracks någonstans i din komponent för att se resultatet
