import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Stream({
  title,
  author,
  views,
  user_login,
}: {
  title: string;
  author: string;
  views: string;
  user_login: string;
}) {
  return (
    <div className="w-full justify-center flex pb-12">
      <div className="grid grid-cols-1">
        <div className="w-68">
          <Link href={`https://twitch.tv/${user_login}`}>
            <div className="flex flex-col ">
              <div id="hoovers" className="overflow-hidden rounded-sm">
                <Image
                  src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${user_login}-440x248.jpg`}
                  alt="Science & Technology"
                  className="object-cover"
                  width={440}
                  height={248}
                />
              </div>
              <div className="absolute m-2 bg-purple-700 text-white px-2 py-1 rounded-md text-xs">
                Live - <FontAwesomeIcon icon={faUser} /> {views}
              </div>
            </div>
          </Link>
          <div className="mt-2">
            <div className="text-sm font-semibold text-white truncate hover:text-purple-700 transition duration-100">
              <Link href={`https://twitch.tv/${user_login}`}>{title}</Link>
            </div>
            <div className="text-xs text-gray-300">{author}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Stream2 = ({
  title,
  author,
  views,
  user_login,
}: {
  title: string;
  author: string;
  views: string;
  user_login: string;
}) => {
  return (
    <div className="w-full justify-center flex">
      <div className="">
        <Link href={`https://twitch.tv/${user_login}`}>
          <div className="flex flex-col">
            <div id="hoovers" className="overflow-hidden rounded-sm">
              <Image
                src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${user_login}-691x388.jpg`}
                alt="Science & Technology"
                className="object-cover"
                width={864}
                height={300}
              />
            </div>
            <div className="absolute m-2 bg-purple-700 text-white px-2 py-1 rounded-md text-xs">
              Live - <FontAwesomeIcon icon={faUser} /> {views}
            </div>
          </div>
        </Link>
        <div className="mt-2">
          <div className="text-sm font-semibold text-white truncate hover:text-purple-700 transition duration-100">
            <Link href={`https://twitch.tv/${user_login}`}>{title}</Link>
          </div>
          <div className="text-xs text-gray-300">{author}</div>
        </div>
      </div>
    </div>
  );
};
