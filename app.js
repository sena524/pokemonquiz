// ポケモンデータ（イッシュ地方 No.494-649から抜粋）
const POKEMON_DATA = [
    { id: 494, name: "ビクティニ", type1: "エスパー", type2: "ほのお", genus: "しょうりポケモン", ability: "しょうりのほし", legendary: true },
    { id: 495, name: "ツタージャ", type1: "くさ", type2: null, genus: "くさへびポケモン", ability: "しんりょく", evolvesTo: 496, starter: true },
    { id: 496, name: "ジャノビー", type1: "くさ", type2: null, genus: "くさへびポケモン", ability: "しんりょく", evolvesTo: 497 },
    { id: 497, name: "ジャローダ", type1: "くさ", type2: null, genus: "ロイヤルポケモン", ability: "しんりょく" },
    { id: 498, name: "ポカブ", type1: "ほのお", type2: null, genus: "ひぶたポケモン", ability: "もうか", evolvesTo: 499, starter: true },
    { id: 499, name: "チャオブー", type1: "ほのお", type2: "かくとう", genus: "ひぶたポケモン", ability: "もうか", evolvesTo: 500 },
    { id: 500, name: "エンブオー", type1: "ほのお", type2: "かくとう", genus: "おおひぶたポケモン", ability: "もうか" },
    { id: 501, name: "ミジュマル", type1: "みず", type2: null, genus: "ラッコポケモン", ability: "げきりゅう", evolvesTo: 502, starter: true },
    { id: 502, name: "フタチマル", type1: "みず", type2: null, genus: "しゅぎょうポケモン", ability: "げきりゅう", evolvesTo: 503 },
    { id: 503, name: "ダイケンキ", type1: "みず", type2: null, genus: "かいじゅうポケモン", ability: "げきりゅう" },
    { id: 504, name: "ミネズミ", type1: "ノーマル", type2: null, genus: "みはりポケモン", ability: "にげあし", evolvesTo: 505 },
    { id: 505, name: "ミルホッグ", type1: "ノーマル", type2: null, genus: "けいかいポケモン", ability: "はっこう" },
    { id: 506, name: "ヨーテリー", type1: "ノーマル", type2: null, genus: "こいぬポケモン", ability: "やるき", evolvesTo: 507 },
    { id: 507, name: "ハーデリア", type1: "ノーマル", type2: null, genus: "ちゅうけんポケモン", ability: "いかく", evolvesTo: 508 },
    { id: 508, name: "ムーランド", type1: "ノーマル", type2: null, genus: "かんだいポケモン", ability: "いかく" },
    { id: 509, name: "チョロネコ", type1: "あく", type2: null, genus: "こねこポケモン", ability: "じゅうなん", evolvesTo: 510 },
    { id: 510, name: "レパルダス", type1: "あく", type2: null, genus: "れいこくポケモン", ability: "じゅうなん" },
    { id: 511, name: "ヤナップ", type1: "くさ", type2: null, genus: "くさざるポケモン", ability: "くいしんぼう", evolvesTo: 512 },
    { id: 512, name: "ヤナッキー", type1: "くさ", type2: null, genus: "とげざるポケモン", ability: "くいしんぼう" },
    { id: 513, name: "バオップ", type1: "ほのお", type2: null, genus: "ひざるポケモン", ability: "くいしんぼう", evolvesTo: 514 },
    { id: 514, name: "バオッキー", type1: "ほのお", type2: null, genus: "ひだるまポケモン", ability: "くいしんぼう" },
    { id: 515, name: "ヒヤップ", type1: "みず", type2: null, genus: "みずかけポケモン", ability: "くいしんぼう", evolvesTo: 516 },
    { id: 516, name: "ヒヤッキー", type1: "みず", type2: null, genus: "ほうすいポケモン", ability: "くいしんぼう" },
    { id: 519, name: "マメパト", type1: "ノーマル", type2: "ひこう", genus: "ことりポケモン", ability: "はとむね", evolvesTo: 520 },
    { id: 520, name: "ハトーボー", type1: "ノーマル", type2: "ひこう", genus: "やせいばとポケモン", ability: "はとむね", evolvesTo: 521 },
    { id: 521, name: "ケンホロウ", type1: "ノーマル", type2: "ひこう", genus: "プライドポケモン", ability: "はとむね" },
    { id: 522, name: "シママ", type1: "でんき", type2: null, genus: "たいでんポケモン", ability: "ひらいしん", evolvesTo: 523 },
    { id: 523, name: "ゼブライカ", type1: "でんき", type2: null, genus: "らいでんポケモン", ability: "ひらいしん" },
    { id: 531, name: "タブンネ", type1: "ノーマル", type2: null, genus: "ヒアリングポケモン", ability: "いやしのこころ" },
    { id: 554, name: "ダルマッカ", type1: "ほのお", type2: null, genus: "だるまポケモン", ability: "はりきり", evolvesTo: 555 },
    { id: 555, name: "ヒヒダルマ", type1: "ほのお", type2: null, genus: "えんじょうポケモン", ability: "ちからずく" },
    { id: 559, name: "ズルッグ", type1: "あく", type2: "かくとう", genus: "ずるがしこポケモン", ability: "だっぴ", evolvesTo: 560 },
    { id: 560, name: "ズルズキン", type1: "あく", type2: "かくとう", genus: "あばれんぼうポケモン", ability: "だっぴ" },
    { id: 587, name: "エモンガ", type1: "でんき", type2: "ひこう", genus: "モモンガポケモン", ability: "せいでんき" },
    { id: 607, name: "ヒトモシ", type1: "ゴースト", type2: "ほのお", genus: "ろうそくポケモン", ability: "もらいび", evolvesTo: 608 },
    { id: 608, name: "ランプラー", type1: "ゴースト", type2: "ほのお", genus: "ランプポケモン", ability: "もらいび", evolvesTo: 609 },
    { id: 609, name: "シャンデラ", type1: "ゴースト", type2: "ほのお", genus: "いざないポケモン", ability: "もらいび" },
    { id: 610, name: "キバゴ", type1: "ドラゴン", type2: null, genus: "キバポケモン", ability: "とうそうしん", evolvesTo: 611 },
    { id: 611, name: "オノンド", type1: "ドラゴン", type2: null, genus: "あごオノポケモン", ability: "とうそうしん", evolvesTo: 612 },
    { id: 612, name: "オノノクス", type1: "ドラゴン", type2: null, genus: "あごオノポケモン", ability: "とうそうしん" },
    { id: 613, name: "クマシュン", type1: "こおり", type2: null, genus: "ひょうけつポケモン", ability: "ゆきがくれ", evolvesTo: 614 },
    { id: 614, name: "ツンベアー", type1: "こおり", type2: null, genus: "とうけつポケモン", ability: "ゆきがくれ" },
    { id: 621, name: "クリムガン", type1: "ドラゴン", type2: null, genus: "どうくつポケモン", ability: "さめはだ" },
    { id: 633, name: "モノズ", type1: "あく", type2: "ドラゴン", genus: "わがままポケモン", ability: "はりきり", evolvesTo: 634 },
    { id: 634, name: "ジヘッド", type1: "あく", type2: "ドラゴン", genus: "きょうぼうポケモン", ability: "はりきり", evolvesTo: 635 },
    { id: 635, name: "サザンドラ", type1: "あく", type2: "ドラゴン", genus: "きょうぼうポケモン", ability: "ふゆう", pseudoLegendary: true },
    { id: 643, name: "レシラム", type1: "ドラゴン", type2: "ほのお", genus: "はくようポケモン", ability: "ターボブレイズ", legendary: true },
    { id: 644, name: "ゼクロム", type1: "ドラゴン", type2: "でんき", genus: "こくいんポケモン", ability: "テラボルテージ", legendary: true },
    { id: 645, name: "ランドロス", type1: "じめん", type2: "ひこう", genus: "ほうじょうポケモン", ability: "すなのちから", legendary: true },
    { id: 646, name: "キュレム", type1: "ドラゴン", type2: "こおり", genus: "きょうかいポケモン", ability: "プレッシャー", legendary: true },
    { id: 647, name: "ケルディオ", type1: "みず", type2: "かくとう", genus: "わかごまポケモン", ability: "せいぎのこころ", legendary: true },
    { id: 648, name: "メロエッタ", type1: "ノーマル", type2: "エスパー", genus: "せんりつポケモン", ability: "てんのめぐみ", legendary: true }
];

