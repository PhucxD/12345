function verifyPassword() {
    const password = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');
    const mainContent = document.getElementById('main-content');
    const passwordSection = document.getElementById('password-section');

    if (password === 'catanddog') {
        passwordSection.style.display = 'none';
        mainContent.style.display = 'block';
    } else {
        errorMessage.textContent = '密碼錯誤，請重試！';
    }
}

function generateItinerary() {
    const checkboxes = document.querySelectorAll('#attractions input[type="checkbox"]:checked');
    const resultDiv = document.getElementById('itinerary-result');
    const cancelButton = document.querySelector('#itinerary-result .cancel-button');

    if (checkboxes.length > 4) {
        resultDiv.innerHTML = '<p style="color: red;">錯誤：最多只能選擇4個景點！</p><button onclick="clearItinerary()" class="cancel-button">取消</button>';
        cancelButton.classList.remove('hidden');
        return;
    }

    if (checkboxes.length === 0) {
        resultDiv.innerHTML = '<p style="color: red;">請至少選擇1個景點！</p><button onclick="clearItinerary()" class="cancel-button">取消</button>';
        cancelButton.classList.remove('hidden');
        return;
    }

    const attractionDetails = {
        '洪崖洞': '洪崖洞夜景迷人，傳統吊腳樓建築，品嚐地道重慶小吃，感受山城夜生活。',
        '解放碑': '解放碑是重慶地標，購物美食天堂，體驗繁華都市與歷史文化的交融。',
        '南山一棵樹': '南山一棵樹觀景台，俯瞰重慶全景，夜景璀璨，適合拍照與休憩。',
        '長江索道': '長江索道橫跨長江，體驗空中覽勝，欣賞兩岸風光，感受重慶立體交通。',
        '磁器口古鎮': '磁器口古鎮充滿古色古香，漫步石板路，品嚐麻花，感受重慶傳統文化。',
        '三峽博物館': '三峽博物館展示長江三峽歷史，文物豐富，適合了解重慶文化與歷史。',
        '人民大禮堂': '人民大禮堂氣勢恢宏，融合中西建築風格，夜景燈光秀令人驚嘆。',
        '朝天門': '朝天門位於兩江交匯處，觀賞長江與嘉陵江美景，感受重慶水文化。'
    };

    const attractions = Array.from(checkboxes).map(cb => cb.value);
    const timeSlots = [
        { start: '09:00', end: '10:30', duration: '1.5小時' },
        { start: '10:45', end: '12:15', duration: '1.5小時' },
        { start: '13:30', end: '15:30', duration: '2小時' },
        { start: '15:45', end: '17:45', duration: '2小時' }
    ];

    let itinerary = '<h2>您的重慶旅遊行程（2025年6月7日）</h2>';
    itinerary += '<p>以下是您選擇的景點，建議行程如下（包含午餐時間）：</p>';
    itinerary += '<ul>';

    attractions.forEach((attraction, index) => {
        const slot = timeSlots[index];
        itinerary += `<li>${slot.start}-${slot.end}（${slot.duration}）：${attraction}<br>${attractionDetails[attraction]}</li>`;
        if (index === 1) {
            itinerary += `<li>12:15-13:15（1小時）：午餐休息，建議品嚐重慶火鍋或小麵。</li>`;
        }
    });

    itinerary += '</ul>';
    itinerary += '<p>建議您按照以上時間安排，合理分配交通與休息時間，享受重慶美食與風景！</p>';
    itinerary += '<button onclick="clearItinerary()" class="cancel-button">取消</button>';

    resultDiv.innerHTML = itinerary;
    cancelButton.classList.remove('hidden');
}

function clearItinerary() {
    const resultDiv = document.getElementById('itinerary-result');
    const cancelButton = document.querySelector('#itinerary-result .cancel-button');
    resultDiv.innerHTML = '<button onclick="clearItinerary()" class="cancel-button hidden">取消</button>';
    cancelButton.classList.add('hidden');
}