const reels = [
    {
        username: "codewithayush",
        likeCount: 14820,
        isLiked: true,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "designbysan",
        likeCount: 9820,
        isLiked: false,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "UI tip: Padding is personality. Give your elements some space.",
        video: "https://media.w3.org/2010/05/sintel/trailer.mp4",

        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
        username: "frontend.ninja",
        likeCount: 22150,
        isLiked: true,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption: "When flexbox finally aligns the way you wanted 😭🔥",
        video: "https://res.cloudinary.com/demo/video/upload/w_400,h_800,c_fill/snow_horses.mp4",

        userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        username: "travelwithriya",
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "My solo Bali trip changed everything 🌴",
        video: "https://res.cloudinary.com/demo/video/upload/w_400,h_800,c_fill/sea_turtle.mp4",

        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        username: "daily.dev.quotes",
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "Code. Sleep. Repeat. That’s the cycle.",
        video: "https://res.cloudinary.com/demo/video/upload/w_400,h_800,c_fill/dog.mp4",

        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    {
        username: "fitnessbymegha",
        likeCount: 27450,
        isLiked: false,
        commentCount: 540,
        shareCount: 87,
        isFollowed: true,
        caption: "No gym? No problem. Do this 12-min workout at home.",
        video: "https://media.w3.org/2010/05/bunny/trailer.mp4",

        userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },
    {
        username: "streetfoodlover",
        likeCount: 68000,
        isLiked: true,
        commentCount: 1304,
        shareCount: 412,
        isFollowed: false,
        caption: "You won’t believe this burger exists 🤯🍔",
        video: "https://media.w3.org/2010/05/video/movie_300.mp4",

        userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    {
        username: "musicbytara",
        likeCount: 14500,
        isLiked: false,
        commentCount: 267,
        shareCount: 73,
        isFollowed: true,
        caption: "Late night vibes // piano version 🎹✨",
        video: "https://res.cloudinary.com/demo/video/upload/w_400,h_800,c_fill/elephants.mp4",

        userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
    },
    {
        username: "techreviews101",
        likeCount: 23180,
        isLiked: true,
        commentCount: 481,
        shareCount: 120,
        isFollowed: false,
        caption: "The most underrated smartphone of 2024 📱",
        video: "https://media.w3.org/2010/05/bunny/movie.mp4",

        userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
    },
    {
        username: "learnanimations",
        likeCount: 18740,
        isLiked: false,
        commentCount: 350,
        shareCount: 92,
        isFollowed: true,
        caption: "GSAP can literally change your career. Start today.",
        video: "https://res.cloudinary.com/demo/video/upload/w_400,h_800,c_fill/rafting.mp4",

        userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
];

var allreels = document.querySelector('.allreels');
function reel() {
    var sum = '';
    reels.forEach(function (elem, idx) {
        sum = sum + `<div class="reel">
                        <video autoplay loop muted controls src="${elem.video}"></video>
                        <div class="top">
                            <i class="ri-instagram-line"></i>
                            <h1>Reels</h1>
                        </div>
                        <div class="bottom">
                            <div class="user">
                                <img src="${elem.userprofile}" alt="">
                                <h4>${elem.username}</h4>
                                <button id=${idx} class="follow">${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                            <h3>${elem.caption}</h6>
                        </div>
                        <div class="right">
                            <div id=${idx} class="like">
                                <h4 class="like_icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                                <h6>${elem.likeCount}</h6>
                            </div>
                             <div id=${idx} class="comment">
                                <h4 class="comment"><i class="ri-chat-3-line"></i></h4>
                                <h6>${elem.commentCount}</h6>
                            </div>
                             <div class="share">
                                <h4 class="share"><i class="ri-share-forward-line"></i></h4>
                                <h6>${elem.shareCount}</h6>
                            </div>
                             <div class="menu">
                                <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                            </div>
                        </div>
                    </div>`
    })
    allreels.innerHTML = sum;
};

reel()

allreels.addEventListener('click', function (dets) {
    if (dets.target.className == "like") {
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++
            reels[dets.target.id].isLiked = true
        }
        else {
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false
        }
        reel()
    }
    if (dets.target.className == "follow") {
        if (!reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = true
        }
        else {
            reels[dets.target.id].isFollowed = false
        }
        reel()
    }

})