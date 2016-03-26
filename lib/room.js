Rooms=new Mongo.Collection('room');
Message=new Mongo.Collection('message');
Friends=new Mongo.Collection('friend');
News=new Mongo.Collenction('news');
Comments=new Mongo.Collenction('comments');
Comments.allow({
    insert:function(userId,comment){
        return comment.u._id === userId;
    }
});