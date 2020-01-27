var month;
var eventmonthstart;
let monthcsvs = ["Events/january.csv", "Events/february.csv", "Events/march.csv", "Events/april.csv", "Events/may.csv", "Events/june.csv", "Events/july.csv", "Events/august.csv", "Events/september.csv", "Events/october.csv", "Events/november.csv", "Events/december.csv"];
let evid = ["ev1", "ev2", "ev3", "ev4", "ev5", "ev6", "ev7", "ev8", "ev9", "ev10", "ev11", "ev12", "ev13", "ev14", "ev15", "ev16", "ev17", "ev18", "ev19", "ev20", "ev21", "ev22", "ev23", "ev24", "ev25", "ev26", "ev27", "ev28", "ev29", "ev30", "ev31"];
let janevents;
let febevents;
let marevents;
let aprevents;
let mayevents;
let junevents;
let julevents;
let augevents;
let sepevents;
let octevents;
let novevents;
let decevents;
for (var x = 0; x < 12; x++) {
    if (x == 0) {
        d3.csv(monthcsvs[x]).then(function (data) {
            janevents = data;
        });
    }
    if (x == 1) {
        d3.csv(monthcsvs[x]).then(function (data) {
            febevents = data;
        });
    }
    if (x == 2) {
        d3.csv(monthcsvs[x]).then(function (data) {
            marevents = data;
        });
    }
    if (x == 3) {
        d3.csv(monthcsvs[x]).then(function (data) {
            aprevents = data;
        });
    }
    if (x == 4) {
        d3.csv(monthcsvs[x]).then(function (data) {
            mayevents = data;
        });
    }
    if (x == 5) {
        d3.csv(monthcsvs[x]).then(function (data) {
            junevents = data;
        });
    }
    if (x == 6) {
        d3.csv(monthcsvs[x]).then(function (data) {
            julevents = data;
        });
    }
    if (x == 7) {
        d3.csv(monthcsvs[x]).then(function (data) {
            augevents = data;
        });
    }
    if (x == 8) {
        d3.csv(monthcsvs[x]).then(function (data) {
            sepevents = data;
        });
    }
    if (x == 9) {
        d3.csv(monthcsvs[x]).then(function (data) {
            octevents = data;
        });
    }
    if (x == 10) {
        d3.csv(monthcsvs[x]).then(function (data) {
            novevents = data;
        });
    }
    if (x == 11) {
        d3.csv(monthcsvs[x]).then(function (data) {
            decevents = data;
        });
    }
}

