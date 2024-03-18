import Image from "next/image";

import {
  bigbangImg,
  friendsImg,
  harryImg,
  lotrImg,
  pokemonImg,
  wowImg,
} from "../assets/photoIndex";

function QuizSelection({ dispatch }) {
  const imageText = [
    {
      harry: { img: harryImg, text: "HarryPotter", id: "harrypotter" },
      wow: { img: wowImg, text: "World of Warcraft", id: "wow" },
      friends: { img: friendsImg, text: "Friends", id: "friends" },
      pokemon: { img: pokemonImg, text: "Pokemon", id: "pokemon" },
      lotr: { img: lotrImg, text: "Lord of the Rings", id: "lotr" },
      bigBang: { img: bigbangImg, text: "Bing Bang Theory", id: "bigbang" },
    },
  ];

  const item = imageText[0];

  const handleCardClick = (id) => {
    dispatch({ type: "quizName", payload: id });
    // dispatch({ type: "ready" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {Object.entries(item).map(([key, { img, text, id }]) => (
        <div
          key={key}
          className="cursor-pointer"
          onClick={() => handleCardClick(id)}
        >
          <div className="max-w-sm mx-auto bg-slate-50 rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <Image
              src={img}
              alt={text}
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
              className="w-full"
            />
            {/* Container for the text */}
            <div className="flex justify-center items-center px-6 py-4">
              <div className="text-center font-bold text-xl mb-2">{text}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuizSelection;
