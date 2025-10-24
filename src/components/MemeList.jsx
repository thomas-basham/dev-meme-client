import { useState, useEffect } from "react";
import { api } from "../api";

export default function MemeList({ memes, setMemes }) {
  useEffect(() => {
    api
      .get("/memes")
      .then(function (response) {
        // handle success
        console.log(response);
        setMemes(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div className="flex justify-between flex-wrap">
      {memes.map((meme) => {
        return (
          <div key={meme.id} className="m-4">
            <h3>{meme.title}</h3>
            <img src={meme.url} alt={meme.title} className="w-54" />
          </div>
        );
      })}
    </div>
  );
}