function startcalendar() {
    let months = ["January 2020", "February 2020", "March 2020", "April 2020", "May 2020", "June 2020", "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020"];
    let monthdates = ["January 1, 2020 00:00:00", "February 1, 2020 00:00:00", "March 1, 2020 00:00:00", "April 1, 2020 00:00:00", "May 1, 2020 00:00:00", "June 1, 2020 00:00:00", "July 1, 2020 00:00:00", "August 1, 2020 00:00:00", "September 1, 2020 00:00:00", "October 1, 2020 00:00:00", "November 1, 2020 00:00:00", "December 1, 2020 00:00:00"];
    let lastmonthdates = ["January 31, 2020 00:00:00", "February 29, 2020 00:00:00", "March 31, 2020 00:00:00", "April 30, 2020 00:00:00", "May 31, 2020 00:00:00", "June 30, 2020 00:00:00", "July 31, 2020 00:00:00", "August 31, 2020 00:00:00", "September 30, 2020 00:00:00", "October 31, 2020 00:00:00", "November 30, 2020 00:00:00", "December 31, 2020 00:00:00"];
    let showeventparam = ["showevent(1)", "showevent(2)", "showevent(3)", "showevent(4)", "showevent(5)", "showevent(6)", "showevent(7)", "showevent(8)", "showevent(9)", "showevent(10)", "showevent(11)", "showevent(12)", "showevent(13)", "showevent(14)", "showevent(15)", "showevent(16)", "showevent(17)", "showevent(18)", "showevent(19)", "showevent(20)", "showevent(21)", "showevent(22)", "showevent(23)", "showevent(24)", "showevent(25)", "showevent(26)", "showevent(27)", "showevent(28)", "showevent(29)", "showevent(30)", "showevent(31)"]
    var amntinmonths = 0;
    var firstday = new Date(monthdates[month]);
    var lastday = new Date(lastmonthdates[month]);
    var day = firstday.getDay();
    var lday = lastday.getDate();
    var beforeday = day;
    var ddate = 1;
    if (day == 0) {
        beforeday = 7;
    }
    document.getElementById("month").innerHTML = months[month];
    while (day < 45) {
        for (before = 1; before < beforeday; before++) {
            document.getElementById(before).innerHTML = "";
            document.getElementById(before).nextElementSibling.style.display = "none";
            document.getElementById(before).nextElementSibling.id = "";
        }
        if (ddate <= lday) {
            if (day == 0) {
                document.getElementById("7").id = "0";
                document.getElementById(day).innerHTML = ddate;
                document.getElementById(day).nextElementSibling.setAttribute("onclick", showeventparam[ddate - 1]);
                document.getElementById(day).nextElementSibling.id = evid[ddate - 1];
                document.getElementById(day).nextElementSibling.style.display = "none";
                document.getElementById("0").id = "7";
                day = 7;
                ddate++;
                day++;
            }
            else {
                document.getElementById(day).innerHTML = ddate;
                document.getElementById(day).nextElementSibling.setAttribute("onclick", showeventparam[ddate - 1]);
                document.getElementById(day).nextElementSibling.id = evid[ddate - 1];
                document.getElementById(day).nextElementSibling.style.display = "none";
                eventmonthstart = firstday.getDay();
                ddate++;
                day++;
            }

        }
        else if (ddate > lday && day < 43) {
            document.getElementById(day).innerHTML = "";
            document.getElementById(day).nextElementSibling.style.display = "none";
            document.getElementById(day).nextElementSibling.id = "";
            day++;
        }
        else if (day == 43) {
            eventexists();
            break;
        }
    }
}
function changemonth(actn) {
    if (actn == 0) {
        if (month == 0) {
            document.getElementById("notimetext").innerHTML = "You can't go any further back in time";
            $("#notime").modal("show");
        }
        else {
            window.scrollTo(0,0);
            month = month - 1;
            startcalendar();
        }

    }
    else if (actn == 1) {
        if (month == 11){
            document.getElementById("notimetext").innerHTML = "You can't go any further in time";
            $("#notime").modal("show");
        }
        else{
            window.scrollTo(0,0);
            month = month + 1;
            startcalendar(); 
        }
    }
}
function firstmonth(){
    month = new Date().getMonth();
    startcalendar();
}
function showevent(eventrn) {
    if (month == 0) {
        for (amntinmonths = 0; amntinmonths <= janevents.length; amntinmonths++) {
            var eventdata = janevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 1) {
        for (amntinmonths = 0; amntinmonths <= febevents.length; amntinmonths++) {
            var eventdata = febevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 2) {
        for (amntinmonths = 0; amntinmonths <= marevents.length; amntinmonths++) {
            var eventdata = marevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 3) {
        for (amntinmonths = 0; amntinmonths <= aprevents.length; amntinmonths++) {
            var eventdata = aprevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 4) {
        for (amntinmonths = 0; amntinmonths <= mayevents.length; amntinmonths++) {
            var eventdata = mayevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 5) {
        for (amntinmonths = 0; amntinmonths <= junevents.length; amntinmonths++) {
            var eventdata = junevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 6) {
        for (amntinmonths = 0; amntinmonths <= julevents.length; amntinmonths++) {
            var eventdata = julevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 7) {
        for (amntinmonths = 0; amntinmonths <= augevents.length; amntinmonths++) {
            var eventdata = augevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 8) {
        for (amntinmonths = 0; amntinmonths <= sepevents.length; amntinmonths++) {
            var eventdata = sepevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 9) {
        for (amntinmonths = 0; amntinmonths <= octevents.length; amntinmonths++) {
            var eventdata = octevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 10) {
        for (amntinmonths = 0; amntinmonths <= novevents.length; amntinmonths++) {
            var eventdata = novevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
    if (month == 11) {
        for (amntinmonths = 0; amntinmonths <= decevents.length; amntinmonths++) {
            var eventdata = decevents[amntinmonths];
            var date = eventdata.Date;
            if (date == eventrn) {
                var time_from = eventdata.Time_from;
                var time_till = eventdata.Time_till;
                var time = time_from + " -" + time_till;
                var title = eventdata.Titel;
                var description = eventdata.Description;
                var location = eventdata.Location;
                document.getElementById("event_title").innerHTML = title;
                document.getElementById("time").innerHTML = time;
                document.getElementById("description").innerHTML = description;
                document.getElementById("location").innerHTML = location;
                $("#eventshower").modal("show");
            }
        }
    }
}
function eventexists() {
    if (month == 0) {
        for (amntinmonths = 0; amntinmonths <= janevents.length; amntinmonths++) {
            var eventdata = janevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 1) {
        for (amntinmonths = 0; amntinmonths <= febevents.length; amntinmonths++) {
            var eventdata = febevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 2) {
        for (amntinmonths = 0; amntinmonths <= marevents.length; amntinmonths++) {
            var eventdata = marevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 3) {
        for (amntinmonths = 0; amntinmonths <= aprevents.length; amntinmonths++) {
            var eventdata = aprevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 4) {
        for (amntinmonths = 0; amntinmonths <= mayevents.length; amntinmonths++) {
            var eventdata = mayevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 5) {
        for (amntinmonths = 0; amntinmonths <= junevents.length; amntinmonths++) {
            var eventdata = junevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 6) {
        for (amntinmonths = 0; amntinmonths <= julevents.length; amntinmonths++) {
            var eventdata = julevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 7) {
        for (amntinmonths = 0; amntinmonths <= augevents.length; amntinmonths++) {
            var eventdata = augevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 8) {
        for (amntinmonths = 0; amntinmonths <= sepevents.length; amntinmonths++) {
            var eventdata = sepevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 9) {
        for (amntinmonths = 0; amntinmonths <= octevents.length; amntinmonths++) {
            var eventdata = octevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 10) {
        for (amntinmonths = 0; amntinmonths <= novevents.length; amntinmonths++) {
            var eventdata = novevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
        }
    }
    if (month == 11) {
        for (amntinmonths = 0; amntinmonths <= decevents.length; amntinmonths++) {
            var eventdata = decevents[amntinmonths];
            var date = eventdata.Date;
            var shortdescription = eventdata.one_word_description;
            document.getElementById(evid[date-1]).innerHTML = shortdescription;
            document.getElementById(evid[date - 1]).style.display = "block";
            
        }
    }
}