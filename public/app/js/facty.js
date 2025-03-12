$(document).ready(function () {
    sidemenu()
    mainscroll() // corregir para width < 768
    minwidth()
    sidebtn()
    theme()
    sidedark()
    maincircle()
    siderounded()
});

$(document).ready(function () {
    // Inicializar PerfectScrollbar en el contenedor
    const ps = new PerfectScrollbar('.side-body', {
        wheelSpeed: 2,          // Velocidad del scroll
        wheelPropagation: true, // Propagar el evento de scroll
        minScrollbarLength: 20  // Longitud mínima de la barra de scroll
    });
    // Actualizar PerfectScrollbar cuando el contenido cambie dinámicamente
    $('.side-body').on('click', '.side-item-submenu .side-link', function (e) {
        e.preventDefault();
        ps.update();
    });
});

let psm = null;

function mainscroll() {
    const mainContent = document.querySelector('.main-content');

    if (window.innerWidth >= 860) {
        if (!psm) {
            psm = new PerfectScrollbar(mainContent, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20,
                suppressScrollX: true,
                // Don't interfere with table scrolling
                swipeEasing: true,
                useBothWheelAxes: false
            });

            // Allow native scrolling for responsive tables
            document.querySelectorAll('.table-responsive').forEach(table => {
                table.addEventListener('wheel', (e) => {
                    const delta = e.deltaX;
                    if (delta !== 0 && table.scrollWidth > table.clientWidth) {
                        e.stopPropagation();
                    }
                }, { passive: true });
            });
        }
    } else {
        if (psm) {
            psm.destroy();
            psm = null;
        }
    }
}

// Execute mainscroll on page load
mainscroll();

// Execute mainscroll on window resize
window.addEventListener('resize', mainscroll);
function sidemenu() {
    // Check for active sublinks on page load and add active class to parent
    $('.side-item-submenu').each(function() {
        if ($(this).find('.sublink.active').length > 0) {
            $(this).addClass('active');
        }
    });

    $('.side-item-submenu').on('click', '.side-link', function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        const $parentItem = $(this).parent('.side-item');
        const $submenu = $parentItem.find('.side-submenu');
        
        // Toggle active class on parent item
        $parentItem.toggleClass('active');
        
        // Optional: Close other open submenus
        $('.side-item-submenu').not($parentItem).removeClass('active');
    });
}


function minwidth() {
    $(window).resize(function () { 
        if($(window).width() < 860) {
            $('body').removeClass('side-show');
        }
        else {
            $('body').addClass('side-show');
        }
    });
    
    // Initial check on page load
    if($(window).width() < 860) {
        $('body').removeClass('side-show');
    }
    else {
        $('body').addClass('side-show');
    }
}

function sidebtn() {
    $('.side-btn').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('side-show');
    });
}

function theme() {
    // Check if theme preference exists in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Set initial theme based on localStorage
    if (savedTheme === 'dark') {
        $('body').addClass('dark');
        $('#theme-mode').prop('checked', true);
    }

    // Handle theme toggle
    $('#theme-mode').on('change', function() {
        $('body').toggleClass('dark');
        
        // Save theme preference to localStorage
        if ($(this).is(':checked')) {
            localStorage.setItem('theme', 'dark');
            $('#side-dark').prop('checked', true);
        }
        else {
            localStorage.setItem('theme', 'light');
            if(!$('body').hasClass('side-dark')){
                $('#side-dark').prop('checked', false);
            }
            
        }
    });
}

function sidedark() {
    const savedTheme = localStorage.getItem('side-dark');
    // Set initial theme based on localStorage
    if (savedTheme === 'true') {
        $('body').addClass('side-dark');
        $('#side-dark').prop('checked', true);
    }
    if($('body').hasClass('dark')) {
        $('#side-dark').prop('checked', true);
    }
    $('#side-dark').on('change', function() {
        $('body').toggleClass('side-dark');
        
        // Save theme preference to localStorage
        if ($(this).is(':checked')) {
            localStorage.setItem('side-dark', 'true');
        }
        else {
            localStorage.setItem('side-dark', 'false');
        }
    });
}

function handleModeChange() {
    const $body = $('body');
    const mode = localStorage.getItem('mode');
    const modes = {
        'main-circle': ['main-circle', '#main-circle'],
        'side-rounded': ['side-rounded', '#side-rounded']
    };

    // Set initial mode
    if (modes[mode]) {
        const [className, selector] = modes[mode];
        $body.addClass(className);
        $(selector).prop('checked', true);
    }

    // Handle mode changes
    function updateMode(newMode, removeMode) {
        $body.addClass(newMode).removeClass(removeMode);
        localStorage.setItem('mode', newMode === 'none' ? 'none' : newMode);
    }

    // Main circle mode handler
    $('#main-circle').on('change', function() {
        updateMode($(this).is(':checked') ? 'main-circle' : 'none', 'side-rounded');
    });

    // Side rounded mode handler
    $('#side-rounded').on('change', function() {
        updateMode($(this).is(':checked') ? 'side-rounded' : 'none', 'main-circle');
    });

    // None mode handler
    $('#mode-none').on('change', function() {
        updateMode('none', 'main-circle side-rounded');
    });
}

// Initialize mode handling
const maincircle = handleModeChange;
const siderounded = () => {}; // Empty function since logic is combined in handleModeChange
