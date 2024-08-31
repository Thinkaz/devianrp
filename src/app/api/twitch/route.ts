export const dynamic = 'force-dynamic'
import { NextResponse } from "next/server";

interface TwitchStream {
  title: string;
  user_name: string;
  viewer_count: string;
}

export async function GET(req: Request) {
  const clientId = "7izxa6c8ff0z8u0bvugush4j63nd7k";
  const clientSecret = "tjyree41ilrmp7k2yv2md154bb90lw";

  // Fetch an access token
  const getApi = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next:{
        revalidate: 0,
      }
    }
  );

  const dataApi = await getApi.json();
  const accessToken = dataApi.access_token;

  // Function to fetch streams with pagination
  async function fetchStreams(cursor: string | null = null) {
    let apiUrl = `https://api.twitch.tv/helix/streams?game_id=32982&first=100&type=live`;
    if (cursor) {
      apiUrl += `&after=${cursor}`;
    }

    const streams = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Client-Id": clientId,
        Authorization: `Bearer ${accessToken}`,
      },
      next:{
        revalidate: 0,
      }
    });

    return streams.json();
  }

  const allStreams = [];

  // Fetch the initial set of streams
  let cursor = null;
  do {
    const response = await fetchStreams(cursor);
    const dataStreamsFiltered: TwitchStream[] = response.data.filter(
      (stream: any) =>
        stream.title.toLowerCase().includes("21 jump click") ||
        stream.title.toLowerCase().includes("21jumpclick")
    );
    allStreams.push(...dataStreamsFiltered);

    cursor = response.pagination.cursor;
  } while (cursor);

  // Return all filtered streams
  return new NextResponse(JSON.stringify(allStreams), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
