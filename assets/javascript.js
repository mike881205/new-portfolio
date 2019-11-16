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
        repo: "https://github.com/mike881205/Word-Guess-Game",
        image: "assets/images/word-guess.jpg"
    },
    {
        name: "Ring Collector",
        link: "https://mike881205.github.io/ring-collector/",
        repo: "https://github.com/mike881205/ring-collector",
        image: "assets/images/ring-collector.jpg"
    },
    {
        name: "TMNT Trivia",
        link: "https://mike881205.github.io/TriviaGame/",
        repo: "https://github.com/mike881205/TriviaGame",
        image: "assets/images/trivia.jpg"
    },
    {
        name: "Gif-Tastic",
        link: "https://mike881205.github.io/Giphy_Homework/",
        repo: "https://github.com/mike881205/Giphy_Homework",
        image: "assets/images/gif.gif"
    },
    {
        name: "Train Scheduler",
        link: "https://mike881205.github.io/Train-Scheduler/",
        repo: "https://github.com/mike881205/Train-Scheduler",
        image: "assets/images/train.png"
    },
    {
        name: "Space BnB",
        link: "https://onieronaut.github.io/Project1/",
        repo: "https://github.com/onieronaut/Project1",
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

        let portfolioCol = $("<div>").addClass("col-sm-4 text-center d-flex justify-content-center projectDiv")

        let projectName = $("<p>").text(portfolio[i].name).addClass("align-middle").attr("id", "imageTxt")
        .css("border-radius", "0px 0px 100px 100px")

        let projectLink = $("<a>").attr("href", portfolio[i].link)

        let projectImg = $("<img>").attr("src", portfolio[i].image)
            .attr("height", "250px")
            .attr("width", "250px")
            .css("border-radius", "20px")
            

        let repoLink = $("<a>").attr("href", portfolio[i].repo)
        let repoBox = $("<div>")
        let repoText = $("<p>").text("GitHub Repo").addClass("align-middle").attr("id", "repoTxt")
        // .css("border-radius", "0px 0px 100px 100px")

        portfolioRow.append(portfolioCol)

        portfolioCol.append(projectLink)
        projectLink.append(projectImg)
        projectLink.append(projectName)

        portfolioCol.append(repoLink)
        repoLink.append(repoBox)
        repoLink.append(repoText)

        projectLink.on("click", function () {
            event.preventDefault();
            event.stopPropagation();
            window.open(this.href, '_blank')
        })

        repoLink.on("click", function () {
            event.preventDefault();
            event.stopPropagation();
            window.open(this.href, '_blank')
        })


    }

}

projects();




