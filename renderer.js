document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const btnMyDevices = document.getElementById('btnMyDevices');
    const btnCreate = document.getElementById('btnCreate');
    const btnMyVideos = document.getElementById('btnMyVideos');
    const content = document.querySelector('.content');

    // Check if buttons and content are correctly selected
    console.log('btnMyDevices:', btnMyDevices);
    console.log('btnCreate:', btnCreate);
    console.log('btnMyVideos:', btnMyVideos);
    console.log('content:', content);

    if (!btnMyDevices || !btnCreate || !btnMyVideos || !content) {
        console.error('One or more DOM elements not found.');
        return;
    }

    // Tab switching logic with logging
    btnMyDevices.addEventListener('click', () => {
        console.log('btnMyDevices clicked');
        setActiveTab('btnMyDevices');
        loadMyDevicesContent();
    });

    btnCreate.addEventListener('click', () => {
        console.log('btnCreate clicked');
        setActiveTab('btnCreate');
        loadCreateContent();
    });

    btnMyVideos.addEventListener('click', () => {
        console.log('btnMyVideos clicked');
        setActiveTab('btnMyVideos');
        loadMyVideosContent();
    });

    function setActiveTab(activeButtonId) {
        console.log(`setActiveTab called with activeButtonId: ${activeButtonId}`);
        document.querySelectorAll('.menu-item').forEach(button => {
            button.classList.remove('active');
        });
        document.getElementById(activeButtonId).classList.add('active');
    }

    function loadMyDevicesContent() {
        console.log('loadMyDevicesContent called');
        content.innerHTML = `
            <div class="sidebar">
                <div class="device-info">
                    <div class="avatar">
                        <img src="./src/img/Fly6pro.jpg" alt="Device Image">
                    </div>
                    <button class="disconnect-btn">DISCONNECT</button>
                </div>
                <div class="device-details">
                    <h3>FLY6 PRO</h3>
                    <p>Serial Number CES0320290196</p>
                </div>
                <div class="device-info-list">
                    <h4>Device Information</h4>
                    <div class="info-item">
                        <p>Firmware Version 4.09</p>
                        <p>Storage Capacity 59 GB</p>
                        <p>Locked Files 1%</p>
                        <p>File System FAT32</p>
                    </div>
                </div>
                <div class="links">
                    <a href="#">Quick start guide</a>
                    <a href="#">How to's</a>
                    <a href="#">User manual</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
            <div class="main-content">
                <div class="settings-header">
                    <h2>Device Settings</h2>
                    <button class="reset-btn">RESET TO DEFAULT</button>
                </div>
                <div class="settings-grid">
                    <div class="settings-column">
                        <div class="settings-item">
                            <label for="light-mode">Light mode settings</label>
                            <select id="light-mode">
                                <option value="">6 modes</option>
                            </select>
                        </div>
                        <div class="settings-item">
                            <label for="sound-volume">Sound volume</label>
                            <select id="sound-volume">
                                <option value="">5</option>
                            </select>
                        </div>
                        <div class="settings-item">
                            <label for="beep-interval">Beep interval</label>
                            <select id="beep-interval">
                                <option value="">Off</option>
                            </select>
                        </div>
                        <div class="settings-item">
                            <label for="incident-mode">Incident mode</label>
                            <input type="checkbox" id="incident-mode" class="toggle-switch">
                        </div>
                        <div class="settings-item">
                            <label for="idle-mode">Idle mode</label>
                            <input type="checkbox" id="idle-mode" class="toggle-switch">
                        </div>
                    </div>
                    <div class="settings-column">
                        <div class="settings-item">
                            <label for="video-resolution">Video resolution</label>
                            <select id="video-resolution">
                                <option value="">1080p 30fps</option>
                            </select>
                        </div>
                        <div class="settings-item">
                            <label for="video-segment-length">Video segment length</label>
                            <select id="video-segment-length">
                                <option value="">15 minutes</option>
                            </select>
                        </div>
                        <div class="settings-item">
                            <label for="logo-timestamp-display">Logo and timestamp display</label>
                            <input type="checkbox" id="logo-timestamp-display" class="toggle-switch">
                        </div>
                        <div class="settings-item format-sd-card">
                            <label for="format-sd">Format SD card</label>
                            <button class="format-btn">FORMAT SD CARD</button>
                        </div>
                    </div>
                </div>
                <div class="advanced-settings">
                    <h4>ADVANCED</h4>
                    <div class="settings-item">
                        <label for="manually-set-device-time">Manually set device time</label>
                        <select id="manually-set-device-time">
                            <option value="">---</option>
                        </select>
                    </div>
                </div>
                <div class="save-settings">
                    <button class="save-btn">SAVE SETTINGS</button>
                </div>
            </div>
        `;
    }

    function loadCreateContent() {
        console.log('loadCreateContent called');
        content.innerHTML = `
            <!-- Your Create content here -->
        `;
    }

    function loadMyVideosContent() {
        console.log('loadMyVideosContent called');
        content.innerHTML = `
            <div class="sorting-buttons">
                <button id="btnOrderName">Name</button>
                <button id="btnOrderDate">Date</button>
            </div>
            <div class="videos-list" id="itemsMyVideos">
                <!-- Videos will be dynamically loaded here -->
            </div>
        `;

        const itemsMyVideos = document.getElementById('itemsMyVideos');
        console.log('itemsMyVideos:', itemsMyVideos);
        itemsMyVideos.innerHTML = ''; // Clear previous content

        // Sample video data (in practice, fetch from your backend or local storage)
        const videos = [
            { name: 'Video 1', date: '2023-05-01', thumbnail: './src/img/img1.jpg' },
            { name: 'Video 2', date: '2023-05-02', thumbnail: './src/img/img2.jpg' },
            // Add more video objects here
        ];

        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.name}">
                <div class="video-info">
                    <p><strong>${video.name}</strong></p>
                    <p>${video.date}</p>
                </div>
            `;
            itemsMyVideos.appendChild(videoItem);
        });
    }

    // Initially load the My Videos content
    console.log('Initial load of My devices content');
    setActiveTab('btnMyDevices');
    loadMyDevicesContent();
});
