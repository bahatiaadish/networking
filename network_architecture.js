document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        if (searchTerm.length < 3) {
            clearHighlights();
            return;
        }
        
        clearHighlights();
        
        const textNodes = getTextNodes(document.body);
        
        textNodes.forEach(node => {
            const text = node.nodeValue.toLowerCase();
            if (text.includes(searchTerm)) {
                highlightText(node, searchTerm);
            }
        });
    });

    function getTextNodes(element) {
        const textNodes = [];
        
        function getNodes(node) {
            if (node.nodeType === 3) {
                textNodes.push(node);
            } else {
                const children = node.childNodes;
                for (let i = 0; i < children.length; i++) {
                    getNodes(children[i]);
                }
            }
        }
        
        getNodes(element);
        return textNodes;
    }

    function highlightText(node, searchTerm) {
        const text = node.nodeValue;
        const parent = node.parentNode;
        
        const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
        
        const fragment = document.createDocumentFragment();
        
        parts.forEach(part => {
            if (part.toLowerCase() === searchTerm.toLowerCase()) {
                const span = document.createElement('span');
                span.className = 'highlight';
                span.textContent = part;
                fragment.appendChild(span);
            } else {
                fragment.appendChild(document.createTextNode(part));
            }
        });
        
        parent.replaceChild(fragment, node);
    }

    function clearHighlights() {
        const highlights = document.querySelectorAll('.highlight');
        
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            const text = highlight.textContent;
            const textNode = document.createTextNode(text);
            
            parent.replaceChild(textNode, highlight);
            parent.normalize();
        });
    }

    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('collapsible')) {
            e.target.classList.toggle('active-collapsible');
            const content = e.target.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
        
        if (e.target && e.target.classList.contains('tree-toggle')) {
            e.target.classList.toggle('active');
            const content = e.target.nextElementSibling;
            
            if (content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                content.classList.add('active');
            }
        }
    });

    loadSections();
});

function loadSections() {
    loadSection('physical-architecture.html', 'physical-architecture');
    loadSection('aci-implementation.html', 'aci-implementation');
    loadSection('security-architecture.html', 'security-architecture');
    loadSection('connectivity.html', 'connectivity');
    loadSection('traffic-flows.html', 'traffic-flows');
    loadSection('user-access.html', 'user-access');
    loadSection('high-availability.html', 'high-availability');
    loadSection('implementation.html', 'implementation');
}

function loadSection(file, id) {
    const section = document.createElement('section');
    section.id = id;
    section.innerHTML = `<h2>${formatSectionName(id)}</h2><div class="loading">Loading content...</div>`;
    document.getElementById('dynamic-content').appendChild(section);
    
    setTimeout(() => {
        section.innerHTML = `<h2>${formatSectionName(id)}</h2><p>Content for ${formatSectionName(id)} will be loaded here.</p>`;
        
        if (id === 'physical-architecture') {
            renderPhysicalArchitectureDiagram();
        } else if (id === 'aci-implementation') {
            renderACIImplementationDiagram();
        }
    }, 100);
}

