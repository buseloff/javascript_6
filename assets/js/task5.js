"use strict";

const userCard = document.createElement("div");
userCard.classList.add("userCard");
const userImageElem = document.createElement("img");
userImageElem.setAttribute(
  "src",
  "https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg"
);
userImageElem.setAttribute("alt", "user photo");

const userPhoto = document.createElement("div");
userPhoto.classList.add("userPhoto");
userPhoto.append(userImageElem);
userCard.append(userPhoto);

const userStat = document.createElement("div");
userStat.classList.add("userStat");

const userStatValue = document.createElement("div");
userStatValue.classList.add("userStatValue");

const p1 = document.createElement("p");
p1.innerText = "183";
const p2 = document.createElement("p");
p2.innerText = "92778";
const p3 = document.createElement("p");
p3.innerText = "30";
userStatValue.append(p1);
userStatValue.append(p2);
userStatValue.append(p3);
userStat.append(userStatValue);

const userStatName = document.createElement("div");
userStatName.classList.add("userStatName");

const p4 = document.createElement("p");
p4.innerText = "shots";
const p5 = document.createElement("p");
p5.innerText = "followers";
const p6 = document.createElement("p");
p6.innerText = "projects";
userStatName.append(p4);
userStatName.append(p5);
userStatName.append(p6);
userStat.append(userStatName);
userCard.append(userStat);

const userButton = document.createElement("div");
userButton.classList.add("userButton");
const p7 = document.createElement("p");
p7.innerText = "Follow";
userButton.append(p7);
userCard.append(userButton);
document.body.append(userCard);
/*
 <div class="userCard">
        <div class="userPhoto">
            <img src="https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg" alt="user photo">
        </div>
        <div class="userStat">
            <div class="userStatValue">
                <p>183</p>
                <p>92778</p>
                <p>30</p>
            </div>
            <div class="userStatName">
                <p>shots</p>
                <p>followers</p>
                <p>projects</p>
            </div>

        </div>
        <div class="userButton">
            <p>Follow</p>
        </div>

    </div>
*/
