"use strict";
//Start
const model = {

    //This code has been Marius approved

    //App
    app: {
        //Her kommer faste ting som aldri endrer seg innad i appen, men som kan refereres til senere i dokumentet.
        darkMode:true,
        language:"no",
        currentPage: "MainPage",
        mainPage: false,
        defaultPage: "mainPage",
        vacationOrBusyMode: false,
    },

    //Input
    input: {
        calendarButton: '',
        taskManagerButton: '',
        achievementsButton: '',
        dayViewButton: '',
        weekViewButton: '',
        monthViewButton: '',
        // fjernes eventuelt
        
        editTask: {
            switchTask: '',
            changePriorityUp: false,
            changePriorityDown: false,
        },

        taskMarked: false,
        taskCompleted: true,
        energySlider: '',

        addNewTask: {
            name: '',
            taskInterval: '',
            priority: '',
            energyDrain: '',
        },
        //Her kommer inputfelt som ikke nødvendigvis endrer på seg, men som kan refereres til videre i dokumentet, og/eller controller.

    },

    // Data
    data: {
        //Motivational popups given to the user, to encourage task efficiency//
        motivations: {
            positiveMotiavion: '',
            angryMotivation: '',
        },
        
        //Achievements earned by user for perfomrming certain tasks, or within a certain timeframe//
        // achievements:{
        //     strukturert: false,
        //     støvPåHjernen: false,
        //     bedreFøreVar: false,
        //     lat: false,
        //     theFlash: false,
        //     renholderen: false,
        // },

        achievements: [ 
            {
                name: "Strukturert",
                description: "Fullfør alle oppgavene i løpet av uken!",
                isCompleted: false,
                isHidden: false,
                reward: ("img/strukturert.png"),
            },
            {
                name: "Støv på hjernen",
                description: "Støvsug 3 uker på rad (det er et virkelig støvfritt hus).",
                isCompleted: false,
                isHidden: false,
                reward: ("img/støvPåHjernen.png"),

            },
            {
                name: "Bedre føre var",
                description: "Gjør ferdig oppgavene for en fremtidig dag!",
                isCompleted: false,
                isHidden: false,
                reward: ("img/BedreFøreVar.png"),
            },
            {
                name: "Lat",
                description: "Gjør ingen oppgaver på 1 uke. Var det verdt det?",
                isCompleted: false,
                isHidden: true,
                reward: ("img/Lat.png"),
            },
            {
                name: "The flash",
                description: "Fullfør alle oppgavene for dagen før klokken 12.",
                isCompleted: false,
                isHidden: false,
                reward: ("img/rask.png"),
            },
            {
                name: "Renholderen",
                description: "Vask boligen 4 uker på rad.",
                isCompleted: false,
                isHidden: false,
                reward: ("img/vaskeKlut.png"),
            },
        ],
        //Specified days of the week, for assigning certain tasks to specific days of the week//
        days: [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        priority: [
            "low", "medium", "high"
        ],
        tasks: [
            {
                task: "Støvsuge huset",
                priority: "High",
                energyDrain: 25,
                day: 2,
                isCompleted: false,
            },
            {
                task: "Vann Planter",
                priority: 0,
                energyDrain: 40,
                day: 3,
                isCompleted: false,
            },
            {
                task: "Ta ut av oppvaskmaskinen",
                priority: 1,
                energyDrain: 40,
                day: 5,
                isCompleted: false,
            },
            {
                task: "Sette på klesvask",
                priority: 3,
                energyDrain: 40,
                day: 4,
                isCompleted: false,
            },
            {
                task: "Henge opp klesvask",
                priority: "High",
                energyDrain: 40,
                day: 3,
                isCompleted: false,
            },
            {
                task: "Vaske boligen",
                priority: "High",
                energyDrain: 40,
                day: 6,
                isCompleted: false,
            },
            {
                task: "Klippe plen",
                priority: "High",
                energyDrain: 40,
                day: 5,
                isCompleted: false,
            },
            {
                task: "Gå tur med hunden",
                priority: "High",
                energyDrain: 40,
                day: 1,
                isCompleted: false,
            },
            {
                task: "Tørke støv",
                priority: "High",
                energyDrain: 40,
                day: 4,
                isCompleted: false,
            },
            {
                task: "Ukeshandle",
                priority: "High",
                energyDrain: 40,
                day: 5,
                isCompleted: false,
            },
            {
                task: "Rydde garasjen",
                priority: "High",
                energyDrain: 40,
                day: 4,
                isCompleted: false,
            },
            {
                task: "Gå med søppel",
                priority: "High",
                energyDrain: 40,
                day: 3,
                isCompleted: false,
            },
            {
                task: "Skifte sengetøy",
                priority: "High",
                energyDrain: 40,
                day: 4,
                isCompleted: false,
            },
            {
                task: "Rydde kontoret",
                priority: "High",
                energyDrain: 40,
                day: 5,
                isCompleted: false,
            },
        ],
    },
};


//View
function mainMenuView() {

}

function mainMenuView() {

}

//Controller





















//End