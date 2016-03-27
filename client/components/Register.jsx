const {
  AppBar,
  TextField,
  IconButton,
  RaisedButton
} = MUI;

Register= React.createClass({
      mixins: [React.addons.LinkedStateMixin],
        getInitialState(){
          return{
              email:'',
              username:'',
              pwd:''
          };
        },
       handlerSubmit(e) {
           e.preventDefault();
           var formData={
              email: this.state.email,
              username:this.state.username,
              pass: this.state.pwd
            };
            Meteor.call('register', formData, function (rer, res) {
                    if (rer != null) {
                        sweetAlert(rer.error);
                    }else{
                        //登录
                        Meteor.loginWithPassword(formData.email, formData.pass, function (error) {
                            if (error != null) {
                                sweetAlert(error.error);
                            }else{
                                FlowRouter.go('chats');
                            }
                        });
                    }
            });
       },
       componentDidMount(){

       },

  render() {
    return (

      <div>
      <AppBar iconElementLeft={<IconButton iconClassName="fa fa-arrow-left" />} title="注册猴吼" />
      <form role="form" onSubmit={this.handlerSubmit} >
        <div className="container" style={{marginTop:70}}>
          <TextField
              hintText="请输入昵称，例如：猴年马月" fullWidth={true}    required valueLink={this.linkState('username')}
            />
          <br/><br/>
          <TextField
              hintText="请输入你的邮箱" fullWidth={true}   required valueLink={this.linkState('email')}
            />
            <br/><br/>
            <TextField
              hintText="请输入你的密码" fullWidth={true} required valueLink={this.linkState('pwd')}
              type="password"
            />
            <br/><br/><br/>
          <RaisedButton label="注册" secondary={true} type="submit" fullWidth={true}/>
        </div>
      </form>
    </div>);
  }
});