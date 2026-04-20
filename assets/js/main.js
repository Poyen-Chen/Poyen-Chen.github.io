// Main JavaScript for Portfolio Website

// Bulletproof AI Chat Widget - Redesigned for 100% reliability
(function() {
    'use strict';

    // Create chat widget HTML and inject it immediately
    function createChatWidget() {
        const chatHTML = `
            <div id="ai-chat-widget" class="ai-chat-widget" style="display: none;">
                <div class="chat-header">
                    <h3 data-i18n-zh="🤖 AI 助理">🤖 AI Assistant</h3>
                    <button id="chat-close" class="chat-close" onclick="closeChat()">×</button>
                </div>
                <div class="chat-messages" id="chat-messages">
                    <div class="chat-message ai-message">
                        <div class="message-content">
                            <span class="message-icon">🤖</span>
                            <div class="message-text" data-i18n-zh="你好！我是陳柏諺的 AI 助理,歡迎詢問關於他的背景、技能或作品的任何問題！">Hi! I'm Po-Yen's AI assistant. Ask me anything about his background, skills, or projects!</div>
                        </div>
                    </div>
                </div>
                <div class="chat-input-area">
                    <div class="quick-questions">
                        <button class="quick-btn" onclick="askQuestion('background')" data-i18n-zh="背景">Background</button>
                        <button class="quick-btn" onclick="askQuestion('skills')" data-i18n-zh="技能">Skills</button>
                        <button class="quick-btn" onclick="askQuestion('projects')" data-i18n-zh="作品">Projects</button>
                        <button class="quick-btn" onclick="askQuestion('contact')" data-i18n-zh="聯絡">Contact</button>
                        <button class="quick-btn" onclick="askQuestion('education')" data-i18n-zh="學歷">Education</button>
                        <button class="quick-btn" onclick="askQuestion('experience')" data-i18n-zh="經歷">Experience</button>
                        <button class="quick-btn" onclick="askQuestion('aiml')" data-i18n-zh="AI/ML">AI/ML</button>
                        <button class="quick-btn" onclick="askQuestion('techstack')" data-i18n-zh="技術棧">Tech Stack</button>
                    </div>
                    <div class="input-group">
                        <input type="text" id="chat-input" placeholder="Ask me anything..." data-i18n-placeholder-zh="有什麼想問的嗎..." onkeypress="handleKeyPress(event)" />
                        <button id="chat-send" onclick="sendMessage()" data-i18n-zh="送出">Send</button>
                    </div>
                </div>
            </div>
        `;

        // Insert at the end of body
        document.body.insertAdjacentHTML('beforeend', chatHTML);
        console.log('Chat widget HTML created and injected');
    }

    // Global functions for onclick handlers
    window.openChat = function() {
        const widget = document.getElementById('ai-chat-widget');
        if (widget) {
            widget.style.display = 'block';
            widget.classList.add('active');
            document.getElementById('chat-input').focus();
            console.log('Chat opened successfully');
        } else {
            console.error('Chat widget not found');
        }
    };

    window.closeChat = function() {
        const widget = document.getElementById('ai-chat-widget');
        if (widget) {
            widget.style.display = 'none';
            widget.classList.remove('active');
            console.log('Chat closed successfully');
        }
    };

    window.sendMessage = function() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (message) {
            addMessage(message, 'user');
            input.value = '';
            setTimeout(() => {
                const response = getResponse(message);
                addMessage(response, 'ai');
            }, 500);
        }
    };

    const QUICK_QUESTIONS = {
        background: { en: 'Tell me about your background',     zh: '介紹你的背景' },
        skills:     { en: 'What are your skills?',             zh: '你有哪些技能?' },
        projects:   { en: 'Show me your projects',             zh: '介紹你的作品' },
        contact:    { en: 'How can I contact you?',            zh: '要怎麼聯絡你?' },
        education:  { en: 'Tell me about your education',      zh: '介紹你的學歷' },
        experience: { en: 'What is your experience?',          zh: '你的工作經歷?' },
        aiml:       { en: 'Tell me about AI and machine learning', zh: '談談 AI 與機器學習' },
        techstack:  { en: 'What is your tech stack?',          zh: '你的技術棧是什麼?' }
    };

    function resolveQuestion(keyOrText) {
        const entry = QUICK_QUESTIONS[keyOrText];
        if (entry) {
            const lang = (localStorage.getItem('lang') === 'zh') ? 'zh' : 'en';
            return { shown: entry[lang], matcher: entry.en };
        }
        return { shown: keyOrText, matcher: keyOrText };
    }

    window.askQuestion = function(keyOrText) {
        const { shown, matcher } = resolveQuestion(keyOrText);
        addMessage(shown, 'user');
        setTimeout(() => {
            const response = getResponse(matcher);
            addMessage(response, 'ai');
        }, 500);
    };

    window.handleKeyPress = function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    function addMessage(text, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        if (!messagesContainer) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;

        const icon = sender === 'ai' ? '🤖' : '👤';
        messageDiv.innerHTML = `
            <div class="message-content">
                <span class="message-icon">${icon}</span>
                <div class="message-text">${text}</div>
            </div>
        `;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function currentLang() {
        const v = localStorage.getItem('lang');
        return v === 'zh' ? 'zh' : 'en';
    }

    function pickResponse(en, zh) {
        const pool = currentLang() === 'zh' ? zh : en;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function getResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Background and About
        if (lowerMessage.includes('background') || lowerMessage.includes('about')) {
            return pickResponse([
                "I'm Po-Yen Chen, a master's graduate in Simulation Sciences from RWTH Aachen University. I specialize in AI/ML, computer vision, and full-stack development with 3+ years of experience.",
                "My background combines chemical engineering with cutting-edge AI technologies. I hold an M.Sc. in Simulation Sciences from RWTH Aachen University and have worked on diverse AI/ML applications.",
                "I'm passionate about applying AI to solve real-world engineering problems. My academic background in chemical engineering gives me a unique perspective on how AI can transform traditional industries.",
                "I started with chemical engineering at NCKU, then evolved into AI/ML during my master's at RWTH Aachen. This combination allows me to bridge the gap between traditional engineering and modern AI solutions."
            ], [
                "我是陳柏諺,RWTH Aachen 大學模擬科學碩士,專精 AI/ML、電腦視覺與全端開發,擁有 3 年以上相關經驗。",
                "我的背景結合化學工程與前沿 AI 技術,擁有 RWTH Aachen 大學模擬科學碩士學位,參與過多個 AI/ML 應用專案。",
                "我熱衷於把 AI 應用在真實的工程問題上。化工背景讓我能從不同角度思考 AI 如何改變傳統產業。",
                "從成大化工起步,在 RWTH Aachen 的碩士期間轉向 AI/ML,這個組合讓我能在傳統工程與現代 AI 之間架起橋梁。"
            ]);
        }

        // Skills
        if (lowerMessage.includes('skill')) {
            return pickResponse([
                "My technical skills include Python, TensorFlow, Computer Vision, YOLO, LLMs, RAG, Streamlit, React, Node.js, AWS, Git, SQL, C++, and Docker.",
                "I'm proficient in Python (my primary language), TensorFlow for ML, Computer Vision with YOLO, LLMs and RAG systems, plus full-stack development with React and Node.js.",
                "My skill set spans AI/ML (Python, TensorFlow, Computer Vision), cloud services (AWS), version control (Git), databases (SQL), web development (React, Node.js), and containerization (Docker).",
                "I specialize in Python-based AI/ML, particularly computer vision and LLMs. I also work with modern web technologies, cloud platforms, and have strong software engineering practices."
            ], [
                "技術專長包含 Python、TensorFlow、電腦視覺、YOLO、LLM、RAG、Streamlit、React、Node.js、AWS、Git、SQL、C++ 與 Docker。",
                "主要使用 Python 做 AI/ML,熟悉 YOLO 電腦視覺、LLM 與 RAG 系統,也熟 React/Node.js 全端開發。",
                "技能涵蓋 AI/ML(Python、TensorFlow、電腦視覺)、雲端(AWS)、版控(Git)、資料庫(SQL)、網頁開發(React、Node.js)與容器化(Docker)。",
                "專精 Python 的 AI/ML 開發,尤其是電腦視覺與 LLM,也熟悉現代網頁技術與雲端平台。"
            ]);
        }

        // Projects
        if (lowerMessage.includes('project')) {
            return pickResponse([
                "My key projects include: 1) Particle Size Analysis using YOLO-based instance segmentation, 2) Vehicle Recommendation System with RAG-powered chatbot, 3) Customer Experience AI with LLM integration, 4) Quantum ML Pipeline for simulation data, and 5) This portfolio website with AI integration!",
                "I've worked on diverse projects: computer vision applications for materials science, LLM-powered recommendation systems, data processing pipelines, and full-stack web applications including this AI-enhanced portfolio.",
                "My thesis focused on particle size analysis using YOLO-based instance segmentation for waste management. I've also built recommendation systems with RAG technology, customer service AI, and various web applications.",
                "Notable projects: AI-powered particle analysis system, intelligent vehicle recommendation chatbot, customer experience AI with web scraping, industrial data processing pipeline, and this interactive portfolio with AI integration."
            ], [
                "主要作品:1) 基於 YOLO 實例分割的粒徑分析、2) RAG 驅動的車輛推薦系統、3) LLM 整合的客戶體驗 AI、4) 量子力學模擬 ML pipeline,以及 5) 這個整合 AI 的作品集網站!",
                "我參與過多樣化的專案:材料科學的電腦視覺應用、LLM 驅動的推薦系統、資料處理 pipeline,以及全端網頁應用。",
                "碩士論文聚焦於使用 YOLO 實例分割處理廢棄物管理場域的粒徑分析,也打造過 RAG 推薦系統、客服 AI 與多個網頁應用。",
                "代表作品:AI 粒徑分析系統、智慧車輛推薦聊天機器人、以 web-scraping 打造的客戶體驗 AI、工業資料處理 pipeline,以及這個整合 AI 的作品集。"
            ]);
        }

        // Contact
        if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
            return pickResponse([
                "You can reach me at sam9960628@gmail.com. I'm on LinkedIn (po-yen-chen-311bb114a) and GitHub (Poyen-Chen). Based in Aachen, Germany and open to opportunities worldwide.",
                "My email is sam9960628@gmail.com. I'm always open to discussing opportunities, collaborations, or interesting conversations about AI and technology. You can also find me on LinkedIn and GitHub.",
                "Feel free to contact me at sam9960628@gmail.com. I'm currently based in Aachen, Germany and open to remote work, relocation opportunities, and freelance projects.",
                "You can reach me via email at sam9960628@gmail.com. I'm active on LinkedIn and GitHub, and I'm always interested in new opportunities, research collaborations, and interesting projects."
            ], [
                "歡迎透過 sam9960628@gmail.com 聯絡我,也可以在 LinkedIn(po-yen-chen-311bb114a)與 GitHub(Poyen-Chen)找到我。目前在德國阿亨,歡迎世界各地的機會。",
                "我的 Email 是 sam9960628@gmail.com,很樂意討論合作或聊 AI 與技術。也可以在 LinkedIn 或 GitHub 找到我。",
                "歡迎聯絡 sam9960628@gmail.com。目前位於德國阿亨,可遠端、可搬遷,也歡迎自由接案機會。",
                "Email 是 sam9960628@gmail.com,LinkedIn 與 GitHub 都有在使用,持續關注新機會與研究合作。"
            ]);
        }

        // Education
        if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university')) {
            return pickResponse([
                "I hold an M.Sc. in Simulation Sciences from RWTH Aachen University (2021-2025) with thesis on 'Determination of Particle Size Distributions Using a YOLO-Based Instance Segmentation Approach' and a B.Sc. in Chemical Engineering from National Cheng Kung University (2014-2018).",
                "My educational journey: B.Sc. in Chemical Engineering from NCKU, followed by M.Sc. in Simulation Sciences from RWTH Aachen University, specializing in computational engineering and AI applications.",
                "I completed my master's degree in Simulation Sciences at RWTH Aachen University, focusing on computer vision applications in materials science and particle analysis using deep learning techniques.",
                "My academic background includes a bachelor's in Chemical Engineering from NCKU and a master's in Simulation Sciences from RWTH Aachen, where I specialized in AI applications for engineering problems."
            ], [
                "RWTH Aachen 大學模擬科學碩士(2021–2025),論文題目為「Determination of Particle Size Distributions Using a YOLO-Based Instance Segmentation Approach」;國立成功大學化學工程學士(2014–2018)。",
                "學歷:成大化工學士,接著在 RWTH Aachen 讀模擬科學碩士,專注計算工程與 AI 應用。",
                "在 RWTH Aachen 大學完成模擬科學碩士,聚焦材料科學的電腦視覺應用,以及深度學習在粒徑分析上的實作。",
                "學術背景包含成大化工學士與 RWTH Aachen 模擬科學碩士,主題圍繞 AI 如何解決工程問題。"
            ]);
        }

        // Experience
        if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
            return pickResponse([
                "I have 3+ years of experience in AI/ML, computer vision, and full-stack development. I've worked on research projects, participated in hackathons like the Porsche Digital Campus Challenge, and developed various applications.",
                "My experience spans AI/ML applications, computer vision projects, web development, and research. I'm currently serving as web maintainer for the Taiwanese Student Association Aachen and open to new opportunities.",
                "I've gained experience through research projects, hackathons, and personal projects. I'm currently contributing to the Taiwanese community as web maintainer for TWSV Aachen and interested in full-time positions.",
                "With 3+ years in AI/ML and development, I've worked on diverse projects from computer vision to web applications. I'm also involved in community work as web maintainer for the Taiwanese Student Association Aachen."
            ], [
                "3 年以上 AI/ML、電腦視覺與全端開發經驗。參與過研究專案、Porsche Digital Campus Challenge 等黑客松,並開發多項應用。",
                "經驗橫跨 AI/ML 應用、電腦視覺、網頁開發與研究,目前也擔任德國阿亨台灣同學會的網站維護者,正在尋找新機會。",
                "透過研究專案、黑客松與個人專案累積經驗,目前為 TWSV Aachen 的網站維護者,也在尋找全職機會。",
                "擁有 3 年以上 AI/ML 與開發經驗,作品涵蓋電腦視覺到網頁應用,同時也參與 TWSV Aachen 的社群工作。"
            ]);
        }

        // AI/ML
        if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
            return pickResponse([
                "I specialize in AI and machine learning, particularly computer vision with YOLO, LLMs, and RAG systems. I've applied these technologies to solve real-world engineering problems in materials science and industrial applications.",
                "My AI/ML expertise includes computer vision, natural language processing with LLMs, and building intelligent systems. I love applying these technologies to practical problems like particle analysis and recommendation systems.",
                "I work extensively with AI/ML technologies: computer vision for object detection and instance segmentation, LLMs for natural language understanding, and RAG systems for intelligent information retrieval and recommendations.",
                "My passion is AI/ML, especially computer vision and language models. I've implemented these technologies in various projects from materials science to recommendation systems and customer service applications."
            ], [
                "專精 AI 與機器學習,尤其是 YOLO 電腦視覺、LLM 與 RAG 系統。曾把這些技術應用在材料科學與工業的實際問題上。",
                "AI/ML 專長包含電腦視覺、LLM 自然語言處理,以及打造智慧系統。喜歡把這些技術用在粒徑分析、推薦系統等實務問題。",
                "大量使用 AI/ML 技術:電腦視覺做物件偵測與實例分割、LLM 做語言理解、RAG 做智慧檢索與推薦。",
                "我對 AI/ML 充滿熱情,特別是電腦視覺與語言模型,從材料科學到推薦系統與客服應用都有實作經驗。"
            ]);
        }

        // Computer Vision
        if (lowerMessage.includes('computer vision') || lowerMessage.includes('yolo') || lowerMessage.includes('cv')) {
            return pickResponse([
                "I specialize in computer vision, particularly using YOLO for object detection and instance segmentation. My thesis focused on particle size analysis using these techniques for waste management applications.",
                "Computer vision is one of my core strengths. I've worked extensively with YOLO for object detection and have applied it to materials science applications, particularly in particle analysis.",
                "I'm experienced in computer vision applications, especially YOLO-based systems for object detection and segmentation. This was the focus of my master's research on particle size distribution analysis.",
                "My computer vision expertise includes YOLO implementations for object detection and instance segmentation, particularly applied to industrial and materials science problems like particle analysis."
            ], [
                "專精電腦視覺,特別是以 YOLO 進行物件偵測與實例分割。碩士論文就是用這些技術做廢棄物管理場域的粒徑分析。",
                "電腦視覺是我的核心專長之一,熟悉 YOLO 物件偵測,也應用在材料科學的粒徑分析上。",
                "在電腦視覺應用上有經驗,尤其是 YOLO 系列的物件偵測與分割,也是我碩士研究的主軸。",
                "電腦視覺專長包含 YOLO 的物件偵測與實例分割實作,特別是工業與材料科學場景。"
            ]);
        }

        // Web Development
        if (lowerMessage.includes('web') || lowerMessage.includes('development') || lowerMessage.includes('frontend') || lowerMessage.includes('backend')) {
            return pickResponse([
                "I'm experienced in full-stack web development using React, Node.js, and modern web technologies. I've built various applications including this portfolio with AI integration and maintain the TWSV Aachen website.",
                "My web development skills include React for frontend, Node.js for backend, and modern web technologies. I enjoy creating interactive and responsive web applications and currently serve as web maintainer for TWSV Aachen.",
                "I work with full-stack web technologies: React for user interfaces, Node.js for server-side logic, and various modern web tools and frameworks. I also maintain websites for community organizations.",
                "Web development is another area of expertise. I use React, Node.js, and modern web technologies to build responsive and interactive applications, including community websites and this AI-enhanced portfolio."
            ], [
                "熟悉全端網頁開發,使用 React、Node.js 與現代網頁技術。打造過多個應用,包括這個整合 AI 的作品集,以及維護 TWSV Aachen 網站。",
                "網頁開發技能包含 React(前端)、Node.js(後端)與現代網頁工具,喜歡打造互動式、響應式的網站,目前也在維護 TWSV Aachen 的社群網站。",
                "使用全端網頁技術:React 做 UI、Node.js 做後端,加上多種現代工具與框架,也為社群組織維護網站。",
                "網頁開發是我的另一個專長,使用 React、Node.js 與現代網頁技術打造響應式應用,包含社群網站與這個 AI 作品集。"
            ]);
        }

        // Research
        if (lowerMessage.includes('research') || lowerMessage.includes('thesis') || lowerMessage.includes('study')) {
            return pickResponse([
                "My research focused on applying computer vision to materials science, specifically particle size analysis using YOLO-based instance segmentation for waste management applications.",
                "I conducted research on computer vision applications in materials science, developing AI systems for particle analysis using deep learning techniques. My thesis explored automated particle size distribution analysis.",
                "My master's thesis explored the intersection of computer vision and materials science, developing AI-powered solutions for particle size analysis using YOLO-based instance segmentation.",
                "I researched AI applications in materials science, particularly developing computer vision systems for automated particle analysis using deep learning techniques for industrial applications."
            ], [
                "研究聚焦於電腦視覺在材料科學的應用,具體使用 YOLO 實例分割進行廢棄物管理場域的粒徑分析。",
                "在材料科學的電腦視覺應用上做研究,用深度學習技術打造 AI 粒徑分析系統,論文主題是自動化粒徑分佈分析。",
                "碩士論文探索電腦視覺與材料科學的交集,用 YOLO 實例分割打造 AI 驅動的粒徑分析方案。",
                "研究 AI 在材料科學的應用,特別是用深度學習打造自動化粒徑分析的電腦視覺系統。"
            ]);
        }

        // Python
        if (lowerMessage.includes('python') || lowerMessage.includes('programming')) {
            return pickResponse([
                "Python is my primary programming language. I use it extensively for AI/ML, data processing, and building various applications with frameworks like TensorFlow, Streamlit, and computer vision libraries.",
                "I'm proficient in Python and use it for most of my AI/ML work, data analysis, and application development. It's my go-to language for rapid prototyping and building AI applications.",
                "Python is my main language for AI/ML development. I also work with C++, JavaScript, SQL, and MATLAB for different types of projects, but Python is my primary tool for AI applications.",
                "I specialize in Python for AI/ML applications, using it with TensorFlow, computer vision libraries, Streamlit for web apps, and various data processing tools for my research and projects."
            ], [
                "Python 是我的主要程式語言,廣泛用於 AI/ML、資料處理,以及搭配 TensorFlow、Streamlit 與電腦視覺函式庫的各種應用開發。",
                "精通 Python,用它處理大多數 AI/ML 工作、資料分析與應用開發,是我快速原型與打造 AI 應用的首選。",
                "Python 是 AI/ML 開發的主力語言,也會視專案使用 C++、JavaScript、SQL 與 MATLAB,但 Python 仍是 AI 應用的主要工具。",
                "專精 Python 的 AI/ML 應用開發,搭配 TensorFlow、電腦視覺函式庫、Streamlit,以及多種資料處理工具。"
            ]);
        }

        // Location
        if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('germany') || lowerMessage.includes('aachen')) {
            return pickResponse([
                "I'm currently based in Aachen, Germany, where I completed my master's degree at RWTH Aachen University. I'm open to remote work and relocation opportunities worldwide.",
                "I'm located in Aachen, Germany, having just completed my master's at RWTH Aachen University. I'm flexible with remote work and willing to relocate for great opportunities.",
                "Based in Aachen, Germany, where I studied at RWTH Aachen University. I'm open to both remote positions and opportunities that require relocation, and I'm actively involved in the local Taiwanese community.",
                "I'm in Aachen, Germany, having finished my master's at RWTH Aachen University. I'm interested in opportunities worldwide, both remote and on-site, and I contribute to the local Taiwanese Student Association."
            ], [
                "目前位於德國阿亨,在 RWTH Aachen 大學完成碩士學業。歡迎遠端工作與世界各地的機會。",
                "人在德國阿亨,剛從 RWTH Aachen 畢業,對遠端與搬遷都彈性,也在尋找合適的機會。",
                "位於德國阿亨,RWTH Aachen 校友,歡迎遠端或需要搬遷的職缺,同時也積極參與當地的台灣社群。",
                "在德國阿亨,RWTH Aachen 大學畢業,尋找世界各地的機會(遠端或現場都可),也參與阿亨台灣同學會的事務。"
            ]);
        }

        // TWSV Aachen
        if (lowerMessage.includes('twsv') || lowerMessage.includes('taiwanese') || lowerMessage.includes('community') || lowerMessage.includes('association')) {
            return pickResponse([
                "I serve as the web maintainer for the Taiwanese Student Association Aachen (TWSV Aachen) since 2023. This role allows me to combine my technical skills with my passion for supporting the Taiwanese community in Germany.",
                "I'm involved with the Taiwanese Student Association Aachen as their web maintainer. This community organization promotes cultural exchange and friendship among Taiwanese students and the international community in Aachen.",
                "I contribute to the Taiwanese community in Aachen by maintaining the TWSV Aachen website. The association organizes various events including welcome parties, Taiwan Night celebrations, and cultural gatherings.",
                "I'm proud to serve as web maintainer for the Taiwanese Student Association Aachen, helping to bridge Taiwanese students with the international community through technology and cultural events."
            ], [
                "從 2023 年起擔任德國阿亨台灣同學會(TWSV Aachen)的網站維護者,這個角色讓我能用技術支持在德的台灣社群。",
                "參與德國阿亨台灣同學會的網站維護工作,這個社團透過文化交流與活動,連結台灣學生與國際社群。",
                "為阿亨的台灣社群維護 TWSV Aachen 網站,社團會舉辦迎新派對、台灣之夜、文化聚會等活動。",
                "很榮幸擔任德國阿亨台灣同學會的網站維護者,透過技術與文化活動,連結台灣學生與國際社群。"
            ]);
        }

        // Languages
        if (lowerMessage.includes('language') || lowerMessage.includes('speak') || lowerMessage.includes('chinese') || lowerMessage.includes('german')) {
            return pickResponse([
                "I speak English (fluent), German (intermediate), and Chinese (native). This multilingual ability helps me work effectively in international environments and contribute to diverse communities.",
                "My language skills include English (fluent), German (intermediate), and Chinese (native). This helps me collaborate effectively in international settings and engage with diverse communities.",
                "I'm fluent in English, have intermediate German skills, and speak Chinese as my native language. This linguistic diversity supports my work in international environments and community involvement.",
                "I communicate in English (fluent), German (intermediate), and Chinese (native). These language skills enable me to work effectively in international contexts and contribute to multicultural communities."
            ], [
                "語言能力:英文(流利)、德文(中等)、中文(母語)。多語能力幫助我在國際環境中順利合作。",
                "語言組合:英文流利、德文中等、中文母語,讓我能在國際場合協作、也能深入多元社群。",
                "英文流利、德文中等、中文母語,支撐我的國際工作與社群參與。",
                "以英文(流利)、德文(中等)與中文(母語)溝通,這些語言能力讓我能在多文化環境中發揮。"
            ]);
        }

        // Greeting
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return pickResponse([
                "Hello! I'm Po-Yen's AI assistant. How can I help you learn about his background, skills, projects, or community involvement?",
                "Hi there! I'm here to help you learn about Po-Yen's professional background, AI/ML expertise, and community work. What would you like to know?",
                "Hey! I'm Po-Yen's AI assistant. I can tell you about his work, skills, projects, research, and community involvement. What interests you?",
                "Hello! I'm here to help you discover more about Po-Yen's expertise in AI/ML, computer vision, web development, and his role in the Taiwanese community. What would you like to learn?"
            ], [
                "你好!我是陳柏諺的 AI 助理,可以協助你了解他的背景、技能、作品或社群參與。想知道什麼呢?",
                "嗨!我可以介紹陳柏諺的專業背景、AI/ML 專長與社群貢獻,有什麼想了解的?",
                "你好!我是陳柏諺的 AI 助理,可以告訴你他的工作、技能、作品、研究與社群參與,對哪部分有興趣?",
                "嗨!想進一步了解陳柏諺在 AI/ML、電腦視覺、網頁開發與台灣社群的經驗嗎?"
            ]);
        }

        // Help
        if (lowerMessage.includes('help') || lowerMessage.includes('what can you do') || lowerMessage.includes('assist')) {
            return pickResponse([
                "I can help you learn about Po-Yen's background, skills, projects, education, research, community involvement, and contact information. Just ask me anything specific or use the quick question buttons above!",
                "I'm here to provide information about Po-Yen's professional experience, technical skills, projects, research work, community involvement, and how to get in touch. Feel free to ask anything!",
                "I can tell you about Po-Yen's AI/ML expertise, web development skills, research work, community involvement with TWSV Aachen, and professional background. What would you like to know?",
                "I'm designed to help you learn about Po-Yen's career, skills, projects, research, community work, and experience. Ask me anything about his background or use the quick buttons for common questions!"
            ], [
                "我可以介紹陳柏諺的背景、技能、作品、學歷、研究、社群參與與聯絡方式,直接問我,或使用上方的快速按鈕!",
                "我可以提供陳柏諺的專業經驗、技術能力、作品、研究、社群參與與聯絡方式,有什麼想了解的?",
                "我可以分享陳柏諺的 AI/ML 專長、網頁開發技能、研究工作、TWSV Aachen 社群參與與專業背景,想知道哪些?",
                "我是用來協助你認識陳柏諺的職涯、技能、作品、研究、社群工作與經驗,問我任何問題或使用快速按鈕都可以!"
            ]);
        }

        // Who are you
        if (lowerMessage.includes('who are you') || lowerMessage.includes('what are you')) {
            return pickResponse([
                "I'm Po-Yen's AI assistant! I can help you learn about his background, skills, projects, research, community involvement, and experience. I'm designed to provide personalized information about his portfolio.",
                "I'm an AI assistant created to help you learn about Po-Yen Chen's professional background and expertise. I can answer questions about his work, skills, research, and community contributions.",
                "I'm Po-Yen's digital assistant, here to help you discover more about his career, projects, technical skills, and community involvement. Think of me as your guide to his portfolio!",
                "I'm an AI chatbot designed to provide information about Po-Yen's professional journey, from his education and skills to his projects, research, and community work."
            ], [
                "我是陳柏諺的 AI 助理!可以協助你了解他的背景、技能、作品、研究、社群參與與經驗,為他的作品集量身打造。",
                "我是為了介紹陳柏諺的專業背景與能力而打造的 AI 助理,可以回答關於工作、技能、研究與社群貢獻的問題。",
                "我是陳柏諺的數位助理,幫助你深入了解他的職涯、專案、技術能力與社群參與,可以把我當作他作品集的導覽!",
                "我是一個 AI 聊天機器人,提供陳柏諺職涯旅程的相關資訊,從學歷、技能到作品、研究與社群工作。"
            ]);
        }

        // Tech Stack
        if (lowerMessage.includes('tech') || lowerMessage.includes('stack') || lowerMessage.includes('tools') || lowerMessage.includes('framework')) {
            return pickResponse([
                "My tech stack includes Python, TensorFlow, Computer Vision, YOLO, LLMs, RAG, Streamlit, React, Node.js, AWS, Git, SQL, C++, and Docker. I work with both AI/ML frameworks and modern web technologies.",
                "I use a diverse tech stack: Python for AI/ML, React/Node.js for web development, AWS for cloud services, TensorFlow for deep learning, and various tools for version control and databases.",
                "My technology toolkit spans AI/ML (TensorFlow, computer vision, LLMs), web development (React, Node.js, Streamlit), cloud platforms (AWS), and development tools (Git, SQL, Docker).",
                "I work with modern technologies: Python ecosystem for AI/ML, React ecosystem for web development, cloud services, computer vision frameworks, and various development and deployment tools."
            ], [
                "技術棧包含 Python、TensorFlow、電腦視覺、YOLO、LLM、RAG、Streamlit、React、Node.js、AWS、Git、SQL、C++ 與 Docker,涵蓋 AI/ML 框架與現代網頁技術。",
                "使用多元技術棧:Python 做 AI/ML、React/Node.js 做網頁、AWS 雲端服務、TensorFlow 做深度學習,以及版控、資料庫等工具。",
                "技術工具箱涵蓋 AI/ML(TensorFlow、電腦視覺、LLM)、網頁(React、Node.js、Streamlit)、雲端(AWS)、開發工具(Git、SQL、Docker)。",
                "使用現代技術:Python 生態做 AI/ML、React 生態做網頁、雲端服務、電腦視覺框架,以及各式開發與部署工具。"
            ]);
        }

        // Future plans
        if (lowerMessage.includes('future') || lowerMessage.includes('plan') || lowerMessage.includes('goal') || lowerMessage.includes('next')) {
            return pickResponse([
                "I'm currently open to new opportunities in AI/ML or Full Stack Development. I'm interested in roles that combine my technical skills with real-world problem solving and community impact.",
                "My immediate goal is to find a position where I can apply my AI/ML and web development skills to solve meaningful problems. I'm open to various opportunities including research, industry, and freelance work.",
                "I'm looking for opportunities to grow professionally, whether in AI/ML, web development, or research. I'm particularly interested in roles that bridge different technologies and have community impact.",
                "I'm seeking positions that allow me to leverage my diverse skill set in AI/ML and web development. I'm open to full-time roles, research collaborations, freelance projects, and opportunities that support community involvement."
            ], [
                "目前正在尋找 AI/ML 或全端開發的新機會,傾向能結合技術與實際問題解決、同時帶來社群影響的角色。",
                "近期目標是找到能發揮 AI/ML 與網頁開發能力、解決有意義問題的職位。研究、業界、自由接案都在考慮範圍。",
                "希望能繼續在 AI/ML、網頁開發或研究領域成長,特別是能跨技術、又能對社群產生影響的角色。",
                "尋找能發揮 AI/ML 與網頁開發能力的職位,全職、研究合作、自由接案皆可,也重視能支持社群參與的機會。"
            ]);
        }

        // Default fallback
        return pickResponse([
            "I'm not sure about that specific question, but I can tell you about Po-Yen's background, skills, projects, research, community involvement, or contact information. Try asking about one of those topics!",
            "That's an interesting question! While I might not have a specific answer, I can help you learn about Po-Yen's expertise, projects, research work, or professional background.",
            "I'm not certain about that particular topic, but I'd be happy to tell you about Po-Yen's technical skills, research work, community involvement, or how to get in touch with him.",
            "That's outside my current knowledge, but I can definitely help you learn about Po-Yen's AI/ML expertise, web development skills, research, community work, or professional experience."
        ], [
            "這個問題我不太確定,不過我可以介紹陳柏諺的背景、技能、作品、研究、社群參與或聯絡方式,要問這些嗎?",
            "有趣的問題!雖然我沒有明確答案,但可以告訴你陳柏諺的專長、作品、研究或專業背景。",
            "這個主題我不太熟,不過很樂意介紹陳柏諺的技術能力、研究工作、社群參與,或如何聯絡他。",
            "超出我目前的知識範圍,但我可以告訴你陳柏諺的 AI/ML 專長、網頁開發能力、研究、社群工作或專業經驗。"
        ]);
    }

    // Initialize when DOM is ready
    function initChat() {
        console.log('Initializing bulletproof AI chat widget...');

        // Create the chat widget
        createChatWidget();

        // Add click handler to toggle button
        const toggleBtn = document.getElementById('ai-chat-toggle');
        if (toggleBtn) {
            // Remove any existing listeners
            toggleBtn.onclick = null;
            // Add new listener
            toggleBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Toggle button clicked');
                openChat();
            };
            console.log('Toggle button event handler added');
        } else {
            console.error('Toggle button not found');
        }

        console.log('Bulletproof AI chat widget initialization complete');
    }

    // Multiple initialization strategies for maximum reliability
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChat);
    } else {
        initChat();
    }

    // Backup initialization
    window.addEventListener('load', function() {
        if (!document.getElementById('ai-chat-widget')) {
            console.log('Backup initialization triggered');
            initChat();
        }
    });

    // Global test function
    window.testChat = function() {
        console.log('Testing chat widget...');
        if (document.getElementById('ai-chat-widget')) {
            openChat();
            return 'Chat widget found and opened';
        } else {
            console.log('Chat widget not found, reinitializing...');
            initChat();
            setTimeout(() => {
                if (document.getElementById('ai-chat-widget')) {
                    openChat();
                    return 'Chat widget reinitialized and opened';
                } else {
                    return 'Failed to initialize chat widget';
                }
            }, 100);
        }
    };

})();

