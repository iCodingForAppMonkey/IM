Rooms = new Mongo.Collection('room');
Messages = new Mongo.Collection('message');
News = new Mongo.Collection('news');
News.allow({
    insert:function(userId,nw){
        return nw.u._id === userId;
    }
});