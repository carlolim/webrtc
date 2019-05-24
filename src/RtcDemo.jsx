import React, { Component } from "react";
import Peer from "peerjs";

const peer = new Peer();

class RtcDemo extends Component {
    constructor(props) {
        super(props);
        this.myVideo = React.createRef();
        this.remoteVideo = React.createRef();
        this.state = {
            userId: "",
            myId: ""
        }
    }

    componentDidMount() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        peer.on('call', (call) => {
            console.log("user calling", call);
            navigator.getUserMedia({ video: true, audio: true }, (stream) => {
                this.myVideo.current.srcObject = stream;
                call.answer(stream); // Answer the call with an A/V stream.
                call.on('stream', (remoteStream) => {
                    // Show stream in some <video> element.
                    this.remoteVideo.current.srcObject = remoteStream;
                });
            }, (err) => {
                console.error('Failed to get local stream', err);
            });
        });
    }

    answerCall = () => {
    }

    callUser = () => {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        navigator.getUserMedia({ video: true, audio: true }, (stream) => {
            this.myVideo.current.srcObject = stream;
            const call = peer.call(this.state.userId, stream);
            call.on('stream', (remoteStream) => {
                // Show stream in some <video> element.
                this.remoteVideo.current.srcObject = remoteStream;
            });
        }, (err) => {
            console.error('Failed to get local stream', err);
        });
    }


    render() {
        return (
            <>
                <p>my id: {this.state.myId}</p>
                <video autoPlay ref={this.myVideo}></video>
                <video autoPlay ref={this.remoteVideo}></video>
                <input type="text" placeholder="user id" value={this.state.userId} onChange={(e) => { this.setState({ userId: e.target.value }) }} />
                <button onClick={this.callUser.bind(this)}>Call</button>
                <button onClick={this.answerCall.bind(this)}>Answer</button>
                <button onClick={() => {this.setState({myId: peer._id})}}>Log my details</button>
            </>
        )
    }
}

export default RtcDemo;