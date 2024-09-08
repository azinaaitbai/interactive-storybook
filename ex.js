let points = 0;

const pointsDisplay = document.getElementById("points");
const choicesContainer = document.getElementById("choices-container");
const restartBtn = document.getElementById("restart-btn");
const fullscreenVideoContainer = document.getElementById(
  "fullscreen-video-container"
);
const foregroundVideo = document.getElementById("foreground-video");
const nextBtn = document.getElementById("next-btn");
const backgroundVideo = document.getElementById("background-video");
const backgroundText = document.getElementById("background-text");

const story = {
  start: {
    video: "jihc.mp4",
    backgroundText: "Welcome to the Jambyl Innovation High College!",
    choices: [
      {
        text: "Explore library",
        next: "library",
        points: 0,
        video: "intokitaphana.mp4",
      },
      {
        text: "Visit the classroom",
        next: "classroom",
        points: 0,
        video: "intoclassroom.mp4",
      },
    ],
  },
  library: {
    video: "intokitaphana.mp4",
    backgroundText:
      "there was no one in library.Tea time will start now, go there!",
    choices: [
      {
        text: "Next",
        next: "chai",
        points: 0,
        video: "chai.mp4",
      },
    ],
  },
  classroom: {
    video: "intoclassroom.mp4",
    backgroundText:
      "there was unfamiliar students in classroom.Tea time will start now, go there!",
    choices: [
      {
        text: "Next",
        next: "chai",
        points: 0,
        video: "chai.mp4",
      },
    ],
  },
  chai: {
    video: "chai.mp4",
    backgroundText: "tea with the tutor in the evening, you are on duty",
    choices: [
      {
        text: "to be on duty",
        next: "kashpau",
        points: 10,
        video: "kashpau.mp4",
      },
      {
        text: "do not be on duty by lying",
        next: "aldau",
        points: -5,
        video: "aldau.mp4",
      },
      {
        text: "escape without being on duty",
        next: "kashu",
        points: -10,
        video: "kashu.mp4",
      },
    ],
  },
  kashu: {
    video: "kashu.mp4",
    backgroundText:
      "The second duty made the tea herself and was disappointed with you",
    choices: [
      {
        text: "Bedtime",
        next: "kashu_yatish",
        points: 0,
        video: "bedtime.mp4",
      },
    ],
  },
  kashpau: {
    video: "kashpau_end.mp4",
    backgroundText:
      "You made tea together with the second duty and became good friends",
    choices: [
      {
        text: "Bedtime",
        next: "kashpau_yatish",
        points: 0,
        video: "bedtime.mp4",
      },
    ],
  },
  aldau: {
    video: "aldau.mp4",
    backgroundText:
      "You lied to the second duty and you were not on duty and you felt guilty",
    choices: [
      {
        text: "Bedtime",
        next: "kashu_yatish",
        points: 0,
        video: "bedtime.mp4",
      },
    ],
  },
  kashpau_yatish: {
    video: "bedtime.mp4",
    backgroundText: "Bedtime - you need to conduct a phone",
    choices: [
      {
        text: "Conduct",
        next: "kashpau_yatish_goodend",
        points: 10,
        video: "otkizy.mp4",
      },
      {
        text: "Hide it and don't conduct it",
        next: "kashpau_yatish_badend",
        points: -5,
        video: "otkizbey.mp4",
      },
    ],
  },
  kashu_yatish: {
    video: "bedtime.mp4",
    backgroundText: "Bedtime - you need to conduct a phone",
    choices: [
      {
        text: "Conduct",
        next: "kashu_yatish_goodend",
        points: 10,
        video: "otkizy.mp4",
      },
      {
        text: "Hide it and don't conduct it",
        next: "kashu_yatish_badend",
        points: -10,
        video: "otkizbey.mp4",
      },
    ],
  },
  kashu_yatish_goodend: {
    video: "happy.mp4",
    backgroundText:
      "The tutor came to check, said good night and was happy that you followed the rules",
    choices: [
      {
        text: "teacher",
        next: "kurator",
        points: 0,
        video: "inthemorningusawteacher.mp4",
      },
    ],
  },
  kashu_yatish_badend: {
    video: "alypkoyu.mp4",
    backgroundText:
      "he scolds you for not giving you the phone and takes it away for 1 week",
    choices: [
      {
        text: "teacher",
        next: "kurator",
        points: 0,
        video: "inthemorningusawteacher.mp4",
      },
    ],
  },
  kashpau_yatish_goodend: {
    video: "happy.mp4",
    backgroundText:
      "The tutor came to check, said good night and was happy that you followed the rules",
    choices: [
      {
        text: "teacher",
        next: "kashpau_kurator",
        points: 0,
        video: "inthemorningusawteacher.mp4",
      },
    ],
  },
  kashpau_yatish_badend: {
    video: "alypkoyu.mp4",
    backgroundText:
      "he scolds you for not giving you the phone and takes it away for 1 week",
    choices: [
      {
        text: "teacher",
        next: "kashpau_kurator",
        points: 0,
        video: "inthemorningusawteacher.mp4",
      },
    ],
  },
  kurator: {
    video: "inthemorningusawteacher.mp4",
    backgroundText: "In the morning, you saw the teacher in the corridor",
    choices: [
      {
        text: "Hello, teacher",
        next: "kurator_salamatsizba",
        points: 10,
        video: "hello.mp4",
      },
      {
        text: "Merhaba",
        next: "kurator_meraba",
        points: 0,
        video: "merhaba.mp4",
      },
      {
        text: "Pass by without seeing",
        next: "kurator_ignore",
        points: -10,
        video: "amandaspay.mp4",
      },
    ],
  },
  kashpau_kurator: {
    video: "inthemorningusawteacher.mp4",
    backgroundText: "In the morning, you saw the teacher in the corridor",
    choices: [
      {
        text: "Hello, teacher",
        next: "kashpau_kurator_salamatsizba",
        points: 10,
        video: "hello.mp4",
      },
      {
        text: "Merhaba",
        next: "kashpau_kurator_meraba",
        points: 0,
        video: "merhaba.mp4",
      },
      {
        text: "Pass by without seeing",
        next: "kashpau_kurator_ignore",
        points: -10,
        video: "amandaspay.mp4",
      },
    ],
  },
  kurator_salamatsizba: {
    video: "hello.mp4",
    backgroundText: "Well done - he is your curator - Nurzhan teacher",
    choices: [
      {
        text: "Physics",
        next: "fizika",
        points: 0,
        video: "erzhanagai.mp4",
      },
    ],
  },
  kurator_meraba: {
    video: "merhaba.mp4",
    backgroundText: "It's okay to greet, but don't use Turkish words",
    choices: [
      {
        text: "Physics",
        next: "fizika",
        points: 0,
        video: "erzhanagai.mp4",
      },
    ],
  },
  kurator_ignore: {
    video: "potom.mp4",
    backgroundText:
      "he was your curator and you were embarrassed to see him in the classroom because he didn't greet you",
    choices: [
      {
        text: "Physics",
        next: "fizika",
        points: 0,
        video: "erzhanagai.mp4",
      },
    ],
  },
  kashpau_kurator_ignore: {
    video: "potom.mp4",
    backgroundText:
      "he was your curator and you were embarrassed to see him in the classroom because he didn't greet you",
    choices: [
      {
        text: "Physics",
        next: "kashpau_kurator_salamatsizba_fizika",
        points: 0,
        video: "erzhanagai.mp4",
      },
    ],
  },
  kashpau_kurator_salamatsizba: {
    video: "hello.mp4",
    backgroundText: "Well done - she is your curator",
    choices: [
      {
        text: "Physics",
        next: "kashpau_fizika",
        points: 0,
        video: "erzhanagai.mp4",
      },
    ],
  },
  kashpau_kurator_meraba: {
    video: "merhaba.mp4",
    backgroundText: "It's okay to greet, but don't use Turkish words",
    choices: [
      {
        text: "Physics",
        next: "kashpau_fizika",
        points: 0,
        video: "erzhanagai.mp4",
      },
    ],
  },
  fizika: {
    video: "erzhanagai.mp4",
    backgroundText:
      "Erzhan teacher’s class does not give grades, but he does it in the quiz",
    choices: [
      {
        text: "study",
        next: "kurator_salamatsizba_fizika_etud",
        points: 10,
        video: "study.mp4",
      },
      {
        text: "do not study",
        next: "kurator_salamatsizba_fizika_etud",
        points: -10,
        video: "donotstudy.mp4",
      },
    ],
  },
  kashpau_fizika: {
    video: "erzhanagai.mp4",
    backgroundText:
      "Erzhan teacher’s class does not give grades, but he does it in the quiz",
    choices: [
      {
        text: "Study",
        next: "kashpau_kurator_salamatsizba_fizika_etud",
        points: 10,
        video: "study.mp4",
      },
      {
        text: "Do not study",
        next: "kashpau_kurator_salamatsizba_fizika_etud",
        points: -10,
        video: "donotstudy.mp4",
      },
    ],
  },
  kurator_salamatsizba_fizika_etud: {
    video: "chai.mp4",
    backgroundText: "program",
    choices: [
      {
        text: "Next",
        next: "kurator_salamatsizba_fizika_etud_program",
        points: 0,
        video: "chai.mp4",
      },
    ],
  },
  kurator_salamatsizba_fizika_etud_program: {
    video: "chai.mp4",
    backgroundText: "In program time",
    choices: [
      {
        text: "Study physics",
        next: "study",
        points: 10,
        video: "myself.mp4",
      },
      {
        text: "You talk to girls and don't study",
        next: "soilesu",
        points: -10,
        video: "withgirl.mp4",
      },
    ],
  },
  kashpau_kurator_salamatsizba_fizika_etud: {
    video: "erzhanagai.mp4",
    backgroundText: "program",
    choices: [
      {
        text: "Next",
        next: "kashpau_kurator_salamatsizba_fizika_etud_program",
        points: 0,
        video: "erzhanagai.mp4",
      },
    ],
  },
  kashpau_kurator_salamatsizba_fizika_etud_program: {
    video: "chai.mp4",
    backgroundText: "In program time",
    choices: [
      {
        text: "Study physics",
        next: "study",
        points: 10,
        video: "myself.mp4",
      },
      {
        text: "You talk to girls and don't study",
        next: "soilesu",
        points: -10,
        video: "withgirl.mp4",
      },
      {
        text: "Your friend said let's study together",
        next: "birge",
        points: 10,
        video: "friendcome.mp4",
      },
    ],
  },
  study: {
    video: "myself.mp4",
    backgroundText: "You studied alone",
    choices: [
      {
        text: "Next",
        next: "cheatorno",
        points: 0,
        video: "erzhanagai.mp4",
      },
    ],
  },
  soilesu: {
    video: "withgirl.mp4",
    backgroundText: "You loose your time by talking",
    choices: [
      {
        text: "Next",
        next: "cheatorno",
        points: 0,
        video: "erzhanagai.mp4",
      },
    ],
  },
  birge: {
    video: "friendcome.mp4",
    backgroundText: "You studied together and it helped you",
    choices: [
      {
        text: "Next",
        next: "cheatorno",
        points: 0,
        video: "erzhanagai.mp4",
      },
    ],
  },
  cheatorno: {
    video: "erzhanagai.mp4",
    backgroundText: "The next day was a quiz",
    choices: [
      {
        text: "Cheat",
        next: "koshiru",
        points: -10,
        video: "koshiru.mp4",
      },
      {
        text: "Dont't cheat",
        next: "koshirmeu",
        points: 10,
        video: "koshirmeu.mp4",
      },
    ],
  },
  koshiru: {
    video: "koshiru.mp4",
    backgroundText: "Teacher catched you",
    choices: [
      {
        text: "Finish",
        next: "gameover",
        points: 0,
        video: "theend.mp4",
      },
    ],
  },
  koshirmeu: {
    video: "koshirmeu.mp4",
    backgroundText: "You did quiz normally",
    choices: [
      {
        text: "Finish",
        next: "gameover",
        points: 0,
        video: "theend.mp4",
      },
    ],
  },
  gameover: {
    video: "theend.mp4",
  },
};

