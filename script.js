$(document).ready(function () {

    function navigateMark_init() {
        var menu = $("header > nav > ul.menu > li");

        menu.click(function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        });

    }

    function searchBarOpen() {
        var searchBtn = $("header > nav > div.search-btn");
        searchBtn.click(function () {
            $("div#search-bar").addClass("active");
        });

        $("header").siblings().click(function () {
            $("div#search-bar").removeClass("active");
        });
    }


    navigateMark_init();
    searchBarOpen();


});