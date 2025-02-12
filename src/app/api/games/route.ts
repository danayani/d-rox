import {Game, OperatingSystem} from "@/app/types";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
    const itemsInPage = 10
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get('page')

    /*
    games range by page :
    page 0 = 1 - 10
    page 1 = 11 - 20
    page 2 = 21-30
    and so on
    */

    if (!page || page == "0") {
        const res = allGames.slice(0, itemsInPage)
        return Response.json(res)
    }

    const pageNumber = Number(page)

    //end case for NaN like - 'ngk' / '5f+6'
    if (Object.is(NaN, pageNumber)) {
        console.warn("page is NaN", Object.is(NaN, pageNumber))
        return Response.json([])
    }


    const resultIndex = pageNumber * itemsInPage;
    const res = allGames.slice(resultIndex, resultIndex + itemsInPage)
    return Response.json(res)
}

const allGames: Game[] =
    [
        {
            "id": 1,
            "title": "App Survey Rewards - App Survey Rewards - App Survey Rewards",
            "img_url": "img1.svg",
            "description": "Complete surveys and earn rewards. rewards.",
            "os": OperatingSystem.ios,
            "badges": ["popular", "high payout"],
            "payout": 250,
            "bonusPayout": 151
        },
        {
            "id": 2,
            "title": "Gaming Cash Challenge",
            "img_url": "img2.svg",
            "description": "Play games and win cash prizes.",
            "os": OperatingSystem.android,
            "badges": ["fun", "high payout"],
            "payout": 300
        },
        {
            "id": 3,
            "title": "Fitness Steps Rewards",
            "img_url": "img3.svg",
            "description": "Walk daily and earn points for cash.",
            "os": OperatingSystem.ios,
            "badges": ["health", "daily"],
            "payout": 201
        },
        {
            "id": 4,
            "title": "Watch Ads & Earn",
            "img_url": "img4.svg",
            "description": "Watch video ads to earn real money.",
            "os": OperatingSystem.android,
            "badges": ["easy", "quick payout"],
            "payout": 151,
            "bonusPayout": 121
        },
        {
            "id": 5,
            "title": "Task Completion Bonus",
            "img_url": "img5.svg",
            "description": "Complete small tasks and get paid.",
            "os": OperatingSystem.web,
            "badges": ["remote", "flexible"],
            "payout": 400
        },
        {
            "id": 6,
            "title": "Product Testing Rewards",
            "img_url": "img1.svg",
            "description": "Test new products and get paid for feedback.",
            "os": OperatingSystem.ios,
            "badges": ["exclusive", "beta testing"],
            "payout": 480,
            "bonusPayout": 200
        },
        {
            "id": 7,
            "title": "Referral Cash Bonus",
            "img_url": "img2.svg",
            "description": "Refer friends and earn commission.",
            "os": OperatingSystem.android,
            "badges": ["passive income", "social"],
            "payout": 351
        },
        {
            "id": 8,
            "title": "Daily Login Rewards",
            "img_url": "img3.svg",
            "description": "Earn rewards just by logging in daily.",
            "os": OperatingSystem.web,
            "badges": ["consistency", "easy"],
            "payout": 120
        },
        {
            "id": 9,
            "title": "Trivia Challenge",
            "img_url": "img4.svg",
            "description": "Answer trivia questions and earn rewards.",
            "os": OperatingSystem.ios,
            "badges": ["fun", "competitive"],
            "payout": 250
        },
        {
            "id": 10,
            "title": "Photo Upload Contest",
            "img_url": "img5.svg",
            "description": "Upload creative photos and earn prizes.",
            "os": OperatingSystem.android,
            "badges": ["creative", "easy"],
            "payout": 301
        },
        {
            "id": 11,
            "title": "Mystery Shopper",
            "img_url": "img1.svg",
            "description": "Visit stores and provide feedback for cash.",
            "os": OperatingSystem.web,
            "badges": ["adventure", "high payout"],
            "payout": 450,
            "bonusPayout": 201
        },
        {
            "id": 12,
            "title": "Music Listening Rewards",
            "img_url": "img2.svg",
            "description": "Listen to music and get paid.",
            "os": OperatingSystem.ios,
            "badges": ["entertainment", "passive income"],
            "payout": 150
        },

        {
            "id": 13,
            "title": "Survey King",
            "img_url": "img3.svg",
            "description": "Complete surveys and earn money.",
            "os": OperatingSystem.android,
            "badges": ["easy tasks", "high payout"],
            "payout": 300,
            "bonusPayout": 100
        },
        {
            "id": 14,
            "title": "Game Tester",
            "img_url": "img5.svg",
            "description": "Play and review new games for cash.",
            "os": OperatingSystem.web,
            "badges": ["gaming", "fun"],
            "payout": 500,
            "bonusPayout": 200
        },
        {
            "id": 15,
            "title": "Ad Watcher",
            "img_url": "img1.svg",
            "description": "Watch ads and get paid instantly.",
            "os": OperatingSystem.ios,
            "badges": ["passive income", "quick cash"],
            "payout": 100
        },
        {
            "id": 16,
            "title": "Photo Seller",
            "img_url": "img2.svg",
            "description": "Sell your photos online for royalties.",
            "os": OperatingSystem.web,
            "badges": ["creative", "passive income"],
            "payout": 400,
            "bonusPayout": 150
        },
        {
            "id": 17,
            "title": "Freelance Writer",
            "img_url": "img3.svg",
            "description": "Write articles and get paid per word.",
            "os": OperatingSystem.web,
            "badges": ["writing", "high payout"],
            "payout": 600,
            "bonusPayout": 250
        },
        {
            "id": 18,
            "title": "Fitness Tracker Rewards",
            "img_url": "img4.svg",
            "description": "Earn rewards for staying active.",
            "os": OperatingSystem.ios,
            "badges": ["health", "passive income"],
            "payout": 200
        },
        {
            "id": 19,
            "title": "Online Tutor",
            "img_url": "img5.svg",
            "description": "Teach students online for hourly pay.",
            "os": OperatingSystem.web,
            "badges": ["education", "high payout"],
            "payout": 700,
            "bonusPayout": 300
        },
        {
            "id": 20,
            "title": "Stock Photo Reviewer",
            "img_url": "img1.svg",
            "description": "Review and approve stock photos.",
            "os": OperatingSystem.web,
            "badges": ["creative", "flexible"],
            "payout": 350
        },
        {
            "id": 21,
            "title": "Cashback Shopper",
            "img_url": "img2.svg",
            "description": "Get paid for shopping through cashback apps.",
            "os": OperatingSystem.ios,
            "badges": ["shopping", "cashback"],
            "payout": 250
        },
        {
            "id": 22,
            "title": "Language Translator",
            "img_url": "img3.svg",
            "description": "Translate documents and get paid.",
            "os": OperatingSystem.web,
            "badges": ["language", "high payout"],
            "payout": 550,
            "bonusPayout": 220
        },
        {
            "id": 23,
            "title": "Data Entry Worker",
            "img_url": "img4.svg",
            "description": "Enter data and earn per task completed.",
            "os": OperatingSystem.web,
            "badges": ["easy tasks", "flexible"],
            "payout": 300
        },
        {
            "id": 24,
            "title": "Pet Walker",
            "img_url": "img5.svg",
            "description": "Walk pets and earn money per hour.",
            "os": OperatingSystem.ios,
            "badges": ["outdoors", "fun"],
            "payout": 400
        },
        {
            "id": 25,
            "title": "Virtual Assistant",
            "img_url": "img1.svg",
            "description": "Help businesses with virtual tasks.",
            "os": OperatingSystem.web,
            "badges": ["remote work", "high payout"],
            "payout": 650,
            "bonusPayout": 270
        },
        {
            "id": 26,
            "title": "Voiceover Artist",
            "img_url": "img2.svg",
            "description": "Record voiceovers for various projects.",
            "os": OperatingSystem.web,
            "badges": ["creative", "high payout"],
            "payout": 600,
            "bonusPayout": 250
        },
        {
            "id": 27,
            "title": "Local Guide",
            "img_url": "img3.svg",
            "description": "Show tourists around your city for cash.",
            "os": OperatingSystem.ios,
            "badges": ["adventure", "social"],
            "payout": 500
        },


    ]

