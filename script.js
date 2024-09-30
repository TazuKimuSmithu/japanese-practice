// Speaking Practice phrases
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
        romaji: "Iie, watashi no otousan wa oshare janai desu.",
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
];

// Japanese words with their English translations
const words = [
    {
        japanese: "車",
        romaji: "Kuruma",
        english: "Car"
    },
    {
        japanese: "猫",
        romaji: "Neko",
        english: "Cat"
    },
    {
        japanese: "本",
        romaji: "Hon",
        english: "Book"
    },
    {
        japanese: "学校",
        romaji: "Gakkou",
        english: "School"
    },
    {
        japanese: "水",
        romaji: "Mizu",
        english: "Water"
    },
];

// Switching between sections
document.getElementById('speaking-practice-btn').addEventListener('click', () => {
    document.getElementById('speaking-practice-section').style.display = 'block';
    document.getElementById('japanese-words-section').style.display = 'none';
});

document.getElementById('japanese-words-btn').addEventListener('click', () => {
    document.getElementById('speaking-practice-section').style.display = 'none';
    document.getElementById('japanese-words-section').style.display = 'block';
});

// Speaking Practice: Get a random English sentence
document.getElementById('random-btn').addEventListener('click', () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    document.getElementById('english-sentence').innerText = randomPhrase.english;
    document.getElementById('japanese-translation').style.display = 'none';
    document.getElementById('reveal-btn').style.display = 'inline';
    
    document.getElementById('reveal-btn').dataset.romaji = randomPhrase.romaji;
    document.getElementById('reveal-btn').dataset.japanese = randomPhrase.japanese;
});

// Speaking Practice: Reveal the Japanese translation
document.getElementById('reveal-btn').addEventListener('click', () => {
    const romaji = document.getElementById('reveal-btn').dataset.romaji;
    const japanese = document.getElementById('reveal-btn').dataset.japanese;
    
    document.getElementById('japanese-translation').innerHTML = 
        `<p><strong>Romaji:</strong> ${romaji}</p>
         <p><strong>Japanese:</strong> ${japanese}</p>`;
    document.getElementById('japanese-translation').style.display = 'block';
});

// Japanese Words: Get a random Japanese word
document.getElementById('random-word-btn').addEventListener('click', () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    document.getElementById('japanese-word').innerText = randomWord.japanese;
    document.getElementById('english-meaning').style.display = 'none';
    document.getElementById('reveal-word-btn').style.display = 'inline';
    
    document.getElementById('reveal-word-btn').dataset.romaji = randomWord.romaji;
    document.getElementById('reveal-word-btn').dataset.english = randomWord.english;
});

// Japanese Words: Reveal the English meaning
document.getElementById('reveal-word-btn').addEventListener('click', () => {
    const romaji = document.getElementById('reveal-word-btn').dataset.romaji;
    const english = document.getElementById('reveal-word-btn').dataset.english;
    
    document.getElementById('english-meaning').innerHTML = 
        `<p><strong>Romaji:</strong> ${romaji}</p>
         <p><strong>English:</strong> ${english}</p>`;
    document.getElementById('english-meaning').style.display = 'block';
});
