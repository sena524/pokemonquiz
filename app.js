document.addEventListener('DOMContentLoaded', () => {
    // 定数
    const TOTAL_QUIZ_COUNT = 10;
    const FIRST_GEN_POKEMON_ID = 1;   // フシギダネ (カントー)
    const LAST_GEN_POKEMON_ID = 151;  // ミュウ (カントー)
    const POKEMON_COUNT = LAST_GEN_POKEMON_ID - FIRST_GEN_POKEMON_ID + 1;
    const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const JAPANESE_LANGUAGE_CODE = 'ja';

    // DOM要素
    const difficultySelection = document.getElementById("difficulty-selection");
    const quizScreen = document.getElementById("quiz-screen");
    const easyBtn = document.getElementById("easy-btn"); 

    const resetButton = document.getElementById("reset-button"); 
    const headerElement = document.querySelector("#quiz-screen h1");
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const scoreDisplay = document.getElementById("score-display");
    const resultMessage = document.getElementById("result-message");

    const hintArea = document.getElementById("hint-area");
    const textHintDisplay = document.getElementById("text-hint-display"); 
    const showTextHintBtn = document.getElementById("show-text-hint-btn"); 
    const pokemonImage = document.getElementById("pokemon-image"); 
    
    // ★追加: 鳴き声のDOM要素★
    const playCryBtn = document.getElementById("play-cry-btn");
    const pokemonCryAudio = document.getElementById("pokemon-cry");

    // 変数
    let currentQuizData = []; 
    let currentQuestionIndex = 0;
    let score = 0;
    let totalQuestions = 0;

    // --- ユーティリティ関数 ---
    function shuffleArray(array) {
        const shuffled = [...array]; 
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
        }
        return shuffled;
    }

    function getRandomPokemonIds(count) {
        const allIds = Array.from({ length: POKEMON_COUNT }, (_, i) => FIRST_GEN_POKEMON_ID + i);
        return shuffleArray(allIds).slice(0, count);
    }
    
    // ポケモンの日本語名、画像URL、鳴き声URLを取得
    async function getPokemonDetails(id) {
        try {
            // 1. 基本データ（画像URL、英語名取得）
            const response = await fetch(`${POKEAPI_BASE_URL}${id}/`);
            if (!response.ok) throw new Error('Failed to fetch pokemon data');
            const data = await response.json();
            const imageUrl = data.sprites.front_default; 
            
            // 鳴き声URLを生成 (英語名を小文字にして使用するのが一般的な方法)
            const englishName = data.name.toLowerCase(); 
            const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${englishName}.ogg`; 

            // 2. 日本語名取得
            const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
            if (!speciesResponse.ok) throw new Error('Failed to fetch species data');
            const speciesData = await speciesResponse.json();
            const japaneseName = speciesData.names.find(name => name.language.name === JAPANESE_LANGUAGE_CODE);

            return {
                id: id,
                name: japaneseName ? japaneseName.name : `No.${id}`,
                imageUrl: imageUrl,
                cryUrl: cryUrl // ★鳴き声URLを追加★
            };
        } catch (error) {
            console.error(`Error fetching details for ID ${id}:`, error);
            return { id: id, name: `No.${id}`, imageUrl: '', cryUrl: '' };
        }
    }

    // クイズデータを動的に生成 (変更なし)
    async function generateQuizData() {
        showLoading(true); 
        const selectedIds = getRandomPokemonIds(TOTAL_QUIZ_COUNT);
        const quizPromises = selectedIds.map(async (correctId) => {
            const correctDetails = await getPokemonDetails(correctId);
            const correctName = correctDetails.name;
            
            let incorrectNames = [];
            const allOtherIds = Array.from({ length: POKEMON_COUNT }, (_, i) => FIRST_GEN_POKEMON_ID + i)
                                .filter(id => id !== correctId);
            const incorrectIds = shuffleArray(allOtherIds).slice(0, 3);
            
            for (const id of incorrectIds) {
                const details = await getPokemonDetails(id);
                incorrectNames.push(details.name);
            }

            const choices = shuffleArray([correctName, ...incorrectNames]);
            
            const hint = `このポケモンは全国図鑑番号 No.${correctId} だよ！`;
            
            return {
                question: `このポケモンは誰でしょう？`,
                choices: choices,
                correct: correctName,
                textHint: hint,
                imageUrl: correctDetails.imageUrl,
                cryUrl: correctDetails.cryUrl // 鳴き声URLを渡す
            };
        });

        currentQuizData = await Promise.all(quizPromises);
        showLoading(false); 
    }

    // ロード中画面の切り替え
    function showLoading(isLoading) {
        questionElement.textContent = isLoading ? "問題を準備中です... (PokéAPIに接続中)" : "";
        choicesElement.innerHTML = isLoading ? "" : "";
        pokemonImage.style.display = "none";
        playCryBtn.style.display = 'none'; // ロード中は非表示に
        
        if (isLoading) {
            headerElement.textContent = "読み込み中";
            quizScreen.style.display = "block";
            difficultySelection.style.display = "none";
        } else if (currentQuizData.length > 0) {
            // ロードが完了し、クイズが開始される準備ができた
        } else {
            headerElement.textContent = "エラー";
            questionElement.textContent = "問題の取得に失敗しました。時間をおいて再度お試しください。";
        }
    }


    // --- メイン処理 ---
    resetButton.addEventListener("click", resetToStart); 

    function resetToStart() {
        if (!confirm("クイズを中断して最初に戻りますか？")) {
            return; 
        }
        
        currentQuestionIndex = 0;
        score = 0;
        currentQuizData = [];
        totalQuestions = 0;
        questionElement.classList.remove('final-score'); 
        pokemonImage.style.display = "none";
        pokemonImage.classList.remove('silhouette-hint');
        playCryBtn.style.display = 'none'; // リセット時に鳴き声ボタンも非表示に
        pokemonCryAudio.src = ''; // 音声ソースをクリア

        quizScreen.style.display = "none";
        difficultySelection.style.display = "block";
    }
    // -------------------------

    // クイズ開始処理 (変更なし)
    easyBtn.addEventListener("click", startQuiz);

    async function startQuiz() {
        await generateQuizData();

        if (currentQuizData.length === TOTAL_QUIZ_COUNT) {
            currentQuestionIndex = 0; 
            score = 0; 
            totalQuestions = currentQuizData.length;

            updateScoreDisplay();
            showQuestion();
        } else {
            resetToStart();
        }
    }

    // --- スコア表示の更新 ---
    function updateScoreDisplay() {
        scoreDisplay.textContent = `正解数: ${score} / ${totalQuestions}`;
    }

    // --- 現在の質問を表示 ---
    function showQuestion() {
        const currentQuestion = currentQuizData[currentQuestionIndex];

        headerElement.textContent = `Q${currentQuestionIndex + 1}`;
        questionElement.textContent = currentQuestion.question;
        resultMessage.textContent = ""; 
        questionElement.classList.remove('final-score'); 

        // 画像をシルエット状態で表示
        pokemonImage.src = currentQuestion.imageUrl;
        pokemonImage.alt = "問題のポケモン";
        pokemonImage.style.display = "block"; 
        pokemonImage.classList.add('silhouette-hint'); 
        
        // ★鳴き声ボタンのセットアップ★
        if (currentQuestion.cryUrl) {
            playCryBtn.style.display = 'block';
            pokemonCryAudio.src = currentQuestion.cryUrl;
            pokemonCryAudio.volume = 0.6; // 聞きやすい音量に調整
            
            playCryBtn.onclick = () => {
                pokemonCryAudio.currentTime = 0; 
                pokemonCryAudio.play().catch(error => console.error("Error playing audio:", error));
            };
        } else {
            playCryBtn.style.display = 'none';
        }
        
        // テキスト・画像ヒントの設定
        hintArea.style.display = "block";
        textHintDisplay.style.display = "none";
        showTextHintBtn.disabled = false;
        showTextHintBtn.textContent = "画像・テキストヒントを見る"; 
        textHintDisplay.textContent = currentQuestion.textHint || "ヒントはありません。";
        
        showTextHintBtn.onclick = () => {
            textHintDisplay.style.display = "block"; 
            pokemonImage.classList.remove('silhouette-hint'); // 画像シルエットを解除
            showTextHintBtn.disabled = true;
            showTextHintBtn.textContent = "ヒント (使用済)";
        };
        
        // 選択肢をリセットし、ランダムに並び替えてボタンを生成
        choicesElement.innerHTML = '';
        const shuffledChoices = shuffleArray(currentQuestion.choices);
        
        shuffledChoices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.className = ''; 
            button.addEventListener("click", () => selectAnswer(button, choice));
            choicesElement.appendChild(button);
        });

        enableChoices(true);
    }

    // --- 答えを選択 ---
    function selectAnswer(clickedButton, choice) {
        const currentQuestion = currentQuizData[currentQuestionIndex];
        enableChoices(false); 
        pokemonImage.classList.remove('silhouette-hint'); // 回答時にはシルエットを解除

        const allButtons = choicesElement.querySelectorAll('button');

        if (choice === currentQuestion.correct) {
            score++;
            resultMessage.textContent = "正解！";
            resultMessage.style.color = "#4CAF50"; 
            clickedButton.classList.add('correct-choice'); 
        } else {
            resultMessage.textContent = "不正解。正解は " + currentQuestion.correct + " です！";
            resultMessage.style.color = "#f44336"; 
            clickedButton.classList.add('incorrect-choice'); 

            allButtons.forEach(button => {
                if (button.textContent === currentQuestion.correct) {
                    button.classList.add('correct-choice');
                }
            });
        }

        updateScoreDisplay();
        setTimeout(nextQuestion, 2500); 
    }

    // --- 選択肢ボタンの有効/無効を切り替える ---
    function enableChoices(enabled) {
        choicesElement.querySelectorAll('button').forEach(button => {
            button.disabled = !enabled;
        });
        showTextHintBtn.disabled = !enabled || showTextHintBtn.disabled;
        playCryBtn.disabled = !enabled; // 鳴き声ボタンも無効化
    }

    // --- 次の質問に進む ---
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuizData.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    // --- クイズの結果を表示 ---
    function showResults() {
        questionElement.classList.add('final-score');
        pokemonImage.style.display = "none"; 
        pokemonImage.classList.remove('silhouette-hint'); 
        playCryBtn.style.display = 'none'; // 結果画面で鳴き声ボタンも非表示に

        questionElement.textContent = `クイズ終了！あなたのスコアは ${score} / ${totalQuestions} です！`;
        choicesElement.innerHTML = '';
        headerElement.textContent = "結果発表！";
        resultMessage.textContent = "";
        document.getElementById("hint-area").style.display = "none";
        scoreDisplay.textContent = "";

        const retryButton = document.createElement("button");
        retryButton.textContent = "最初に戻る"; 
        retryButton.style.marginTop = "20px";
        retryButton.addEventListener("click", resetToStart); 
        choicesElement.appendChild(retryButton);
    }
});