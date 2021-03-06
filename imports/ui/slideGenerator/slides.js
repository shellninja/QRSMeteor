try {
    var Reveal = require("reveal");
} catch (error) {}
import "./reveal.css";
// import 'reveal/theme/default.css';
import lodash from "lodash";
import hljs from "highlight.js";
import { Logger } from "/imports/api/logger";
import { getQix, initQlikSense } from "/imports/ui/useCases/useCaseSelection";
import * as nav from "/imports/ui/nav.js";

_ = lodash;
var Cookies = require("js-cookie");
var showdown = require("showdown");
var converter = new showdown.Converter();
var numberOfActiveSlides = 10;

//
// ─── SLIDES ─────────────────────────────────────────────────────────────────────
//

Template.slides.onCreated(async function() {
    $("body").css({
        overflow: "hidden"
    });
});

Template.slides.onDestroyed(function() {
    $("body").css({
        overflow: "auto"
    });
});

Template.slides.onRendered(async function() {
    await slideDataLoaded();
    initializeReveal();
    this.$("aside").popup({
        title: "Slides",
        content: "You are navigating in a 'presentation', you can press escape to get an overview, or use your keyboard arrows to go to the next and previous slides.",
        delay: {
            show: 500,
            hide: 0
        }
    });
});

async function slideDataLoaded() {
    Meteor.setTimeout(async function() {
        if (!Session.get("slideHeaders")) {
            console.log("------------------------------------");
            console.log(
                "No slide data present in session, reroute the user back to the Selection screen."
            );
            console.log("------------------------------------");
            nav.showSlideSelector();
            return;
        }
    }, 3000);
}

Meteor.startup(async function() {
    await initQlikSense();
})

function initializeReveal() {
    try {
        window.Reveal = Reveal;
        console.log('initializeReveal', Reveal);
        Reveal.initialize({
            width: window.innerWidth - 80,
            embedded: true,
            controls: true,
            center: false,
            // Flags if speaker notes should be visible to all viewers
            showNotes: true,
            autoPlayMedia: true,
            fragments: false,
            // autoSlide: 1000,
            loop: false,
            transition: "slide", // none/fade/slide/convex/concave/zoom
            previewLinks: false,
            slideNumber: true
        });

        Session.set("activeStepNr", 0);
        addSlideChangedListener();
    } catch (error) {}
}

function addSlideChangedListener() {
    console.log('!!!!!!!!!!!!! addSlideChangedListener')
    Reveal.addEventListener("slidechanged", function(evt) {
        console.log("slidechanged", evt.indexh);
        Session.set("activeStepNr", evt.indexh);
        $(".ui.embed").embed();
    });
}

//
// ─── SLIDE CONTENT ──────────────────────────────────────────────────────────────────────
//
Template.slideContent.onCreated(async function() {
    var instance = this;
    instance.bullets = new ReactiveVar([]); //https://stackoverflow.com/questions/35047101/how-do-i-access-the-data-context-and-the-template-instance-in-each-case-event
    instance.comment = new ReactiveVar([]);

    //the header and sub header for which we want to load the slide data/bullets
    var level1 = Template.currentData().slide[0].qText;
    var level2 = Template.currentData().slide[1].qText;
    // and now let's get the slide content:
    instance.bullets.set(await getLevel3(level1, level2));
    //get the comment of the page
    instance.comment.set(await getComment(level1, level2));    
});

Template.slideContent.helpers({
    bullets: function() {
        var res = Template.instance().bullets.get();
        if (res) var newArray = [];
        res.forEach(function(item) {
            newArray.push(convertToHTML(item));
        });
        return newArray;
    },
    comment: function() {
        var comment = Template.instance().comment.get();
        if (comment.length > 10) return createCommentBox(comment);
    }
});

