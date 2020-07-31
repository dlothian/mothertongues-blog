
var documents = [{
    "id": 0,
    "url": "https://blog.mothertongues.org/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://blog.mothertongues.org/about",
    "title": "",
    "body": "Welome to the Mother Tongues Blog. "
    }, {
    "id": 2,
    "url": "https://blog.mothertongues.org/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://blog.mothertongues.org/",
    "title": "Home",
    "body": "      Featured:                                                                                                           Welcome                              :               Welcome to the Mother Tongues official blog!:                                                                                                                                                                       Aidan                                17 Mar 2020                                                                                                                            All Stories:                                     Standard post template              :       This blog post describes what a basic template for a post on this blog should look like. Feel free to just copy past the headers into your post and replace. . . :                                                                               Aidan                31 Jul 2020                                                                    Write a post              :       Here’s a short tutorial on how to write your first blog post on the official Mother Tongues Blog. This tutorial assumes you’ve already signed up to become an author. :                                                                               Aidan                17 Mar 2020                                                                                                                                             Become an author              :       Do you have a tip you’d like to share? Have you pulled your hair out fixing a bug only to find out that the reason the bug exists is because. . . :                                                                               Aidan                17 Mar 2020                                            "
    }, {
    "id": 4,
    "url": "https://blog.mothertongues.org/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "https://blog.mothertongues.org/post-template/",
    "title": "Standard post template",
    "body": "2020/07/31 - This blog post describes what a basic template for a post on this blog should look like. Feel free to just copy past the headers into your post and replace the text! The instructions for each section are italicized, and the answers for this specific blog post are following the italicized text. TL;DRWe reccomend having a section at the top that gives an extremely short summary of the post (ideally 2 or 3 sentences). This should be high-level, and shouldn’t assume any technical knowledge. This is a template of a blog post to follow when writing other blog posts - how meta! Technical AssumptionsYour post should have a list of technical skills that you think are needed to understand the blog post. This will help the reader know if they’ll be able to benefit from reading it or whether they should study up on something first.  Knowledge of writing markdownWho is involved with this project?Beyond the author’s information which will be part of this post, there should be a list of everybody involved with the technology discussed in the post, if applicable. The list of contacts should be clear  Author/Blog Maintainer: Aidan PineWhat is needed to replicate the content in the post?Is the technology or tip you’re describing reproducible? If so, what are the requirements? For example, is it available for any language, given 20 hours of audio data? You will need to follow the steps of becoming an author and writing a post before using this template. What are the motivations behind this project/technology/tip?Was this project funded? By whom? What were the explicit goals of the technology in question, or are they left unstated? Mother Tongues was created to release open-source software for language revitalization and includes tools for dictionaries and [orthography converters][https://github. com/roedoejet/convertextract]. Please read the About section for more information. Main Post &lt;– replace titleHere is where the main post should go - because this is just a template, there’s nothing here! "
    }, {
    "id": 6,
    "url": "https://blog.mothertongues.org/write-a-post/",
    "title": "Write a post",
    "body": "2020/03/17 - Here’s a short tutorial on how to write your first blog post on the official Mother Tongues Blog. This tutorial assumes you’ve already signed up to become an author. Posts on the Mother Tongues Blog are written in Markdown. In order to write a new post, follow the following steps.  In your fork of the Mother Tongues Blog Respository, make sure you’re in the dev. author branch and add a new post to the _posts folder. Your post file name must by slugified. It must start with the date (yyyy-mm-dd) and then the blog post name, 2020-01-15-this-is-a-sample. md.  Add some meta data about the post at the top:  1234567891011---layout: posttitle:  Become an author author: aidancategories: [ Tutorial, Blog ]tags: [ intermediate ]image: assets/images/01. jpgdescription:  Write your own articles for the Mother Tongues Blog featured: falsehidden: false---    Write the content of your post in Markdown. Please have a look at the template for writing accessible posts! When you’re happy with it, Submit a pull requestThanks for contributing! "
    }, {
    "id": 7,
    "url": "https://blog.mothertongues.org/welcome/",
    "title": "Welcome",
    "body": "2020/03/17 - Welcome to the Mother Tongues official blog! Mother Tongues is an organization that releases free and open source tools for language revitalization. Here you’ll find blog posts, tips, tricks and tutorials for developing language technology with a focus on Indigenous languages. Be sure to sign up to our mailing list to keep track of new blog posts and any events. "
    }, {
    "id": 8,
    "url": "https://blog.mothertongues.org/become-an-author/",
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