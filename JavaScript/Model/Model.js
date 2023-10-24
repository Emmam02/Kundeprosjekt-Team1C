"use strict";
//Start

//Model
const app = document.getElementById("app");

const model = {
  app: {
    currentView: "mainView",
    language: "en",
    isDarkMode: true,
    modeID: 0,
    userID: null,
    username: "",
    profilePic: "",
    currentQuizId: 1,
  },
  input: {
    createAccount: {
      //registerView
      username: "",
      password: "",
    },
    profileView: {
      //profileView
      image: "", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
      name: "",
      country: "",
      changePassword: "",
    },
    createQuizView: {
      id: null,
      title: "",
      creator: "",
      image: "",
      theme: "",
      date: "",
      questions: [
        {
          questionID: null,
          theQuestion: "",
          questionImage: "",
          answers: [
            {
              answerID: null,
              answerText: " ",
              color: "",
            },
            {
              answerID: null,
              answerText: "",
              color: "",
            },
            {
              answerID: null,
              answerText: "",
              color: "",
            },
            {
              answerID: null,
              answerText: "",
              color: "",
            },
          ],
        },
      ],
      results: [
        {
          id: null,
          result: "",
          resultimage: "", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
        },
      ],
      isPublic: false,
    },
  },
  data: {
    newestQuiz: [
      //getQuizByDate();
    ],

    mostPopularQuiz: [
      //getQuizByPopularity();
    ],
    highestRatedQuiz: [
      //getQuizByRating();
    ],

    currentQuiz: {
      //Nåværende quiz. Her blir quizen lagt inn som et objekt med alle sine verdier.
      //Etter å ha tatt quizen og er ferdig med å hente svaret/resultatene, skal resultatene lagres i users[].answeredQuizes[currentQuiz].result.
      //Til sist etter man er ferdig og har fått lagret dataen skal man bare fjerne alt inne i currentQuiz for å gjøre klar til neste.
    },

    allQuizes: [
      {
        id: 0,
        title: "Hvilken hund er du?",
        creator: "Ompalompa",
        image:
          "https://naturvet.com/cdn/shop/articles/researching_dog_breeds_blog_header.jpg?v=1668789923&width=1100",
        theme: "Dyr",
        date: "17/10-23",
        questions: [
          {
            questionID: 0,
            theQuestion: "Hva foretrekker du å gjøre på en fredagskveld?",
            questionImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIzG1P3_iBVbrhomuJ6edU7KCSnk60sM9zOU3gmCb05XVi-KgA-EqnCsjFX9-LVgdNOA&usqp=CAU",
            answers: [
              {
                answerText: "Gå ut med venner.",
                color: "1",
              },
              {
                answerText: "Besøke kunstgallerier eller museer",
                color: "0",
              },
              {
                answerText: "Delta i sportsaktiviteter.",
                color: "3",
              },
              {
                answerText: "Slappe av hjemme med en god bok eller film.",
                color: "2",
              },
            ],
          },
          {
            questionID: 1,
            theQuestion: "Hvilken årstid liker du best?",
            questionImage:
              "https://nutrisourcepetfoods.com/wp-content/uploads/2020/03/shutterstock_797588521-1000x600sfw.jpg",
            answers: [
              {
                answerText: "Vår",
                color: "0",
              },
              {
                answerText: "Sommer",
                color: "1",
              },
              {
                answerText: "Høst",
                color: "2",
              },
              {
                answerText: "Vinter",
                color: "3",
              },
            ],
          },
          {
            questionID: 2,
            theQuestion: "Hvordan reagerer du i sosiale situasjoner?",
            questionImage:
              "https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg",
            answers: [
              {
                answerText:
                  "Er energisk og liker å engasjere seg med mange mennesker.",
                color: "3",
              },
              {
                answerText: "Elsker oppmerksomhet og liker å være midtpunktet.",
                color: "1",
              },
              {
                answerText: "Er observant og lytter mer enn du snakker.",
                color: "0",
              },
              {
                answerText: "Foretrekker små, intime sammenkomster.",
                color: "2",
              },
            ],
          },
          {
            questionID: 3,
            theQuestion: "Hvilken type feriested foretrekker du?",
            questionImage:
              "https://www.eurotunnel.com/media/articles/dog%20friendly%20beaches%20in%20france/thumbnail.jpg?width=1200&height=630&mode=crop",
            answers: [
              {
                answerText: "Aktive ferier med mye eventyr.",
                color: "3",
              },
              {
                answerText: "Strand og sol.",
                color: "1",
              },
              {
                answerText: "Kulturelle byer med historie.",
                color: "0",
              },
              {
                answerText: "Hytte i fjellet.",
                color: "2",
              },
            ],
          },
          {
            questionID: 4,
            theQuestion: "Hvordan takler du stress?",
            questionImage:
              "https://www.earthbath.com/cdn/shop/articles/Do_you_know_the_most_common_symptoms_of_stress_in_dogs__Read_our_list_and_relax.jpg?v=1631294280",
            answers: [
              {
                answerText: "Lager en detaljert plan og tar en ting av gangen.",
                color: "0",
              },
              {
                answerText: "Diskuterer utfordringer med nære venner",
                color: "2",
              },
              {
                answerText: "Trener eller driver med fysisk aktivitet.",
                color: "3",
              },
              {
                answerText: "Tar pauser og slapper av.",
                color: "1",
              },
            ],
          },
          {
            questionID: 5,
            theQuestion: "Hva er din favorittmat?",
            questionImage:
              "https://fitlizzio.files.wordpress.com/2014/02/animals-eating-pizza-11.jpg",
            answers: [
              {
                answerText: "Internasjonale retter og gourmetmat",
                color: "0",
              },
              {
                answerText: "Suppe eller gryterett",
                color: "2",
              },
              {
                answerText: "Energi- og proteinrike retter",
                color: "3",
              },
              {
                answerText: "Pizza eller hamburger",
                color: "1",
              },
            ],
          },
          {
            questionID: 6,
            theQuestion: "Hvilken fritidsaktivitet liker du mest?",
            questionImage:
              "https://happydoginstitute.com/wp-content/uploads/2015/07/TheBenefitsofDogSports.jpg",
            answers: [
              {
                answerText: "Utendørs aktiviteter som løping eller sykling",
                color: "3",
              },
              {
                answerText: "Håndverk eller kunstprosjekter",
                color: "2",
              },
              {
                answerText: "Å utforske nye kulturelle opplevelser",
                color: "0",
              },
              {
                answerText: "Shopping og mote",
                color: "1",
              },
            ],
          },
          {
            questionID: 7,
            theQuestion: "Hvordan vil vennene dine beskrive deg?",
            questionImage:
              "https://di7dud5r8j0ls.cloudfront.net/fit-in/700x525/wordpress/wp-content/uploads/2016/04/Image-5-700x525.jpg",
            answers: [
              {
                answerText: "Livlig og sjarmerende.",
                color: "1",
              },
              {
                answerText: "Rolig og reflekterende.",
                color: "2",
              },
              {
                answerText: "Energisk og eventyrlysten",
                color: "3",
              },
              {
                answerText: "Intellektuell og nysgjerrig",
                color: "0",
              },
            ],
          },
        ],
        results: [
          {
            color: 0,
            result:
              "Du er en Labrador Retriever! Livlig og vennlig, du er alltid klar for moro og elsker å være i sentrum av oppmerksomheten.",
            resultimage:
              "https://hips.hearstapps.com/hmg-prod/images/dog-1598970334.png?crop=0.563xw:1.00xh;0.231xw,0&resize=980:*",
          },
          {
            color: 1,
            result:
              " Du er en Bernese Mountain Dog! Rolig og omsorgsfull, du verdsetter nære relasjoner og setter pris på fredelige stunder.",
            resultimage:
              "https://www.lifetimepetcover.co.uk/assets/uploads/alexandra_lau_jxEJY7SrJco_unsplash_min.jpg",
          },
          {
            color: 2,
            result:
              "Du er en Border Collie! Intelligent og energisk, du søker stadig etter nye utfordringer og elsker å være aktiv.",
            resultimage:
              "https://www.aaretsdyreven.dk/wp-content/uploads/2020/12/border-collie-672634_1280.jpg",
          },
          {
            color: 3,
            result:
              "Du er en Shiba Inu! Stolt og uavhengig, du har en egen personlighet og setter pris på kulturelle opplevelser.",
            resultimage:
              "https://tierpal.de/wp-content/uploads/2022/11/Depositphotos_298037642_XL-1024x683.jpg",
          },
        ],
        isPublic: true, // er delt
      },
      {
        id: 1,
        title: "Hvilken katt er du?",
        creator: "Kattemesteren",
        image:
          "https://www.wildliferescueleague.org/wp-content/uploads/2018/09/cat-3535404_1280.jpg",
        theme: "Dyr",
        date: "24/10/23",
        questions: [
          {
            questionID: 0,
            theQuestion: "Hva er din favorittaktivitet?",
            questionImage:
              "https://www.dailypaws.com/thmb/Q0voLOjrlNmD6_gopxpv2HZgLIo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-games-fetch-301741957-2000-55f0272d106b40d3852635754f06a2e9.jpg",
            answers: [
              {
                answerText: "Løpe rundt og leke",
                color: "1",
              },
              {
                answerText: "Lese bøker",
                color: "0",
              },
              {
                answerText: "Utforske nye steder",
                color: "3",
              },
              {
                answerText: "Slappe av i solen",
                color: "2",
              },
            ],
          },
          {
            questionID: 1,
            theQuestion: "Hva er din favorittmat?",
            questionImage:
              "https://i.pinimg.com/736x/50/6c/c4/506cc4496eadc29e134e750015567c19.jpg",
            answers: [
              {
                answerText: "Sushi",
                color: "0",
              },
              {
                answerText: "Fisk",
                color: "1",
              },
              {
                answerText: "Kylling",
                color: "2",
              },
              {
                answerText: "Biff",
                color: "3",
              },
            ],
          },
          {
            questionID: 2,
            theQuestion: "Hvordan reagerer du på nye mennesker?",
            questionImage:
              "https://cdn.shopify.com/s/files/1/0344/6469/files/annoyed-cat_1024x1024.jpg?v=1544728176",
            answers: [
              {
                answerText: "Mistenksom",
                color: "3",
              },
              {
                answerText: "Litt sjenert til å begynne med",
                color: "1",
              },
              {
                answerText: "Liker å bli kjent med alle",
                color: "0",
              },
              {
                answerText: "Bryr meg ikke så mye om de",
                color: "2",
              },
            ],
          },
          {
            questionID: 3,
            theQuestion: "Hva er din favorittfarge?",
            questionImage: "https://i.imgur.com/OCyjHNF.jpg",
            answers: [
              {
                answerText: "Lilla",
                color: "3",
              },
              {
                answerText: "Grønn",
                color: "1",
              },
              {
                answerText: "Blå",
                color: "0",
              },
              {
                answerText: "Rød",
                color: "2",
              },
            ],
          },
          {
            questionID: 4,
            theQuestion: "Hvordan takler du stress?",
            questionImage:
              "https://media-be.chewy.com/wp-content/uploads/sleeping-kitten-TS_160626325.jpg",
            answers: [
              {
                answerText: "Lager en plan og holder seg til den",
                color: "0",
              },
              {
                answerText: "Trener eller går en tur",
                color: "2",
              },
              {
                answerText: "Gjør ingenting, venter til stresset går bort",
                color: "3",
              },
              {
                answerText: "Leter etter trøst hos venner",
                color: "1",
              },
            ],
          },
          {
            questionID: 5,
            theQuestion: "Hva beskriver din ideelle ferie?",
            questionImage:
              "https://mymodernmet.com/wp/wp-content/uploads/2020/02/gary-the-hiking-cat-20.jpg",
            answers: [
              {
                answerText: "Utforske kulturer og historiske steder",
                color: "0",
              },
              {
                answerText: "Fjelltur og frisk luft",
                color: "2",
              },
              {
                answerText: "Eventyrreise med nye opplevelser",
                color: "3",
              },
              {
                answerText: "Sol og strand",
                color: "1",
              },
            ],
          },
          {
            questionID: 6,
            theQuestion: "Hva er din morgenrutine?",
            questionImage:
              "https://cdn.shopify.com/s/files/1/0607/7615/3281/files/AdobeStock_252196440_480x480.jpg?v=1694775008",
            answers: [
              {
                answerText: "Gjør litt trening eller yoga",
                color: "3",
              },
              {
                answerText: "Rolig morgen med frokost og en bok",
                color: "2",
              },
              {
                answerText: "Står tidlig opp og har en produktiv morgen",
                color: "0",
              },
              {
                answerText: "Snoozer alarmen flere ganger",
                color: "1",
              },
            ],
          },
          {
            questionID: 7,
            theQuestion: "Hvordan reagerer du på en regnfull dag?",
            questionImage:
              "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2018/06/cat-in-rain.jpg?fit=960%2C633&ssl=1",
            answers: [
              {
                answerText: "Leker innendørs",
                color: "1",
              },
              {
                answerText: "Ser ut av vinduet og dagdrømmer",
                color: "2",
              },
              {
                answerText: "Går ut og leker i regnet",
                color: "3",
              },
              {
                answerText: "Liker å krype opp med en god bok",
                color: "0",
              },
            ],
          },
        ],
        results: [
          {
            color: 0,
            result:
              "Du er som en Siamese-katt! Energetisk og snakkesalig, elsker du å være midtpunktet og utforske nye steder.",
            resultimage:
              "https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/05/Siamese-cat-beautiful.jpg",
          },
          {
            color: 1,
            result:
              "Du er som en Perserkatt! Rolig og avslappet, du nyter å slappe av og bli bortskjemt.",
            resultimage:
              "https://www.anicura.no/cdn-cgi/image/f=auto,q=60,fit=cover,w=1536,h=1152,g=auto,sharpen=1/AdaptiveImages/powerinit/15163/Only%20to%20be%20used%20for%20the%20article%20about%20the%20breed.jpg?stamp=e93ba3c678726dbd3f8be787905b179f4401b036",
          },
          {
            color: 2,
            result:
              "Du er som en Maine Coon-katt! Leken og eventyrlysten, du elsker å utforske og være aktiv.",
            resultimage:
              "https://www.santevet.com/upload/admin/images/article/PMO/maine_coon.jpg",
          },
          {
            color: 3,
            result:
              "Du er som en Sibir-katt! Uavhengig og nysgjerrig, du trives med å være din egen katt og utforske verden på egenhånd.",
            resultimage:
              "https://www.zooplus.no/magasin/wp-content/uploads/2020/10/sibirkatten-1024x683.jpg",
          },
        ],
        isPublic: true,
      },
    ],
    allCategories: ["Mat", "Dyr", "Sport", "Biler", "Spill", "Annet"],
    colors: ["", "", "", "", "", "", "", "", ""],
    themeMode: [
      {
        name: "Light",
        textColor: "#202020",
        backgroundColor: "#ffffff",
      },
      {
        name: "Dark",
        textColor: "#ffffff",
        backgroundColor: "#181818",
      },
    ],
    users: [
      {
        id: 0,
        isDarkMode: false, //<-- Deres preferanse, lastes deretter inn i app isDarkMode
        username: "Per", //Brukernavnet
        password: "PerPollIsMyName123", //<-- Unhashed 10/10 passord
        name: "Per Poll", //Deres navn, om ikke vi gjør firstName LastName
        country: "",
        image: "",
        //selfMadeQuizes? En array over hva brukeren har lager eller så kan vi hente data ved hjelp av brukernavnet og legge det inn
        answeredQuizes: [
          //Liste over hva slags quizer de har svart på - referanser til quizzer med ID
          1,
          69, 420,
        ],
      },
      {
        id: 1,
        isDarkMode: false, //<-- Deres preferanse, lastes deretter inn i app isDarkMode
        username: "Per", //Brukernavnet
        password: "PerPollIsMyName123", //<-- Unhashed 10/10 passord
        name: "Per Poll", //Deres navn, om ikke vi gjør firstName LastName
        country: "", //<-- skiftet språk her
        image: "", //<-- skiftet språk her
        answeredQuizes: [1, 69, 420],
      },
      {
        id: 1,
        isDarkMode: false, //<-- Deres preferanse, lastes deretter inn i app isDarkMode
        username: "Per", //Brukernavnet
        password: "PerPollIsMyName123", //<-- Unhashed 10/10 passord
        name: "Per Poll", //Deres navn, om ikke vi gjør firstName LastName
        country: "", //<-- skiftet språk her
        image: "", //<-- skiftet språk her
        answeredQuizes: [
          {
            id: 1,
            quizTitle: "",
            description: "",
            result: "2",
          },
          {
            id: 69,
            quizTitle: "",
            description: "",
            result: "3",
          },
          {
            id: ("94ad45bd-dcff-4564-9b95-2ccaa3447fd0", 420),
            quizTitle: "",
            description: "",
            result: "1",
          },
        ],
      },
    ],
  },
};

let currentView = model.app.currentView;

//End
