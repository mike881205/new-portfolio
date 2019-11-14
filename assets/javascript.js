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

// Dynamically Create Project Links

let portfolioRow = $("#projects")

function projects() {

    for (let i = 0; i < portfolio.length; i++) {

        let projectName = $("<p>").text(portfolio[i].name).addClass("align-middle").attr("id", "imageTxt")
        let projectLink = $("<a>").attr("href", portfolio[i].link)
        let projectImg = $("<img>").attr("src", portfolio[i].image)
            .attr("height", "250px")
            .attr("width", "250px")
        let portfolioCol = $("<div>").addClass("col-sm-6 shadow text-center d-flex justify-content-center projectDiv")

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