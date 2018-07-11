    //
    // var w = window.innerWidth;
    // console.log(w);
    // if(w<782) {
    //     $('.progress-bar').animate({
    //         opacity: 1
    //     }, {
    //         progress: function (animation, progress, msRemaining) {
    //             $('.progress-bar').html(100 * progress + "%");
    //         }
    //     })
    // }

    $(document).ready(function(){

    var eventFired = false,
        objectPositionTop = ($('#skill').offset().top - 400);

    $(window).on('scroll', function() {

        var currentPosition = $(document).scrollTop();
        if (currentPosition > objectPositionTop && eventFired === false) {
            eventFired = true;

            $('.progress-bar').each(function() {

                $(this).animate({

                    width: $(this).data('percent') + '%'
                }, 2000);
            });
        }
    });

        })