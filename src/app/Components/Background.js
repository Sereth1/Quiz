import React from "react";
import Image from "next/image";
import {
  pokemon,
  lotr,
  friends,
  bigbang,
  wow,
  harrypotter,
  quiz,
} from "../assets/photoIndex";

const Background = ({ quizName }) => {
  const cleanedQuizName = quizName.replace(/\s+/g, "").toLowerCase();
  const images = {
    pokemon,
    lotr,
    friends,
    bigbang,
    wow,
    harrypotter,
    quiz,
  };

  const imageSrc = images[cleanedQuizName];
  if (!imageSrc) {
    console.error("Image source not found for quiz name:", quizName);
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Image
        src={imageSrc}
        alt={`${quizName} background`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default Background;