// Main initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing AI Chat Widget...');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const siteNav = document.querySelector('.site-nav');
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            siteNav.classList.toggle('active');
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animateElements = document.querySelectorAll('.card, .project-card, .post');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Project filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.classList.add('animate-in');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate-in');
                }
            });
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            showNotification('Message sent successfully!', 'success');
            this.reset();
        });
    }

    // Add scroll effects
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Add intersection observer for animations
    const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections for animation
    document.querySelectorAll('.card, .project-card, .achievement-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animationObserver.observe(el);
    });
});

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }

    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}, 250));

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .notification {
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .filter-btn.active {
        background: #64b5f6;
        color: #000;
    }
`;
document.head.appendChild(style);

// =========================================================================
// Mobile navigation toggle
// =========================================================================
(function() {
    function initNavToggle() {
        const toggle = document.querySelector('.nav-toggle');
        const nav = document.getElementById('site-nav');
        if (!toggle || !nav) return;

        toggle.addEventListener('click', function() {
            const open = nav.getAttribute('data-open') === 'true';
            nav.setAttribute('data-open', String(!open));
            toggle.setAttribute('aria-expanded', String(!open));
        });

        // Close the mobile menu when a link is tapped
        nav.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() {
                nav.setAttribute('data-open', 'false');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Reset when viewport grows past the mobile breakpoint
        const mq = window.matchMedia('(min-width: 769px)');
        const reset = function(e) {
            if (e.matches) {
                nav.setAttribute('data-open', 'false');
                toggle.setAttribute('aria-expanded', 'false');
            }
        };
        if (mq.addEventListener) mq.addEventListener('change', reset);
        else mq.addListener(reset);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavToggle);
    } else {
        initNavToggle();
    }
})();

// =========================================================================
// Language switcher (i18n) — EN / 繁體中文
// =========================================================================
(function() {
    const STORAGE_KEY = 'lang';
    const DEFAULT_LANG = 'en';
    const LABELS = { en: 'EN', zh: '繁中' };
    const HTML_LANG = { en: 'en', zh: 'zh-Hant' };

    function applyLang(lang) {
        document.documentElement.setAttribute('lang', HTML_LANG[lang] || 'en');

        // Text content
        document.querySelectorAll('[data-i18n-zh]').forEach(function(el) {
            if (!el.hasAttribute('data-i18n-en')) {
                el.setAttribute('data-i18n-en', el.textContent.trim());
            }
            const val = el.getAttribute('data-i18n-' + lang);
            if (val !== null) el.textContent = val;
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder-zh]').forEach(function(el) {
            if (!el.hasAttribute('data-i18n-placeholder-en')) {
                el.setAttribute('data-i18n-placeholder-en', el.getAttribute('placeholder') || '');
            }
            const val = el.getAttribute('data-i18n-placeholder-' + lang);
            if (val !== null) el.setAttribute('placeholder', val);
        });

        // Page <title>
        const titleEl = document.querySelector('title');
        if (titleEl && titleEl.hasAttribute('data-i18n-zh')) {
            if (!titleEl.hasAttribute('data-i18n-en')) {
                titleEl.setAttribute('data-i18n-en', titleEl.textContent.trim());
            }
            titleEl.textContent = titleEl.getAttribute('data-i18n-' + lang) || titleEl.getAttribute('data-i18n-en');
        }

        // Switcher label
        document.querySelectorAll('.lang-current').forEach(function(el) {
            el.textContent = LABELS[lang] || LABELS.en;
        });

        // Active option
        document.querySelectorAll('.lang-option').forEach(function(el) {
            el.classList.toggle('active', el.getAttribute('data-lang') === lang);
        });
    }

    function initLang() {
        const stored = localStorage.getItem(STORAGE_KEY);
        const lang = (stored === 'zh' || stored === 'en') ? stored : DEFAULT_LANG;
        applyLang(lang);

        const switcher = document.querySelector('.lang-switcher');
        const toggle = switcher ? switcher.querySelector('.lang-toggle') : null;

        if (toggle && switcher) {
            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
                const open = switcher.getAttribute('data-open') === 'true';
                switcher.setAttribute('data-open', String(!open));
                toggle.setAttribute('aria-expanded', String(!open));
            });
            document.addEventListener('click', function() {
                switcher.setAttribute('data-open', 'false');
                toggle.setAttribute('aria-expanded', 'false');
            });
        }

        document.querySelectorAll('.lang-option').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const newLang = btn.getAttribute('data-lang');
                if (newLang === 'en' || newLang === 'zh') {
                    localStorage.setItem(STORAGE_KEY, newLang);
                    applyLang(newLang);
                }
                if (switcher && toggle) {
                    switcher.setAttribute('data-open', 'false');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLang);
    } else {
        initLang();
    }
})();