let currentScene = "start";

function initGame() {
  points = 0;
  updatePoints(0);
  currentScene = "start";
  showScene(currentScene);
}

function updatePoints(change) {
  points += change;
  pointsDisplay.textContent = points;

  if (change > 0) {
    pointsDisplay.style.color = "green";
  } else if (change < 0) {
    pointsDisplay.style.color = "red";
  } else {
    pointsDisplay.style.color = "white";
  }

  setTimeout(() => {
    pointsDisplay.style.color = "white";
  }, 500);
}

function showScene(sceneKey) {
  const scene = story[sceneKey];
  if (!scene) {
    alert("Scene not found!");
    return;
  }

  backgroundVideo.src = scene.video;
  backgroundVideo.play();

  if (scene.backgroundText) {
    backgroundText.textContent = scene.backgroundText;
    backgroundText.style.display = "block";
  } else {
    backgroundText.style.display = "none";
  }

  choicesContainer.innerHTML = "";

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.classList.add("choice-btn");

    const video = document.createElement("video");
    video.src = choice.video;
    video.alt = choice.text;
    video.autoplay = true;
    video.loop = true;
    button.appendChild(video);

    const btnText = document.createElement("div");
    btnText.textContent = choice.text;
    button.appendChild(btnText);

    button.addEventListener("click", () => {
      handleChoice(choice);
    });

    choicesContainer.appendChild(button);
  });

  arrangeChoices(scene.choices.length);
}

