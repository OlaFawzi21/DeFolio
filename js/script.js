
// for loading counters
function playAction ()
{
    let counters = document.querySelectorAll( ".counter" );
    let speed = 1000;
    counters.forEach( ele =>
    {
        function UpDate ()
        {
            let target = +ele.getAttribute( "data-target" );
            let inc = Math.ceil( target / speed ); // Calculate the increment dynamically
            let count = +ele.innerText;
            if ( count < target )
            {
                ele.innerText = count + inc; // Increment count and update text
                setTimeout( playAction, 200 );
            } else
            {
                ele.innerText = target;
            }
        } UpDate();
    } );
}

// when reach in specific scroll height playAction
function checkScrollPosition ()
{
    let scrollHeight;
    if ( window.innerWidth >= 576 )
    {
        scrollHeight = 1830;
    }
    else
    {
        scrollHeight = 4300;
    }
    if ( document.documentElement.scrollTop >= scrollHeight )
    {
        playAction();
    }
}
window.addEventListener( 'scroll', checkScrollPosition );

// -------------------------------------------------------------

// to scroll move top auto
function ScrollUp ()
{
    let btn = document.querySelector( "#scrollUp" );
    if ( document.documentElement.scrollTop >= 120 )
    {
        btn.classList.remove( 'opacity-0' );
        btn.addEventListener( 'click', () =>
        {
            window.scrollTo( {
                top: 0,
                behavior: 'smooth'
            } );
        } );
    }
    else
    {
        btn.classList.add( 'opacity-0' );
    }

}
window.addEventListener( 'scroll', ScrollUp );

// -------------------------------------------------------------

function ModalImages ()
{
    let cardImages = document.querySelectorAll( ".work-img" );
    let modalBox = document.querySelector( ".modal-box" );
    let modalImage = document.querySelector( ".modal-img" );
    let cancelIcon = document.querySelector( ".modal-box .bi-x" );
    let leftIcon = document.querySelector( ".modal-box .bi-chevron-left" );
    let rightIcon = document.querySelector( ".modal-box .bi-chevron-right" );

    let currentIndex = 0;

    // Function to update the modal image
    function updateModalImage ( index )
    {
        modalImage.src = cardImages[ index ].src;
    }

    // Add event listener for each image
    cardImages.forEach( ( image, i ) =>
    {
        image.addEventListener( "click", () =>
        {
            modalBox.classList.add( "active" );
            currentIndex = i;
            updateModalImage( currentIndex );
        } );
    } );

    // Add event listeners for left and right icons
    leftIcon.addEventListener( 'click', () =>
    {
        currentIndex = ( currentIndex - 1 + cardImages.length ) % cardImages.length;
        updateModalImage( currentIndex );
    } );

    rightIcon.addEventListener( 'click', () =>
    {
        currentIndex = ( currentIndex + 1 ) % cardImages.length;
        updateModalImage( currentIndex );

    } );

    cancelIcon.addEventListener( 'click', () =>
    {
        modalBox.classList.remove( "active" );
    } );
}

ModalImages();

// -------------------------------------------------------------

function swapPage ()
{
    let cards = document.querySelectorAll( ".plus-card" );
    cards.forEach( ( card ) =>
    {
        card.addEventListener( 'click', () =>
        {
            window.location.href = 'portfolio-details.html';
        } );
    } );
}

swapPage();