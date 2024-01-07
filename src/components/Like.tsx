import { useState } from "react";
import { BiSolidLike, BiLike } from "react-icons/bi";

// Like code adapted from Code with Mosh: http://tinyurl.com/3sskaee5
interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) return <BiSolidLike color="#ff6b81" size={20} onClick={toggle} />;
  return <BiLike size={20} onClick={toggle} />;
};

export default Like;
