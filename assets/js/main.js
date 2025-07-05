// Main JavaScript for Portfolio Website

// Bulletproof AI Chat Widget - Redesigned for 100% reliability
(function() {
    'use strict';

    // Create chat widget HTML and inject it immediately
    function createChatWidget() {
        const chatHTML = `
            <div id="ai-chat-widget" class="ai-chat-widget" style="display: none;">
                <div class="chat-header">
                    <h3>🤖 AI Assistant</h3>
                    <button id="chat-close" class="chat-close" onclick="closeChat()">×</button>
                </div>
                <div class="chat-messages" id="chat-messages">
                    <div class="chat-message ai-message">
                        <div class="message-content">
                            <span class="message-icon">🤖</span>
                            <div class="message-text">Hi! I'm Po-Yen's AI assistant. Ask me anything about his background, skills, or projects!</div>
                        </div>
                    </div>
                </div>
                <div class="chat-input-area">
                    <div class="quick-questions">
                        <button class="quick-btn" onclick="askQuestion('Tell me about your background')">Background</button>
                        <button class="quick-btn" onclick="askQuestion('What are your skills?')">Skills</button>
                        <button class="quick-btn" onclick="askQuestion('Show me your projects')">Projects</button>
                        <button class="quick-btn" onclick="askQuestion('How can I contact you?')">Contact</button>
                        <button class="quick-btn" onclick="askQuestion('Tell me about your education')">Education</button>
                        <button class="quick-btn" onclick="askQuestion('What is your experience?')">Experience</button>
                        <button class="quick-btn" onclick="askQuestion('Tell me about AI and machine learning')">AI/ML</button>
                        <button class="quick-btn" onclick="askQuestion('What is your tech stack?')">Tech Stack</button>
                    </div>
                    <div class="input-group">
                        <input type="text" id="chat-input" placeholder="Ask me anything..." onkeypress="handleKeyPress(event)" />
                        <button id="chat-send" onclick="sendMessage()">Send</button>
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

    window.askQuestion = function(question) {
        addMessage(question, 'user');
        setTimeout(() => {
            const response = getResponse(question);
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

    function getResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Background and About responses
        if (lowerMessage.includes('background') || lowerMessage.includes('about')) {
            const responses = [
                "I'm Po-Yen Chen, a master's graduate in Simulation Sciences from RWTH Aachen University. I specialize in AI/ML, computer vision, and full-stack development with 3+ years of experience.",
                "My background combines chemical engineering with cutting-edge AI technologies. I hold an M.Sc. in Simulation Sciences from RWTH Aachen University and have worked on diverse AI/ML applications.",
                "I'm passionate about applying AI to solve real-world engineering problems. My academic background in chemical engineering gives me a unique perspective on how AI can transform traditional industries.",
                "I started with chemical engineering at NCKU, then evolved into AI/ML during my master's at RWTH Aachen. This combination allows me to bridge the gap between traditional engineering and modern AI solutions."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Skills responses
        if (lowerMessage.includes('skill')) {
            const responses = [
                "My technical skills include Python, TensorFlow, Computer Vision, YOLO, LLMs, RAG, Streamlit, React, Node.js, AWS, Git, SQL, C++, and Docker.",
                "I'm proficient in Python (my primary language), TensorFlow for ML, Computer Vision with YOLO, LLMs and RAG systems, plus full-stack development with React and Node.js.",
                "My skill set spans AI/ML (Python, TensorFlow, Computer Vision), cloud services (AWS), version control (Git), databases (SQL), web development (React, Node.js), and containerization (Docker).",
                "I specialize in Python-based AI/ML, particularly computer vision and LLMs. I also work with modern web technologies, cloud platforms, and have strong software engineering practices."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Projects responses
        if (lowerMessage.includes('project')) {
            const responses = [
                "My key projects include: 1) Particle Size Analysis using YOLO-based instance segmentation, 2) Vehicle Recommendation System with RAG-powered chatbot, 3) Customer Experience AI with LLM integration, 4) Quantum ML Pipeline for simulation data, and 5) This portfolio website with AI integration!",
                "I've worked on diverse projects: computer vision applications for materials science, LLM-powered recommendation systems, data processing pipelines, and full-stack web applications including this AI-enhanced portfolio.",
                "My thesis focused on particle size analysis using YOLO-based instance segmentation for waste management. I've also built recommendation systems with RAG technology, customer service AI, and various web applications.",
                "Notable projects: AI-powered particle analysis system, intelligent vehicle recommendation chatbot, customer experience AI with web scraping, industrial data processing pipeline, and this interactive portfolio with AI integration."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Contact responses
        if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
            const responses = [
                "You can reach me at sam9960628@gmail.com. I'm on LinkedIn (po-yen-chen-311bb114a) and GitHub (Poyen-Chen). Based in Aachen, Germany and open to opportunities worldwide.",
                "My email is sam9960628@gmail.com. I'm always open to discussing opportunities, collaborations, or interesting conversations about AI and technology. You can also find me on LinkedIn and GitHub.",
                "Feel free to contact me at sam9960628@gmail.com. I'm currently based in Aachen, Germany and open to remote work, relocation opportunities, and freelance projects.",
                "You can reach me via email at sam9960628@gmail.com. I'm active on LinkedIn and GitHub, and I'm always interested in new opportunities, research collaborations, and interesting projects."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Education responses
        if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university')) {
            const responses = [
                "I hold an M.Sc. in Simulation Sciences from RWTH Aachen University (2021-2025) with thesis on 'Determination of Particle Size Distributions Using a YOLO-Based Instance Segmentation Approach' and a B.Sc. in Chemical Engineering from National Cheng Kung University (2014-2018).",
                "My educational journey: B.Sc. in Chemical Engineering from NCKU, followed by M.Sc. in Simulation Sciences from RWTH Aachen University, specializing in computational engineering and AI applications.",
                "I completed my master's degree in Simulation Sciences at RWTH Aachen University, focusing on computer vision applications in materials science and particle analysis using deep learning techniques.",
                "My academic background includes a bachelor's in Chemical Engineering from NCKU and a master's in Simulation Sciences from RWTH Aachen, where I specialized in AI applications for engineering problems."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Experience responses
        if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
            const responses = [
                "I have 3+ years of experience in AI/ML, computer vision, and full-stack development. I've worked on research projects, participated in hackathons like the Porsche Digital Campus Challenge, and developed various applications.",
                "My experience spans AI/ML applications, computer vision projects, web development, and research. I'm currently serving as web maintainer for the Taiwanese Student Association Aachen and open to new opportunities.",
                "I've gained experience through research projects, hackathons, and personal projects. I'm currently contributing to the Taiwanese community as web maintainer for TWSV Aachen and interested in full-time positions.",
                "With 3+ years in AI/ML and development, I've worked on diverse projects from computer vision to web applications. I'm also involved in community work as web maintainer for the Taiwanese Student Association Aachen."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // AI/ML specific responses
        if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
            const responses = [
                "I specialize in AI and machine learning, particularly computer vision with YOLO, LLMs, and RAG systems. I've applied these technologies to solve real-world engineering problems in materials science and industrial applications.",
                "My AI/ML expertise includes computer vision, natural language processing with LLMs, and building intelligent systems. I love applying these technologies to practical problems like particle analysis and recommendation systems.",
                "I work extensively with AI/ML technologies: computer vision for object detection and instance segmentation, LLMs for natural language understanding, and RAG systems for intelligent information retrieval and recommendations.",
                "My passion is AI/ML, especially computer vision and language models. I've implemented these technologies in various projects from materials science to recommendation systems and customer service applications."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Computer Vision responses
        if (lowerMessage.includes('computer vision') || lowerMessage.includes('yolo') || lowerMessage.includes('cv')) {
            const responses = [
                "I specialize in computer vision, particularly using YOLO for object detection and instance segmentation. My thesis focused on particle size analysis using these techniques for waste management applications.",
                "Computer vision is one of my core strengths. I've worked extensively with YOLO for object detection and have applied it to materials science applications, particularly in particle analysis.",
                "I'm experienced in computer vision applications, especially YOLO-based systems for object detection and segmentation. This was the focus of my master's research on particle size distribution analysis.",
                "My computer vision expertise includes YOLO implementations for object detection and instance segmentation, particularly applied to industrial and materials science problems like particle analysis."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Web Development responses
        if (lowerMessage.includes('web') || lowerMessage.includes('development') || lowerMessage.includes('frontend') || lowerMessage.includes('backend')) {
            const responses = [
                "I'm experienced in full-stack web development using React, Node.js, and modern web technologies. I've built various applications including this portfolio with AI integration and maintain the TWSV Aachen website.",
                "My web development skills include React for frontend, Node.js for backend, and modern web technologies. I enjoy creating interactive and responsive web applications and currently serve as web maintainer for TWSV Aachen.",
                "I work with full-stack web technologies: React for user interfaces, Node.js for server-side logic, and various modern web tools and frameworks. I also maintain websites for community organizations.",
                "Web development is another area of expertise. I use React, Node.js, and modern web technologies to build responsive and interactive applications, including community websites and this AI-enhanced portfolio."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Research responses
        if (lowerMessage.includes('research') || lowerMessage.includes('thesis') || lowerMessage.includes('study')) {
            const responses = [
                "My research focused on applying computer vision to materials science, specifically particle size analysis using YOLO-based instance segmentation for waste management applications.",
                "I conducted research on computer vision applications in materials science, developing AI systems for particle analysis using deep learning techniques. My thesis explored automated particle size distribution analysis.",
                "My master's thesis explored the intersection of computer vision and materials science, developing AI-powered solutions for particle size analysis using YOLO-based instance segmentation.",
                "I researched AI applications in materials science, particularly developing computer vision systems for automated particle analysis using deep learning techniques for industrial applications."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Python responses
        if (lowerMessage.includes('python') || lowerMessage.includes('programming')) {
            const responses = [
                "Python is my primary programming language. I use it extensively for AI/ML, data processing, and building various applications with frameworks like TensorFlow, Streamlit, and computer vision libraries.",
                "I'm proficient in Python and use it for most of my AI/ML work, data analysis, and application development. It's my go-to language for rapid prototyping and building AI applications.",
                "Python is my main language for AI/ML development. I also work with C++, JavaScript, SQL, and MATLAB for different types of projects, but Python is my primary tool for AI applications.",
                "I specialize in Python for AI/ML applications, using it with TensorFlow, computer vision libraries, Streamlit for web apps, and various data processing tools for my research and projects."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Location responses
        if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('germany') || lowerMessage.includes('aachen')) {
            const responses = [
                "I'm currently based in Aachen, Germany, where I completed my master's degree at RWTH Aachen University. I'm open to remote work and relocation opportunities worldwide.",
                "I'm located in Aachen, Germany, having just completed my master's at RWTH Aachen University. I'm flexible with remote work and willing to relocate for great opportunities.",
                "Based in Aachen, Germany, where I studied at RWTH Aachen University. I'm open to both remote positions and opportunities that require relocation, and I'm actively involved in the local Taiwanese community.",
                "I'm in Aachen, Germany, having finished my master's at RWTH Aachen University. I'm interested in opportunities worldwide, both remote and on-site, and I contribute to the local Taiwanese Student Association."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // TWSV Aachen responses
        if (lowerMessage.includes('twsv') || lowerMessage.includes('taiwanese') || lowerMessage.includes('community') || lowerMessage.includes('association')) {
            const responses = [
                "I serve as the web maintainer for the Taiwanese Student Association Aachen (TWSV Aachen) since 2023. This role allows me to combine my technical skills with my passion for supporting the Taiwanese community in Germany.",
                "I'm involved with the Taiwanese Student Association Aachen as their web maintainer. This community organization promotes cultural exchange and friendship among Taiwanese students and the international community in Aachen.",
                "I contribute to the Taiwanese community in Aachen by maintaining the TWSV Aachen website. The association organizes various events including welcome parties, Taiwan Night celebrations, and cultural gatherings.",
                "I'm proud to serve as web maintainer for the Taiwanese Student Association Aachen, helping to bridge Taiwanese students with the international community through technology and cultural events."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Languages responses
        if (lowerMessage.includes('language') || lowerMessage.includes('speak') || lowerMessage.includes('chinese') || lowerMessage.includes('german')) {
            const responses = [
                "I speak English (fluent), German (intermediate), and Chinese (native). This multilingual ability helps me work effectively in international environments and contribute to diverse communities.",
                "My language skills include English (fluent), German (intermediate), and Chinese (native). This helps me collaborate effectively in international settings and engage with diverse communities.",
                "I'm fluent in English, have intermediate German skills, and speak Chinese as my native language. This linguistic diversity supports my work in international environments and community involvement.",
                "I communicate in English (fluent), German (intermediate), and Chinese (native). These language skills enable me to work effectively in international contexts and contribute to multicultural communities."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Greeting responses
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            const responses = [
                "Hello! I'm Po-Yen's AI assistant. How can I help you learn about his background, skills, projects, or community involvement?",
                "Hi there! I'm here to help you learn about Po-Yen's professional background, AI/ML expertise, and community work. What would you like to know?",
                "Hey! I'm Po-Yen's AI assistant. I can tell you about his work, skills, projects, research, and community involvement. What interests you?",
                "Hello! I'm here to help you discover more about Po-Yen's expertise in AI/ML, computer vision, web development, and his role in the Taiwanese community. What would you like to learn?"
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Help responses
        if (lowerMessage.includes('help') || lowerMessage.includes('what can you do') || lowerMessage.includes('assist')) {
            const responses = [
                "I can help you learn about Po-Yen's background, skills, projects, education, research, community involvement, and contact information. Just ask me anything specific or use the quick question buttons above!",
                "I'm here to provide information about Po-Yen's professional experience, technical skills, projects, research work, community involvement, and how to get in touch. Feel free to ask anything!",
                "I can tell you about Po-Yen's AI/ML expertise, web development skills, research work, community involvement with TWSV Aachen, and professional background. What would you like to know?",
                "I'm designed to help you learn about Po-Yen's career, skills, projects, research, community work, and experience. Ask me anything about his background or use the quick buttons for common questions!"
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Who are you responses
        if (lowerMessage.includes('who are you') || lowerMessage.includes('what are you')) {
            const responses = [
                "I'm Po-Yen's AI assistant! I can help you learn about his background, skills, projects, research, community involvement, and experience. I'm designed to provide personalized information about his portfolio.",
                "I'm an AI assistant created to help you learn about Po-Yen Chen's professional background and expertise. I can answer questions about his work, skills, research, and community contributions.",
                "I'm Po-Yen's digital assistant, here to help you discover more about his career, projects, technical skills, and community involvement. Think of me as your guide to his portfolio!",
                "I'm an AI chatbot designed to provide information about Po-Yen's professional journey, from his education and skills to his projects, research, and community work."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Technology stack responses
        if (lowerMessage.includes('tech') || lowerMessage.includes('stack') || lowerMessage.includes('tools') || lowerMessage.includes('framework')) {
            const responses = [
                "My tech stack includes Python, TensorFlow, Computer Vision, YOLO, LLMs, RAG, Streamlit, React, Node.js, AWS, Git, SQL, C++, and Docker. I work with both AI/ML frameworks and modern web technologies.",
                "I use a diverse tech stack: Python for AI/ML, React/Node.js for web development, AWS for cloud services, TensorFlow for deep learning, and various tools for version control and databases.",
                "My technology toolkit spans AI/ML (TensorFlow, computer vision, LLMs), web development (React, Node.js, Streamlit), cloud platforms (AWS), and development tools (Git, SQL, Docker).",
                "I work with modern technologies: Python ecosystem for AI/ML, React ecosystem for web development, cloud services, computer vision frameworks, and various development and deployment tools."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Future plans responses
        if (lowerMessage.includes('future') || lowerMessage.includes('plan') || lowerMessage.includes('goal') || lowerMessage.includes('next')) {
            const responses = [
                "I'm currently open to new opportunities in AI/ML or Full Stack Development. I'm interested in roles that combine my technical skills with real-world problem solving and community impact.",
                "My immediate goal is to find a position where I can apply my AI/ML and web development skills to solve meaningful problems. I'm open to various opportunities including research, industry, and freelance work.",
                "I'm looking for opportunities to grow professionally, whether in AI/ML, web development, or research. I'm particularly interested in roles that bridge different technologies and have community impact.",
                "I'm seeking positions that allow me to leverage my diverse skill set in AI/ML and web development. I'm open to full-time roles, research collaborations, freelance projects, and opportunities that support community involvement."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Default response with variety
        const defaultResponses = [
            "I'm not sure about that specific question, but I can tell you about Po-Yen's background, skills, projects, research, community involvement, or contact information. Try asking about one of those topics!",
            "That's an interesting question! While I might not have a specific answer, I can help you learn about Po-Yen's expertise, projects, research work, or professional background.",
            "I'm not certain about that particular topic, but I'd be happy to tell you about Po-Yen's technical skills, research work, community involvement, or how to get in touch with him.",
            "That's outside my current knowledge, but I can definitely help you learn about Po-Yen's AI/ML expertise, web development skills, research, community work, or professional experience."
        ];
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
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

    // Typing animation for hero section
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        setTimeout(typeWriter, 500);
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