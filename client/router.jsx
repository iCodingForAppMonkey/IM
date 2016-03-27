const {
  AppBar,
  List,
  Avatar,
  FontIcon,
  TextField,
  RaisedButton,
  IconButton,
  Divider,
  Card,
  CardMedia,
  CardTitle,
  CardHeader,
  Paper,
  Menu,
  MenuItem,
  Styles,
  NavigationSubdirectoryArrowLeft,
  ListItem
} = MUI;

let {SvgIcons} = MUI.Libs;

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
		ReactLayout.render(EmptyLayout,{content:<Register />});
	}
});

FlowRouter.route('/chats',{
	name: "chats",
	action(params, queryParams) {
		ReactLayout.render(EmptyLayout,{content:<div>
			<AppBar showMenuIconButton={false} title="猴吼" titleStyle={{textAlign:"center"}} zDepth={2}/>
			<ListItem 
		      primaryText="大夫"
		      leftAvatar={<Avatar src="http://7xnwr1.com2.z0.glb.qiniucdn.com/green.png" />} 
		      rightIcon={<FontIcon className="fa fa-weixin" />} />
		    <Divider />
		    <ListItem 
		      primaryText="猴吼"
		      leftAvatar={<Avatar src="houhou.jpg" />} 
		      rightIcon={<FontIcon className="fa fa-weixin" />} />
		    <Divider />
		    <FooterBar />
		</div>});
	}
});

FlowRouter.route('/friends',{
	name: "friends",
	action(params, queryParams) {
		ReactLayout.render(EmptyLayout,{content:<div>
			<AppBar showMenuIconButton={false}  title="好友" titleStyle={{textAlign:"center"}} 
			zDepth={2} iconClassNameRight="fa fa-user-plus" />
			    <List>
			      <ListItem
			        primaryText="猴吼"
			        leftIcon={<SvgIcons.ActionGrade color={Styles.Colors.pinkA200} />}
			        rightAvatar={<Avatar src="houhou.jpg" />}
			      />
			      <ListItem
			        primaryText="大夫"
			        insetChildren={true}
			        rightAvatar={<Avatar src="http://7xnwr1.com2.z0.glb.qiniucdn.com/green.png" />}
			      />
			    </List>
			    <Divider inset={true} />
			    <List>
			      <ListItem
			        primaryText="韩医生"
			        leftAvatar={
			          <Avatar
			            color={Styles.Colors.pinkA200} backgroundColor={Styles.Colors.transparent}
			            style={{left: 8}}
			          >
			            A
			          </Avatar>
			        }
			        rightAvatar={<Avatar src="http://7xnwr1.com2.z0.glb.qiniucdn.com/lidongsheng_hang.jpg" />}
			      />
			      <ListItem
			        primaryText="逗比"
			        insetChildren={true}
			        rightAvatar={<Avatar src="http://7xnwr1.com2.z0.glb.qiniucdn.com/yuying_20140313134507_AkaMR.jpeg" />}
			      />
			    </List>
		    <FooterBar />
		</div>});
	}
});

FlowRouter.route('/news',{
	name: "news",
	action(params, queryParams) {
		ReactLayout.render(EmptyLayout,{content:<div>
			<AppBar showMenuIconButton={false}  title="动态" titleStyle={{textAlign:"center"}} 
			zDepth={2} iconClassNameRight="fa fa-camera"
			/>
			<Card>
			    <CardMedia
				      overlay={<CardTitle children={<Avatar src="houhou.jpg" />} title="iCoding"  />}
				    >
			      <img src="http://lorempixel.com/600/337/nature/" />
			    </CardMedia>
			</Card>
		    <Divider />
		    <br />
		    <div>
		    	<CardHeader
				      title="iCoding"
				      subtitle="Meteor for iCoding!"
				      avatar="houhou.jpg"
				    />
		    	<div style={{padding:16}}>
		    		<Paper style={{
					  height: 100,
					  width: 100,
					  margin: 5,
					  textAlign: 'center',
					  display: 'inline-block'
					}} zDepth={1}/>
					<Paper style={{
					  height: 100,
					  width: 100,
					  margin: 5,
					  textAlign: 'center',
					  display: 'inline-block'
					}} zDepth={1}/>
					<Paper style={{
					  height: 100,
					  width: 100,
					  margin: 5,
					  textAlign: 'center',
					  display: 'inline-block'
					}} zDepth={1}/>
					<div>
					<small>
						1小时
					</small>
					
					<div className="pull-right">
						<i className="fa fa-thumbs-up" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<i className="fa fa-comment" />
					</div>
					
					</div>
		    	</div>
		    </div>
		    <Divider />
		    <br/>
		     <br/>
		      <br/>
		       <br/>
		    <FooterBar />
		</div>});
	}
});

FlowRouter.route('/me',{
	name: "me",
	action(params, queryParams) {
		ReactLayout.render(EmptyLayout,{content:<div>
			<AppBar showMenuIconButton={false}  title="我" titleStyle={{textAlign:"center"}} 
			zDepth={2} 
			/>
			 <Menu>
			  <Divider />
		      <MenuItem primaryText="头像" rightIcon={<Avatar src="houhou.jpg" />} />
		      <Divider />
		      <MenuItem primaryText="名字" secondaryText="iCoding&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" rightIcon={ <i className="fa fa-angle-right"/>} />
		      <Divider />
		      <MenuItem primaryText="猴吼号" rightIcon={<div>iCoding <i className="fa fa-angle-right"/></div>} />
		      <Divider />
		      <MenuItem primaryText="我的二维码" rightIcon={<i className="fa fa-angle-right"/>} />
		      <MenuItem primaryText="我的地址" rightIcon={<i className="fa fa-angle-right"/>} />
		      <Divider />
		      <MenuItem primaryText="性别" rightIcon={<div>男 <i className="fa fa-angle-right"/></div>} />
		      <MenuItem primaryText="地区" rightIcon={<div>北京 <i className="fa fa-angle-right"/></div>} />
		      <MenuItem primaryText="个性签名" rightIcon={<i className="fa fa-angle-right">无码不欢 </i>} />
		      <MenuItem primaryText="聊天背景" rightIcon={<i className="fa fa-angle-right"/>} />
		      <MenuItem primaryText="帮助与反馈" rightIcon={<i className="fa fa-angle-right"/>} />
		       <MenuItem primaryText="关于猴吼" rightIcon={<i className="fa fa-angle-right"/>} />
		       <Divider />
		       <MenuItem primaryText="退出登录" />
		    </Menu>
		    <br/>
		    <br/>
		    <br/>
		    <FooterBar />
		</div>});
	}
});
