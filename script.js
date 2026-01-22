// ===== 文件夾內容定義 =====
const folderContents = {
    articles: {
        title: '文章分享',
        isFolder: true,
        files: [
            {
                id: 'article1',
                name: '深入理解 JavaScript 異步編程',
                date: '2024年12月',
                path: 'blogs/article1.html'
            },
            {
                id: 'article2',
                name: 'React 性能優化指南',
                date: '2024年11月',
                path: 'blogs/article2.html'
            },
            {
                id: 'article3',
                name: '前端安全最佳實踐',
                date: '2024年10月',
                path: 'blogs/article3.html'
            },
            {
                id: 'article4',
                name: '如何成為更好的開發者',
                date: '2024年9月',
                path: 'blogs/article4.html'
            },
            {
                id: 'article5',
                name: 'CSS 3D 變換實戰教程',
                date: '2024年8月',
                path: 'blogs/article5.html'
            }
        ]
    }
};

// ===== 文件內容定義 =====
const fileContents = {
    about: {
        title: '關於我',
        isFile: true,
        content: `
            <h1>關於我</h1>
            <p>歡迎來到我的個人網頁！這是一個以 Windows 7 桌面風格設計的創意作品集。</p>
            <h2>個人介紹</h2>
            <p>我是一名充滿熱情的開發者和設計師，致力於創造創新的數位體驗。</p>
            <h2>興趣愛好</h2>
            <ul>
                <li>Web 開發和設計</li>
                <li>UI/UX 設計</li>
                <li>創意編程項目</li>
                <li>開源貢獻</li>
                <li>技術寫作</li>
            </ul>
            <h2>座右銘</h2>
            <p><em>"代碼是藝術，設計是靈魂。"</em></p>
        `
    },
    experience: {
        title: '工作經驗',
        isFile: true,
        content: `
            <h1>工作經驗</h1>
            <div class="file-item">
                <div class="file-item-title">Senior Web Developer - Tech Company</div>
                <div class="file-item-desc">2022年 - 至今<br>負責前端架構和團隊管理</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">Full Stack Developer - Startup</div>
                <div class="file-item-desc">2020年 - 2022年<br>開發和維護企業級應用</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">Junior Developer - Digital Agency</div>
                <div class="file-item-desc">2018年 - 2020年<br>學習和成長階段</div>
            </div>
            <h2>職位亮點</h2>
            <ul>
                <li>主導三個大型項目的開發</li>
                <li>指導5名初級開發者</li>
                <li>優化系統性能提升40%</li>
                <li>獲得年度優秀員工獎</li>
            </ul>
        `
    },
    skills: {
        title: '技能和專長',
        isFile: true,
        content: `
            <h1>技能和專長</h1>
            <h2>前端技術</h2>
            <ul>
                <li>JavaScript / TypeScript (精通)</li>
                <li>React / Vue.js (精通)</li>
                <li>HTML5 / CSS3 (精通)</li>
                <li>Responsive Design (精通)</li>
                <li>Webpack / Vite (熟悉)</li>
            </ul>
            <h2>後端技術</h2>
            <ul>
                <li>Node.js / Express (精通)</li>
                <li>Python / Django (精通)</li>
                <li>SQL / NoSQL (熟悉)</li>
                <li>RESTful API (精通)</li>
            </ul>
            <h2>其他技能</h2>
            <ul>
                <li>Git / GitHub (精通)</li>
                <li>Docker (熟悉)</li>
                <li>CI/CD (熟悉)</li>
                <li>Figma Design (熟悉)</li>
            </ul>
        `
    },
    projects: {
        title: '項目作品',
        isFile: true,
        content: `
            <h1>項目作品</h1>
            <div class="file-item">
                <div class="file-item-title">電商平台</div>
                <div class="file-item-desc">使用 React + Node.js 構建的完整電商系統，包括支付整合和庫存管理</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">社交媒體應用</div>
                <div class="file-item-desc">Vue.js + Firebase 即時聊天和社交分享應用</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">數據分析儀表板</div>
                <div class="file-item-desc">使用 D3.js 和 Chart.js 的數據可視化平台</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">移動應用</div>
                <div class="file-item-desc">React Native 跨平台移動應用，超過10萬下載</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">開源項目</div>
                <div class="file-item-desc">參與多個知名開源項目，獲得1000+ Stars</div>
            </div>
        `
    },
    contact: {
        title: '聯繫方式',
        isFile: true,
        content: `
            <h1>聯繫方式</h1>
            <h2>社交媒體</h2>
            <ul>
                <li>💼 LinkedIn: <a href= "https://www.linkedin.com/in/jefferson-chen-8943261b9">www.linkedin.com/in/jefferson-chen-8943261b9</a></li>
                <li>GitHub: <a href= "https://www.github.com/y1lichen">github.com/y1lichen</a></li>
            </ul>
            <h2>其他</h2>
            <ul>
                <li>📧 Email: <a href= "mailto:r14725013@ntu.edu.tw">r14725013@ntu.edu.tw</a></li>
                <li>📧 Email: <a href= "mailto:y1lichen@icloud.com">y1lichen@icloud.com</a></li>
            </ul>
            <h2>合作機會</h2>
            <p>如果您對我的工作感興趣，或者有任何合作機會，歡迎通過上述方式與我聯繫！</p>
        `
    }
};

