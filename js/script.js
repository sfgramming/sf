$(document).ready(function () {
  let currentDate = new Date();
  let popupIndex = 0;
  displayCalendar(currentDate);

  function displayCalendar(date) {
    const daysElement = $(".days");
    const monthElement = $(".date h1");

    monthElement.text(new Date(date).toLocaleString("default", { month: "long", year: "numeric" }));

    daysElement.empty();

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      daysElement.append("<div></div>");
    }

    for (let i = 1; i <= lastDate; i++) {
      const dayElement = $("<div>" + i + "</div>");
      dayElement.click(function () {
        openPopup(date.getFullYear(), date.getMonth() + 1, i);
      });
      daysElement.append(dayElement);
    }
  }


  const specialDates = {
    "11/27": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "계란야채볶음밥",
          images: ["images/1.png", "images/5.png", "images/6.png", "images/9.png", "images/10.png", "images/18.png"]
        },
        {
          text: "마라탕",
          images: ["images/1.png", "images/4.png", "images/5.png", "images/6.png", "images/9.png", "images/10.png", "images/13.png", "images/15.png", "images/16.png", "images/18.png"]
        },
        {
          text: "닭꼬치데리야끼구이",
          images: ["images/1.png", "images/5.png", "images/6.png",  "images/15.png"]
        },
        {
          text: "야채크로켓",
          images: ["images/1.png", "images/2.png", "images/5.png", "images/6.png", "images/8.png", "images/9.png", "images/12.png"]
        },
        {
          text: "mini아이스크림",
          images: ["images/1.png", "images/2.png","images/4.png", "images/5.png"]
        },
        {
          text: "백김치",
          images: ["images/9.png"]
        },
        {
          text: "깻잎지",
          images: ["images/9.png"]
        },
        
      ]
     },

     "11/28": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "계란야채볶음밥",
          images: ["images/1.png", "images/5.png", "images/6.png", "images/9.png", "images/10.png", "images/18.png"]
        },
        {
          text: "마라탕",
          images: ["images/1.png", "images/4.png", "images/5.png", "images/6.png", "images/9.png", "images/10.png", "images/13.png", "images/15.png", "images/16.png", "images/18.png"]
        },
        {
          text: "닭꼬치데리야끼구이",
          images: ["images/1.png", "images/5.png", "images/6.png",  "images/15.png"]
        },
        {
          text: "야채크로켓",
          images: ["images/1.png", "images/2.png", "images/5.png", "images/6.png", "images/8.png", "images/9.png", "images/12.png"]
        },
        {
          text: "mini아이스크림",
          images: ["images/1.png", "images/2.png","images/4.png", "images/5.png"]
        },
        {
          text: "백김치",
          images: ["images/9.png"]
        },
        {
          text: "깻잎지",
          images: ["images/9.png"]
        },
        
      ]
     },

     "12/18": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "친환경흑미밥",
          images: []
        },
        {
          text: "콩나물김칫국",
          images: ["images/5.png", "images/6.png", "images/9.png", "images/18.png"]
        },
        {
          text: "우불고기",
          images: ["images/5.png", "images/6.png", "images/16.png"]
        },
        {
          text: "진미채&파래자반",
          images: ["images/5.png", "images/6.png", "images/17.png"]
        },
        {
          text: "황금향",
          images: []
        },
        {
          text: "배추김치",
          images: ["images/9.png"]
        },
        {
          text: "양배추쌈&쌈장",
          images: ["images/5.png", "images/6.png"]
        },
        
      ]
    },
    "12/19": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "친환경보리밥",
          images: []
        },
        {
          text: "소고기낙지수제비",
          images: ["images/5.png", "images/6.png", "images/9.png", "images/16.png","images/17.png","images/18.png"]
        },
        {
          text: "닭감자조림",
          images: ["images/5.png", "images/6.png", "images/15.png"]
        },
        {
          text: "온두부&볶음김치",
          images: ["images/5.png", "images/9.png", "images/10.png"]
        },
        {
          text: "요구르트",
          images: ["images/2.png"]
        },
        {
          text: "무말랭이무침",
          images: ["images/9.png"]
        },
        {
          text: "시금치나물",
          images: ["images/9.png"]
        },
        
      ]
    },
    "12/20": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "김밥볶음밥",
          images: ["images/1.png","images/5.png","images/6.png","images/9.png","images/10.png","images/15.png","images/16.png","images/18.png"]
        },
        {
          text: "유부장국",
          images: ["images/5.png", "images/6.png"]
        },
        {
          text: "떡볶이",
          images: ["images/5.png", "images/6.png", "images/18.png"]
        },
        {
          text: "핫도그",
          images: ["images/1.png", "images/2.png", "images/3.png","images/4.png","images/5.png","images/6.png","images/10.png","images/15.png"]
        },
        {
          text: "구슬아이스크림",
          images: []
        },
        {
          text: "총각김치",
          images: ["images/9.png"]
        },
        {
          text: "숙주나물무침",
          images: ["images/9.png"]
        },
        
      ]
    },
    "12/21": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "친환경완두콩밥",
          images: []
        },
        {
          text: "순두부탕",
          images: ["images/1.png","images/5.png", "images/6.png", "images/9.png","images/17.png", "images/18.png"]
        },
        {
          text: "제육볶음 + 무쌈",
          images: ["images/5.png", "images/6.png", "images/10.png","images/13.png"]
        },
        {
          text: "가마보꼬어묵볶음",
          images: ["images/1.png","images/5.png", "images/6.png","images/9.png", "images/17.png","images/18.png"]
        },
        {
          text: "멜론",
          images: []
        },
        {
          text: "배추김치",
          images: ["images/9.png"]
        },
        {
          text: "상추겉절이",
          images: ["images/5.png", "images/6.png","images/13.png"]
        },
        
      ]
    },
    "12/22": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "스파게티",
          images: ["images/1.png","images/2.png","images/5.png","images/6.png","images/9.png","images/10.png","images/12.png","images/13.png","images/16.png",]
        },
        {
          text: "돈등갈비",
          images: ["images/1.png","images/5.png", "images/6.png", "images/10.png", "images/18.png"]
        },
        {
          text: "회오리감자",
          images: ["images/5.png", "images/6.png"]
        },
        {
          text: "양상추과일샐러드",
          images: ["images/5.png", "images/6.png", "images/12.png"]
        },
        {
          text: "크리스마스도넛",
          images: ["images/1.png","images/2.png","images/5.png","images/6.png"]
        },
        {
          tsxt: "과채음료&피클류",
          images: []
        },
        {
          text: "팥찰밥&구이김&깻잎김치",
          images: [ "images/9.png"]
        },
        
      ]
    },
    "12/26": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "친환경흑미밥",
          images: []
        },
        {
          text: "마라탕",
          images: [ "images/1.png", "images/3.png", "images/5.png","images/6.png","images/8.png","images/9.png","images/10.png","images/12.png","images/15.png","images/16.png","images/18.png",]
        },
        {
          text: "가자미스테이크",
          images: ["images/1.png","images/5.png", "images/6.png","images/18.png"]
        },
        {
          text: "달걀장조림",
          images: ["images/1.png","images/5.png"]
        },
        {
          text: "청포도&방울토마토 + 마카롱",
          images: ["images/12.png",]
        },
        {
          text: "깍두기",
          images: ["images/9.png"]
        },
        {
          text: "궁채나물볶음",
          images: ["images/3.png","images/5.png", "images/6.png","images/18.png",]
        },
        
      ]
    },
    "12/27": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "친환경수수밥",
          images: []
        },
        {
          text: "꽃게된장찌개",
          images: ["images/5.png", "images/6.png", "images/8.png"]
        },
        {
          text: "LA돼지갈비구이",
          images: ["images/5.png", "images/6.png","images/10.png","images/13.png", "images/18.png"]
        },
        {
          text: "토마토달걀볶음",
          images: ["images/1.png","images/12.png"]
        },
        {
          text: "쿠키&요구르트",
          images: ["images/1.png","images/2.png","images/5.png","images/6.png",]
        },
        {
          text: "배추김치",
          images: ["images/9.png"]
        },
      ]
    },



     
    // Add more special dates and messages here
  };


  function openPopup(year, month, day) {
    const selectedDate = new Date(year, month - 1, day); // Month is 0-indexed
    const popupContent = $(".popup-content");

    const key = `${month}/${day < 10 ? '0' + day : day}`;

    if (specialDates[key]) {
      const specialInfo = specialDates[key];
      const paragraphsHtml = specialInfo.paragraphs.map(paragraph => {
        const text = paragraph.text;
        const images = paragraph.images.map(imageUrl => `<img src="${imageUrl}" alt="${text}" class="popup-image" />`).join('');
        return `<div class="text-with-images">
                  <div class="text">${text}</div>
                  <div class="images">${images}</div>
                </div>`;
      }).join('');
      popupContent.html(`
        <h2>${specialInfo.title}</h2>
        ${paragraphsHtml}
      `);
    } else {
      popupContent.html(`
        <h3> 해당 급식메뉴는 준비 중입니다. </h3>
        <p class="horizontal-text"><span> </span></p>
      `);
    }

    // Calculate popup position
    const popupOffset = $(".days").offset();
    const popupWidth = $(".popup").outerWidth();
    const popupLeft = popupOffset.left + $(".days").outerWidth();
    const popupTop = popupOffset.top -100;

    // Set popup position
    $(".popup").css({ left: popupLeft + "px", top: popupTop + "px" });

    $(".popup").fadeIn();

    // Close the popup when clicking the "X" button
    const closeButton = $(".close");
    closeButton.click(function () {
      $(".popup").fadeOut();
    });
  }

  $(".prev").click(function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    displayCalendar(currentDate);
  });

  $(".next").click(function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    displayCalendar(currentDate);
  });

  // Close the popup when clicking outside the popup content
  $(document).click(function (event) {
    if (!$(event.target).closest('.popup-content').length && !$(event.target).is('.days div')) {
      $(".popup").fadeOut();
    }
  });
});
