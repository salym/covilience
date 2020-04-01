$( document ).ready( function () {
    $( 'body' ).bootstrapMaterialDesign();

    $( "#menu-toggle" ).click( function ( e ) {
        e.preventDefault();
        $( "#wrapper" ).toggleClass( "toggled" );
    } );

    $( 'a[href*="#"]' )
        .not( '[href="#"]' )
        .not( '[href="#0"]' )
        .click( function ( event ) {
            console.log( "On-page links" );
            if (
                location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) &&
                location.hostname == this.hostname
            ) {
                var target = $( this.hash );
                target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
                if ( target.length ) {
                    event.preventDefault();
                    $( 'html, body' ).animate( {
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $( target );
                        $target.focus();
                        if ( $target.is( ":focus" ) ) {
                            return false;
                        } else {
                            $target.attr( 'tabindex', '-1' );
                            $target.focus();
                        };
                    } );
                }
            }
        } );

    $( 'a[href="#"]' ).click( function ( event ) {
        console.log( "On-page links" );
        if (
            location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) &&
            location.hostname == this.hostname
        ) {
            event.preventDefault();
            $( 'html, body' ).animate( {
                scrollTop: 0
            }, 1000, function () {} );
        }
    } );

    $( ".list-group-item" ).click( function () {

        let subtitleNav;

        switch ( $( this ).attr( "id" ) ) {

            case "macro-tab":
                subtitleNav = '<li class="partBtn nav-item"><a class="nav-link" href="#macroPart1" onclick="nextStep(\'macroPart1\')">1</a></li><li class="partBtn nav-item"><a class="nav-link" href="#macroPart2" onclick="nextStep(\'macroPart2\')">2</a></li>';
                break;
            case "description-tab":
                subtitleNav = '<li class="nav-item"><a class="partBtn nav-link" href="#descriptionPart1" onclick="nextStep(\'descriptionPart1\')">1</a></li><li class="nav-item"><a class="partBtn nav-link" href="#descriptionPart2" onclick="nextStep(\'descriptionPart2\')">2</a></li><li class="nav-item"><a class="partBtn nav-link" href="#descriptionPart3" onclick="nextStep(\'descriptionPart3\')">3</a></li><li class="nav-item"><a class="partBtn nav-link" href="#descriptionPart4" onclick="nextStep(\'descriptionPart4\')">4</a></li><li class="nav-item"><a class="partBtn nav-link" href="#descriptionPart5" onclick="nextStep(\'descriptionPart5\')">5</a></li><li class="nav-item"><a class="partBtn nav-link" href="#descriptionPart6" onclick="nextStep(\'descriptionPart6\')">6</a></li>';
                break;
            case "organisation-tab":
                subtitleNav = '<li class="nav-item"><a class="partBtn nav-link" href="#organisationPart1" onclick="nextStep(\'organisationPart1\')">1</a></li><li class="nav-item"><a class="partBtn nav-link" href="#organisationPart2" onclick="nextStep(\'organisationPart2\')">2</a></li><li class="nav-item"><a class="partBtn nav-link" href="#organisationPart3" onclick="nextStep(\'organisationPart3\')">3</a></li><li class="nav-item"><a class="partBtn nav-link" href="#organisationPart4" onclick="nextStep(\'organisationPart4\')">4</a></li><li class="nav-item"><a class="partBtn nav-link" href="#organisationPart5" onclick="nextStep(\'organisationPart5\')">5</a></li><li class="nav-item"><a class="partBtn nav-link" href="#organisationPart6" onclick="nextStep(\'organisationPart6\')">6</a></li><li class="nav-item"><a class="partBtn nav-link" href="#organisationPart7" onclick="nextStep(\'organisationPart7\')">7</a></li><li class="nav-item"><a class="partBtn nav-link" href="#organisationPart8" onclick="nextStep(\'organisationPart8\')">8</a></li><li class="nav-item"><a class="partBtn nav-link" href="#organisationPart9" onclick="nextStep(\'organisationPart9\')">9</a></li>';
                break;
            case "plans-tab":
                subtitleNav = '<li class="nav-item"><a class="partBtn nav-link" href="#plansPart1" onclick="nextStep(\'plansPart1\')">1</a></li><li class="nav-item"><a class="partBtn nav-link" href="#plansPart2" onclick="nextStep(\'plansPart2\')">2</a></li><li class="nav-item"><a class="partBtn nav-link" href="#plansPart3" onclick="nextStep(\'plansPart3\')">3</a></li><li class="nav-item"><a class="partBtn nav-link" href="#plansPart4" onclick="nextStep(\'plansPart4\')">4</a></li>';
                break;
            case "realisation-tab":
                subtitleNav = '<li class="partBtn nav-item"><a class="nav-link" href="#realisationPart1" onclick="nextStep(\'realisationPart1\')">1</a></li><li class="partBtn nav-item"><a class="nav-link" href="#realisationPart2" onclick="nextStep(\'realisationPart2\')">2</a></li>';
                break;
            case "numerique-tab":
                subtitleNav = '<li class="partBtn nav-item"><a class="nav-link" href="#numeriquePart1" onclick="nextStep(\'numeriquePart1\')">1</a></li><li class="partBtn nav-item"><a class="nav-link" href="#numeriquePart2" onclick="nextStep(\'numeriquePart2\')">2</a></li>';
                break;
            default:
                break;
        }

        $( "#subtitles" ).html( subtitleNav );
    } );
} );

function nextStep( target ) {

    $( 'html, body' ).animate( {
        scrollTop: $( '#' + target ).offset().top - 170
    }, 1000, function () {

    } );
}