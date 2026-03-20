export const initCommonUI = (version = "2.1.0") => {
    const body = document.body;
    
    // ヘッダー生成
    const header = document.createElement('header');
    header.className = 'app-header';
    header.innerHTML = `
        <a href="index.html" class="text-2xl font-pop cursor-pointer hover:opacity-80 transition-opacity">わりっぱ</a>
        <button id="menu-button" class="p-2 -mr-2 focus:outline-none hover:bg-orange-500 rounded-lg transition-colors">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
    `;
    body.insertBefore(header, body.firstChild);

    // サイドメニュー生成
    const menuContainer = document.createElement('div');
    menuContainer.innerHTML = `
        <div id="menu-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden opacity-0 transition-opacity duration-300"></div>
        <nav id="side-menu" class="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out p-6 overflow-y-auto">
            <div class="flex justify-end mb-4">
                <button id="close-menu-button" class="p-2 text-gray-500 hover:text-gray-800 focus:outline-none bg-gray-100 rounded-full">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <ul class="space-y-4">
                <li><a href="index.html" class="flex items-center text-lg text-gray-700 hover:text-orange-600 transition-colors font-medium">割り勘計算</a></li>
                <li><a href="order.html" class="flex items-center text-lg text-gray-700 hover:text-orange-600 transition-colors font-medium">オーダーメモ</a></li>
                <li class="border-t border-gray-200 pt-4 mt-4"></li>
                <li><a href="guide.html" target="_blank" rel="noopener noreferrer" class="flex items-center text-lg text-gray-700 hover:text-orange-600 transition-colors font-medium">使い方ガイド</a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdlvIr5ehyy3dInl_XTkA5F64H7yFIigL2dzFW0IoXnl8ajdw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="flex items-center text-lg text-gray-700 hover:text-orange-600 transition-colors font-medium">お問い合わせ</a></li>
                <li><a href="release-notes.html" target="_blank" rel="noopener noreferrer" class="flex items-center text-lg text-gray-700 hover:text-orange-600 transition-colors font-medium">リリースノート</a></li>
                <li class="border-t border-gray-200 pt-4 mt-4"></li>
                <li><a href="https://qcda-dev.github.io/HP/" target="_blank" rel="noopener noreferrer" class="flex items-center text-lg text-gray-700 hover:text-orange-600 transition-colors font-medium">QcDa Projectとは</a></li>
                <li class="pl-4 mt-2"><a href="https://qcda-dev.github.io/HP/terms-of-service.html" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-400 hover:text-gray-600 transition-colors block py-1">利用規約</a></li>
                <li class="pl-4"><a href="https://qcda-dev.github.io/HP/community-guidelines.html" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-400 hover:text-gray-600 transition-colors block py-1">コミュニティガイドライン</a></li>
            </ul>
            <p class="absolute bottom-6 right-6 text-sm text-gray-300 font-light">ver ${version}</p>
        </nav>
    `;
    body.appendChild(menuContainer);

    // フッター生成
    const footer = document.createElement('footer');
    footer.className = 'text-center py-6 bg-orange-100 text-gray-500 text-sm mt-auto w-full';
    footer.innerHTML = `
        <div class="mb-3 space-x-4">
             <a href="https://qcda-dev.github.io/HP/terms-of-service.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-600 transition-colors">利用規約</a>
             <a href="https://qcda-dev.github.io/HP/community-guidelines.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-600 transition-colors">コミュニティガイドライン</a>
        </div>
        <p>© 2026 QcDa Project. All Rights Reserved.</p>
    `;
    body.appendChild(footer);

    // ハンバーガーメニューの開閉ロジック
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-menu-button');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    const toggleMenu = (isOpen) => {
        if(isOpen) {
            menuOverlay.classList.remove('hidden');
            setTimeout(() => {
                menuOverlay.classList.remove('opacity-0');
                sideMenu.classList.remove('translate-x-full');
            }, 10);
        } else {
            sideMenu.classList.add('translate-x-full');
            menuOverlay.classList.add('opacity-0');
            setTimeout(() => menuOverlay.classList.add('hidden'), 300);
        }
    };

    menuButton.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(true); });
    closeButton.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(false); });
    menuOverlay.addEventListener('click', () => toggleMenu(false));
    sideMenu.addEventListener('click', e => e.stopPropagation());
};
