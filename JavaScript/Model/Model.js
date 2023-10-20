"use strict";
//Start

//Model
const app = document.getElementById("app");

const model = {
    app: {
        currentView: "mainView",
        language: "en",
        isDarkMode: false,
        modeID: 0,
        userID: null,
        username: "",
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
        allQuizes: [
            {
                id: 0,
                title: "Hvilken hund er du?",
                creator: "Ompalompa",
                image: "https://naturvet.com/cdn/shop/articles/researching_dog_breeds_blog_header.jpg?v=1668789923&width=1100",
                theme: "Dyr",
                date: "17/10-23",
                questions: [
                    {
                        questionID: 0,
                        theQuestion:
                            "Hva foretrekker du å gjøre på en fredagskveld?",
                        questionImage:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIzG1P3_iBVbrhomuJ6edU7KCSnk60sM9zOU3gmCb05XVi-KgA-EqnCsjFX9-LVgdNOA&usqp=CAU",
                        answers: [
                            {
                                answerID: 0,
                                answerText: " Gå ut med venner.",
                                color: "1",
                            },
                            {
                                answerID: 1,
                                answerText:
                                    "Besøke kunstgallerier eller museer",
                                color: "0",
                            },
                            {
                                answerID: 2,
                                answerText: "Delta i sportsaktiviteter.",
                                color: "3",
                            },
                            {
                                answerID: 3,
                                answerText:
                                    "Slappe av hjemme med en god bok eller film.",
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
                                answerID: 0,
                                answerText: "Vår",
                                color: "0",
                            },
                            {
                                answerID: 1,
                                answerText: "Sommer",
                                color: "1",
                            },
                            {
                                answerID: 2,
                                answerText: "Høst",
                                color: "2",
                            },
                            {
                                answerID: 3,
                                answerText: "Vinter",
                                color: "3",
                            },
                        ],
                    },
                    {
                        questionID: 2,
                        theQuestion:
                            "Hvordan reagerer du i sosiale situasjoner?",
                        questionImage:
                            "https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg",
                        answers: [
                            {
                                answerID: 0,
                                answerText:
                                    "Er energisk og liker å engasjere seg med mange mennesker.",
                                color: "3",
                            },
                            {
                                answerID: 1,
                                answerText:
                                    "Elsker oppmerksomhet og liker å være midtpunktet.",
                                color: "1",
                            },
                            {
                                answerID: 2,
                                answerText:
                                    "Er observant og lytter mer enn du snakker.",
                                color: "0",
                            },
                            {
                                answerID: 3,
                                answerText:
                                    "Foretrekker små, intime sammenkomster.",
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
                                answerID: 0,
                                answerText: "Aktive ferier med mye eventyr.",
                                color: "3",
                            },
                            {
                                answerID: 1,
                                answerText: "Strand og sol.",
                                color: "1",
                            },
                            {
                                answerID: 2,
                                answerText: "Kulturelle byer med historie.",
                                color: "0",
                            },
                            {
                                answerID: 3,
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
                                answerID: 0,
                                answerText:
                                    "Lager en detaljert plan og tar en ting av gangen.",
                                color: "0",
                            },
                            {
                                answerID: 1,
                                answerText:
                                    "Diskuterer utfordringer med nære venner",
                                color: "2",
                            },
                            {
                                answerID: 2,
                                answerText:
                                    "Trener eller driver med fysisk aktivitet.",
                                color: "3",
                            },
                            {
                                answerID: 3,
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
                                answerID: 0,
                                answerText:
                                    "Internasjonale retter og gourmetmat",
                                color: "0",
                            },
                            {
                                answerID: 1,
                                answerText: "Suppe eller gryterett",
                                color: "2",
                            },
                            {
                                answerID: 2,
                                answerText: "Energi- og proteinrike retter",
                                color: "3",
                            },
                            {
                                answerID: 3,
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
                                answerID: 0,
                                answerText:
                                    "Utendørs aktiviteter som løping eller sykling",
                                color: "3",
                            },
                            {
                                answerID: 1,
                                answerText: "Håndverk eller kunstprosjekter",
                                color: "2",
                            },
                            {
                                answerID: 2,
                                answerText:
                                    "Å utforske nye kulturelle opplevelser",
                                color: "0",
                            },
                            {
                                answerID: 3,
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
                                answerID: 0,
                                answerText: "Livlig og sjarmerende.",
                                color: "1",
                            },
                            {
                                answerID: 1,
                                answerText: "Rolig og reflekterende.",
                                color: "2",
                            },
                            {
                                answerID: 2,
                                answerText: "Energisk og eventyrlysten",
                                color: "3",
                            },
                            {
                                answerID: 3,
                                answerText: "Intellektuell og nysgjerrig",
                                color: "0",
                            },
                        ],
                    },
                ],
                results: [
                    {
                        id: 0,
                        result: "Du er en Labrador Retriever! Livlig og vennlig, du er alltid klar for moro og elsker å være i sentrum av oppmerksomheten.",
                        resultimage:
                            "https://hips.hearstapps.com/hmg-prod/images/dog-1598970334.png?crop=0.563xw:1.00xh;0.231xw,0&resize=980:*",
                    },
                    {
                        id: 1,
                        result: " Du er en Bernese Mountain Dog! Rolig og omsorgsfull, du verdsetter nære relasjoner og setter pris på fredelige stunder.",
                        resultimage:
                            "https://www.lifetimepetcover.co.uk/assets/uploads/alexandra_lau_jxEJY7SrJco_unsplash_min.jpg",
                    },
                    {
                        id: 2,
                        result: "Du er en Border Collie! Intelligent og energisk, du søker stadig etter nye utfordringer og elsker å være aktiv.",
                        resultbilde:
                            "https://www.aaretsdyreven.dk/wp-content/uploads/2020/12/border-collie-672634_1280.jpg",
                    },
                    {
                        id: 3,
                        result: "Du er en Shiba Inu! Stolt og uavhengig, du har en egen personlighet og setter pris på kulturelle opplevelser.",
                        resultbilde:
                            "https://media-be.chewy.com/wp-content/uploads/2021/05/27135654/Shiba-Inu_FeaturedImage-1024x615.jpg",
                    },
                ],
                isPublic: true, // er delt
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
                    1, 69, 420,
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
        ],
    },
};

let currentView = model.app.currentView;

//End


quizModel = [
    {
        id: 0,
        title: "",
        creator: "",
        bilde: "", //quiz hoved bilde
        theme: "",
        date: "",
        questions: [
            {
                questionID: 0,
                theQuestion: "",
                bilde: "",
                answers: [
                    {
                        answerID: 0,
                        answerText: "",
                        color: "",
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
            {
                id: 2,
                result: "",
                resultbilde: "",
            },
            {
                id: 3,
                result: "",
                resultbilde: "",
            },
        ],
        isPublic: true,
    },
];
