import React, { useState, useEffect } from "react";
import { advicestyle } from "./style/advice-style";
import { H1, H3 } from "./style/typography";
import dice from "../image/icon-dice.svg";
import pattern from "../image/pattern-divider-desktop.svg";
import axios from "axios";

const baseURL = "https://api.adviceslip.com/advice/";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(0);

  const getAdvices = () => {
    const rndInt = randomIntFromInterval(1, 224);
    const newURL = baseURL + rndInt;
    axios.get(newURL).then((response) => {
      const data = response.data.slip;
      setAdvice(data.advice);
      setId(data.id);
    });
  };

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    getAdvices();

    return () => {};
  }, []);

  return (
    <advicestyle.Wrapper>
      <advicestyle.Container>
        <H3>ADVICE #{id}</H3>
        <H1>“{advice}”</H1>
        <img src={pattern} alt="pattern" />
        <advicestyle.Button onClick={() => getAdvices()}>
          <img src={dice} alt="dice" />
        </advicestyle.Button>
      </advicestyle.Container>
    </advicestyle.Wrapper>
  );
};

export default Advice;
