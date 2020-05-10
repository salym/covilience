$( document ).ready( function () {
    $( 'body' ).bootstrapMaterialDesign();

    $( "#menu-toggle" ).click( function ( e ) {
        e.preventDefault();
        $( "#wrapper" ).toggleClass( "toggled" );
    } );

    $( ".list-group .list-group-item" ).click( function ( e ) {

        e.preventDefault();

        if ( $( "#menu-toggle" ).css("display") == "block" && parseInt( $(window).width() ) < 992) {
            $( "#wrapper" ).toggleClass( "toggled" );
        }

    } );

    $( 'a[href*="#"]' )
        .not( '[href="#"]' )
        .not( '[href="#0"]' )
        .click( function ( event ) {
            // console.log( "On-page links" );
            if (
                location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) &&
                location.hostname == this.hostname
            ) {
                var target = $( this.hash );
                target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
                if ( target.length ) {
                    event.preventDefault();
                    $( 'html, body' ).animate( {
                        scrollTop: target.offset().top - 200
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
        // console.log( "On-page links" );
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
} );