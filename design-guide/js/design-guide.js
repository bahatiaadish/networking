/**
 * Interactive Network Architecture Design Guide
 * Option 2: Distributed Control with Centralized Management
 */

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    
    initTabs();
    
    initCollapsible();
    
    initSearch();
    
    initDiagrams();
});

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(link => link.classList.remove('active'));
            
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            
            document.querySelectorAll('main section').forEach(section => {
                section.classList.remove('active-section');
            });
            
            document.getElementById(targetId).classList.add('active-section');
            
            window.scrollTo({
                top: document.getElementById(targetId).offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Initialize tab functionality
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabContainer = this.closest('.tab-container');
            
            tabContainer.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            
            const targetId = this.getAttribute('data-tab');
            
            tabContainer.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            tabContainer.querySelector(`#${targetId}`).classList.add('active');
        });
    });
}

/**
 * Initialize collapsible sections
 */
function initCollapsible() {
    const collapsibles = document.querySelectorAll('.collapsible');
    
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

/**
 * Initialize search functionality
 */
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const searchResultsList = document.getElementById('search-results-list');
    const searchResultsCount = document.getElementById('search-results-count');
    const closeSearch = document.getElementById('close-search');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm.length < 3) {
            alert('Please enter at least 3 characters to search.');
            return;
        }
        
        searchResultsList.innerHTML = '';
        
        const sections = document.querySelectorAll('main section');
        let results = [];
        
        sections.forEach(section => {
            const sectionId = section.id;
            const sectionTitle = section.querySelector('h2').textContent;
            
            const headings = section.querySelectorAll('h3, h4, h5');
            headings.forEach(heading => {
                const text = heading.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    results.push({
                        sectionId,
                        sectionTitle,
                        title: heading.textContent,
                        context: getContext(heading),
                        element: heading
                    });
                }
            });
            
            const paragraphs = section.querySelectorAll('p');
            paragraphs.forEach(paragraph => {
                const text = paragraph.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    results.push({
                        sectionId,
                        sectionTitle,
                        title: getParentHeading(paragraph),
                        context: paragraph.textContent,
                        element: paragraph
                    });
                }
            });
            
            const listItems = section.querySelectorAll('li');
            listItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    results.push({
                        sectionId,
                        sectionTitle,
                        title: getParentHeading(item),
                        context: item.textContent,
                        element: item
                    });
                }
            });
        });
        
        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                
                const resultTitle = document.createElement('div');
                resultTitle.className = 'search-result-title';
                resultTitle.textContent = `${result.sectionTitle} > ${result.title}`;
                
                const resultContext = document.createElement('div');
                resultContext.className = 'search-result-context';
                resultContext.innerHTML = highlightSearchTerm(result.context, searchTerm);
                
                resultItem.appendChild(resultTitle);
                resultItem.appendChild(resultContext);
                
                resultItem.addEventListener('click', function() {
                    document.querySelectorAll('nav ul li a').forEach(link => {
                        if (link.getAttribute('href') === `#${result.sectionId}`) {
                            link.click();
                        }
                    });
                    
                    result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    result.element.style.backgroundColor = '#fff176';
                    setTimeout(() => {
                        result.element.style.backgroundColor = '';
                    }, 3000);
                    
                    searchResults.style.display = 'none';
                });
                
                searchResultsList.appendChild(resultItem);
            });
            
            searchResultsCount.textContent = `${results.length} results`;
            searchResults.style.display = 'block';
        } else {
            searchResultsCount.textContent = '0 results';
            const noResults = document.createElement('div');
            noResults.className = 'search-result-item';
            noResults.textContent = 'No results found.';
            searchResultsList.appendChild(noResults);
            searchResults.style.display = 'block';
        }
    }
    
    function getContext(element) {
        const nextElement = element.nextElementSibling;
        if (nextElement && (nextElement.tagName === 'P' || nextElement.tagName === 'UL')) {
            return nextElement.textContent;
        }
        return element.textContent;
    }
    
    function getParentHeading(element) {
        let currentElement = element;
        while (currentElement) {
            currentElement = currentElement.previousElementSibling;
            if (currentElement && (currentElement.tagName === 'H3' || currentElement.tagName === 'H4' || currentElement.tagName === 'H5')) {
                return currentElement.textContent;
            }
        }
        return 'Section Content';
    }
    
    function highlightSearchTerm(text, searchTerm) {
        const regex = new RegExp(searchTerm, 'gi');
        return text.replace(regex, match => `<span class="highlight">${match}</span>`);
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    closeSearch.addEventListener('click', function() {
        searchResults.style.display = 'none';
    });
}

/**
 * Initialize diagrams
 */
function initDiagrams() {
    initZoomControls();
    
    loadScript('js/diagrams/overview-diagram.js');
    loadScript('js/diagrams/device-placement-diagram.js');
    loadScript('js/diagrams/connectivity-diagram.js');
    loadScript('js/diagrams/traffic-flow-diagram.js');
    loadScript('js/diagrams/design-option-diagrams.js');
}

/**
 * Initialize zoom controls for diagrams
 */
function initZoomControls() {
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    const resetView = document.getElementById('reset-view');
    
    if (zoomIn && zoomOut && resetView) {
        zoomIn.addEventListener('click', function() {
            const activeSvg = document.querySelector('.active-section .diagram svg');
            if (activeSvg) {
                const currentScale = activeSvg.__zoom ? activeSvg.__zoom.k : 1;
                zoomSvg(activeSvg, currentScale * 1.2);
            }
        });
        
        zoomOut.addEventListener('click', function() {
            const activeSvg = document.querySelector('.active-section .diagram svg');
            if (activeSvg) {
                const currentScale = activeSvg.__zoom ? activeSvg.__zoom.k : 1;
                zoomSvg(activeSvg, currentScale / 1.2);
            }
        });
        
        resetView.addEventListener('click', function() {
            const activeSvg = document.querySelector('.active-section .diagram svg');
            if (activeSvg) {
                zoomSvg(activeSvg, 1);
            }
        });
    }
}

/**
 * Helper function to zoom SVG
 */
function zoomSvg(svg, scale) {
    if (!svg.__zoom) {
        svg.__zoom = { k: 1, x: 0, y: 0 };
    }
    
    svg.__zoom.k = scale;
    
    const g = svg.querySelector('g');
    if (g) {
        g.setAttribute('transform', `translate(${svg.__zoom.x},${svg.__zoom.y}) scale(${svg.__zoom.k})`);
    }
}

/**
 * Helper function to load scripts dynamically
 */
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
}
