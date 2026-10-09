/*
 * Shared site components
 * ------------------------------------------------------------
 * Loads header/footer once for every page and automatically
 * marks the current navigation item. Also initializes the CLI and AI Assistant.
 */

(function () {
    "use strict";

    function loadText(url) {
        return fetch(url, { cache: "no-cache" }).then(function (response) {
            if (!response.ok) {
                throw new Error("Could not load " + url + " (" + response.status + ")");
            }
            return response.text();
        });
    }

    function currentPageKey() {
        var file = window.location.pathname.split("/").pop().toLowerCase();

        if (!file || file === "index.html") return "home";
        if (file === "about.html") return "about";
        if (file === "projects.html") return "projects";
        if (file === "restricted.html") return "restricted section";

        // Individual project pages belong to the Projects section.
        if (file.indexOf("project-") === 0) return "projects";

        return "";
    }

    function setCurrentNavigation() {
        var key = currentPageKey();

        document.querySelectorAll("[data-nav]").forEach(function (link) {
            var isCurrent = key && link.getAttribute("data-nav") === key;
            link.classList.toggle("is-current", !!isCurrent);

            if (isCurrent && link.classList.contains("nav-link")) {
                link.setAttribute("aria-current", "page");
            }
        });
    }

    function setYear() {
        document.querySelectorAll("[data-current-year]").forEach(function (el) {
            el.textContent = new Date().getFullYear();
        });
    }

    function initCLI() {
        const cliHTML = `
            <div id="cli-overlay" aria-hidden="true">
                <button class="cli-close" id="cli-close-btn">EXIT</button>
                <div class="cli-container">
                    <div id="cli-output" class="cli-output">DPO_OS Terminal v2.1.0<br>Type 'help' to see available commands. Use 'ls' to view directories and executable files.<br><br></div>
                    <div class="cli-input-line">
                        <span class="cli-prompt">guest@ocado.dev:~$</span>
                        <input type="text" id="cli-input" autocomplete="off" spellcheck="false">
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', cliHTML);

        const overlay = document.getElementById('cli-overlay');
        const input = document.getElementById('cli-input');
        const output = document.getElementById('cli-output');
        const closeBtn = document.getElementById('cli-close-btn');

        const toggleTerm = () => {
            const isActive = overlay.classList.contains('is-active');
            if (isActive) {
                overlay.classList.remove('is-active');
                overlay.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            } else {
                overlay.classList.add('is-active');
                overlay.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                setTimeout(() => input.focus(), 100);
            }
        };

        // Attach to header buttons (Desktop + Mobile)
        document.body.addEventListener('click', (e) => {
            const btn = e.target.closest('#mobile-term-toggle') || e.target.closest('#desktop-term-toggle');
            if (btn) {
                e.preventDefault();
                toggleTerm();
            }
        });

        closeBtn.addEventListener('click', toggleTerm);

        // Keep focus on input when clicking inside overlay
        overlay.addEventListener('click', (e) => {
            if (e.target !== closeBtn) input.focus();
        });

        // Command processing
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const cmd = input.value.trim();
                input.value = '';
                processCommand(cmd);
            }
        });

        function printLog(text, isHtml = false) {
            if (isHtml) {
                output.innerHTML += text + '\n';
            } else {
                output.innerHTML += text + '\n';
            }
            output.scrollTop = output.scrollHeight;
            overlay.scrollTop = overlay.scrollHeight;
        }

        function processCommand(rawCmd) {
            printLog(`<span class="cli-prompt">guest@ocado.dev:~$</span> ${rawCmd}`, true);
            const cmd = rawCmd.toLowerCase().trim();

            if (!cmd) return;

            const args = cmd.split(' ');
            const main = args[0];

            switch(main) {
                case 'help':
                    printLog(`Available commands:
  <span style="color:#fca5a5; font-weight:700;">help</span>     - Show this available instruction menu
  <span style="color:#fca5a5; font-weight:700;">ls</span>       - List site directories and project scripts
  <span style="color:#fca5a5; font-weight:700;">cat</span>      - Read a document file (e.g., cat about.txt)
  <span style="color:#fca5a5; font-weight:700;">run</span>      - Execute a project file (e.g., run empower.py)
  <span style="color:#fca5a5; font-weight:700;">cd</span>       - Change directory (e.g., cd restricted)
  <span style="color:#fca5a5; font-weight:700;">whoami</span>    - Print current active session user profile
  <span style="color:#fca5a5; font-weight:700;">clear</span>     - Clear terminal window buffer
  <span style="color:#fca5a5; font-weight:700;">date</span>      - Print current system timestamp
  <span style="color:#fca5a5; font-weight:700;">sudo</span>      - Execute a command with superuser privileges
  <span style="color:#fca5a5; font-weight:700;">exit</span>      - Close and hide terminal interface`, true);
                    break;
                case 'ls':
                    printLog(`Directory listing for /home/guest/portfolio:
Documents &amp; Lore:
  <span class="cli-file">about.txt</span>        (Bio &amp; overview)
  <span class="cli-file">story.txt</span>        (The Fresh Grad Reality Check)
  <span class="cli-dir">restricted/</span>      (Level 4 Classified Archive)

Project Executables:
  <span class="cli-file">empower.py</span>       (Project EmpowerPH Analytics)
  <span class="cli-file">signature.py</span>     (Offline Signature Verification)
  <span class="cli-file">infratrust.js</span>    (InfraTrust Decision Support)
  <span class="cli-file">volatility.r</span>     (Econometric Time Series)
  <span class="cli-file">dbm.js</span>           (Enterprise HR Automation Suite)`, true);
                    break;
                case 'cat':
                    if (args[1] === 'about.txt') {
                        printLog("<span class='cli-highlight'>Reading about.txt...</span>\nRedirecting to About page...", true);
                        setTimeout(() => window.location.href = 'about.html', 1000);
                    } else if (args[1] === 'story.txt') {
                        printLog("<span class='cli-highlight'>Reading story.txt...</span>\nRedirecting to The Fresh Grad Reality Check...", true);
                        setTimeout(() => window.location.href = 'job-hunt.html', 1000);
                    } else {
                        printLog(`cat: ${args[1] || 'missing operand'}: No such file or directory. Try typing 'ls'.`);
                    }
                    break;
                case 'run':
                    if (args[1] === 'empower.py') {
                        printLog("<span class='cli-highlight'>Executing Project EmpowerPH...</span>\n[=========> ] 90% \nDone. Redirecting...", true);
                        setTimeout(() => window.location.href = 'project-empower.html', 1500);
                    } else if (args[1] === 'signature.py') {
                        printLog("<span class='cli-highlight'>Loading ResNet-18...</span>\nVerifying signatures...\nRedirecting...", true);
                        setTimeout(() => window.location.href = 'project-signature.html', 1500);
                    } else if (args[1] === 'infratrust.js') {
                        printLog("<span class='cli-highlight'>Inverting matrices...</span>\nRunning OLS...\nRedirecting...", true);
                        setTimeout(() => window.location.href = 'project-infratrust.html', 1500);
                    } else if (args[1] === 'volatility.r') {
                        printLog("<span class='cli-highlight'>Fitting DCC-GARCH model...</span>\nPlotting conditional variance...\nRedirecting...", true);
                        setTimeout(() => window.location.href = 'project-volatility.html', 1500);
                    } else if (args[1] === 'dbm.js') {
                        printLog("<span class='cli-highlight'>Automating HR pipelines...</span>\nGenerating PDFs...\nRedirecting...", true);
                        setTimeout(() => window.location.href = 'project-dbm.html', 1500);
                    } else {
                        printLog("Usage: run [ empower.py | signature.py | infratrust.js | volatility.r | dbm.js ]");
                    }
                    break;
                case 'cd':
                    if (args[1] === 'restricted' || args[1] === 'restricted/') {
                        printLog("<span class='cli-highlight'>Requesting Level 4 Clearance...</span>\nAccessing Restricted Section...", true);
                        setTimeout(() => window.location.href = 'restricted.html', 1200);
                    } else if (args[1] === '..') {
                        printLog("You are already at the root directory.");
                    } else {
                        printLog(`cd: ${args[1] || ''}: No such directory`);
                    }
                    break;
                case 'whoami':
                    printLog("guest (Authorized portfolio visitor)");
                    break;
                case 'clear':
                    output.innerHTML = '';
                    break;
                case 'date':
                    printLog(new Date().toString());
                    break;
                case 'dracarys':
                    printLog("<span style='color:#ef4444;'>🔥 Valahd... 🔥</span>\nRedirecting to Restricted Section...", true);
                    setTimeout(() => window.location.href = 'restricted.html', 1500);
                    break;
                case 'sudo':
                    printLog("guest is not in the sudoers file. This incident will be reported.");
                    break;
                case 'exit':
                    toggleTerm();
                    break;
                default:
                    printLog(`Command not found: ${main}. Type 'help' for available commands.`);
            }
        }
    }

    function initAIAssistant() {
        const PROXY_URL = "https://dpo-ai-proxy.docado800.workers.dev"; 

        const widgetHTML = `
            <button id="ai-chat-bubble" aria-label="Open AI Assistant">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </button>
            <div id="ai-chat-window">
                <div class="ai-chat-header">
                    <div class="ai-chat-title">
                        <span class="ai-status-dot"></span>
                        <span>Dexter's AI Assistant</span>
                    </div>
                    <button class="ai-close-btn" id="ai-close-chat">&times;</button>
                </div>
                <div class="ai-chat-messages" id="ai-messages">
                    <div class="ai-msg assistant">
                        Hi! I'm Dexter's AI assistant. How can I help you today?
                    </div>
                </div>
                <div class="ai-chat-input-area">
                    <input type="text" id="ai-user-input" placeholder="Ask a question..." autocomplete="off">
                    <button class="ai-send-btn" id="ai-send-msg">Send</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', widgetHTML);

        const bubble = document.getElementById('ai-chat-bubble');
        const windowBox = document.getElementById('ai-chat-window');
        const closeBtn = document.getElementById('ai-close-chat');
        const input = document.getElementById('ai-user-input');
        const sendBtn = document.getElementById('ai-send-msg');
        const messagesContainer = document.getElementById('ai-messages');

        let chatHistory = [];

        bubble.addEventListener('click', () => {
            windowBox.classList.toggle('is-open');
            if (windowBox.classList.contains('is-open')) {
                input.focus();
            }
        });

        closeBtn.addEventListener('click', () => {
            windowBox.classList.remove('is-open');
        });

        async function handleUserMessage() {
            const text = input.value.trim();
            if (!text) return;

            appendMessage(text, 'user');
            input.value = '';

            // Add user message to history once here
            chatHistory.push({ role: 'user', content: text });

            const typingId = appendMessage('Thinking...', 'assistant');

            try {
                const responseText = await callAIProxy();
                
                // Add assistant response to history
                chatHistory.push({ role: 'assistant', content: responseText });

                updateMessage(typingId, responseText);
            } catch (err) {
                updateMessage(typingId, "Sorry, I'm having trouble connecting right now. Feel free to email Dexter directly at ocadodexterp@gmail.com!");
            }
        }

        sendBtn.addEventListener('click', handleUserMessage);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleUserMessage();
        });

        function appendMessage(text, sender) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `ai-msg ${sender}`;
            
            const formattedText = text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br>');
                
            msgDiv.innerHTML = formattedText;
    
            const id = 'msg-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
            msgDiv.id = id;
            messagesContainer.appendChild(msgDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            return id;
        }

        function updateMessage(id, text) {
            const msgDiv = document.getElementById(id);
            if (msgDiv) {
                const formattedText = text
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n/g, '<br>');
                    
                msgDiv.innerHTML = formattedText;
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }

        async function callAIProxy() {
            // Keep only the last 4 messages to prevent token rate limits
            const recentHistory = chatHistory.slice(-4);

            const res = await fetch(PROXY_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: recentHistory })
            });

            if (!res.ok) throw new Error('Proxy API Error');
            const data = await res.json();
            
            if (data.error) throw new Error(data.error);

            return data.reply || "No response received.";
        }
    }

    function injectComponents() {
        var headerSlot = document.getElementById("site-header");
        var footerSlot = document.getElementById("site-footer");

        var jobs = [];

        if (headerSlot) {
            jobs.push(
                loadText("components/header.html").then(function (html) {
                    headerSlot.outerHTML = html;
                })
            );
        }

        if (footerSlot) {
            jobs.push(
                loadText("components/footer.html").then(function (html) {
                    footerSlot.outerHTML = html;
                })
            );
        }

        Promise.all(jobs)
            .then(function () {
                setCurrentNavigation();
                setYear();
                initCLI();       // Fire up the terminal engine
                initAIAssistant(); // Fire up the floating AI assistant
            })
            .catch(function (error) {
                console.error("Shared component loader:", error);
            });
    }

    document.addEventListener("DOMContentLoaded", injectComponents);
})();
