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
        english: "Hello, nice to meet you.",
        romaji: "Konnichiwa, douzo yoroshiku.",
        japanese: "こんにちわどうぞよろしく"
    },
    {
        english: "Excuse me, what time is it now?",
        romaji: "sumimasen, ima nanji desu ka?",
        japanese: "すみません今何時ですか？"
    },
    {
        english: "Is it tasty?",
        romaji: "Oishii desu ka?",
        japanese: "おいしいですか？"
    },    
    {
        english: "Is that sushi?",
        romaji: "Sore wa shushi desu ka?",
        japanese: "それわ寿司ですか？"
    },
    {
        english: "Where is the convenience store?",
        romaji: "Konbini wa doko desu ka?",
        japanese: "コンビニわどこですか？"
    },
    {
        english: "That is my umbrella." ,
        romaji: "Sore wa watashi no kasa desu.",
        japanese: "それわ私のkさsです"
    },
    {
        english: "Those are my shoes.",
        romaji: "Sore ra wa watashi no kutsu desu.",
        japanese: "それらわ私の靴です"
    },
    {
        english: "This coat is cute.”,
        romaji: "Kono kooto wa kawaii desu.",
        japanese: "この子音羽かわいいです"
    },
    {
        english: "Naomi is a cheerful person.”,
        romaji: "Naomi san wa akarui hito desu.",
        japanese: "直美さんわ明るい人です"
    },
    {
        english: "My husband is very funny.”,
        romaji: "otto wa totemo omoshiroi desu.",
        japanese: "夫わとても面白いです"
    },
    {
        english: "It's about two-thirty.”,
        romaji: "ni ji han goro desu.",
        japanese: "二時半ごろです"
    },
    {
        english: "That's not my ticket.”,
        romaji: "Sore wa watashi no kippu janai desu.",
        japanese: "それわ私の切符じゃないです"
    },
    {
        english: "Hana's passport is here.”,
        romaji: "Hana san no pasupooto wa koko desu.",
        japanese: "はなさんおパスポ音羽ココです"
    },
    {
        english: "Good morning, nice to meet you.”,
        romaji: "Ohayou gozaimasu, hajimemashite.",
        japanese: "おはようございます初めまして"
    },
    {
        english: "Hello, what's your name?”,
        romaji: "Konnichiwa, onamaewa?",
        japanese: "こんにちわお名前わ"
    },
    {
        english: "Where are you from?”,
        romaji: "Shusshin wa doko desu ka?",
        japanese: "出身話どこですか"
    },
    {
        english: "Naomi lives in this town.”,
        romaji: "Naomi san wa kono machi ni sundeimasu.",
        japanese: "直美さんわこのまちまちにすねいます"
    },
    {
        english: "New York is also a big city.”,
        romaji: "Nyuyooku mo ookii toshi desu.",
        japanese: "nゆよおくも大きい年です"
    },
    {
        english: "It's very lively here.”,
        romaji: "Koko wa totemo nigiyaka desu.",
        japanese: "ココわとてもい賑やかです"
    },
    {
        english: "Tokyo is not quiet.”,
        romaji: "Toukyou wa shizuka janai desu.",
        japanese: "東京和静かじゃないです"
    },
    {
        english: "My older sister is famous.”,
        romaji: "Ane wa yuumei desu",
        japanese: "姉わ有名です"
    },
    {
        english: "My younger brother is noisy.”,
        romaji: "Otouto wa urusai desu.",
        japanese: "弟わうるさいです"
    },
    {
        english: "My older brother is also a nurse.”,
        romaji: "Ani mo kangoshi desu.",
        japanese: "兄も看護師です"
    },
    {
        english: "My younger sister isn't six years old.”,
        romaji: "Imouto wa roku sai janai desu.",
        japanese: "妹話六歳じゃないです"
    },
    {
        english: "My daughter is also very smart.”,
        romaji: "Musume mo totemo atamagaii desu.",
        japanese: "娘もとても頭がいいです"
    },
    {
        english: "My son lives in Britain.”,
        romaji: "Musuko wa igirisu ni sundeimasu.",
        japanese: "息子和イギリスに住んでいます"
    },
    {
        english: "My mum is very busy.”,
        romaji: "Haha wa totemo isogashii desu.",
        japanese: "母わとても忙しいです"
    },
    {
        english: "My wife is an office worker.”,
        romaji: "Tsuma wa kaishain desu.",
        japanese: "妻若い社員です"
    },
    {
        english: "Ken's family is small.”,
        romaji: "Ken san no kazoku wa chiisai desu.",
        japanese: "研鑽お家族わ小さいです"
    },
    {
        english: "Brazil is not very clean.”,
        romaji: "Burajiru wa totemo kirei janai desu.",
        japanese: "ブラジルわとても綺麗じゃないです"
    },
    {
        english: "Welcome, Lilly.”,
        romaji: "Lilly san, youkoso.",
        japanese: "リリさんようこそ"
    },
    {
        english: "Ken, how's Kyoto?”,
        romaji: "Ken san kyouto wa dou desu ka?",
        japanese: "研鑽京都和銅ですか"
    },
    {
        english: "Is the airport there?”,
        romaji: "Kuukou wa soko desu ka?",
        japanese: "空港わそこですか"
    },
    {
        english: "It's not a subway.”,
        romaji: "Chikatetsu janai desu.",
        japanese: "それわ私の切符じゃないです"
    },
    {
        english: "These are my maps.”,
        romaji: "Kore ra wa watashi no chizu desu.",
        japanese: "これらわ私の地図です"
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
