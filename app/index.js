var UserData = {
    name: 'Ivan',
    username: 'ivanuy',
    image: 'http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg'
};

var React = require('react');
var ReactDom = require('react-dom');

/*
     F - Focused
     I - Independent
     R - Reusable
     S - Small
     T - Testable
 */

var ProfilePic = React.createClass({
    render: function () {
        return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    }
});

var ProfileLink = React.createClass({
    render: function () {
        return (
            <div>
                <a href={"https://github.com/" + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
});

var ProfileName = React.createClass({
    render: function () {
        return (
            <div>{this.props.name}</div>
        )
    }
});

var Avatar = React.createClass({
    render: function () {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
});


ReactDom.render(
    <Avatar user={UserData} />,
    document.getElementById('app')
);
