// Dummy data for the Bible Stories
const bibleStories = [
    { title: "The Creation", shortDesc: "Discover how God created the heavens and the earth.", fullContent: "In the beginning, God created the heavens and the earth. The earth was formless and empty...", imageUrl: "https://via.placeholder.com/350" },
    { title: "Noah's Ark", shortDesc: "Learn about Noah's faith and the great flood.", fullContent: "Noah, a righteous man, was chosen by God to build an ark to save his family and animals...", imageUrl: "https://via.placeholder.com/350" },
    { title: "David and Goliath", shortDesc: "The incredible story of David's triumph over Goliath.", fullContent: "David, a young shepherd, defeated Goliath with only a stone and his faith in God...", imageUrl: "https://via.placeholder.com/350" }
];

// Function to show the Home section
function showHome() {
    document.getElementById('home').classList.remove('d-none');
    document.getElementById('stories').classList.add('d-none');
    document.getElementById('story-detail').classList.add('d-none');
}

// Function to show the Stories section
function showStories() {
    document.getElementById('home').classList.add('d-none');
    document.getElementById('stories').classList.remove('d-none');
    document.getElementById('story-detail').classList.add('d-none');
    populateStoryCards();
}

// Function to populate the story cards in the Stories section
function populateStoryCards() {
    const storiesList = document.getElementById('stories-list');
    storiesList.innerHTML = '';
    bibleStories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.classList.add('col-md-4');
        storyCard.classList.add('story-card');
        storyCard.innerHTML = `
            <div class="card">
                <img src="${story.imageUrl}" class="card-img-top" alt="${story.title}">
                <div class="card-body">
                    <h5 class="card-title">${story.title}</h5>
                    <p class="card-text">${story.shortDesc}</p>
                    <button class="btn btn-primary" onclick="showStory('${story.title}')">Read More</button>
                </div>
            </div>
        `;
        storiesList.appendChild(storyCard);
    });
}

// Function to display the full story details
function showStory(storyTitle) {
    const story = bibleStories.find(story => story.title === storyTitle);
    document.getElementById('story-title').innerText = story.title;
    document.getElementById('story-content').innerText = story.fullContent;
    document.getElementById('story-image').src = story.imageUrl;
    
    // Hide other sections and show the story detail section
    document.getElementById('home').classList.add('d-none');
    document.getElementById('stories').classList.add('d-none');
    document.getElementById('story-detail').classList.remove('d-none');
}

// Search functionality for filtering stories
function searchStories() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            card.classList.remove('d-none');
        } else {
            card.classList.add('d-none');
        }
    });
}

// Function to display a random Daily Bible Verse
function getDailyVerse() {
    const verses = [
        "For God so loved the world, that he gave his only Son. - John 3:16",
        "The Lord is my shepherd; I shall not want. - Psalm 23:1",
        "I can do all things through Christ who strengthens me. - Philippians 4:13",
        "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5"
    ];
    const randomIndex = Math.floor(Math.random() * verses.length);
    document.getElementById('verse-text').innerText = verses[randomIndex];
}

// Call getDailyVerse when the page loads
window.onload = function() {
    getDailyVerse();
    showHome();  // Show the home section by default
};
