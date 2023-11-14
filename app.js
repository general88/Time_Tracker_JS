let timeDetails = document.getElementById("secondSection");
let eventBtn = document.querySelectorAll(".eventBtn");

let dailyTimeDetails = [
  {
    desc: "Work",
    todaysTime: "5",
    previousTime: "7",
    bgIcon: "/image/icon-work.svg",
    outBgColor: "rgb(255, 140, 102)",
    previous: "Yesterday",
  },
  {
    desc: "Play",
    todaysTime: "1",
    previousTime: "2",
    bgIcon: "/image/icon-play.svg",
    outBgColor: "rgb(86, 194, 230)",
    previous: "Yesterday",
  },
  {
    desc: "Study",
    todaysTime: "0",
    previousTime: "1",
    bgIcon: "/image/icon-study.svg",
    outBgColor: "rgb(255, 92, 124)",
    previous: "Yesterday",
  },
  {
    desc: "Exercise",
    todaysTime: "1",
    previousTime: "1",
    bgIcon: "/image/icon-exercise.svg",
    outBgColor: "rgb(74, 207, 129)",
    previous: "Yesterday",
  },
  {
    desc: "Social",
    todaysTime: "1",
    previousTime: "3",
    bgIcon: "/image/icon-social.svg",
    outBgColor: "rgb(148, 106, 210)",
    previous: "Yesterday",
  },
  {
    desc: "Self Care",
    todaysTime: "0",
    previousTime: "1",
    bgIcon: "",
    outBgColor: "rgb(241, 198, 91)",
    previous: "Yesterday",
  },
];
let weeklyTimeDetails = [
  {
    desc: "Work",
    todaysTime: "32",
    previousTime: "36",
    bgIcon: "/image/icon-work.svg",
    outBgColor: "rgb(255, 140, 102)",
    previous: "Last Week",
  },
  {
    desc: "Play",
    todaysTime: "10",
    previousTime: "8",
    bgIcon: "/image/icon-play.svg",
    outBgColor: "rgb(86, 194, 230)",
    previous: "Last Week",
  },
  {
    desc: "Study",
    todaysTime: "4",
    previousTime: "7",
    bgIcon: "/image/icon-study.svg",
    outBgColor: "rgb(255, 92, 124)",
    previous: "Last Week",
  },
  {
    desc: "Exercise",
    todaysTime: "4",
    previousTime: "5",
    bgIcon: "/image/icon-exercise.svg",
    outBgColor: "rgb(74, 207, 129)",
    previous: "Last Week",
  },
  {
    desc: "Social",
    todaysTime: "5",
    previousTime: "10",
    bgIcon: "/image/icon-social.svg",
    outBgColor: "rgb(148, 106, 210)",
    previous: "Last Week",
  },
  {
    desc: "Self Care",
    todaysTime: "2",
    previousTime: "2",
    bgIcon: "",
    outBgColor: "rgb(241, 198, 91)",
    previous: "Last Week",
  },
];
let monthlyTimeDetails = [
  {
    desc: "Work",
    todaysTime: "103",
    previousTime: "128",
    bgIcon: "/image/icon-work.svg",
    outBgColor: "rgb(255, 140, 102)",
    previous: "Last Month",
  },
  {
    desc: "Play",
    todaysTime: "23",
    previousTime: "29",
    bgIcon: "/image/icon-play.svg",
    outBgColor: "rgb(86, 194, 230)",
    previous: "Last Month",
  },
  {
    desc: "Study",
    todaysTime: "13",
    previousTime: "19",
    bgIcon: "/image/icon-study.svg",
    outBgColor: "rgb(255, 92, 124)",
    previous: "Last Month",
  },
  {
    desc: "Exercise",
    todaysTime: "11",
    previousTime: "18",
    bgIcon: "/image/icon-exercise.svg",
    outBgColor: "rgb(74, 207, 129)",
    previous: "Last Month",
  },
  {
    desc: "Social",
    todaysTime: "21",
    previousTime: "23",
    bgIcon: "/image/icon-social.svg",
    outBgColor: "rgb(148, 106, 210)",
    previous: "Last Month",
  },
  {
    desc: "Self Care",
    todaysTime: "7",
    previousTime: "11",
    bgIcon: "",
    outBgColor: "rgb(241, 198, 91)",
    previous: "Last Month",
  },
];

let generateTimeDetails = (timeEvents) => {
  return (timeDetails.innerHTML = timeEvents
    .map((item) => {
      return `
        <div style="background-color: ${item.outBgColor}; background-image: url(${item.bgIcon}); " class="outerBgAll">
          <div class="innerBg">
            <div class="innerBgHeader">
              <p>${item.desc}</p>
              <i class="fa-solid fa-ellipsis" style="color:#eaeef6"></i>
            </div>
            <div class="innerBgMain">
              <h1 class="innerBgMainTime">${item.todaysTime}hrs</h1>
              <p>${item.previous} - ${item.previousTime}hrs</p>
            </div>
          </div>
        </div>
      `;
    })
    .join(""));
};
generateTimeDetails(dailyTimeDetails);

eventBtn.forEach((item) => {
  item.addEventListener("click", () => {
    checkUserStats(item.innerText);
  });
});

function checkUserStats(params) {
  if (params === "Daily") {
    generateTimeDetails(dailyTimeDetails);
  }
  if (params === "Weekly") {
    generateTimeDetails(weeklyTimeDetails);
  }
  if (params === "Monthly") {
    generateTimeDetails(monthlyTimeDetails);
  }
}