const TYPE_WEAKNESS = {
    "ほのお": ["くさ", "こおり", "むし", "はがね"],
    "みず": ["ほのお", "じめん", "いわ"],
    "くさ": ["みず", "じめん", "いわ"],
    "でんき": ["みず", "ひこう"],
    "こおり": ["くさ", "じめん", "ひこう", "ドラゴン"],
    "かくとう": ["ノーマル", "こおり", "いわ", "あく", "はがね"],
    "どく": ["くさ", "フェアリー"],
    "じめん": ["ほのお", "でんき", "どく", "いわ", "はがね"],
    "ひこう": ["くさ", "かくとう", "むし"],
    "エスパー": ["かくとう", "どく"],
    "むし": ["くさ", "エスパー", "あく"],
    "いわ": ["ほのお", "こおり", "ひこう", "むし"],
    "ゴースト": ["エスパー", "ゴースト"],
    "ドラゴン": ["ドラゴン"],
    "あく": ["エスパー", "ゴースト"]
};

const nameToEnglish = {
    "ビクティニ": "victini", "ツタージャ": "snivy", "ジャノビー": "servine", "ジャローダ": "serperior",
    "ポカブ": "tepig", "チャオブー": "pignite", "エンブオー": "emboar",
    "ミジュマル": "oshawott", "フタチマル": "dewott", "ダイケンキ": "samurott",
    "ミネズミ": "patrat", "ミルホッグ": "watchog",
    "ヨーテリー": "lillipup", "ハーデリア": "herdier", "ムーランド": "stoutland",
    "チョロネコ": "purrloin", "レパルダス": "liepard",
    "ヤナップ": "pansage", "ヤナッキー": "simisage",
    "バオップ": "pansear", "バオッキー": "simisear",
    "ヒヤップ": "panpour", "ヒヤッキー": "simipour",
    "マメパト": "pidove", "ハトーボー": "tranquill", "ケンホロウ": "unfezant",
    "シママ": "blitzle", "ゼブライカ": "zebstrika",
    "タブンネ": "audino",
    "ダルマッカ": "darumaka", "ヒヒダルマ": "darmanitan",
    "ズルッグ": "scraggy", "ズルズキン": "scrafty",
    "エモンガ": "emolga",
    "ヒトモシ": "litwick", "ランプラー": "lampent", "シャンデラ": "chandelure",
    "キバゴ": "axew", "オノンド": "fraxure", "オノノクス": "haxorus",
    "クマシュン": "cubchoo", "ツンベアー": "beartic",
    "クリムガン": "druddigon",
    "モノズ": "deino", "ジヘッド": "zweilous", "サザンドラ": "hydreigon",
    "レシラム": "reshiram", "ゼクロム": "zekrom",
    "ランドロス": "landorus", "キュレム": "kyurem",
    "ケルディオ": "keldeo", "メロエッタ": "meloetta"
};

