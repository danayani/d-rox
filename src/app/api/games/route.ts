import {Game, OperatingSystem} from "@/app/types";

//todo: create get request
//first - return all V
//second - implement searchParams

export async function GET() {

    const res = allGames
    return Response.json(res)
}

const allGames: Game[] =
    [
        {
            "id": 1,
            "title": "App Survey Rewards",
            "img_url": "https://example.com/img1.jpg",
            "description": "Complete surveys and earn rewards.",
            "os": OperatingSystem.ios,
            "badges": ["popular", "high payout"],
            "payout": 250,
            "bonusPayout": 151
        },
        {
            "id": 2,
            "title": "Gaming Cash Challenge",
            "img_url": "https://example.com/img2.jpg",
            "description": "Play games and win cash prizes.",
            "os": OperatingSystem.android,
            "badges": ["fun", "high payout"],
            "payout": 300
        },
        {
            "id": 3,
            "title": "Fitness Steps Rewards",
            "img_url": "https://example.com/img3.jpg",
            "description": "Walk daily and earn points for cash.",
            "os": OperatingSystem.ios,
            "badges": ["health", "daily"],
            "payout": 201
        },
        {
            "id": 4,
            "title": "Watch Ads & Earn",
            "img_url": "https://example.com/img4.jpg",
            "description": "Watch video ads to earn real money.",
            "os": OperatingSystem.android,
            "badges": ["easy", "quick payout"],
            "payout": 151,
            "bonusPayout": 121
        },
        {
            "id": 5,
            "title": "Task Completion Bonus",
            "img_url": "https://example.com/img5.jpg",
            "description": "Complete small tasks and get paid.",
            "os": OperatingSystem.web,
            "badges": ["remote", "flexible"],
            "payout": 400
        },
        {
            "id": 6,
            "title": "Product Testing Rewards",
            "img_url": "https://example.com/img6.jpg",
            "description": "Test new products and get paid for feedback.",
            "os": OperatingSystem.ios,
            "badges": ["exclusive", "beta testing"],
            "payout": 480,
            "bonusPayout": 200
        },
        {
            "id": 7,
            "title": "Referral Cash Bonus",
            "img_url": "https://example.com/img7.jpg",
            "description": "Refer friends and earn commission.",
            "os": OperatingSystem.android,
            "badges": ["passive income", "social"],
            "payout": 351
        },
        {
            "id": 8,
            "title": "Daily Login Rewards",
            "img_url": "https://example.com/img8.jpg",
            "description": "Earn rewards just by logging in daily.",
            "os": OperatingSystem.web,
            "badges": ["consistency", "easy"],
            "payout": 120
        },
        {
            "id": 9,
            "title": "Trivia Challenge",
            "img_url": "https://example.com/img9.jpg",
            "description": "Answer trivia questions and earn rewards.",
            "os": OperatingSystem.ios,
            "badges": ["fun", "competitive"],
            "payout": 250
        },
        {
            "id": 10,
            "title": "Photo Upload Contest",
            "img_url": "https://example.com/img10.jpg",
            "description": "Upload creative photos and earn prizes.",
            "os": OperatingSystem.android,
            "badges": ["creative", "easy"],
            "payout": 301
        },
        {
            "id": 11,
            "title": "Mystery Shopper",
            "img_url": "https://example.com/img11.jpg",
            "description": "Visit stores and provide feedback for cash.",
            "os": OperatingSystem.web,
            "badges": ["adventure", "high payout"],
            "payout": 450,
            "bonusPayout": 201
        },
        {
            "id": 12,
            "title": "Music Listening Rewards",
            "img_url": "https://example.com/img12.jpg",
            "description": "Listen to music and get paid.",
            "os": OperatingSystem.ios,
            "badges": ["entertainment", "passive income"],
            "payout": 150
        },

        {
            "id": 13,
            "title": "Survey King",
            "img_url": "https://example.com/img13.jpg",
            "description": "Complete surveys and earn money.",
            "os": OperatingSystem.android,
            "badges": ["easy tasks", "high payout"],
            "payout": 300,
            "bonusPayout": 100
        },
        {
            "id": 14,
            "title": "Game Tester",
            "img_url": "https://example.com/img14.jpg",
            "description": "Play and review new games for cash.",
            "os": OperatingSystem.web,
            "badges": ["gaming", "fun"],
            "payout": 500,
            "bonusPayout": 200
        },
        {
            "id": 15,
            "title": "Ad Watcher",
            "img_url": "https://example.com/img15.jpg",
            "description": "Watch ads and get paid instantly.",
            "os": OperatingSystem.ios,
            "badges": ["passive income", "quick cash"],
            "payout": 100
        },
        {
            "id": 16,
            "title": "Photo Seller",
            "img_url": "https://example.com/img16.jpg",
            "description": "Sell your photos online for royalties.",
            "os": OperatingSystem.web,
            "badges": ["creative", "passive income"],
            "payout": 400,
            "bonusPayout": 150
        },
        {
            "id": 17,
            "title": "Freelance Writer",
            "img_url": "https://example.com/img17.jpg",
            "description": "Write articles and get paid per word.",
            "os": OperatingSystem.web,
            "badges": ["writing", "high payout"],
            "payout": 600,
            "bonusPayout": 250
        },
        {
            "id": 18,
            "title": "Fitness Tracker Rewards",
            "img_url": "https://example.com/img18.jpg",
            "description": "Earn rewards for staying active.",
            "os": OperatingSystem.ios,
            "badges": ["health", "passive income"],
            "payout": 200
        },
        {
            "id": 19,
            "title": "Online Tutor",
            "img_url": "https://example.com/img19.jpg",
            "description": "Teach students online for hourly pay.",
            "os": OperatingSystem.web,
            "badges": ["education", "high payout"],
            "payout": 700,
            "bonusPayout": 300
        },
        {
            "id": 20,
            "title": "Stock Photo Reviewer",
            "img_url": "https://example.com/img20.jpg",
            "description": "Review and approve stock photos.",
            "os": OperatingSystem.web,
            "badges": ["creative", "flexible"],
            "payout": 350
        },
        {
            "id": 21,
            "title": "Cashback Shopper",
            "img_url": "https://example.com/img21.jpg",
            "description": "Get paid for shopping through cashback apps.",
            "os": OperatingSystem.ios,
            "badges": ["shopping", "cashback"],
            "payout": 250
        },
        {
            "id": 22,
            "title": "Language Translator",
            "img_url": "https://example.com/img22.jpg",
            "description": "Translate documents and get paid.",
            "os": OperatingSystem.web,
            "badges": ["language", "high payout"],
            "payout": 550,
            "bonusPayout": 220
        },
        {
            "id": 23,
            "title": "Data Entry Worker",
            "img_url": "https://example.com/img23.jpg",
            "description": "Enter data and earn per task completed.",
            "os": OperatingSystem.web,
            "badges": ["easy tasks", "flexible"],
            "payout": 300
        },
        {
            "id": 24,
            "title": "Pet Walker",
            "img_url": "https://example.com/img24.jpg",
            "description": "Walk pets and earn money per hour.",
            "os": OperatingSystem.ios,
            "badges": ["outdoors", "fun"],
            "payout": 400
        },
        {
            "id": 25,
            "title": "Virtual Assistant",
            "img_url": "https://example.com/img25.jpg",
            "description": "Help businesses with virtual tasks.",
            "os": OperatingSystem.web,
            "badges": ["remote work", "high payout"],
            "payout": 650,
            "bonusPayout": 270
        },
        {
            "id": 26,
            "title": "Voiceover Artist",
            "img_url": "https://example.com/img26.jpg",
            "description": "Record voiceovers for various projects.",
            "os": OperatingSystem.web,
            "badges": ["creative", "high payout"],
            "payout": 600,
            "bonusPayout": 250
        },
        {
            "id": 27,
            "title": "Local Guide",
            "img_url": "https://example.com/img27.jpg",
            "description": "Show tourists around your city for cash.",
            "os": OperatingSystem.ios,
            "badges": ["adventure", "social"],
            "payout": 500
        },


    ]

