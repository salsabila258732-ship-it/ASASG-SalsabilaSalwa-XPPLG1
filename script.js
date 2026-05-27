 /* ====================================================
       DATA KUIS - 10 Level, 5 Soal per Level
    ==================================================== */
    const levelNames = [
        "Kosakata Dasar", "Warna & Angka", "Hewan", "Makanan & Minuman",
        "Profesi", "Grammar Dasar", "Sinonim", "Antonim", "Idiom", "Kosakata Lanjutan"
    ];

    const quizData = [
        // Level 1 - Kosakata Dasar
        [
            { q: "Apa arti dari kata 'Book'?", opts: ["Meja", "Buku", "Pensil", "Tas"], ans: 1 },
            { q: "Apa arti dari kata 'Water'?", opts: ["Api", "Tanah", "Air", "Angin"], ans: 2 },
            { q: "Apa arti dari kata 'House'?", opts: ["Rumah", "Sekolah", "Pasar", "Kantor"], ans: 0 },
            { q: "Apa arti dari kata 'Friend'?", opts: ["Musuh", "Sahabat", "Teman", "Keluarga"], ans: 2 },
            { q: "Apa arti dari kata 'Sun'?", opts: ["Bulan", "Bintang", "Awan", "Matahari"], ans: 3 }
        ],
        // Level 2 - Warna & Angka
        [
            { q: "Apa bahasa Inggrisnya 'Merah'?", opts: ["Blue", "Green", "Red", "Yellow"], ans: 2 },
            { q: "Berapa bahasa Inggrisnya angka '7'?", opts: ["Six", "Seven", "Eight", "Nine"], ans: 1 },
            { q: "Apa bahasa Inggrisnya 'Hijau'?", opts: ["Red", "Blue", "Yellow", "Green"], ans: 3 },
            { q: "Berapa bahasa Inggrisnya angka '3'?", opts: ["Two", "Four", "Three", "Five"], ans: 2 },
            { q: "Apa bahasa Inggrisnya 'Biru'?", opts: ["Blue", "Red", "Green", "Orange"], ans: 0 }
        ],
        // Level 3 - Hewan
        [
            { q: "Apa bahasa Inggrisnya 'Kucing'?", opts: ["Dog", "Cat", "Bird", "Fish"], ans: 1 },
            { q: "Apa bahasa Inggrisnya 'Kupu-kupu'?", opts: ["Butterfly", "Bird", "Dog", "Horse"], ans: 0 },
            { q: "Apa arti kata 'Elephant'?", opts: ["Jerapah", "Gajah", "Singa", "Harimau"], ans: 1 },
            { q: "Apa bahasa Inggrisnya 'Burung'?", opts: ["Fish", "Cat", "Dog", "Bird"], ans: 3 },
            { q: "Apa arti kata 'Fish'?", opts: ["Ikan", "Ular", "Katak", "Kura-kura"], ans: 0 }
        ],
        // Level 4 - Makanan & Minuman
        [
            { q: "Apa arti kata 'Rice'?", opts: ["Mie", "Roti", "Nasi", "Kentang"], ans: 2 },
            { q: "Apa bahasa Inggrisnya 'Roti'?", opts: ["Rice", "Bread", "Cake", "Cookie"], ans: 1 },
            { q: "Apa arti kata 'Milk'?", opts: ["Kopi", "Teh", "Jus", "Susu"], ans: 3 },
            { q: "Apa bahasa Inggrisnya 'Telur'?", opts: ["Meat", "Egg", "Cheese", "Butter"], ans: 1 },
            { q: "Apa arti kata 'Sugar'?", opts: ["Garam", "Gula", "Merica", "Madu"], ans: 1 }
        ],
        // Level 5 - Profesi
        [
            { q: "Apa bahasa Inggrisnya 'Dokter'?", opts: ["Nurse", "Doctor", "Teacher", "Lawyer"], ans: 1 },
            { q: "Apa arti kata 'Teacher'?", opts: ["Dokter", "Pengacara", "Guru", "Polisi"], ans: 2 },
            { q: "Apa bahasa Inggrisnya 'Polisi'?", opts: ["Soldier", "Police", "Detective", "Guard"], ans: 1 },
            { q: "Apa arti kata 'Nurse'?", opts: ["Dokter", "Perawat", "Bidan", "Apoteker"], ans: 1 },
            { q: "Apa bahasa Inggrisnya 'Pilot'?", opts: ["Driver", "Captain", "Pilot", "Sailor"], ans: 2 }
        ],
        // Level 6 - Grammar Dasar
        [
            { q: "Pilih kata yang benar: 'She ___ a student.'", opts: ["am", "is", "are", "be"], ans: 1 },
            { q: "Pilih kata yang benar: 'They ___ playing.'", opts: ["is", "am", "are", "was"], ans: 2 },
            { q: "Pilih kata yang benar: 'I ___ happy.'", opts: ["is", "am", "are", "be"], ans: 1 },
            { q: "Pilih kata yang benar: 'He ___ a book.'", opts: ["have", "has", "having", "had"], ans: 1 },
            { q: "Pilih kata yang benar: 'We ___ to school.'", opts: ["goes", "going", "go", "gone"], ans: 2 }
        ],
        // Level 7 - Sinonim
        [
            { q: "Sinonim dari 'Happy' adalah...", opts: ["Sad", "Angry", "Joyful", "Tired"], ans: 2 },
            { q: "Sinonim dari 'Big' adalah...", opts: ["Small", "Tiny", "Large", "Thin"], ans: 2 },
            { q: "Sinonim dari 'Fast' adalah...", opts: ["Slow", "Quick", "Lazy", "Late"], ans: 1 },
            { q: "Sinonim dari 'Smart' adalah...", opts: ["Foolish", "Stupid", "Intelligent", "Slow"], ans: 2 },
            { q: "Sinonim dari 'Beautiful' adalah...", opts: ["Ugly", "Pretty", "Dark", "Plain"], ans: 1 }
        ],
        // Level 8 - Antonim
        [
            { q: "Antonim dari 'Hot' adalah...", opts: ["Warm", "Cold", "Cool", "Fresh"], ans: 1 },
            { q: "Antonim dari 'Up' adalah...", opts: ["Left", "Right", "Down", "Forward"], ans: 2 },
            { q: "Antonim dari 'Big' adalah...", opts: ["Large", "Huge", "Small", "Tall"], ans: 2 },
            { q: "Antonim dari 'Fast' adalah...", opts: ["Quick", "Slow", "Rapid", "Swift"], ans: 1 },
            { q: "Antonim dari 'Happy' adalah...", opts: ["Glad", "Joyful", "Cheerful", "Sad"], ans: 3 }
        ],
        // Level 9 - Idiom
        [
            { q: "Apa arti idiom 'Break a leg'?", opts: ["Patah kaki", "Semoga berhasil", "Berlari kencang", "Hati-hati"], ans: 1 },
            { q: "Apa arti idiom 'Piece of cake'?", opts: ["Potongan kue", "Sangat mudah", "Enak sekali", "Makan kue"], ans: 1 },
            { q: "Apa arti 'Raining cats and dogs'?", opts: ["Hujan kucing & anjing", "Hujan deras", "Banyak hewan", "Badai petir"], ans: 1 },
            { q: "Apa arti 'Hit the sack'?", opts: ["Memukul karung", "Pergi tidur", "Bekerja keras", "Olahraga"], ans: 1 },
            { q: "Apa arti 'Under the weather'?", opts: ["Di bawah cuaca", "Tidak enak badan", "Di luar ruangan", "Hujan deras"], ans: 1 }
        ],
        // Level 10 - Kosakata Lanjutan
        [
            { q: "Apa arti kata 'Ephemeral'?", opts: ["Kekal", "Sementara", "Abadi", "Lama"], ans: 1 },
            { q: "Apa arti kata 'Ubiquitous'?", opts: ["Langka", "Unik", "Ada di mana-mana", "Tersembunyi"], ans: 2 },
            { q: "Apa arti kata 'Resilient'?", opts: ["Lemah", "Rapuh", "Tangguh", "Kaku"], ans: 2 },
            { q: "Apa arti kata 'Ambiguous'?", opts: ["Jelas", "Ambigu", "Tegas", "Sederhana"], ans: 1 },
            { q: "Apa arti kata 'Concise'?", opts: ["Panjang", "Ringkas", "Rumit", "Detail"], ans: 1 }
        ]
    ];

    /* ====================================================
       STATE APLIKASI
    ==================================================== */
    let currentLevel = 0;       // Level yang sedang dimainkan (0-indexed)
    let currentQuestion = 0;    // Indeks soal saat ini (0-4)
    let score = 0;              // Skor di level saat ini
    let answers = [];           // Jawaban user di level saat ini: { selected, correct, isCorrect, timeUp }
    let timerInterval = null;   // Interval timer
    let timeLeft = 10;          // Waktu tersisa
    let answered = false;       // Apakah user sudah menjawab soal ini
    let levelCompleted = [];    // Status tiap level: null = terkunci, 'unlocked', 'completed'
    let levelScores = [];       // Skor tiap level yang sudah selesai

    // Inisialisasi state
    function initState() {
        levelCompleted = Array(10).fill(null);
        levelCompleted[0] = 'unlocked'; // Hanya level 1 yang terbuka
        levelScores = Array(10).fill(null);
    }
    initState();

    /* ====================================================
       NAVIGASI HALAMAN
    ==================================================== */
    function navigateTo(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(pageId);
        if (target) target.classList.add('active');

        // Render grid level jika masuk halaman level
        if (pageId === 'level-page') renderLevelGrid();
    }

    /* ====================================================
       RENDER GRID LEVEL
    ==================================================== */
    function renderLevelGrid() {
        const grid = document.getElementById('level-grid');
        grid.innerHTML = '';

        for (let i = 0; i < 10; i++) {
            const status = levelCompleted[i];
            const box = document.createElement('div');

            if (status === 'completed') {
                // Level selesai - tampilan lock + skor
                box.className = 'level-box completed p-5 flex flex-col items-center justify-center min-h-[120px]';
                box.innerHTML = `
                    <i class="fa-solid fa-lock text-lg mb-2" style="color:var(--muted);"></i>
                    <span class="font-display text-sm mb-1" style="color:var(--muted);">Level ${i + 1}</span>
                    <span class="text-xs" style="color:var(--accent);">${levelScores[i]}/5</span>
                    <i class="fa-solid fa-circle-check text-xs absolute top-3 right-3" style="color:var(--accent);"></i>
                `;
            } else if (status === 'unlocked') {
                // Level terbuka - bisa diklik
                box.className = 'level-box unlocked p-5 flex flex-col items-center justify-center min-h-[120px]';
                box.innerHTML = `
                    <i class="fa-solid fa-play-circle text-2xl mb-2" style="color:var(--accent);"></i>
                    <span class="font-display text-lg mb-1" style="color:var(--text);">Level ${i + 1}</span>
                    <span class="text-xs text-center" style="color:var(--muted);">${levelNames[i]}</span>
                `;
                box.onclick = () => startQuiz(i);
            } else {
                // Level terkunci
                box.className = 'level-box locked p-5 flex flex-col items-center justify-center min-h-[120px]';
                box.innerHTML = `
                    <i class="fa-solid fa-lock text-xl mb-2" style="color:var(--muted);"></i>
                    <span class="font-display text-sm" style="color:var(--muted);">Level ${i + 1}</span>
                    <span class="text-xs" style="color:var(--muted); opacity:0.5;">${levelNames[i]}</span>
                `;
                box.onclick = () => showToast('Level ini masih terkunci!', 'warn');
            }

            grid.appendChild(box);
        }
    }

    /* ====================================================
       MULAI KUIS
    ==================================================== */
    function startQuiz(levelIndex) {
        currentLevel = levelIndex;
        currentQuestion = 0;
        score = 0;
        answers = [];
        answered = false;

        navigateTo('quiz-page');
        renderQuestion();
    }

    /* ====================================================
       RENDER PERTANYAAN
    ==================================================== */
    function renderQuestion() {
        const level = quizData[currentLevel];
        const qData = level[currentQuestion];
        answered = false;

        // Update label
        document.getElementById('quiz-level-label').textContent = `Level ${currentLevel + 1}`;
        document.getElementById('quiz-level-name').textContent = levelNames[currentLevel];
        document.getElementById('quiz-question-counter').textContent = `${currentQuestion + 1}/5`;

        // Update progress bar
        document.getElementById('quiz-progress').style.width = `${(currentQuestion / 5) * 100}%`;

        // Update pertanyaan
        const questionEl = document.getElementById('quiz-question');
        questionEl.textContent = qData.q;
        questionEl.classList.add('pop-in');
        setTimeout(() => questionEl.classList.remove('pop-in'), 400);

        // Render opsi jawaban
        const optionsEl = document.getElementById('quiz-options');
        optionsEl.innerHTML = '';
        const labels = ['A', 'B', 'C', 'D'];

        qData.opts.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn w-full flex items-center gap-4';
            btn.innerHTML = `
                <span class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm" style="background:var(--card-hover); color:var(--muted);">${labels[idx]}</span>
                <span class="opt-text text-sm font-medium">${opt}</span>
            `;
            btn.onclick = () => selectAnswer(idx);
            // Animasi masuk bertahap
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(12px)';
            setTimeout(() => {
                btn.style.transition = 'all 0.3s ease';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 80 * idx);
            optionsEl.appendChild(btn);
        });

        // Sembunyikan tombol Next
        document.getElementById('quiz-next-btn').classList.add('hidden');

        // Mulai timer
        startTimer();
    }

    /* ====================================================
       TIMER
    ==================================================== */
    const CIRCUMFERENCE = 2 * Math.PI * 42; // ~263.89

    function startTimer() {
        clearInterval(timerInterval);
        timeLeft = 10;
        updateTimerDisplay();

        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                if (!answered) {
                    handleTimeUp();
                }
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const timerText = document.getElementById('timer-text');
        const timerRing = document.getElementById('timer-ring');

        timerText.textContent = Math.max(0, timeLeft);

        // Update lingkaran timer
        const offset = ((10 - timeLeft) / 10) * CIRCUMFERENCE;
        timerRing.style.strokeDashoffset = offset;

        // Ubah warna saat waktu hampir habis
        if (timeLeft <= 3 && timeLeft > 0) {
            timerRing.style.stroke = 'var(--wrong)';
            timerText.style.color = 'var(--wrong)';
        } else {
            timerRing.style.stroke = 'var(--accent)';
            timerText.style.color = 'var(--accent)';
        }
    }

    function handleTimeUp() {
        answered = true;
        const qData = quizData[currentLevel][currentQuestion];

        // Catat jawaban sebagai waktu habis
        answers.push({
            selected: -1,
            correct: qData.ans,
            isCorrect: false,
            timeUp: true
        });

        // Tandai jawaban benar
        const options = document.querySelectorAll('.option-btn');
        options.forEach((opt, idx) => {
            opt.classList.add('disabled');
            if (idx === qData.ans) {
                opt.classList.add('reveal-correct');
            }
        });

        showToast('Waktu habis!', 'error');

        // Pindah ke soal berikutnya otomatis setelah delay
        setTimeout(() => {
            advanceQuestion();
        }, 1500);
    }

    /* ====================================================
       PILIH JAWABAN
    ==================================================== */
    function selectAnswer(selectedIdx) {
        if (answered) return;
        answered = true;
        clearInterval(timerInterval);

        const qData = quizData[currentLevel][currentQuestion];
        const isCorrect = selectedIdx === qData.ans;

        if (isCorrect) score++;

        // Catat jawaban
        answers.push({
            selected: selectedIdx,
            correct: qData.ans,
            isCorrect: isCorrect,
            timeUp: false
        });

        // Update visual opsi
        const options = document.querySelectorAll('.option-btn');
        options.forEach((opt, idx) => {
            opt.classList.add('disabled');
            if (idx === qData.ans) {
                opt.classList.add('correct-answer');
            }
            if (idx === selectedIdx && !isCorrect) {
                opt.classList.add('wrong-answer');
                opt.classList.add('shake');
            }
        });

        // Toast feedback
        if (isCorrect) {
            showToast('Jawaban benar!', 'success');
        } else {
            showToast('Jawaban salah!', 'error');
        }

        // Tampilkan tombol Next
        const nextBtn = document.getElementById('quiz-next-btn');
        nextBtn.classList.remove('hidden');
        nextBtn.classList.add('pop-in');

        if (currentQuestion === 4) {
            nextBtn.textContent = 'Lihat Hasil';
        } else {
            nextBtn.textContent = 'Selanjutnya';
        }
    }

    /* ====================================================
       PINDAH SOAL BERIKUTNYA
    ==================================================== */
    function nextQuestion() {
        advanceQuestion();
    }

    function advanceQuestion() {
        currentQuestion++;

        if (currentQuestion >= 5) {
            // Semua soal sudah dijawab - tampilkan hasil
            showResults();
        } else {
            // Render soal berikutnya
            renderQuestion();
        }
    }

    /* ====================================================
       TAMPILKAN HASIL
    ==================================================== */
    function showResults() {
        clearInterval(timerInterval);

        // Update state level
        levelCompleted[currentLevel] = 'completed';
        levelScores[currentLevel] = score;

        // Buka level berikutnya jika ada
        if (currentLevel < 9) {
            if (levelCompleted[currentLevel + 1] === null) {
                levelCompleted[currentLevel + 1] = 'unlocked';
            }
        }

        // Navigasi ke halaman hasil
        navigateTo('result-page');

        // Isi data hasil
        document.getElementById('result-level-label').textContent = `Level ${currentLevel + 1} - ${levelNames[currentLevel]}`;

        // Animasi skor
        const scoreEl = document.getElementById('result-score');
        animateScore(scoreEl, score);

        // Pesan berdasarkan skor
        const msgEl = document.getElementById('result-message');
        if (score === 5) {
            msgEl.textContent = 'Sempurna! Luar biasa!';
            msgEl.style.color = 'var(--accent)';
            launchConfetti();
        } else if (score >= 3) {
            msgEl.textContent = 'Bagus! Terus berlatih!';
            msgEl.style.color = 'var(--warm)';
        } else {
            msgEl.textContent = 'Jangan menyerah, coba lagi!';
            msgEl.style.color = 'var(--wrong)';
        }

        // Tombol next level
        const nextLevelBtn = document.getElementById('result-next-level-btn');
        if (currentLevel < 9) {
            nextLevelBtn.style.display = 'block';
            nextLevelBtn.textContent = `Lanjut ke Level ${currentLevel + 2}`;
        } else {
            nextLevelBtn.style.display = 'none';
        }

        // Detail jawaban
        const detailsEl = document.getElementById('result-details');
        detailsEl.innerHTML = '';

        const level = quizData[currentLevel];
        answers.forEach((ans, idx) => {
            const qData = level[idx];
            const card = document.createElement('div');
            card.className = 'rounded-xl p-4';
            card.style.cssText = `background:var(--card); border:1px solid var(--border);`;

            let statusIcon, statusText, statusColor;
            if (ans.timeUp) {
                statusIcon = 'fa-clock';
                statusText = 'Waktu habis';
                statusColor = 'var(--warm)';
            } else if (ans.isCorrect) {
                statusIcon = 'fa-circle-check';
                statusText = 'Benar';
                statusColor = 'var(--correct)';
            } else {
                statusIcon = 'fa-circle-xmark';
                statusText = 'Salah';
                statusColor = 'var(--wrong)';
            }

            let userAnswerText = ans.timeUp
                ? '<span style="color:var(--warm);">Tidak dijawab</span>'
                : `<span style="color:${ans.isCorrect ? 'var(--correct)' : 'var(--wrong)'};">${qData.opts[ans.selected]}</span>`;

            let correctAnswerHint = '';
            if (!ans.isCorrect) {
                correctAnswerHint = `<div class="mt-2 text-xs" style="color:var(--correct);"><i class="fa-solid fa-check mr-1"></i>Jawaban benar: ${qData.opts[ans.correct]}</div>`;
            }

            card.innerHTML = `
                <div class="flex items-start justify-between gap-3 mb-2">
                    <p class="text-sm font-medium flex-1">${idx + 1}. ${qData.q}</p>
                    <div class="flex items-center gap-1 flex-shrink-0">
                        <i class="fa-solid ${statusIcon} text-xs" style="color:${statusColor};"></i>
                        <span class="text-xs font-semibold" style="color:${statusColor};">${statusText}</span>
                    </div>
                </div>
                <div class="text-sm" style="color:var(--muted);">Jawabanmu: ${userAnswerText}</div>
                ${correctAnswerHint}
            `;

            detailsEl.appendChild(card);
        });
    }

    /* ====================================================
       ANIMASI SKOR
    ==================================================== */
    function animateScore(el, target) {
        let current = 0;
        const duration = 800;
        const stepTime = duration / target;
        const interval = setInterval(() => {
            current++;
            el.textContent = current;
            if (current >= target) clearInterval(interval);
        }, Math.max(stepTime, 100));
        if (target === 0) el.textContent = '0';
    }

    /* ====================================================
       LANJUT LEVEL BERIKUTNYA
    ==================================================== */
    function goToNextLevel() {
        if (currentLevel < 9) {
            startQuiz(currentLevel + 1);
        }
    }

    /* ====================================================
       MODAL KONFIRMASI KELUAR
    ==================================================== */
    function confirmExit() {
        document.getElementById('confirm-modal').classList.remove('hidden');
        document.getElementById('confirm-modal').classList.add('flex');
    }

    function closeModal() {
        document.getElementById('confirm-modal').classList.add('hidden');
        document.getElementById('confirm-modal').classList.remove('flex');
    }

    function exitQuiz() {
        clearInterval(timerInterval);
        closeModal();
        navigateTo('level-page');
        renderLevelGrid();
    }

    /* ====================================================
       TOAST NOTIFIKASI
    ==================================================== */
    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast toast-${type}`;

        // Trigger tampil
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    /* ====================================================
       CONFETTI (Skor Sempurna)
    ==================================================== */
    function launchConfetti() {
        const colors = ['#00e68a', '#ff8c42', '#ff4757', '#ffd93d', '#6c5ce7', '#00b894'];
        for (let i = 0; i < 60; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + 'vw';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.width = (Math.random() * 8 + 4) + 'px';
            piece.style.height = (Math.random() * 8 + 4) + 'px';
            piece.style.animation = `confettiFall ${Math.random() * 2 + 1.5}s linear forwards`;
            piece.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(piece);
            setTimeout(() => piece.remove(), 4000);
        }
    }

    /* ====================================================
       PARTIKEL LANDING PAGE
    ==================================================== */
    function createParticles() {
        const container = document.getElementById('particles-container');
        if (!container) return;

        for (let i = 0; i < 18; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 5 + 2;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.opacity = Math.random() * 0.4 + 0.1;
            p.style.animation = `floatUp ${Math.random() * 8 + 6}s linear infinite`;
            p.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(p);
        }
    }

    /* ====================================================
       INISIALISASI
    ==================================================== */
    document.addEventListener('DOMContentLoaded', () => {
        createParticles();
        renderLevelGrid();
    });