// ===== 全局變數 =====
let windowId = 0;
const windows = {};
let activeWindowId = null;
let draggedWindow = null;
let dragOffset = { x: 0, y: 0 };
const openFiles = new Set();
const openFolders = new Set();

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    initializeDesktop();
    updateClock();
    setInterval(updateClock, 1000);
    
    // 自動打開"關於我"文件
    openFile('about');
});

// ===== 更新時鐘 =====
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('systemClock').textContent = `${hours}:${minutes}`;
}

// ===== 初始化桌面 =====
function initializeDesktop() {
    // 文件圖標點擊事件
    document.querySelectorAll('.file-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const file = icon.dataset.file;
            openFile(file);
        });
        
        icon.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            const file = icon.dataset.file;
            openFile(file);
        });
    });

    // 文件夾圖標點擊事件
    document.querySelectorAll('.folder-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const folder = icon.dataset.folder;
            openFolder(folder);
        });
        
        icon.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            const folder = icon.dataset.folder;
            openFolder(folder);
        });
    });

    // 右鍵菜單
    document.addEventListener('contextmenu', (e) => {
        if (e.target.closest('.window')) return;
        e.preventDefault();
        showContextMenu(e.pageX, e.pageY);
    });

    // 隱藏右鍵菜單
    document.addEventListener('click', (e) => {
        const contextMenu = document.getElementById('contextMenu');
        if (!e.target.closest('#contextMenu')) {
            contextMenu.classList.remove('show');
        }
    });

    // 開始菜單按鈕
    document.querySelector('.start-button').addEventListener('click', () => {
        alert('Windows 7 開始菜單\n\n這是一個創意個人網頁！\n雙擊桌面上的文件或文件夾來瀏覽內容。');
    });
}

// ===== 打開文件 =====
function openFile(fileName) {
    // 防止重複打開
    if (openFiles.has(fileName)) {
        // 找到已打開的窗口並激活它
        for (const [id, win] of Object.entries(windows)) {
            if (win.file === fileName) {
                activateWindow(id);
                return;
            }
        }
    }

    if (!fileContents[fileName]) return;

    // 獲取文件信息
    const content = fileContents[fileName];
    
    // 創建窗口
    const id = windowId++;
    const windowEl = createWindow(id, fileName, content.title, content.content);
    
    // 添加到容器
    document.querySelector('.window-container').appendChild(windowEl);
    
    // 保存窗口引用
    windows[id] = {
        element: windowEl,
        file: fileName,
        title: content.title,
        x: 50 + (id % 3) * 30,
        y: 50 + (id % 3) * 30
    };

    openFiles.add(fileName);

    // 設置初始位置
    windowEl.style.left = windows[id].x + 'px';
    windowEl.style.top = windows[id].y + 'px';

    // 激活窗口
    activateWindow(id);

    // 綁定事件
    bindWindowEvents(id);
}