function formatSectionName(id) {
    return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function renderOverviewDiagram() {
    const diagram = document.getElementById('overview-diagram');
    if (!diagram) return;
    
    createComponent(diagram, 'internet', 'Internet', 50, 350);
    createComponent(diagram, 'router', 'North DC', 150, 200);
    createComponent(diagram, 'router', 'South DC', 150, 500);
    createComponent(diagram, 'management', 'Tertiary Control Hub', 300, 350);
    
    createConnection(diagram, 50, 350, 150, 200);
    createConnection(diagram, 50, 350, 150, 500);
    createConnection(diagram, 150, 200, 300, 350);
    createConnection(diagram, 150, 500, 300, 350);
    createConnection(diagram, 150, 200, 150, 500);
}

function createComponent(container, type, label, top, left) {
    const component = document.createElement('div');
    component.className = `component component-${type}`;
    component.style.top = `${top}px`;
    component.style.left = `${left}px`;
    
    const img = document.createElement('img');
    img.src = getIconForType(type);
    img.alt = label;
    
    const span = document.createElement('span');
    span.textContent = label;
    
    component.appendChild(img);
    component.appendChild(span);
    
    container.appendChild(component);
    return component;
}

function createConnection(container, x1, y1, x2, y2) {
    const connection = document.createElement('div');
    connection.className = 'connection';
    
    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    
    connection.style.width = `${length}px`;
    connection.style.top = `${y1 + 30}px`;
    connection.style.left = `${x1 + 60}px`;
    connection.style.transform = `rotate(${angle}deg)`;
    
    container.appendChild(connection);
    return connection;
}

function getIconForType(type) {
    const icons = {
        router: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1yb3V0ZXIiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI4IiB4PSIyIiB5PSI4IiByeD0iMiIvPjxwYXRoIGQ9Ik0yIDEwaDIwIi8+PHBhdGggZD0iTTYgOFY2YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjIiLz48cGF0aCBkPSJNMTIgMTB2NCIvPjxwYXRoIGQ9Ik04IDEwdjQiLz48cGF0aCBkPSJNMTYgMTB2NCIvPjwvc3ZnPg==',
        switch: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1uZXR3b3JrIj48cmVjdCB4PSIxOCIgeT0iMyIgd2lkdGg9IjMiIGhlaWdodD0iMTgiIHJ4PSIxIi8+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjMiIGhlaWdodD0iMTgiIHJ4PSIxIi8+PHJlY3QgeD0iMTAuNSIgeT0iMyIgd2lkdGg9IjMiIGhlaWdodD0iMTgiIHJ4PSIxIi8+PGxpbmUgeDE9IjQiIHkxPSI4IiB4Mj0iMjAiIHkyPSI4Ii8+PGxpbmUgeDE9IjQiIHkxPSIxNiIgeDI9IjIwIiB5Mj0iMTYiLz48L3N2Zz4=',
        firewall: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mbGFtZSI+PHBhdGggZD0iTTguNSAxNGMtMS41IDAtMi41LTEuMTYtMi41LTMuNSAwLTEuODQtMS40NC0zLjI1LTMtMy41IDAtLjE3LjA1LS4zMy4xNy0uNUMzLjg0IDUuNTcgNS44MyA1IDkgNWM0LjA4IDAgNi4wMiAyLjU4IDYuMDIgNi41IDAgMi41OS0xLjI5IDMuNS0yLjUgMy41LTEgMC0xLjUgMC0xLjUgMSAwIDEuNDIgMS4wMyAyLjI1NyAyLjUgM1YxOWgtMTB2LS41YzEuNDctLjc0MyAyLjUtMS41OCAyLjUtMyAwLTEgMC0xLjUtMS41LTEuNXoiLz48L3N2Zz4=',
        loadbalancer: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zY2FsZSI+PHBhdGggZD0ibTMgN2g0YTEgMSAwIDAgMSAxIDF2OWExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY4YTEgMSAwIDAgMSAxLTFabTEwIDBIMTdhMSAxIDAgMCAxIDEgMXY5YTEgMSAwIDAgMS0xIDFIMTNhMSAxIDAgMCAxLTEtMVY4YTEgMSAwIDAgMSAxLTFaIi8+PHBhdGggZD0iTTEyIDdWNWEyIDIgMCAwIDAtMi0ySDdhMiAyIDAgMCAwLTIgMnYyIi8+PHBhdGggZD0iTTE5IDdWNWEyIDIgMCAwIDAtMi0yaC0zYTIgMiAwIDAgMC0yIDJ2MiIvPjxwYXRoIGQ9Ik01IDEyaDQiLz48cGF0aCBkPSJNMTUgMTJoNCIvPjwvc3ZnPg==',
        server: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZXJ2ZXIiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI4IiB4PSIyIiB5PSIyIiByeD0iMiIvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI4IiB4PSIyIiB5PSIxNCIgcng9IjIiLz48bGluZSB4MT0iNiIgeTE9IjYiIHgyPSI2LjAxIiB5Mj0iNiIvPjxsaW5lIHgxPSI2IiB5MT0iMTgiIHgyPSI2LjAxIiB5Mj0iMTgiLz48L3N2Zz4=',
        storage: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kYXRhYmFzZSI+PGVsbGlwc2UgY3g9IjEyIiBjeT0iNSIgcng9IjkiIHJ5PSIzIi8+PHBhdGggZD0iTTIxIDEyYzAgMS42Ni00LjAzIDMtOSAzcy05LTEuMzQtOS0zIi8+PHBhdGggZD0iTTMgNXYxNGMwIDEuNjYgNC4wMyAzIDkgM3M5LTEuMzQgOS0zVjUiLz48L3N2Zz4=',
        security: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaGllbGQiPjxwYXRoIGQ9Ik0xMiAyMnMtOC01LTgtMTJWNWw4LTNoOGwzIDh2N2MwIDctOCAxMi04IDEyeiIvPjwvc3ZnPg==',
        management: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZXR0aW5ncyI+PHBhdGggZD0iTTEyLjIyIDJoLS40NGEyIDIgMCAwIDAtMiAydi4xOGEyIDIgMCAwIDEtMSAxLjczbC0uNDMuMjVhMiAyIDAgMCAxLTIgMGwtLjE1LS4wOGEyIDIgMCAwIDAtMi43My43M2wtLjIyLjM4YTIgMiAwIDAgMCAuNzMgMi43M2wuMTUuMWEyIDIgMCAwIDEgMSAxLjcydi41YTIgMiAwIDAgMS0xIDEuNzRsLS4xNS4wOWEyIDIgMCAwIDAtLjczIDIuNzNsLjIyLjM4YTIgMiAwIDAgMCAyLjczLjczbC4xNS0uMDhhMiAyIDAgMCAxIDIgMGwuNDMuMjVhMiAyIDAgMCAxIDEgMS43M1YyMGEyIDIgMCAwIDAgMiAyaC40NGEyIDIgMCAwIDAgMi0ydi0uMThhMiAyIDAgMCAxIDEtMS43M2wuNDMtLjI1YTIgMiAwIDAgMSAyIDBsLjE1LjA4YTIgMiAwIDAgMCAyLjczLS43M2wuMjItLjM5YTIgMiAwIDAgMC0uNzMtMi43M2wtLjE1LS4wOGEyIDIgMCAwIDEtMS0xLjc0di0uNWEyIDIgMCAwIDEgMS0xLjc0bC4xNS0uMDlhMiAyIDAgMCAwIC43My0yLjczbC0uMjItLjM4YTIgMiAwIDAgMC0yLjczLS43M2wtLjE1LjA4YTIgMiAwIDAgMS0yIDBsLS40My0uMjVhMiAyIDAgMCAxLTEtMS43M1Y0YTIgMiAwIDAgMC0yLTJ6Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg==',
        internet: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1nbG9iZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48bGluZSB4MT0iMiIgeTE9IjEyIiB4Mj0iMjIiIHkyPSIxMiIvPjxwYXRoIGQ9Ik0xMiAyYTE1LjMgMTUuMyAwIDAgMSA0IDEwIDE1LjMgMTUuMyAwIDAgMS00IDEwIDE1LjMgMTUuMyAwIDAgMS00LTEwIDE1LjMgMTUuMyAwIDAgMSA0LTEweiIvPjwvc3ZnPg=='
    };
    
    return icons[type] || icons.server;
}

function renderPhysicalArchitectureDiagram() {
}

function renderACIImplementationDiagram() {
}

window.addEventListener('load', function() {
    renderOverviewDiagram();
});
