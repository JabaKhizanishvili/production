$((function(){"use strict";var e=["2018-5-10","2018-5-11","2018-5-12","2018-5-13","2018-5-14","2018-5-15","2018-5-16"];new Date,$(".fc-datepicker").datepicker({showOtherMonths:!0,selectOtherMonths:!0,dateFormat:"yy-mm-dd",beforeShowDay:function(t){for(var n=t.getMonth(),a=t.getDate(),i=t.getFullYear(),o=0;o<e.length;o++)if(-1!=$.inArray(i+"-"+(n+1)+"-"+a,e))return[!0,"ui-date-highlighted",""];return[!0]}}),function(e){for(var t=0,n=[" AM"," PM"],a=[],i=[12,1,2,3,4,5,6,7,8,9,10,11],o=0;o<i.length;o++){for(a.push(i[o]+":"+t+t+n[0]);t<30;)a.push(i[o]+":"+((t+=30)<10?"O"+t:t)+n[0]);t=0}a=a.concat(a.slice(0).map((function(e){return e.replace(n[0],n[1])}))),$.each(a,(function(t,n){$(e).append('<option value="'+n+'">'+n+"</option>")}))}(".main-event-time"),$("#calendar").fullCalendar({header:{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay,listWeek"},navLinks:!0,selectable:!0,selectLongPressDelay:100,editable:!0,nowIndicator:!0,defaultView:"listMonth",views:{agenda:{columnHeaderHtml:function(e){return"<span>"+e.format("ddd")+"</span><span>"+e.format("DD")+"</span>"}},day:{columnHeader:!1},listMonth:{listDayFormat:"ddd DD",listDayAltFormat:!1},listWeek:{listDayFormat:"ddd DD",listDayAltFormat:!1},agendaThreeDay:{type:"agenda",duration:{days:3},titleFormat:"MMMM YYYY"}},eventSources:[azCalendarEvents,azBirthdayEvents,azHolidayEvents,azOtherEvents],eventAfterAllRender:function(e){"listMonth"!==e.name&&"listWeek"!==e.name||e.el.find(".fc-list-heading-main").each((function(){var e=$(this).text().split(" "),t=moment().format("DD");$(this).html(e[0]+"<span>"+e[1]+"</span>"),t===e[1]&&$(this).addClass("now")})),console.log(e.el)},eventRender:function(e,t){e.description&&(t.find(".fc-list-item-title").append('<span class="fc-desc">'+e.description+"</span>"),t.find(".fc-content").append('<span class="fc-desc">'+e.description+"</span>"));var n=e.source.borderColor?e.source.borderColor:e.borderColor;t.find(".fc-list-item-time").css({color:n,borderColor:n}),t.find(".fc-list-item-title").css({borderColor:n}),t.css("borderLeftColor",n)}});var t=$("#calendar").fullCalendar("getCalendar");window.matchMedia("(min-width: 576px)").matches&&t.changeView("agendaWeek"),window.matchMedia("(min-width: 992px)").matches&&t.changeView("month"),t.option("windowResize",(function(e){"listWeek"===e.name&&(window.matchMedia("(min-width: 992px)").matches?t.changeView("month"):t.changeView("listWeek"))})),t.getDate(),t.option("select",(function(e,t){$("#modalSetSchedule").modal("show"),$("#mainEventStartDate").val(e.format("LL")),$("#EventEndDate").val(t.format("LL")),$("#mainEventStartTime").val(e.format("LT")).trigger("change"),$("#EventEndTime").val(t.format("LT")).trigger("change")})),t.on("eventClick",(function(e,t,n){var a=$("#modalCalendarEvent");a.modal("show"),a.find(".event-title").text(e.title),e.description?(a.find(".event-desc").text(e.description),a.find(".event-desc").prev().removeClass("d-none")):(a.find(".event-desc").text(""),a.find(".event-desc").prev().addClass("d-none")),a.find(".event-start-date").text(moment(e.start).format("LLL")),a.find(".event-end-date").text(moment(e.end).format("LLL")),a.find(".modal-header").css("backgroundColor",e.source.borderColor?e.source.borderColor:e.borderColor)})),$(".main-nav-calendar-event a").on("click",(function(e){e.preventDefault(),$(this).hasClass("exclude")?($(this).removeClass("exclude"),$(this).is(":first-child")&&t.addEventSource(azCalendarEvents),$(this).is(":nth-child(2)")&&t.addEventSource(azBirthdayEvents),$(this).is(":nth-child(3)")&&t.addEventSource(azHolidayEvents),$(this).is(":nth-child(4)")&&t.addEventSource(azOtherEvents)):($(this).addClass("exclude"),$(this).is(":first-child")&&t.removeEventSource(1),$(this).is(":nth-child(2)")&&t.removeEventSource(2),$(this).is(":nth-child(3)")&&t.removeEventSource(3),$(this).is(":nth-child(4)")&&t.removeEventSource(4)),t.render(),window.matchMedia("(max-width: 575px)").matches&&$("body").removeClass("main-content-left-show")}))}));