const TOTAL_QUIZ_COUNT = 10;

const difficultySelection = document.getElementById("difficulty-selection");
const quizScreen = document.getElementById("quiz-screen");
const easyBtn = document.getElementById("easy-btn");
const hardBtn = document.getElementById("hard-btn");
const resetButton = document.getElementById("reset-button");
const headerElement = document.getElementById("header-text");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreDisplay = document.getElementById("score-display");
const resultMessage = document.getElementById("result-message");
const hintArea = document.getElementById("hint-area");
const showHintBtn = document.getElementById("show-hint-btn");
const hintDisplay = document.getElementById("hint-display");
const hintAudio = document.getElementById("hint-audio");
const pikachuAudio = document.getElementById("pikachu-audio");

let currentQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let currentDifficulty = '';
let hintUsed = false;
let hintPenalty = 0;

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getRandomPokemon(count, exclude = []) {
    const available = POKEMON_DATA.filter(p => !exclude.includes(p.id));
    return shuffleArray(available).slice(0, count);
}

function getPokemonById(id) {
    return POKEMON_DATA.find(p => p.id === id);
}

// かんたんモード：基本的な問題のみ
function generateEasyQuestion(usedPokemonIds = new Set()) {
    const questionTypes = ['starter-identify', 'type-identify', 'simple-evolution'];
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    if (type === 'starter-identify') {
        const starters = POKEMON_DATA.filter(p => p.starter && !usedPokemonIds.has(p.id));
        
        if (starters.length === 0) return null;
        
        const correctPokemon = starters[Math.floor(Math.random() * starters.length)];
        const wrongPokemons = getRandomPokemon(3, [correctPokemon.id, ...Array.from(usedPokemonIds)]);
        const choices = shuffleArray([correctPokemon.name, ...wrongPokemons.map(p => p.name)]);
        
        return {
            question: `イッシュ地方の御三家に含まれるポケモンは？`,
            choices: choices,
            correct: correctPokemon.name,
            correctId: correctPokemon.id,
            hintImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${correctPokemon.id}.png`
        };
    } else if (type === 'type-identify') {
        const availablePokemon = POKEMON_DATA.filter(p => !usedPokemonIds.has(p.id) && !p.legendary);
        
        if (availablePokemon.length === 0) return null;
        
        const correctPokemon = availablePokemon[Math.floor(Math.random() * availablePokemon.length)];
        const wrongPokemons = getRandomPokemon(3, [correctPokemon.id, ...Array.from(usedPokemonIds)]);
        const choices = shuffleArray([correctPokemon.name, ...wrongPokemons.map(p => p.name)]);
        
        const typeText = correctPokemon.type2 
            ? `「${correctPokemon.type1}」と「${correctPokemon.type2}」`
            : `「${correctPokemon.type1}」`;
        
        return {
            question: `${typeText}タイプを持つポケモンは？`,
            choices: choices,
            correct: correctPokemon.name,
            correctId: correctPokemon.id,
            hintImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${correctPokemon.id}.png`
        };
    } else {
        const evolutionPairs = POKEMON_DATA.filter(p => p.evolvesTo && !usedPokemonIds.has(p.evolvesTo));
        
        if (evolutionPairs.length === 0) return null;
        
        const basePokemon = evolutionPairs[Math.floor(Math.random() * evolutionPairs.length)];
        const evolutionPokemon = getPokemonById(basePokemon.evolvesTo);
        
        const wrongPokemons = getRandomPokemon(3, [basePokemon.id, evolutionPokemon.id, ...Array.from(usedPokemonIds)]);
        const choices = shuffleArray([evolutionPokemon.name, ...wrongPokemons.map(p => p.name)]);
        
        return {
            question: `「${basePokemon.name}」の進化先は？`,
            choices: choices,
            correct: evolutionPokemon.name,
            correctId: evolutionPokemon.id,
            hintImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionPokemon.id}.png`
        };
    }
}

// むずかしいモード：複雑で深い知識が必要な問題
function generateHardQuestion(usedPokemonIds = new Set()) {
    const questionTypes = [
        'ability-genus-combo', 'legendary-trivia', 'type-weakness-advanced', 
        'evolution-type-change', 'pseudo-legendary', 'dual-type-specific',
        'ability-detail', 'pokedex-number'
    ];
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    const availablePokemon = POKEMON_DATA.filter(p => !usedPokemonIds.has(p.id));
    
    if (availablePokemon.length === 0) return null;
    
    let correctPokemon;
    let question = '';
    
    if (type === 'ability-genus-combo') {
        correctPokemon = availablePokemon[Math.floor(Math.random() * availablePokemon.length)];
        question = `分類が「${correctPokemon.genus}」で特性「${correctPokemon.ability}」を持つポケモンは？`;
    } else if (type === 'legendary-trivia') {
        const legendaries = availablePokemon.filter(p => p.legendary);
        
        if (legendaries.length > 0) {
            correctPokemon = legendaries[Math.floor(Math.random() * legendaries.length)];
            
            if (correctPokemon.id === 643) {
                question = `イッシュ地方の伝説のポケモンで「真実」を司る白い「ドラゴン」タイプのポケモンは？`;
            } else if (correctPokemon.id === 644) {
                question = `イッシュ地方の伝説のポケモンで「理想」を司る黒い「ドラゴン」タイプのポケモンは？`;
            } else if (correctPokemon.id === 646) {
                question = `レシラムとゼクロムの力を吸収できる「ドラゴン・こおり」タイプの伝説のポケモンは？`;
            } else if (correctPokemon.id === 494) {
                question = `イッシュ地方で最初に発見され、勝利をもたらすと言われる幻のポケモンは？`;
            } else {
                question = `特性「${correctPokemon.ability}」を持つ伝説のポケモンは？`;
            }
        } else {
            correctPokemon = availablePokemon[Math.floor(Math.random() * availablePokemon.length)];
            question = `特性「${correctPokemon.ability}」を持つポケモンは？`;
        }
    } else if (type === 'type-weakness-advanced') {
        const darkDragon = availablePokemon.filter(p => 
            (p.type1 === "あく" && p.type2 === "ドラゴン") || 
            (p.type1 === "ドラゴン" && p.type2 === "あく")
        );
        
        if (darkDragon.length > 0) {
            correctPokemon = darkDragon[Math.floor(Math.random() * darkDragon.length)];
            question = `「あく・ドラゴン」という珍しいタイプの組み合わせを持ち、「フェアリー」タイプが4倍弱点になるポケモンは？`;
        } else {
            const ghostFire = availablePokemon.filter(p => 
                (p.type1 === "ゴースト" && p.type2 === "ほのお") || 
                (p.type1 === "ほのお" && p.type2 === "ゴースト")
            );
            
            if (ghostFire.length > 0) {
                correctPokemon = ghostFire[Math.floor(Math.random() * ghostFire.length)];
                question = `「ゴースト・ほのお」という珍しいタイプ組み合わせを持つポケモンは？`;
            } else {
                correctPokemon = availablePokemon[Math.floor(Math.random() * availablePokemon.length)];
                question = `特性「${correctPokemon.ability}」を持つポケモンは？`;
            }
        }
    } else if (type === 'evolution-type-change') {
        const typeChangers = availablePokemon.filter(p => {
            if (!p.evolvesTo) return false;
            const evolved = getPokemonById(p.evolvesTo);
            return evolved && evolved.type2 !== null && p.type2 === null;
        });
        
        if (typeChangers.length > 0) {
            const base = typeChangers[Math.floor(Math.random() * typeChangers.length)];
            correctPokemon = getPokemonById(base.evolvesTo);
            question = `進化すると「${correctPokemon.type2}」タイプが追加される「${base.name}」の進化形は？`;
        } else {
            correctPokemon = availablePokemon[Math.floor(Math.random() * availablePokemon.length)];
            question = `図鑑No.${correctPokemon.id}のポケモンは？`;
        }
    } else if (type === 'pseudo-legendary') {
        const pseudo = availablePokemon.filter(p => p.pseudoLegendary);
        
        if (pseudo.length > 0) {
            correctPokemon = pseudo[0];
            question = `イッシュ地方の600族（準伝説級の強さ）で3つの頭を持つ「あく・ドラゴン」タイプのポケモンは？`;
        } else {
            correctPokemon = availablePokemon[Math.floor(Math.random() * availablePokemon.length)];
            question = `特性「${correctPokemon.ability}」を持つポケモンは？`;
        }
    } else if (type === 'dual-type-specific') {
        const waterFighting = availablePokemon.filter(p => 
            (p.type1 === "みず" && p.type2 === "かくとう") || 
            (p.type1 === "かくとう" && p.type2 === "みず")
        );
        
        if (waterFighting.length > 0) {
            correctPokemon = waterFighting[0];
            question = `「みず・かくとう」タイプで聖剣士の一員である幻のポケモンは？`;
        } else {
            const normalPsychic = availablePokemon.filter(p => 
                (p.type1 === "ノーマル" && p.type2 === "エスパー") || 
                (p.type1 === "エスパー" && p.type2 === "ノーマル")
            );
            
            if (normalPsychic.length > 0) {
                correctPokemon = normalPsychic[0];
                question = `「ノーマル・エスパー」タイプで歌で戦う幻のポケモンは？`;
            } else {
                correctPokemon = availablePokemon[Math.floor(Math.random() * availablePokemon.length)];
                question = `分類が「${correctPokemon.genus}」のポケモンは？`;
            }
        }
    } else if (type === 'ability-detail') {
        const abilityQuestions = {
            "ターボブレイズ": "相手の特性を無視して攻撃できる専用特性「ターボブレイズ」を持つ",
            "テラボルテージ": "相手の特性を無視して攻撃できる専用特性「テラボルテージ」を持つ",
            "ふゆう": "「じめん」タイプの技を無効化する特性「ふゆう」を持つ「あく・ドラゴン」タイプの",
            "しょうりのほし": "バトルに出ると自分と味方の命中率が上がる特性「しょうりのほし」を持つ"
        };
        
        const withSpecialAbility = availablePokemon.filter(p => abilityQuestions[p.ability]);
        
        if (withSpecialAbility.length > 0) {
            correctPokemon = withSpecialAbility[Math.floor(Math.random() * withSpecialAbility.length)];
            question = `${abilityQuestions[correctPokemon.ability]}ポケモンは？`;
        } else {
            correctPokemon = availablePokemon[Math.floor(Math.random() * availablePokemon.length)];
            question = `特性「${correctPokemon.ability}」を持つポケモンは？`;
        }
    } else {
        correctPokemon = availablePokemon[Math.floor(Math.random() * availablePokemon.length)];
        question = `全国図鑑No.${correctPokemon.id}のポケモンは？`;
    }
    
    const wrongPokemons = getRandomPokemon(3, [correctPokemon.id, ...Array.from(usedPokemonIds)]);
    const choices = shuffleArray([correctPokemon.name, ...wrongPokemons.map(p => p.name)]);
    
    const englishName = nameToEnglish[correctPokemon.name] || correctPokemon.name.toLowerCase();
    const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${englishName}.mp3`;
    
    return {
        question: question,
        choices: choices,
        correct: correctPokemon.name,
        correctId: correctPokemon.id,
        hintCry: cryUrl
    };
}

function generateQuizData() {
    currentQuizData = [];
    const usedPokemonIds = new Set();
    let attempts = 0;
    const maxAttempts = 100;
    
    while (currentQuizData.length < TOTAL_QUIZ_COUNT && attempts < maxAttempts) {
        attempts++;
        let questionData;
        
        if (currentDifficulty === 'easy') {
            questionData = generateEasyQuestion(usedPokemonIds);
        } else {
            questionData = generateHardQuestion(usedPokemonIds);
        }
        
        if (questionData && !usedPokemonIds.has(questionData.correctId)) {
            currentQuizData.push(questionData);
            usedPokemonIds.add(questionData.correctId);
            questionData.choices.forEach(choiceName => {
                const pokemon = POKEMON_DATA.find(p => p.name === choiceName);
                if (pokemon) {
                    usedPokemonIds.add(pokemon.id);
                }
            });
        }
    }
}

function startQuiz(difficulty) {
    // ピカチュウの鳴き声を再生
    pikachuAudio.currentTime = 0;
    pikachuAudio.play().catch(err => console.error("Audio error:", err));
    
    currentDifficulty = difficulty;
    generateQuizData();
    
    currentQuestionIndex = 0;
    score = 0;
    hintPenalty = 0;
    updateScoreDisplay();
    
    difficultySelection.style.display = "none";
    quizScreen.style.display = "block";
    showQuestion();
}

function updateScoreDisplay() {
    const displayScore = Math.max(0, score - hintPenalty);
    scoreDisplay.textContent = `スコア: ${displayScore}点 (正解: ${score}/${currentQuestionIndex})`;
}

function showQuestion() {
    const question = currentQuizData[currentQuestionIndex];
    hintUsed = false;
    
    headerElement.textContent = `Q${currentQuestionIndex + 1}`;
    questionElement.textContent = question.question;
    resultMessage.textContent = "";
    resetButton.style.display = 'block';
    
    hintArea.style.display = "block";
    hintDisplay.style.display = "none";
    hintDisplay.innerHTML = "";
    showHintBtn.disabled = false;
    showHintBtn.textContent = "ヒントを見る（-1点）";
    
    choicesElement.innerHTML = '';
    question.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => selectAnswer(button, choice));
        choicesElement.appendChild(button);
    });
    
    enableChoices(true);
}

