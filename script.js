// ===== 文件夹内容定义 =====
const folderContents = {
    articles: {
        title: '文章分享',
        isFolder: true,
        files: [
            {
                id: 'article1',
                name: '深入理解 JavaScript 异步编程',
                date: '2024年12月',
                content: '<h2>深入理解 JavaScript 异步编程</h2><p>发布于 2024年12月</p><p>详解 Promise、Async/Await 和事件循环的工作原理和最佳实践。</p><h3>主要内容</h3><ul><li>回调函数的局限性</li><li>Promise 的三种状态</li><li>Async/Await 语法糖</li><li>事件循环机制</li><li>常见错误避免</li></ul>'
            },
            {
                id: 'article2',
                name: 'React 性能优化指南',
                date: '2024年11月',
                content: '<h2>React 性能优化指南</h2><p>发布于 2024年11月</p><p>实战技巧：Memo、useMemo、useCallback 等优化方案。</p><h3>性能优化技巧</h3><ul><li>React.memo 组件优化</li><li>useMemo 缓存计算</li><li>useCallback 缓存函数</li><li>代码分割和懒加载</li><li>虚拟列表实现</li></ul>'
            },
            {
                id: 'article3',
                name: '前端安全最佳实践',
                date: '2024年10月',
                content: '<h2>前端安全最佳实践</h2><p>发布于 2024年10月</p><p>XSS、CSRF 防护和数据加密的详细指南。</p><h3>安全防护</h3><ul><li>XSS 跨站脚本攻击防护</li><li>CSRF 跨站请求伪造防护</li><li>内容安全策略 (CSP)</li><li>数据加密和存储</li><li>依赖安全审计</li></ul>'
            },
            {
                id: 'article4',
                name: '如何成为更好的开发者',
                date: '2024年9月',
                content: '<h2>如何成为更好的开发者</h2><p>发布于 2024年9月</p><p>个人职业发展经验分享和提升建议。</p><h3>成长建议</h3><ul><li>坚持阅读源码</li><li>参与开源项目</li><li>做好技术文档</li><li>关注最新动态</li><li>建立学习计划</li></ul>'
            },
            {
                id: 'article5',
                name: 'CSS 3D 变换实战教程',
                date: '2024年8月',
                content: '<h2>CSS 3D 变换实战教程</h2><p>发布于 2024年8月</p><p>创建炫彩的3D网页效果和交互动画。</p><h3>3D 效果</h3><ul><li>perspective 透视效果</li><li>rotateX/Y/Z 旋转变换</li><li>translateZ 深度移动</li><li>3D 翻转卡片效果</li><li>动画组合应用</li></ul>'
            }
        ]
    }
};

