import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function YesNo({
  boolean,
  text,
}: {
  boolean: boolean;
  text?: string;
}) {
  return boolean ? (
    <div className="flex flex-row gap-2 items-center">
      <a>{text}</a>
      <FontAwesomeIcon icon={faCheck} height={20} className="text-green-400"/>
    </div>
  ) : (
    <div className="flex flex-row gap-2 items-center">
      <a>{text}</a>
      <FontAwesomeIcon icon={faTimes} height={20} className="text-red-500"/>
    </div>
  );
}