function handleHint() {
    const question = currentQuizData[currentQuestionIndex];
    
    if (currentDifficulty === 'easy' && question.hintImage) {
        hintDisplay.innerHTML = `<img src="${question.hintImage}" alt="シルエットヒント">`;
    } else if (currentDifficulty === 'hard' && question.hintCry) {
        hintDisplay.innerHTML = `<button onclick="playHintCry()">🔊 鳴き声を再生</button>`;
        hintAudio.src = question.hintCry;
    }
    
    hintDisplay.style.display = "block";
    showHintBtn.disabled = true;
    showHintBtn.textContent = "ヒント使用済（-1点）";
    hintUsed = true;
    hintPenalty += 1;
    updateScoreDisplay();
}

window.playHintCry = function() {
    hintAudio.currentTime = 0;
    hintAudio.play().catch(err => console.error("Audio error:", err));
};

function selectAnswer(clickedButton, choice) {
    const question = currentQuizData[currentQuestionIndex];
    enableChoices(false);
    
    const allButtons = choicesElement.querySelectorAll('button');
    
    if (choice === question.correct) {
        score++;
        resultMessage.textContent = "正解！";
        resultMessage.style.color = "#4CAF50";
        clickedButton.classList.add('correct-choice');
    } else {
        resultMessage.textContent = `不正解。正解は「${question.correct}」です！`;
        resultMessage.style.color = "#f44336";
        clickedButton.classList.add('incorrect-choice');
        allButtons.forEach(button => {
            if (button.textContent === question.correct) {
                button.classList.add('correct-choice');
            }
        });
    }
    
    updateScoreDisplay();
    setTimeout(nextQuestion, 2500);
}

