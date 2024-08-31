"use client";

import { useEffect, useState } from "react";
import Stream from "@/components/stream";
import Loading from "@/components/loader";
import { Stream2 } from "@/components/stream";

interface TwitchStream {
  title: string;
  user_name: string;
  viewer_count: number; // Correct the type to "number"
  user_login: string;
}

const limitStreams = (streams: TwitchStream[]): TwitchStream[] => {
  return streams.slice(0, 1);
};

const otherStreams = (streams: TwitchStream[]): TwitchStream[] => {
  return streams.slice(1, streams.length);
};

export default function Streams() {
  const [streams, setStreams] = useState<TwitchStream[]>([]); // Specify the type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/twitch`)
      .then((res) => res.json())
      .then((data: TwitchStream[]) => {
        // Specify the type of data
        setStreams(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full justify-center flex">
      {loading ? (
        <div className="flex flex-col justify-center gap-0 h-screen -mb-96 overflow-hidden">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-col justify-center gap-0">
            <h1 className="text-7xl font-bold tracking-wide font-space-grotesk">
              Streams
            </h1>
            <p className="text-xl">
              Les streams de la communauté
              <br />
            </p>
          </div>
          <div>
            <div className="flex mb-10">
            {limitStreams(streams).map((stream, index) => (
              <Stream2
                key={index}
                title={stream.title}
                author={stream.user_name}
                views={stream.viewer_count.toString()}
                user_login={stream.user_login}
              />
            ))}
            </div>
            <div className="grid grid-cols-3">
              {otherStreams(streams).map((stream, index) => (
                <Stream
                  key={index}
                  title={stream.title}
                  author={stream.user_name}
                  views={stream.viewer_count.toString()}
                  user_login={stream.user_login}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
