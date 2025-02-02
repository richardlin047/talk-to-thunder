import React from "react";

import "./share_buttons.css";

import { mutate } from "thunder-react";

interface Props {
  textContent: string;
  isSelection: boolean;
}

class ShareButtons extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  // Challenge 3b: add a button that will read a snippet out loud.
  // (hint: use the feature you added in 3a)

  handleSay = () => {
    mutate({
      query: `mutation {
          say(text: $text)
        }`,
      variables: {
        text: this.props.textContent
      }
    });
  }

  // TODO: serve icon locally.
  renderTwitter = (encodedText: string) => (
    <a
      href={`https://twitter.com/intent/tweet?text=${encodedText}`}
      className="twitter-share-button"
      data-hashtags="talktothunder"
      data-size="large"
    >
      <img
        width={18}
        src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg"
      />
    </a>
  );

  render() {
    const shareText = `"${this.props.textContent}" #talktothunder ⚡️`;
    const encodedText = encodeURIComponent(shareText);
    return (
      <div className="ShareButtons">
      <div>
        <button onClick={this.handleSay}>
          "Say this out loud"
        </button>
      </div>

        {this.props.isSelection ? "Share Selection: " : "Share Snippet: "}
        {this.renderTwitter(encodedText)}
      </div>
    );
  }
}

export default ShareButtons;