// ===== 打開文件夾 =====
function openFolder(folderName) {
    // 防止重複打開
    if (openFolders.has(folderName)) {
        // 找到已打開的窗口並激活它
        for (const [id, win] of Object.entries(windows)) {
            if (win.folder === folderName) {
                activateWindow(id);
                return;
            }
        }
    }

    if (!folderContents[folderName]) return;

    // 獲取文件夾信息
    const folder = folderContents[folderName];
    
    // 生成文件夾內容 HTML
    let folderHtml = `<h1>${folder.title}</h1>`;
    folder.files.forEach(file => {
        folderHtml += `
            <div class="file-item" data-file-id="${file.id}" style="cursor: pointer;">
                <div class="file-item-title">${file.name}</div>
                <div class="file-item-desc">${file.date}</div>
            </div>
        `;
    });
    
    // 創建窗口
    const id = windowId++;
    const windowEl = createWindow(id, folderName, folder.title, folderHtml);
    
    // 添加到容器
    document.querySelector('.window-container').appendChild(windowEl);
    
    // 保存窗口引用
    windows[id] = {
        element: windowEl,
        folder: folderName,
        folderData: folder,
        title: folder.title,
        x: 50 + (id % 3) * 30,
        y: 50 + (id % 3) * 30
    };

    openFolders.add(folderName);

    // 設置初始位置
    windowEl.style.left = windows[id].x + 'px';
    windowEl.style.top = windows[id].y + 'px';

    // 激活窗口
    activateWindow(id);

    // 綁定事件
    bindWindowEvents(id);
    
    // 綁定文件夾內文件的點擊事件
    bindFolderFileEvents(id);
}

// ===== 創建窗口 =====
function createWindow(id, folderName, title, content) {
    const window = document.createElement('div');
    window.className = 'window';
    window.id = `window-${id}`;
    window.innerHTML = `
        <div class="window-title">
            <div class="window-title-text">📁 ${title}</div>
            <div class="window-controls">
                <button class="window-button minimize-btn" title="最小化">_</button>
                <button class="window-button maximize-btn" title="最大化">□</button>
                <button class="window-button close-button" title="關閉">✕</button>
            </div>
        </div>
        <div class="window-content">
            ${content}
        </div>
    `;

    // 綁定窗口按鈕事件
    window.querySelector('.close-button').addEventListener('click', () => {
        closeWindow(id);
    });

    window.querySelector('.minimize-btn').addEventListener('click', () => {
        window.style.display = 'none';
    });

    window.querySelector('.maximize-btn').addEventListener('click', () => {
        if (window.style.width === '90vw') {
            window.style.width = '600px';
            window.style.height = '400px';
            window.style.left = windows[id].x + 'px';
            window.style.top = windows[id].y + 'px';
        } else {
            window.style.width = '90vw';
            window.style.height = '80vh';
            window.style.left = '5vw';
            window.style.top = '5vh';
        }
    });

    return window;
}

// ===== 綁定窗口事件 =====
function bindWindowEvents(id) {
    const windowEl = windows[id].element;
    const titleBar = windowEl.querySelector('.window-title');

    // 點擊激活窗口
    windowEl.addEventListener('mousedown', () => {
        activateWindow(id);
    });

    // 拖動窗口
    titleBar.addEventListener('mousedown', (e) => {
        draggedWindow = id;
        const rect = windowEl.getBoundingClientRect();
        dragOffset.x = e.clientX - rect.left;
        dragOffset.y = e.clientY - rect.top;
    });

    document.addEventListener('mousemove', (e) => {
        if (draggedWindow !== null) {
            const windowEl = windows[draggedWindow].element;
            windowEl.style.left = (e.clientX - dragOffset.x) + 'px';
            windowEl.style.top = (e.clientY - dragOffset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        draggedWindow = null;
    });
}

// ===== 激活窗口 =====
function activateWindow(id) {
    if (activeWindowId !== null) {
        windows[activeWindowId].element.classList.remove('active');
    }
    
    activeWindowId = id;
    windows[id].element.classList.add('active');
}

// ===== 關閉窗口 =====
function closeWindow(id) {
    if (windows[id]) {
        // 從記錄中刪除
        if (windows[id].file) {
            openFiles.delete(windows[id].file);
        }
        if (windows[id].folder) {
            openFolders.delete(windows[id].folder);
        }
        
        windows[id].element.remove();
        delete windows[id];
        if (activeWindowId === id) {
            activeWindowId = null;
        }
    }
}

// ===== 顯示右鍵菜單 =====
function showContextMenu(x, y) {
    const contextMenu = document.getElementById('contextMenu');
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.classList.add('show');
}

// ===== 綁定文件夾內文件的點擊事件 =====
function bindFolderFileEvents(folderId) {
    const windowEl = windows[folderId].element;
    const folderData = windows[folderId].folderData;
    
    windowEl.querySelectorAll('.file-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const fileId = item.dataset.fileId;
            const file = folderData.files.find(f => f.id === fileId);
            
            if (file) {
                openArticleInBrowser(file.name, file.path);
            }
        });
    });
}

