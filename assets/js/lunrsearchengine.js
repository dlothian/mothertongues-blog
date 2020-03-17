
var documents = [{
    "id": 0,
    "url": "/mothertongues-blog/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/mothertongues-blog/about",
    "title": "",
    "body": "Welome to the Mother Tongues Blog. "
    }, {
    "id": 2,
    "url": "/mothertongues-blog/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/mothertongues-blog/",
    "title": "Home",
    "body": "      Featured:                                                                                                     Welcome                              :               Welcome to the Mother Tongues official blog!:                                                                                                                                                                       Aidan                                17 Mar 2020                                                                                                                            All Stories:                                     Write a post              :       Here’s a short tutorial on how to write your first blog post on the official Mother Tongues Blog. This tutorial assumes you’ve already signed up to become an author. :                                                                               Aidan                17 Mar 2020                                                                                                                                             Become an author              :       Do you have a tip you’d like to share? Have you pulled your hair out fixing a bug only to find out that the reason the bug exists is because. . . :                                                                               Aidan                17 Mar 2020                                            "
    }, {
    "id": 4,
    "url": "/mothertongues-blog/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "/mothertongues-blog/write-a-post/",
    "title": "Write a post",
    "body": "2020/03/17 - Here’s a short tutorial on how to write your first blog post on the official Mother Tongues Blog. This tutorial assumes you’ve already signed up to become an author. Posts on the Mother Tongues Blog are written in Markdown. In order to write a new post, follow the following steps.  In your fork of the Mother Tongues Blog Respository, make sure you’re in the dev. author branch and add a new post to the _posts folder. Your post file name must by slugified. It must start with the date (yyyy-mm-dd) and then the blog post name, 2020-01-15-this-is-a-sample. md.  Add some meta data about the post at the top:  1234567891011---layout: posttitle:  Become an author author: aidancategories: [ Tutorial, Blog ]tags: [ intermediate ]image: assets/images/01. jpgdescription:  Write your own articles for the Mother Tongues Blog featured: falsehidden: false---    Write the content of your post in Markdown.  When you’re happy with it, Submit a pull requestThanks for contributing! "
    }, {
    "id": 6,
    "url": "/mothertongues-blog/welcome/",
    "title": "Welcome",
    "body": "2020/03/17 - Welcome to the Mother Tongues official blog! Mother Tongues is an organization whose focus is to provide powerful tools for language revitalization. Here you’ll find small tips and tricks for developing language technology with a focus on Indigenous languages. Be sure to sign up to our mailing list to keep track of new blog posts and any events. "
    }, {
    "id": 7,
    "url": "/mothertongues-blog/become-an-author/",
    "title": "Become an author",
    "body": "2020/03/17 - Do you have a tip you’d like to share? Have you pulled your hair out fixing a bug only to find out that the reason the bug exists is because many mainstream platforms don’t consider less-resourced languages? The Mother Tongues blog is the place to share your tips, tricks, and tutorials for all things related to technology for less-resourced languages. To become an author, you’ll need a GitHub account1. Then, follow these steps:  Fork the Mother Tongues Blog Respository Checkout to the dev. author branch Edit the file labelled _config. yml. * denotes a required value.   1234567891011121314151617authors: aidan:  name: Aidan  display_name: Aidan  gravatar: 7623fd3eeb0acbe1084fecc20c3093ae  email: hello@aidanpine. ca  web: https://aidanpine. ca  twitter: https://twitter. com/aidanpine  description:  Lead developer of Mother Tongues.   yourname*:   name: YourName*   display_name: YourName*   email: your@email. com*   gravatar: YourGravatarID   web: yoursite. com   twitter: https://twitter. com/yourhandle   description:  Guest Author. YourDescriptionHere     Submit a pull requestThat’s it! Start writing your posts.   Footnotes: 1: Any suggestions for good GitHub tutorials? Leave them in the comments below! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});