function enableChoices(enabled) {
    choicesElement.querySelectorAll('button').forEach(button => {
        button.disabled = !enabled;
    });
    showHintBtn.disabled = !enabled || hintUsed;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    resetButton.style.display = 'none';
    headerElement.textContent = "結果発表！";
    
    const finalScore = Math.max(0, score - hintPenalty);
    const maxScore = TOTAL_QUIZ_COUNT;
    
    let resultText = `<div style="font-size: 1.2em; color: #666; margin-bottom: 15px;">お疲れさまでした！</div>`;
    resultText += `<div class="final-score">${finalScore}点</div>`;
    resultText += `<div style="font-size: 0.9em; color: #999; margin-top: 10px;">正解数: ${score} / ${maxScore}</div>`;
    
    if (hintPenalty > 0) {
        resultText += `<div style="font-size: 0.9em; color: #999;">ヒントペナルティ: -${hintPenalty}点</div>`;
    }
    
    questionElement.innerHTML = resultText;
    resultMessage.textContent = "";
    hintArea.style.display = "none";
    scoreDisplay.textContent = "";
    choicesElement.innerHTML = '';
    
    const shareButton = document.createElement("button");
    shareButton.textContent = "結果をシェア";
    shareButton.className = "share-btn";
    shareButton.addEventListener("click", () => shareResult(finalScore, maxScore));
    choicesElement.appendChild(shareButton);
    
    const retryButton = document.createElement("button");
    retryButton.textContent = "最初に戻る";
    retryButton.id = "result-retry-button";
    retryButton.addEventListener("click", resetToStart);
    choicesElement.appendChild(retryButton);
}

