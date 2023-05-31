import React from 'react';

export class Reader extends React.Component {
  state = {
    publicationIndex: 0,
  };

  changeIndex = value => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + value,
    }));
  };

  render() {
    return (
      <div>
        <section>
          <button type="button" onClick={() => this.changeIndex(-1)}>
            Back
          </button>
          <button type="button" onClick={() => this.changeIndex(1)}>
            Next
          </button>
        </section>

        <p>
          {this.state.publicationIndex + 1}/{this.props.publications.length}
        </p>

        {/* <article>
          <h2>Title of Article</h2>
          <p>
            Text of article Text of article Text of article Text of articleText
            of articleText of articleText of articleText of article
          </p>
        </article> */}
      </div>
    );
  }
}