// ===== 在瀏覽器窗口中打開文章 =====
function openArticleInBrowser(title, htmlPath) {
    const id = windowId++;
    
    // 獲取 HTML 文件內容
    fetch(htmlPath)
        .then(response => response.text())
        .then(htmlContent => {
            // 提取 body 內容
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
            const bodyContent = doc.body.innerHTML;
            
            // 創建瀏覽器窗口
            const windowEl = createBrowserWindow(id, title, bodyContent);
            
            // 添加到容器
            document.querySelector('.window-container').appendChild(windowEl);
            
            // 保存窗口引用
            windows[id] = {
                element: windowEl,
                title: title,
                x: 50 + (id % 3) * 30,
                y: 50 + (id % 3) * 30
            };

            // 設置初始位置
            windowEl.style.left = windows[id].x + 'px';
            windowEl.style.top = windows[id].y + 'px';

            // 激活窗口
            activateWindow(id);

            // 綁定事件
            bindWindowEvents(id);
        })
        .catch(error => {
            console.error('加載文章失敗:', error);
            alert('無法加載文章。請確保文件路徑正確。');
        });
}

// ===== 創建瀏覽器窗口 =====
function createBrowserWindow(id, title, content) {
    const window = document.createElement('div');
    window.className = 'window';
    window.id = `window-${id}`;
    window.style.display = 'flex';
    window.style.flexDirection = 'column';
    window.innerHTML = `
        <div class="window-title">
            <div class="window-title-text">🌐 ${title}</div>
            <div class="window-controls">
                <button class="window-button minimize-btn" title="最小化">_</button>
                <button class="window-button maximize-btn" title="最大化">□</button>
                <button class="window-button close-button" title="關閉">✕</button>
            </div>
        </div>
        <div class="browser-toolbar">
            <button class="browser-button" title="返回">←</button>
            <button class="browser-button" title="前進">→</button>
            <button class="browser-button" title="重新整理">↺</button>
            <div class="browser-address">${title}</div>
        </div>
        <div class="browser-content">
            ${content}
        </div>
    `;

    // 綁定窗口按鈕事件
    window.querySelector('.close-button').addEventListener('click', () => {
        closeWindow(id);
    });

    window.querySelector('.minimize-btn').addEventListener('click', () => {
        window.style.display = 'none';
    });

    window.querySelector('.maximize-btn').addEventListener('click', () => {
        if (window.style.width === '90vw') {
            window.style.width = '800px';
            window.style.height = '600px';
            window.style.left = windows[id].x + 'px';
            window.style.top = windows[id].y + 'px';
        } else {
            window.style.width = '90vw';
            window.style.height = '80vh';
            window.style.left = '5vw';
            window.style.top = '5vh';
        }
    });

    return window;
}

// ===== 鍵盤快捷鍵 =====
document.addEventListener('keydown', (e) => {
    // Ctrl + W 關閉當前窗口
    if (e.ctrlKey && e.key === 'w' && activeWindowId !== null) {
        closeWindow(activeWindowId);
    }
    
    // Alt + F4 關閉當前窗口
    if (e.altKey && e.key === 'F4' && activeWindowId !== null) {
        closeWindow(activeWindowId);
    }
});