function shareResult(finalScore, maxScore) {
    const difficultyText = currentDifficulty === 'easy' ? 'かんたん' : 'むずかしい';
    const shareText = `イッシュポケモンクイズ（${difficultyText}）\n${finalScore}点 / ${maxScore}点満点\n正解数: ${score}/${TOTAL_QUIZ_COUNT}\n\n挑戦してみよう！`;
    
    if (navigator.share) {
        navigator.share({
            title: 'イッシュポケモンクイズ',
            text: shareText
        }).catch(err => console.log('Share cancelled'));
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('結果をクリップボードにコピーしました！');
        }).catch(() => {
            alert(`結果:\n\n${shareText}`);
        });
    }
}

function resetToStart() {
    if (currentQuestionIndex < TOTAL_QUIZ_COUNT && !confirm("クイズを中断して最初に戻りますか？")) {
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    hintPenalty = 0;
    currentQuizData = [];
    currentDifficulty = '';
    hintUsed = false;
    
    quizScreen.style.display = "none";
    difficultySelection.style.display = "block";
}

// イベントリスナー
resetButton.addEventListener("click", resetToStart);
easyBtn.addEventListener("click", () => startQuiz('easy'));
hardBtn.addEventListener("click", () => startQuiz('hard'));
showHintBtn.addEventListener("click", handleHint);