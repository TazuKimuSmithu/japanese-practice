// Array of English sentences with their Japanese translations
const phrases = [
    {
        english: "That is my hat.",
        romaji: "Sore wa watashi no boushi desu.",
        japanese: "それは私の帽子です。"
    },
    {
        english: "Where is the train station?",
        romaji: "Eki wa doko desu ka?",
        japanese: "駅はどこですか？"
    },
    {
        english: "No, my dad isn't fashionable.",
        romaji: "Iie, watashi no chichi wa oshare janai desu.",
        japanese: "いいえ、私のお父さんはおしゃれじゃないです。"
    },
    {
        english: "Can you speak English?",
        romaji: "Anata wa eigo o hanasemasu ka?",
        japanese: "あなたは英語を話せますか？"
    },
    {
        english: "What time is it?",
        romaji: "Ima nanji desu ka?",
        japanese: "今何時ですか？"
    },
    // Add more phrases here...
];

// Function to get a random phrase
function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

// Handle 'Get Random Sentence' button click
document.getElementById('random-btn').addEventListener('click', () => {
    const randomPhrase = getRandomPhrase();

    // Display the English sentence
    document.getElementById('english-sentence').innerText = randomPhrase.english;

    // Hide the previous Japanese translation and show the 'Reveal' button
    document.getElementById('japanese-translation').style.display = 'none';
    document.getElementById('reveal-btn').style.display = 'inline';

    // Store the Japanese translation in the button's dataset for later use
    document.getElementById('reveal-btn').dataset.romaji = randomPhrase.romaji;
    document.getElementById('reveal-btn').dataset.japanese = randomPhrase.japanese;
});

// Handle 'Reveal Translation' button click
document.getElementById('reveal-btn').addEventListener('click', () => {
    const romaji = document.getElementById('reveal-btn').dataset.romaji;
    const japanese = document.getElementById('reveal-btn').dataset.japanese;

    // Display the Japanese translation (both Romaji and Hiragana/Kanji)
    document.getElementById('japanese-translation').innerHTML =
        `<p><strong>Romaji:</strong> ${romaji}</p>
         <p><strong>Japanese:</strong> ${japanese}</p>`;

    // Show the Japanese translation
    document.getElementById('japanese-translation').style.display = 'block';
});
