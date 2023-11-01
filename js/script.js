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
    "11/01": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "유니자장(면&밥)",
          images: ["images/1.png", "images/2.png", "images/5.png","images/6.png", "images/10.png", "images/16.png", "images/17.png", "images/18.png"]
        },

        {
          text: "탕수육&소스",
          images: ["images/1.png", "images/2.png", "images/5.png","images/6.png", "images/10.png",]
        },

        {
          text: "달걀파국",
          images: []
        
        },

        {
          text: "망고샐러드",
          images: ["images/1.png", "images/2.png", "images/5.png",]
        },

        {
          text: "요구르트",
          images: ["images/2.png"]

        },

        {
          text: "단무지",
          images: []
        
        },

        {
          text: "총각김치",
          images: ["images/9.png", "images/13.png",]
        },
        // ... (다른 항목들도 동일한 형식으로 추가)
      ]
      // Add more special dates and messages here
    },

    "11/02": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "아미노찹쌀밥",
          images: []
         
        },

        {
          text: "소고기버섯된장국",
          images: ["images/5.png", "images/6.png", "images/16.png","images/18.png",]
        },

        {
          text: "돈육허브구이&무쌈&쌈장",
          images: ["images/5.png", "images/10.png", ]
        },

        {
          text: "가마보꼬어묵볶음",
          images: ["images/1.png", "images/5.png","images/6.png", "images/7.png", "images/8.png",  "images/9.png", "images/17.png", "images/18.png"]
        },

        {
          text: "과일(배)",
          images: []

        },

        {
          text: "배추김치",
          images: ["images/9.png",]
        },

        {
          text: "궁채나물볶음",
          images: ["images/3.png", "images/5.png","images/6.png",]
        },
        // ... (다른 항목들도 동일한 형식으로 추가)
      ]
      // Add more special dates and messages here
    },

    "11/03": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "옥수수알밥",
          images: []
        
        },

        {
          text: "영양닭곰탕",
          images: ["images/1.png",  "images/5.png", "images/6.png","images/15.png",]
        },

        {
          text: "오징어수제비볶음",
          images: [ "images/5.png","images/6.png", "images/8.png",  "images/9.png", "images/17.png", "images/18.png"]
        },

        {
          text: "두부동그랑땡",
          images: ["images/1.png", "images/5.png","images/6.png", "images/8.png","images/9.png", "images/10.png", "images/15.png", "images/17.png", "images/18.png",  ]
        },

        {
          text: "팥붕어빵",
          images: ["images/1.png", "images/2.png", "images/3.png","images/4.png","images/5.png", "images/6.png", ]

        },

        {
          text: "구이김",
          images: ["images/5.png"]
        },

        {
          text: "깍두기",
          images: ["images/9.png",]
        },

        {
          text: "마늘쫑락교무침",
          images: ["images/5.png","images/6.png",]
        },
        // ... (다른 항목들도 동일한 형식으로 추가)
      ]
      // Add more special dates and messages here
    },
    "11/13": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "친환경보리밥",
          images: []
         
        },

        {
          text: "순두부탕",
          images: ["images/1.png","images/5.png", "images/6.png", "images/9.png","images/17.png","images/18.png",]
        },

        {
          text: "등심돈가스&소스",
          images: ["images/1.png","images/2.png","images/3.png","images/5.png", "images/6.png","images/10.png", ]
        },

        {
          text: "구운연어샐러드",
          images: ["images/1.png", "images/3.png","images/5.png", "images/6.png", ]
        },

        {
          text: "과즙음료(감귤)",
          images: []

        },

        {
          text: "무말랭이무침",
          images: ["images/9.png",]
        },

        {
          text: "시금치무침",
          images: [ "images/5.png","images/6.png",]
        },
        // ... (다른 항목들도 동일한 형식으로 추가)
      ]
      // Add more special dates and messages here
    },


    "11/14": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "친환경흑미밥",
          images: []
         
        },

        {
          text: "우렁이된장국",
          images: ["images/5.png", "images/6.png","images/18.png",]
        },

        {
          text: "우불고기",
          images: ["images/5.png","images/6.png", "images/16.png", ]
        },

        {
          text: "연두부&양념장",
          images: ["images/5.png", "images/6.png"]
        },

        {
          text: "마카롱",
          images: ["images/1.png","images/2.png","images/5.png", "images/6.png",]
        },

        {
          text: "총각김치",
          images: ["images/9.png",]
        },

        {
          text: "상추겉절이",
          images: ["images/9.png",]
        },
        // ... (다른 항목들도 동일한 형식으로 추가)
      ]
      // Add more special dates and messages here
    },
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
          text: "친환경완두콩밥",
          images: []
        },
        {
          text: "조랭이떡국",
          images: ["images/1.png", "images/5.png", "images/6.png"]
        },
        {
          text: "제육물갈비",
          images: ["images/5.png", "images/6.png",  "images/10.png"]
        },
        {
          text: "야채계란찜",
          images: ["images/1.png", "images/2.png", "images/5.png",  "images/9.png", ]
        },
        {
          text: "과일(포도&방울)",
          images: ["images/12.png"]
        },
        {
          text: "총각김치",
          images: ["images/9.png"]
        },
        {
          text: "치커리사과생채",
          images: ["images/5.png", "images/6.png", "images/9.png","images/10.png"]
        },
        
      ]
     },

     "11/29": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "비빔밥",
          images: ["images/1.png", "images/5.png", "images/6.png", "images/9.png", "images/10.png", "images/15.png", , "images/16.png"]
        },
        {
          text: "유부장국",
          images: ["images/5.png", "images/6.png"]
        },
        
        {
          text: "그릴소시지",
          images: ["images/1.png", "images/2.png",  "images/5.png", "images/6.png", "images/10.png",  "images/15.png"]
        },
        {
          text: "감자조림",
          images: ["images/5.png"]
        },
        {
          text: "찹쌀부각",
          images: ["images/5.png", "images/6.png"]
        },
        {
          text: "음료(매실)",
          images: []
        },
        {
          text: "오이소박이",
          images: ["images/9.png"]
        },

        
      ]
     },

     "11/30": {
      title: "오늘의 중식",
      paragraphs: [
        {
         text: "미트소스스파게티", 
         images: ["images/1.png", "images/2.png","images/5.png", "images/6.png", "images/10.png", "images/12.png","images/13.png", "images/15.png", "images/16.png"]
      },

        {
          text: "함박스테이크",
          images: ["images/1.png", "images/2.png", "images/5.png", "images/6.png","images/10.png", "images/15.png", "images/16.png"]
        },
        
        {
          text: "카스테라치즈볼",
          images: ["images/1.png", "images/2.png",  "images/5.png", "images/6.png", "images/16.png"]
        },
        {
          text: "양상추과일샐러드",
          images: ["images/1.png","images/5.png"]
        },
        {
          text: "착즙음료(사과)&야채모듬피클",
          images: []
        },
        {
          text: "추가밥&볶음김치",
          images: ["images/9.png"]
        },

        
      ]
     },
     "11/20": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "조각밤밥/바지락살미역국",
          images: ["images/1.png", "images/2.png", "images/5.png","images/6.png"]
        },

        {
          text: "돼지갈비찜",
          images: ["images/5.png", "images/6.png", "images/10.png"]
        },

        {
          text: "실곤약채소무침",
          images: ["images/5.png","images/6.png"]
        },

        {
          text: "롤케이크",
          images: ["images/1.png", "images/2.png", "images/5.png","images/6.png"]
        },

        {
          text: "배추김치",
          images: ["images/9.png"]
        },

        {
          text: "오이지무침",
          images: ["images/9.png"]
        },
        // ... (다른 항목들도 동일한 형식으로 추가)
      ]
      // Add more special dates and messages here
    },
    "11/21": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "친환경현미밥",
          images: []
        },

        {
          text: "부대찌개",
          images: ["images/1.png", "images/5.png", "images/6.png", "images/10.png", "images/13.png", "images/15.png"]
        },

        {
          text: "삼치엿장조림",
          images: ["images/1.png", "images/5.png","images/6.png", "images/7.png"]
        },

        {
          text: "볶음우동",
          images: ["images/2.png", "images/4.png", "images/5.png","images/6.png", "images/9.png", "images/10.png"]
        },

        {
          text: "귤",
          images: []
        },

        {
          text: "총각김치",
          images: ["images/9.png"]
        },

        {
          text: "감자채볶음",
          images: ["images/5.png"]
        },
        // ... (다른 항목들도 동일한 형식으로 추가)
      ]
      // Add more special dates and messages here
    },
    "11/22": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "소고기볶음밥",
          images: ["images/1.png", "images/5.png", "images/6.png", "images/16.png"]
        },

        {
          text: "깻잎떡볶이",
          images: ["images/1.png", "images/2.png","images/5.png", "images/6.png"]
        },

        {
          text: "어묵국",
          images: ["images/1.png", "images/5.png", "images/6.png","images/8.png", "images/9.png", "images/17.png"]
        },

        {
          text: "튀김류(야채)",
          images: ["images/5.png", "images/6.png"]
        },

        {
          text: "순대찜",
          images: ["images/5.png", "images/6.png", "images/10.png"]
        },

        {
          text: "유산균음료",
          images: ["images/2.png"]
        },

        {
          text: "단무지",
          images: []
        },

        {
          text: "갓김치",
          images: ["images/9.png"]
        },
        // ... (다른 항목들도 동일한 형식으로 추가)
      ]
      // Add more special dates and messages here
    },
    "11/23": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "친환경수수밥",
          images: []
        },

        {
          text: "잔치국수",
          images: ["images/1.png", "images/5.png", "images/6.png"]
        },

        {
          text: "춘천식닭갈비",
          images: ["images/1.png", "images/2.png", "images/5.png","images/6.png", "images/15.png"]
        },

        {
          text: "발효왕만두",
          images: ["images/1.png", "images/2.png", "images/5.png","images/6.png", "images/8.png", "images/9.png", "images/10.png", "images/13.png","images/15.png"]
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
          text: "콩나물무침",
          images: ["images/9.png"]
        }
        // ... (다른 항목들도 동일한 형식으로 추가)
      ]
      // Add more special dates and messages here
    },
    "11/24": {
      title: "오늘의 중식",
      paragraphs: [
        {
          text: "칼슘차조밥",
          images: []
        },

        {
          text: "들깨수제비",
          images: ["images/5.png", "images/6.png"]
        },

        {
          text: "돈사태김치찜&파래자반",
          images: ["images/5.png"]
        },

        {
          text: "씨리얼고구마맛탕",
          images: ["images/5.png","images/6.png"]
        },

        {
          text: "쿠키류",
          images: ["images/1.png","images/2.png", "images/5.png","images/6.png"]
        },

        {
          text: "오이김치",
          images: ["images/9.png"]
        }
        // ... (다른 항목들도 동일한 형식으로 추가)
      ]
      // Add more special dates and messages here
    },
    "11/07":{
      title:"오늘의 중식",
      paragraphs:[
        {text:"친환경현미밥", images:[]},
        {text:"동태탕", images:["images/5.png","images/6.png","images/8.png","images/9.png","images/17.png","images/18.png"]},
        {text:"제육볶음", images:["images/5.png","images/6.png","images/10.png"]},
        {text:"찐만두", images:["images/1.png","images/2.png","images/3.png","images/5.png","images/6.png","images/8.png","images/9.png","images/10.png","images/15.png"]},
        {text:"푸딩", images:[]},
        {text: "배추김치", images:["images/9.png"]},
        {text:"모듬쌈&쌈장", images:["images/5.png","images/6.png","images/18.png"]}
      ]
    },
    "11/06":{
      title:"오늘의 중식",
      paragraphs:[
        {text:"친환경완두콩밥", images:[]},
        {text:"소고기된장국", images:["images/5.png","images/6.png","images/10.png","images/16.png",]},
        {text:"안동찜닭", images:["images/1.png","images/5.png","images/15.png"]},
        {text:"온두부&볶음김치", images:["images/5.png","images/6.png","images/8.png","images/9.png","images/18.png",]},
        {text:"과일(연시)", images:[]},
        {text: "총각김치", images:["images/9.png"]},
        {text:"(후르츠)샐러드&사우전D", images:["images/1.png","images/2.png","images/5.png","images/6.png","images/12.png"]}
      ]
    },
    "11/08":{
      title:"오늘의 중식",
      paragraphs:[
        {text:"카레라이스", images:["images/1.png","images/2.png","images/4.png","images/5.png","images/6.png","images/10.png","images/15.png"]},
        {text:"콩나물국", images:["images/5.png","images/6.png","images/17.png"]},
        {text:"닭다리스테이크", images:["images/1.png","images/5.png","images/6.png","images/15.png"]},
        {text:"웨지감자튀김", images:["images/1.png","images/5.png"]},
        {text:"천연과즙음료", images:[]},
        {text:"깍두기", images:["images/9.png"]},
        {text:"오이생채", images:["images/9.png"]}
      ]
    },
    "11/09":{
      title:"오늘의 중식",
      paragraphs:[
        {text:"친환경보리밥", images:[]},
        {text:"쇠고기우거지국", images:["images/1.png","images/5.png","images/6.png","images/16.png","images/18.png"]},
        {text: "돈육폭찹", images:["images/1.png","images/5.png","images/6.png","images/10.png","images/12.png"]},
        {text:"바게트피자빵", images:["images/1.png","images/2.png","images/5.png","images/6.png","images/9.png","images/10.png","images/12.png","images/15.png","images/18.png"]},
        {text:"과일-황금향", images:[]},
        {text:"총각김치", images:["images/9.png"]},
        {text: "숙주나물무침", images:["images/9.png"]}
      ]
    },
    "11/10":{
      title:"오늘의 중식",
      paragraphs:[
        {text:"참치김치볶음밥", images:["images/1.png","images/5.png","images/6.png","images/18.png"]},
        {text:"새우튀김", images:["images/1.png","images/2.png","images/5.png","images/6.png","images/9.png"]},
        {text:"콘샐러드", images:["images/1.png","images/2.png","images/5.png"]},
        {text:"요플레",images:["images/2.png"]},
        {text:"단무지무침", images:["images/9.png"]},
        {text: "깻순볶음", images:["images/5.png","images/6.png"]}
      ]
    },
    "11/15":{
      title:"수능 예비소집일",
      paragraphs:[
        {text:[], images:[]}
      ]
    },
    "11/16":{
      title:"대학수학능력시험",
      paragraphs:[
        {text:"선배님들의 수능을 응원합니다!", images:[]}
      ]
    },
    "11/17":{
      title:"법정 의무 교육의 날",
      paragraphs:[
        {text:[], images:[]}
      ]
    },    // Add more special dates and messages here
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