Template.slideContent.onRendered(async function() {
    var template = this;

    //if the slide is shown, log it into the database
    Logger.insert({
        userId: Meteor.userId,
        role: Cookies.get("currentMainRole"),
        userProfile: Meteor.user(),
        website: location.href,
        counter: 1,
        eventType: "slideRendered",
        topic: this.data.slide[0].qText,
        slide: this.data.slide[1].qText,
        currentSlideNr: Reveal.getIndices().h,
        slidesContainedInSelection: $(".slide").length,
        viewDate: new Date() // current time
    });

    Meteor.setTimeout(function() {
        //embed youtube containers in a nice box without loading all content
        template.$(".ui.embed").embed({
            autoplay: false
        });
        //make sure all code gets highlighted using highlight.js
        template.$("pre code").each(function(i, block) {
            hljs.highlightBlock(block);
        });
        //ensure all links open on a new tab
        template.$('a[href^="http://"], a[href^="https://"]').attr("target", "_blank");

        //check if there is content on the page, if not add the change listener again (happens sometimes when users keep the screen open for a long time)
        var slideContent = template.bullets.get();
        // console.log("slideContent.onRendered array of bullets: ", slideContent);
        if (slideContent.length === 0) {
            console.log('------------------------------------');
            console.log('No slide data retrieved from Qlik Sense, re-adding the slide changed event listener...');
            console.log('------------------------------------');
            addSlideChangedListener();
            window.location.href = window.location.origin;
            //location.reload(); //@todo to evaluate if this helps
        }
    }, 2000);
});

Template.slideContent.events({
    "click a": function(e, t) {
        e.stopPropagation();
        Logger.insert({
            userId: Meteor.userId,
            userProfile: Meteor.user(),
            role: Cookies.get("currentMainRole"),
            counter: 1,
            eventType: "linkClick",
            topic: Template.parentData(1).slide[0].qText,
            slide: Template.parentData(1).slide[1].qText,
            linkName: e.currentTarget.innerText,
            linkSource: e.target.baseURI,
            viewDate: new Date() // current time
        });
    }
});

//
// ─── HELPERS ────────────────────────────────────────────────────────────────────
//
Template.slides.helpers({
    slideHeaders() {
        return Session.get("slideHeaders"); //only the level 1 and 2 colums, we need this for the headers of the slide
    }
});

Template.slide.helpers({
    active(slideNr) {
        var activeSlide = Session.get("activeStepNr") ? Session.get("activeStepNr") : $(".slide-number").text();
        var active =
            slideNr < activeSlide + numberOfActiveSlides &&
            slideNr > activeSlide - numberOfActiveSlides;
        return active;
    }
});

Template.registerHelper("level", function(level, slide) {
    level -= 1;
    return slide[level].qText;
});

Template.registerHelper("step", function() {
    return Session.get("activeStepNr");
});

//
// ─── FOR EACH SLIDE GET THE LEVEL 3 ITEMS USING SET ANALYSIS ────────────────────
//
async function getLevel3(level1, level2) {
    // console.log("getLevel3: " + level1 + ' -' + level2);
    try {
        var qix = await getQix();
        var sessionModel = await qix.app.createSessionObject({
            qInfo: {
                qType: "cube"
            },
            qHyperCubeDef: {
                qDimensions: [{
                    qDef: {
                        qFieldDefs: ["Level 3"]
                    }
                }],
                qMeasures: [{
                    qDef: {
                        qDef: 'sum({< "Level 1"={"' +
                            level1 +
                            '"}, "Level 2"={"' +
                            level2 +
                            '"} >}1)'
                    }
                }]
            }
        });
        // console.log('sessionModel', sessionModel)
        // console.log('------------------------------------');
        // console.log('QDEF IS sum({< "Level 1"={"' + level1 + '"}, "Level 2"={"' + level2 + '"} >}1)');
        // console.log('------------------------------------');
        sessionData = await sessionModel.getHyperCubeData("/qHyperCubeDef", [{
            qTop: 0,
            qLeft: 0,
            qWidth: 2,
            qHeight: 1000
        }]);

        var level3Temp = sessionData[0].qMatrix;
        /* console.log(
          "Qlik returned the following data for the sheet: " + level2,
          normalizeData(level3Temp)
        ); */
        sessionModel.removeAllListeners();
        return normalizeData(level3Temp);
    } catch (error) {
        console.error(
            "error getting level 3 data (the bullets) for the slide",
            error
        );
        window.location.href = window.location.origin;
    }
}

function createCommentBox(text) {
    // console.log('createCommentBox for text', text)
    var textAfterCommentMarker = text.split("!comment").pop();
    var messagebox =
        `
        <section class="commentBox">
            <div class="ui icon message">
            <i class="help icon"></i>
            <div class="content">
            <div class="header">
                Let's explain what we mean here...
            </div>
                 ` +
        converter.makeHtml(textAfterCommentMarker) +
        `
            </div>
        </div>
        </section>`; //select all text after the !comment... and print it in a nice text box

    return messagebox;
}

