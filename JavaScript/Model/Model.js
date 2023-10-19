"use strict";
//Start

//Model
const defaultView = "mainPage";
const app = document.getElementById("app");

const model = {
    app: {
        currentView: "createQuizView",
        language: "en",
        isDarkMode: false,
        modeID: 0,
    },
    input: {
        searchBar: "",
        loginView: {
            username: "",
            password: "",
        },
        createAccount: {
            //registerView
            username: "",
            password: "",
        },
        profileView: {
            //profileView
            bilde: "", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
            navn: "",
            land: "",
            changePassword: "",
        },
        createQuizView: {
            //quizView
            id: null, //<--- Generer en ny id for quizen
            creator: "", //getUsername();
            title: "", // quiz navn
            bilde: "", // main quizbilde
            theme: "", //Legg til theme
            rating: 0, //Hvor høyt den har blitt rangert
            popularitet: 0, // Hvor mange som har tatt quizen
            date: "", //getCurrentDate();
            questions: [
                //Liste med spørsmål
                {
                    questionID: 0, //id for hver spørsmål
                    theQuestion: "", //Teksten / hva spørsmålet er
                    bilde: "",
                    answers: [
                        //Maks 4 svar <-- Liste med svar innenfor spørsmålet.
                        {
                            answerID: 0,
                            answerText: "",
                            color: "", //<--- 4 farger eller rgb for de som ønsker egne farger
                        },
                        {
                            answerID: 1,
                            answerText: "",
                            color: "",
                        },
                        {
                            answerID: 2,
                            answerText: "",
                            color: "",
                        },
                        {
                            answerID: 3,
                            answerText: "",
                            color: "",
                        },
                    ],
                },
            ],
            results: [
                {
                    id: 0,
                    result: "",
                    resultbilde: "", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
                },
                {
                    id: 1,
                    result: "",
                    resultbilde: "", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
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
            {},
        ],
        //Lage en eksempelquiz i allQuizes
        allQuizes: [
            {
                id: 0,
                title: "Hvilken slange er du?",
                creator: "Team1C",
                bilde: "https://i.redd.it/arabian-sand-boa-v0-94vq475nbhj91.jpg?width=425&format=pjpg&auto=webp&s=7b2a3834082baa57d6d10af92315ac45836ed5cd", //quiz hoved bilde
                theme: "Dyr",
                date: "05.10.2023",
                questions: [
                    {
                        questionID: 0,
                        theQuestion: "Hva slags personlighet har du?",
                        bilde: "",
                        answers: [
                            {
                                answerID: 0,
                                answerText: "Frekk",
                                color: "0",
                            },
                            {
                                answerID: 1,
                                answerText: "Hyggelig",
                                color: "3",
                            },
                            {
                                answerID: 2,
                                answerText: "whateverlissom",
                                color: "1",
                            },
                            {
                                answerID: 3,
                                answerText: "Gledesspreder",
                                color: "2",
                            },
                        ],
                        questionID: 1,
                        theQuestion: "",
                        bilde: "",
                        answers: [
                            {
                                answerID: 0,
                                answerText: "",
                                color: "0",
                            },
                            {
                                answerID: 1,
                                answerText: "",
                                color: "1",
                            },
                            {
                                answerID: 2,
                                answerText: "",
                                color: "2",
                            },
                            {
                                answerID: 3,
                                answerText: "",
                                color: "3",
                            },
                        ],
                    },
                ],
                results: [
                    {
                        id: 0,
                        result: "",
                        resultbilde: "", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
                    },
                    {
                        id: 1,
                        result: "",
                        resultbilde: "", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
                    },
                    {
                        id: 2,
                        result: "Hvor slem kan du være? Du er en kobra!",
                        resultbilde:
                            "https://www.cdn.tv2.no/images?imageId=7193313&x=19.148936170213&y=4.7872340425532&cropw=74.666666666667&croph=52.127659574468&panox=19.148936170213&panoy=4.7872340425532&panow=74.666666666667&panoh=52.127659574468&width=1200&height=630",
                    },
                    {
                        id: 3,
                        result: "Du er en derpy Arabian Sand Boa.",
                        resultbilde:
                            "https://i.redd.it/arabian-sand-boa-v0-94vq475nbhj91.jpg?width=425&format=pjpg&auto=webp&s=7b2a3834082baa57d6d10af92315ac45836ed5cd",
                    },
                ],
                isPublic: true,
            },
            //Ny Quiz starter her
            {
                id: 1,
                title: "Hvilken wienerbakst er du?",
                creator: "Team1C",
                bilde: "https://www.bakehuset.no/globalassets/bilder/sortiment/smabakst/wienerbakst/10654_wienerpecan.png?width=263&height=190&quality=70", //quiz hoved bilde
                theme: "Mat",
                date: "05.10.2023",
                questions: [
                    {
                        questionID: 0,
                        theQuestion: "Hva slags personlighet har du?",
                        bilde: "",
                        answers: [
                            {
                                answerID: 0,
                                answerText: "Frekk",
                                color: "1",
                            },
                            {
                                answerID: 1,
                                answerText: "Hyggelig",
                                color: "0",
                            },
                            {
                                answerID: 2,
                                answerText: "Sjenert",
                                color: "3",
                            },
                            {
                                answerID: 3,
                                answerText: "Dramatisk",
                                color: "2",
                            },
                        ],
                        questionID: 1,
                        theQuestion: "Hvilken smak liker du best?",
                        bilde: "",
                        answers: [
                            {
                                answerID: 0,
                                answerText: "Krokan",
                                color: "0",
                            },
                            {
                                answerID: 1,
                                answerText: "Sjokolade",
                                color: "1",
                            },
                            {
                                answerID: 2,
                                answerText: "Pecan",
                                color: "2",
                            },
                            {
                                answerID: 3,
                                answerText: "Bringebær",
                                color: "3",
                            },
                        ],
                    },
                ],
                results: [
                    {
                        id: 0,
                        result: "Du er en Krokanwiener!",
                        resultbilde:
                            "https://bilder.ngdata.no/2943/meny/large.jpg", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
                    },
                    {
                        id: 1,
                        result: "Du er en Pain Au Chocolat",
                        resultbilde:
                            "https://bilder.ngdata.no/5662/meny/large.jpg", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
                    },
                    {
                        id: 2,
                        result: "Du er en Wienerpecan",
                        resultbilde:
                            "https://bilder.ngdata.no/2808/meny/large.jpg", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
                    },
                    {
                        id: 3,
                        result: "Du er en bringebærkube",
                        resultbilde:
                            "https://bilder.ngdata.no/2685/meny/large.jpg", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
                    },
                ],
                isPublic: true, // er delt
            },
            //Ny quiz starter her
            {},
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
                isDarkMode: false, //<-- Deres preferanse, lastes deretter inn i app isDarkMode
                username: "Per", //Brukernavnet
                password: "PerPollIsMyName123", //<-- Unhashed 10/10 passord
                name: "Per Poll", //Deres navn, om ikke vi gjør firstName LastName
                land: "",
                bilde: "",
                //selfMadeQuizes? En array over hva brukeren har lager eller så kan vi hente data ved hjelp av brukernavnet og legge det inn
                answeredQuizes: [
                    //Liste over hva slags quizer de har svart på - referanser til quizzer med ID
                    1,
                    69, 420,
                ],
            },
            {
                isDarkMode: false, //<-- Deres preferanse, lastes deretter inn i app isDarkMode
                username: "Per", //Brukernavnet
                password: "PerPollIsMyName123", //<-- Unhashed 10/10 passord
                name: "Per Poll", //Deres navn, om ikke vi gjør firstName LastName
                land: "",
                bilde: "",
                answeredQuizes: [1, 69, 420],
            },
        ],
    },
};

let currentView = model.app.currentView;

//End
