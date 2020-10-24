import React from 'react';
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <div className="post-header">
                <Avatar
                    className="post-avatar"
                    alt="codexLegacy
                    "
                    src="https://lh3.googleusercontent.com/a-/AOh14GjtuZUfPcGHci82CRRNAc1GkdHMS8nRH9qZNshF=s88-c-k-c0x00ffffff-no-rj-mo"
                />
                <h3>Username</h3>
            </div>
           
            {/* Header ->avatar * username */}
            <img className="post-image" src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" alt="" />
           
            <h4 className="post-text"><strong>CodexLegacy:</strong> This React Coding Is Amazing.......</h4>
           
        </div>
    )
}

export default Post
