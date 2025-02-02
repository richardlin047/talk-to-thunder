import React from "react";

import Snippet from "./snippet";

import { connectGraphQL } from "thunder-react";

type Props = any; // TODO: generate this or specify

class AllSnippets extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        {this.props.data.value.allSnippets.map((s: any) => (
          <Snippet
            id={s.id}
            title={s.id}
            generatedText={s.generatedText}
            seedText={s.seedText}
          />
        ))}
      </div>
    );
  }
}

export default connectGraphQL(AllSnippets, () => ({
  // Challenge 1: Implement a query to load all snippets.
  query: `query {
    allSnippets{
      createdAt
      deletedAt
      generatedText
      id
      seedText
      state
    }
  }`,
  variables: {},
  onlyValidData: true
}));