//
// ─── FOR EACH SLIDE GET THE COMMENT TEXT USING SET ANALYSIS ─────────────────────
//

async function getComment(level1, level2) {
    var qix = await getQix();
    var sessionModel = await qix.app.createSessionObject({
        qInfo: {
            qType: "cube"
        },
        qHyperCubeDef: {
            qDimensions: [{
                qDef: {
                    qFieldDefs: ["Comment"]
                }
            }],
            qMeasures: [{
                qDef: {
                    qDef: 'sum({< "Level 1"={"' +
                        level1 +
                        '"}, "Level 2"={"' +
                        level2 +
                        '"} >}1)'
                }
            }]
        }
    });
    sessionData = await sessionModel.getHyperCubeData("/qHyperCubeDef", [{
        qTop: 0,
        qLeft: 0,
        qWidth: 2,
        qHeight: 1000
    }]);

    var comment = sessionData[0].qMatrix[0][0].qText;
    return comment != "null" ? comment : "";
}

function normalizeData(senseArray) {
    var result = [];
    senseArray.forEach(element => {
        result.push(element[0].qText);
    });
    return result;
}

function convertToHTML(text) {
    // console.log('convertToHTML text', text)
    var commentMarker = "!comment";
    var embeddedImageMarker = `!embeddedImage`;

    //
    // ─── YOUTUBE ────────────────────────────────────────────────────────────────────
    //
    if (youtube_parser(text)) {
        //youtube video url
        // console.log('found an youtube link so embed with the formatting of semantic ui', text)
        var videoId = youtube_parser(text);
        var html =
            '<div class="ui container videoPlaceholder"><div class="ui embed" data-source="youtube" data-id="' +
            videoId +
            '" data-icon="video" data-placeholder="images/youtube.jpg"></div></div>';
        // console.log('generated video link: ', html);
        return html;
    }

    //
    // ─── IFRAME ─────────────────────────────────────────────────────────────────────
    //
    else if (text.startsWith("iframe ")) {
        //if a text starts with IFRAME: we convert it into an IFRAME with a class that sets the width and height etc...
        var sourceURL = text.substr(text.indexOf(" ") + 1);
        return (
            '<iframe src="' +
            sourceURL +
            '" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'
        );
    }

    //
    // ─── IMAGE ──────────────────────────────────────────────────────────────────────
    //
    else if (checkTextIsImage(text) && text.includes("https://")) {
        return (
            '<div class="ui container"> <img class="ui massive rounded bordered image"  style="width: 100%;" src="' +
            text +
            '"/></div>'
        );
    } else if (checkTextIsImage(text)) {
        return (
            '<div class="ui container"> <img class="ui massive rounded bordered image"  style="width: 100%;" src="images/' +
            text +
            '"/></div>'
        );
    } else if (text.startsWith(embeddedImageMarker)) {
        //embedded image in text
        var textMarker = text.split(embeddedImageMarker).pop();
        return (
            '<div class="ui container"><img class="ui massive rounded bordered image"   style="width: 100%;"  alt="Embedded Image" src="data:image/png;base64,' +
            textMarker +
            '"/> </div>'
        );
    }
    //
    // ─── COMMENT ────────────────────────────────────────────────────────────────────
    //
    else if (text.startsWith(commentMarker)) {
        //vertical slide with comments
        //ignore, comments are added on another place
    }

    //
    // ─── CUSTOM HTML ────────────────────────────────────────────────────────────────
    //
    else if (text.startsWith("<")) {
        //custom HTML
        return text;
    }

    //
    // ─── TEXT TO BE CONVERTED TO VIA MARKDOWN ───────────────────────────────────────
    //
    else {
        //text, convert the text (which can include markdown syntax) to valid HTML
        var result = converter.makeHtml(text);
        // console.log('Markdown result', result)
        if (result.substring(1, 11) === "blockquote") {
            return '<div class="ui green segment">' + result + "</div>";
        } else {
            return '<div class="zBullet">' + result + "<br> </div>";
        }
    }
}

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    // console.log('de url '+ url + ' is een match met youtube? '+ (match && match[7].length == 11));
    return match && match[7].length == 11 ? match[7] : false;
}

function checkTextIsImage(text) {
    return text.match(/\.(jpeg|jpg|gif|png|svg)$/) != null;
}