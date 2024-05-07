
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