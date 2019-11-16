let body = $(".body")
let aboutContent = $("#aboutMe")
let portfolioContent = $("#portfolio")
let contactContent = $("#contact")
let aboutBtn = $("#aboutBtn")
let portfolioBtn = $("#portfolioBtn")
let contactBtn = $("#contactBtn")
let portfolioRow = $("#projects")

let aboutHidden = false
let portfolioHidden = true
let contactHidden = true

const portfolio = [
    {
        name: "Word Guess",
        link: "https://mike881205.github.io/Word-Guess-Game/",
        image: "assets/images/word-guess.jpg"
    },
    {
        name: "Ring Collector",
        link: "https://mike881205.github.io/unit-4-game/",
        image: "assets/images/ring-collector.jpg"
    },
    {
        name: "TMNT Trivia",
        link: "https://mike881205.github.io/TriviaGame/",
        image: "assets/images/trivia.jpg"
    },
    {
        name: "Gif-Tastic",
        link: "https://mike881205.github.io/Giphy_Homework/",
        image: "assets/images/gif.gif"
    },
    {
        name: "Train Scheduler",
        link: "https://mike881205.github.io/Train-Scheduler/",
        image: "assets/images/train.png"
    },
    {
        name: "Space BnB",
        link: "https://onieronaut.github.io/Project1/",
        image: "assets/images/space-bnb.jpg"
    }
]

function pageLoad() {
    aboutContent.show()
    body.css("margin-top", "160px")
    portfolioContent.hide()
    contactContent.hide()
    aboutHidden = false
    portfolioHidden = true
    contactHidden = true
}

window.onload = pageLoad

$("document").ready(function () {

    aboutBtn.on("click", function () {
        if (aboutHidden = true) {
            aboutContent.fadeIn("slow");
            body.css("margin-top", "160px")
            aboutHidden = false
        }
        portfolioContent.hide()
        portfolioHidden = true
        contactContent.hide()
        contactHidden = true
    })

    portfolioBtn.on("click", function () {
        if (portfolioHidden = true) {
            portfolioContent.fadeIn("slow");
            body.css("margin-top", "100px")
            portfolioHidden = false
        }
        aboutContent.hide()
        aboutHidden = true
        contactContent.hide()
        contactHidden = true
    })

    contactBtn.on("click", function () {
        if (contactHidden = true) {
            contactContent.fadeIn("slow");
            body.css("margin-top", "160px")
            contactHidden = false
        }
        aboutContent.hide()
        aboutHidden = true
        portfolioContent.hide()
        portfolioHidden = true
    })

})



// Dynamically Create Project Links

function projects() {

    for (let i = 0; i < portfolio.length; i++) {

        let projectName = $("<p>").text(portfolio[i].name).addClass("align-middle").attr("id", "imageTxt")
        let projectLink = $("<a>").attr("href", portfolio[i].link)
        let projectImg = $("<img>").attr("src", portfolio[i].image)
            .attr("height", "250px")
            .attr("width", "250px")
            .addClass("shadow")
        let portfolioCol = $("<div>").addClass("col-sm-4 text-center d-flex justify-content-center projectDiv")

        projectLink.on("click", function () {
            event.preventDefault();
            event.stopPropagation();
            window.open(this.href, '_blank')
        })

        portfolioRow.append(portfolioCol)
        portfolioCol.append(projectLink)
        projectLink.append(projectImg)
        projectLink.append(projectName)


    }

}

projects();




