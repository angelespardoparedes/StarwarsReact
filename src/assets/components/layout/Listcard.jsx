import React from "react";
import Card from "./card";

function Listcard() {
  const luke = ` {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male"
    }`;
  const beru = `
{
        "name": "Beru Whitesun lars",
        "height": "165",
        "mass": "75",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "47BBY",
        "gender": "female"
    }`;
  const chewbacca = `{
        "name": "Chewbacca",
        "height": "228",
        "mass": "112",
        "hair_color": "brown",
        "skin_color": "unknown",
        "eye_color": "blue",
        "birth_year": "200BBY",
        "gender": "male"
    }`;

  const dataLuke = JSON.parse(luke);
  const dataBeru = JSON.parse(beru);
  const dataChewbacca = JSON.parse(chewbacca);

  return (
    <div>
      <Card data={dataLuke} />
      <Card data={dataBeru} />
      <Card data={dataChewbacca} />
    </div>
  );
}

export default Listcard;