function arrangeChoices(count) {
  if (count > 2) {
    choicesContainer.style.flexDirection = "row";
  } else {
    choicesContainer.style.flexDirection = "row";
  }
}

function handleChoice(choice) {
  updatePoints(choice.points);
  currentScene = choice.next;

  if (story[currentScene] && story[currentScene].fullscreen) {
    showFullscreenVideo(currentScene);
  } else {
    showScene(currentScene);
  }
}

function showFullscreenVideo(sceneKey) {
  const scene = story[sceneKey];
  if (!scene) return;

  foregroundVideo.src = scene.video;
  fullscreenVideoContainer.classList.remove("hidden");
  foregroundVideo.play();

  backgroundVideo.style.display = "none";
}

nextBtn.addEventListener("click", () => {
  fullscreenVideoContainer.classList.add("hidden");
  backgroundVideo.style.display = "block";
  showScene(currentScene);
});

restartBtn.addEventListener("click", () => {
  initGame();
});

window.onload = initGame;

function showScene(sceneKey) {
  const scene = story[sceneKey];
  if (!scene) {
    alert("Scene not found!");
    return;
  }

  backgroundVideo.src = scene.video;
  backgroundVideo.play();

  if (scene.backgroundText) {
    backgroundText.textContent = scene.backgroundText;
    backgroundText.style.display = "block";
  } else {
    backgroundText.style.display = "none";
  }

  choicesContainer.innerHTML = "";

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.classList.add("choice-btn");

    const video = document.createElement("video");
    video.src = choice.video;
    video.loop = true;
    video.muted = true;
    button.appendChild(video);

    button.addEventListener("mouseenter", () => {
      video.play();
    });

    button.addEventListener("mouseleave", () => {
      video.pause();
    });

    const btnText = document.createElement("div");
    btnText.textContent = choice.text;
    button.appendChild(btnText);

    button.addEventListener("click", () => {
      handleChoice(choice);
    });

    choicesContainer.appendChild(button);
  });

  arrangeChoices(scene.choices.length);
}
