import { React } from "react";
import "./main.css";

const Main = () => {
  const btnCreatorInfo = document.getElementById("creator-info");
  const socialBar = document.getElementById("side-bar");
  btnCreatorInfo.addEventListener("click", getSocials);

  function getSocials() {
    btnCreatorInfo.classList.add("show");
    socialBar.classList.remove("disappear");
    socialBar.classList.add("show");
  }

  document.addEventListener("mouseup", function (e) {
    if (!socialBar.contains(e.target)) {
      btnCreatorInfo.classList.remove("show");
      socialBar.classList.remove("show");
      socialBar.classList.add("disappear");
    }
  });

  const grid = document.querySelector(".cube");

  for (let i = 0; i < 64; i++) {
    const cell = document.createElement("button");
    cell.classList.add("cell");

    // const button = document.createElement('button');
    // button.textContent = i + 1;

    // cell.append(button);
    grid.append(cell);
  }

  const validCell = document.getElementsByTagName("button");
  const bottomBar = document.getElementById("bottom-content");
  validCell.addEventListener("click", getRegister);

  function getRegister() {
    bottomBar.classList.add("show");
  }

  return (
    <div class="body">
      <div class="top-heading">
        <h1>It's a Funny Cube</h1>
        <h2>Seriously, nothing more than that</h2>
      </div>
      <div class="cube"></div>
      <div class="bottom-content" id="bottom-content">
        <form class="user-info-form">
          <label for="name">Name</label>
          <input type="text" id="name"></input>
          <label for="year">Year</label>
          <select name="years" id="current-year">
            <option value="Freshman">Freshman</option>
            <option value="Softmore">Softmore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
            <option value="Masters+">Beyond Undergraduate</option>
          </select>
          <label for="github">Github</label>
          <input type="text" id="github-link"></input>
          <input type="submit" id="Submit" value="Register"></input>
        </form>
      </div>
      <div class="left-sided-content">
        <p>If r/place was smaller, and made by a kid</p>
      </div>
      <div class="right-sided-content">
        <div class="side-bar" id="side-bar">
          <button class="social-buttons" id="linkdin"></button>
          <button class="social-buttons" id="email"></button>
          <button class="social-buttons" id="github"></button>
        </div>
        <button id="creator-info"></button>
      </div>
    </div>
  );
};

export default Main;
