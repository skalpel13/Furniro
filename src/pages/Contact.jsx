import React from "react";
import Advantages from "../components/Advantages";
import GetInTouch from "../components/GetInTouch";
import TitlePage from "../components/TitlePage";

const titlePage = "Contact";

export default function Contact() {
  return (
    <div>
      <TitlePage titlePage={titlePage} />
      <GetInTouch />
      <Advantages />
    </div>
  );
}
