    $(document).ready(function(){
        $('#navmainpage').hide();
        $('#search-help').hide();
        var searchHelper = 0;
        
    if ($("#search-menu").length > 0) {
        $(window).bind("load", function() {
            var $window = $(window),
               $stickyEl = $('#search-menu'),
               elTop = $stickyEl.offset().top;
    
            $window.scroll(function() {
                $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
            });
        });
    }
    
    $('ref').each(function() {
        var reftarget = $(this).attr("target");
        var refdate = $(this).children('date').attr("when");
        var str1 = '<a href="' + reftarget + '" title="' + refdate + '" target="_blank"></a>';
        $(this).children('date').wrap(str1);
    });
    
    $('lb').after('<br/>');
    
    $('unclear').after('<span> </span>');
    
    $('gap').each(function() {
        var extent = $(this).attr('extent');
        var reason = $(this).attr('reason');
        var result = '';
        if (typeof extent != 'undefined') {
            result += "Extent: " + extent + "  |";
        }
        if (typeof reason != 'undefined') {
            result += " Reason: " + reason + "  ";
        }
        var str1 = '<span style="border-bottom:1px dotted; "title="';
        var str2 = '" ><span>[gap]</span>';
        var link = str1.concat(result,str2);
        $(this).append(link);
    });
    
    $("note[type='editorial']").each(function() {
        var noteContent = $(this).text();
        var noteResult = '';
        noteResult += " " + noteContent + " ";
        var str1 = '<span style="border-bottom:1px dotted; "title="';
        var str2 = '" ><span>[note]</span>';
        var link = str1.concat(noteResult,str2);
        $(this).html(link);
    });
    
    $('#pers').click(function() {
        $(this).toggleClass('red');
        $('persName').toggleClass('active');
        return false;
    });
    
    $('#add').click(function() {
        $(this).toggleClass('red');
        $("add[rend != 'pencil']").toggleClass('active');
        return false;
    });
    
    $('#pencils').click(function() {
        $(this).toggleClass('red');
        $('[rend=pencil]').toggleClass('active');
        return false;
    });
    
    $('.hiddenmenu').click(function() {
        $('#navmainpage').toggle();
    });
    
    $('#search-toggle').click(function() {
       $('#search-help').toggle();
       if (searchHelper === 0) {
            $('#search-toggle').text("hide help");
            searchHelper = 1;
       } else if (searchHelper === 1) {
            $('#search-toggle').text("show help");
            searchHelper = 0;
       }
            return false;
    });
    
    $("button#gaps").on('click', showGapsClick);
    function showGapsClick () {
        $(this).toggleClass('red');
        $('gap').toggleClass('active');
        $("button#gaps").html('gaps')
            .off('click').on('click', hideGapsClick);
        return false;
    }
    
    function hideGapsClick () {
        $(this).toggleClass('red');
        $('gap').toggleClass('active');
        $("button#gaps").html('gaps')
            .off('click').on('click', showGapsClick);
        return false;
    }       

    $("button#notes").on('click', showNotesClick);
    function showNotesClick () {
        $(this).toggleClass('red');
        $('note').toggleClass('active');
        $("button#notes").html('notes')
            .off('click').on('click', hideNotesClick);
        return false;
    }
    
    function hideNotesClick () {
        $(this).toggleClass('red');
        $('note').toggleClass('active');
        $("button#notes").html('notes')
            .off('click').on('click', showNotesClick);
        return false;
    }
    
    $("button#help").on('click', showHelpClick);
    function showHelpClick () {
        $(this).toggleClass('red');
        $('div#helpbox').show()
            .toggleClass('helpactive');
        $("button#help").off('click').on('click', hideHelpClick);
        return false;
    }
    
    function hideHelpClick () {
        $(this).toggleClass('red');
        $('div#helpbox').toggleClass('helpactive')
            .hide();
        $("button#help").off('click').on('click', showHelpClick);
        return false;
    }
    
    $("button#places").on('click', placesSearchBox);
    function placesSearchBox () {
        $(this).toggleClass('red');
        $('placeName').toggleClass('active')
        $("#nader").html('<script type="text/javascript" src="./resources/js/listPlaces.js"></script>');
        $("button#places").off('click').on('click', restoreSearchBox);
        return false;
    }
    
    function restoreSearchBox () {
        $("#nader").html('<br/><input type="text" id="alphasearch" placeholder="Search this page..." autocomplete="off"/><button id="show">Search</button><br/><a id="search-toggle" href="#" style="font-size: 0.8em;">search help</a><div id="search-help"><span><ul><li><b>Searching:</b> You can search for items word by word, <br/>or you can use multiple words like so: a, b, c</li></ul></span></div></div>')
        $("button#places").off('click').on('click', placesSearchBox);
        $(this).toggleClass('red');
        $('placeName').toggleClass('active')
        return false;
    }
        
    $(window).on('scroll', function () {
        $("div.hiddenmenu").css({opacity:0.5});
    });
    
    $(window).scroll(function() {
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            $("div.hiddenmenu").css({opacity:1.0});
    }, 150));
});
        
});