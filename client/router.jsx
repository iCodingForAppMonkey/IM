const {
  AppBar,
  List,
  Avatar,
  FontIcon,
  TextField,
  RaisedButton,
  IconButton,
  Divider,
  NavigationSubdirectoryArrowLeft,
  ListItem
} = MUI;

FlowRouter.route('/',{
	name: "login",
	action(params, queryParams) {
		ReactLayout.render(EmptyLayout,{content:<div>
			<AppBar showMenuIconButton={false} title="猴吼" />
			<div className="container" style={{marginTop:70,textAlign:"center"}}>
				<spand>
					<Avatar src="houhou.jpg" size={60}/>
				</spand>
				<br/><br/>
				<TextField
			      hintText="请输入你的邮箱" fullWidth={true} 	
			    />
			    <br/><br/>
			    <TextField
			      hintText="请填写用户名" fullWidth={true}
			      type="password"
			    />
    			<br/><br/><br/>
				<RaisedButton label="登录" secondary={true} fullWidth={true}/>
			</div>
			<div style={{
				width:"100%",
				position:"fixed",
				marginBottom:"2em",
				bottom:"0px",
				textAlign:"center"
			}}>
				<a href="/register">注册</a>
			</div>
			</div>});
	}
});

FlowRouter.route('/register',{
	name: "register",
	action(params, queryParams) {
		ReactLayout.render(EmptyLayout,{content:<div>
			<AppBar iconElementLeft={<IconButton iconClassName="fa fa-arrow-left" />} title="猴吼" />
			<div className="container" style={{marginTop:70}}>
				<TextField
			      hintText="请输入昵称，例如：猴年马月" fullWidth={true} 	
			    />
				<br/><br/>
				<TextField
			      hintText="请输入你的邮箱" fullWidth={true} 	
			    />
			    <br/><br/>
			    <TextField
			      hintText="请填写用户名" fullWidth={true}
			      type="password"
			    />
    			<br/><br/><br/>
				<RaisedButton label="注册" secondary={true} fullWidth={true}/>
			</div>

		</div>});
	}
});

FlowRouter.route('/chats',{
	name: "chats",
	action(params, queryParams) {
		ReactLayout.render(EmptyLayout,{content:<div>
			<AppBar showMenuIconButton={false} title="猴吼" titleStyle={{textAlign:"center"}} zDepth={2}/>
			<ListItem 
		      primaryText="测试"
		      leftAvatar={<Avatar src="http://7xnwr1.com2.z0.glb.qiniucdn.com/green.png" />} 
		      rightIcon={<FontIcon className="fa fa-weixin" />} />
		    <Divider />
		    <ListItem 
		      primaryText="测试"
		      leftAvatar={<Avatar src="houhou.jpg" />} 
		      rightIcon={<FontIcon className="fa fa-weixin" />} />
		    <Divider />


		    <div style={{
				width:"100%",
				position:"fixed",
				bottom:"0px",
				textAlign:"center"
			}}>
				<Divider />
				<div className="row" style={{fontSize:"0.4em",marginTop:"1em",marginBottom:"0px"}}>
					<div className="col s3"><a href="/chats"><i className="fa fa-comments" style={{fontSize:"4em"}}></i><br/>猴吼</a></div>
      				<div className="col s3"><a href="/friends"><i className="fa fa-users"  style={{fontSize:"4em"}}></i><br/>好友</a></div>
      				<div className="col s3"><a href="/news"><i className="fa fa-wifi" style={{fontSize:"4em"}}></i><br/>动态</a></div>
					<div className="col s3"><a href="/me"><i className="fa fa-user" style={{fontSize:"4em"}}></i><br/>我</a></div>
				</div>
			</div>
		</div>});
	}
});
