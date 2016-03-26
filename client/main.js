injectTapEventPlugin();
Meteor.startup(function () {
    //sweetAlert("Hello world!");
    //当进入房间事，把该房间内的消息全部拉取出来
    Tracker.autorun(function (computation) {
        if(Session.get('roomId')){
            var handler =  Meteor.subscribe("messages",Session.get('roomId'));
            if(handler.ready()){

            }
        }
    });
    Tracker.autorun(function (computation) {
    	if(Meteor.userId()){
	        Meteor.subscribe('room');
	        Meteor.subscribe("news");
	    }else{
	    	//FlowRouter.go('login');
	    }
    });
});