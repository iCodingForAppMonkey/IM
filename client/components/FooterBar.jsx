const {
  Divider
} = MUI;

FooterBar= React.createClass({
  render() {
    return (
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
      </div>);
  }
});