// ===== 文件内容定义 =====
const fileContents = {
    about: {
        title: '关于我',
        isFile: true,
        content: `
            <h1>关于我</h1>
            <p>欢迎来到我的个人网页！这是一个以 Windows 7 桌面风格设计的创意作品集。</p>
            <h2>个人介绍</h2>
            <p>我是一名充满热情的开发者和设计师，致力于创造创新的数字体验。</p>
            <h2>兴趣爱好</h2>
            <ul>
                <li>Web 开发和设计</li>
                <li>UI/UX 设计</li>
                <li>创意编程项目</li>
                <li>开源贡献</li>
                <li>技术写作</li>
            </ul>
            <h2>座右铭</h2>
            <p><em>"代码是艺术，设计是灵魂。"</em></p>
        `
    },
    experience: {
        title: '工作经验',
        isFile: true,
        content: `
            <h1>工作经验</h1>
            <div class="file-item">
                <div class="file-item-title">Senior Web Developer - Tech Company</div>
                <div class="file-item-desc">2022年 - 至今<br>负责前端架构和团队管理</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">Full Stack Developer - Startup</div>
                <div class="file-item-desc">2020年 - 2022年<br>开发和维护企业级应用</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">Junior Developer - Digital Agency</div>
                <div class="file-item-desc">2018年 - 2020年<br>学习和成长阶段</div>
            </div>
            <h2>职位亮点</h2>
            <ul>
                <li>主导三个大型项目的开发</li>
                <li>指导5名初级开发者</li>
                <li>优化系统性能提升40%</li>
                <li>获得年度优秀员工奖</li>
            </ul>
        `
    },
    skills: {
        title: '技能和专长',
        isFile: true,
        content: `
            <h1>技能和专长</h1>
            <h2>前端技术</h2>
            <ul>
                <li>JavaScript / TypeScript (精通)</li>
                <li>React / Vue.js (精通)</li>
                <li>HTML5 / CSS3 (精通)</li>
                <li>Responsive Design (精通)</li>
                <li>Webpack / Vite (熟悉)</li>
            </ul>
            <h2>后端技术</h2>
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
        title: '项目作品',
        isFile: true,
        content: `
            <h1>项目作品</h1>
            <div class="file-item">
                <div class="file-item-title">电商平台</div>
                <div class="file-item-desc">使用 React + Node.js 构建的完整电商系统，包括支付集成和库存管理</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">社交媒体应用</div>
                <div class="file-item-desc">Vue.js + Firebase 实时聊天和社交分享应用</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">数据分析仪表板</div>
                <div class="file-item-desc">使用 D3.js 和 Chart.js 的数据可视化平台</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">移动应用</div>
                <div class="file-item-desc">React Native 跨平台移动应用，超过10万下载</div>
            </div>
            <div class="file-item">
                <div class="file-item-title">开源项目</div>
                <div class="file-item-desc">参与多个知名开源项目，获得1000+ Stars</div>
            </div>
        `
    },
    contact: {
        title: '聯繫方式',
        isFile: true,
        content: `
            <h1>聯繫方式'</h1>
            <h2>社交媒体</h2>
            <ul>
                <li>💼 LinkedIn: <a href= "https://www.linkedin.com/in/jefferson-chen-8943261b9">www.linkedin.com/in/jefferson-chen-8943261b9</a></li>
                <li>🐙 GitHub: <a href= "https://www.github.com/y1lichen">github.com/y1lichen</a></li>
            </ul>
            <h2>其他</h2>
            <ul>
                <li>📧 Email: <a href= "mailto:r14725013@ntu.edu.tw">r14725013@ntu.edu.tw</a></li>
                <li>📧 Email: <a href= "mailto:y1lichen@icloud.com">y1lichen@icloud.com</a></li>
                <li>📍 Location: Taipei, Taiwan</li>
            </ul>
            <h2>合作機會</h2>
            <p>歡迎透過上述方式與我聯繫！</p>
        `
    }
};

// ===== 全局变量 =====
let windowId = 0;
const windows = {};
let activeWindowId = null;
let draggedWindow = null;
let dragOffset = { x: 0, y: 0 };
const openFiles = new Set(); // 记录已打开的文件/文件夹
const openFolders = new Set();

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    initializeDesktop();
    updateClock();
    setInterval(updateClock, 1000);
    
    // 自动打开"关于我"文件
    openFile('about');
});

// ===== 更新时钟 =====
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('systemClock').textContent = `${hours}:${minutes}`;
}

// ===== 初始化桌面 =====
function initializeDesktop() {
    // 文件图标点击事件
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

    // 文件夹图标点击事件
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

    // 右键菜单
    document.addEventListener('contextmenu', (e) => {
        if (e.target.closest('.window')) return;
        e.preventDefault();
        showContextMenu(e.pageX, e.pageY);
    });

    // 隐藏右键菜单
    document.addEventListener('click', (e) => {
        const contextMenu = document.getElementById('contextMenu');
        if (!e.target.closest('#contextMenu')) {
            contextMenu.classList.remove('show');
        }
    });

    // 开始菜单按钮
    document.querySelector('.start-button').addEventListener('click', () => {
        alert('Windows 7 开始菜单\n\n这是一个创意个人网页！\n双击桌面上的文件或文件夹来浏览内容。');
    });
}

// ===== 打开文件 =====
function openFile(fileName) {
    // 防止重复打开
    if (openFiles.has(fileName)) {
        // 找到已打开的窗口并激活它
        for (const [id, win] of Object.entries(windows)) {
            if (win.file === fileName) {
                activateWindow(id);
                return;
            }
        }
    }

    if (!fileContents[fileName]) return;

    // 获取文件信息
    const content = fileContents[fileName];
    
    // 创建窗口
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

    // 设置初始位置
    windowEl.style.left = windows[id].x + 'px';
    windowEl.style.top = windows[id].y + 'px';

    // 激活窗口
    activateWindow(id);

    // 绑定事件
    bindWindowEvents(id);
}

// ===== 打开文件夹 =====
function openFolder(folderName) {
    // 防止重复打开
    if (openFolders.has(folderName)) {
        // 找到已打开的窗口并激活它
        for (const [id, win] of Object.entries(windows)) {
            if (win.folder === folderName) {
                activateWindow(id);
                return;
            }
        }
    }

    if (!folderContents[folderName]) return;

    // 获取文件夹信息
    const folder = folderContents[folderName];
    
    // 生成文件夹内容 HTML
    let folderHtml = `<h1>${folder.title}</h1>`;
    folder.files.forEach(file => {
        folderHtml += `
            <div class="file-item" data-file-id="${file.id}" style="cursor: pointer;">
                <div class="file-item-title">${file.name}</div>
                <div class="file-item-desc">${file.date}</div>
            </div>
        `;
    });
    
    // 创建窗口
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

    // 设置初始位置
    windowEl.style.left = windows[id].x + 'px';
    windowEl.style.top = windows[id].y + 'px';

    // 激活窗口
    activateWindow(id);

    // 绑定事件
    bindWindowEvents(id);
    
    // 绑定文件夹内文件的点击事件
    bindFolderFileEvents(id);
}

// ===== 创建窗口 =====
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

    // 绑定窗口按钮事件
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

// ===== 绑定窗口事件 =====
function bindWindowEvents(id) {
    const windowEl = windows[id].element;
    const titleBar = windowEl.querySelector('.window-title');

    // 点击激活窗口
    windowEl.addEventListener('mousedown', () => {
        activateWindow(id);
    });

    // 拖动窗口
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

// ===== 关闭窗口 =====
function closeWindow(id) {
    if (windows[id]) {
        // 从记录中删除
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

// ===== 显示右键菜单 =====
function showContextMenu(x, y) {
    const contextMenu = document.getElementById('contextMenu');
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.classList.add('show');
}

// ===== 键盘快捷键 =====
document.addEventListener('keydown', (e) => {
    // Ctrl + W 关闭当前窗口
    if (e.ctrlKey && e.key === 'w' && activeWindowId !== null) {
        closeWindow(activeWindowId);
    }
    
    // Alt + F4 关闭当前窗口
    if (e.altKey && e.key === 'F4' && activeWindowId !== null) {
        closeWindow(activeWindowId);
    }
});

// ===== 绑定文件夹内文件的点击事件 =====
function bindFolderFileEvents(folderId) {
    const windowEl = windows[folderId].element;
    const folderData = windows[folderId].folderData;
    
    windowEl.querySelectorAll('.file-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const fileId = item.dataset.fileId;
            const file = folderData.files.find(f => f.id === fileId);
            
            if (file) {
                openArticle(file.name, file.content);
            }
        });
    });
}

// ===== 打开文章 =====
function openArticle(title, content) {
    const id = windowId++;
    const windowEl = createWindow(id, null, title, content);
    
    // 添加到容器
    document.querySelector('.window-container').appendChild(windowEl);
    
    // 保存窗口引用
    windows[id] = {
        element: windowEl,
        title: title,
        x: 50 + (id % 3) * 30,
        y: 50 + (id % 3) * 30
    };

    // 设置初始位置
    windowEl.style.left = windows[id].x + 'px';
    windowEl.style.top = windows[id].y + 'px';

    // 激活窗口
    activateWindow(id);

    // 绑定事件
    bindWindowEvents(id);
}
