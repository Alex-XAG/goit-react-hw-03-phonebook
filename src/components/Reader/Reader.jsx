import React from 'react';
import { Controls } from './Conrols';

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
    const { publicationIndex } = this.state;
    const { publications } = this.props;
    const currentPublication = publications[publicationIndex];
    return (
      <div>
        <Controls
          changeIndex={this.changeIndex}
          publicationIndex={publicationIndex}
          publications={publications}
        />

        <p>
          {publicationIndex + 1}/{publications.length}
        </p>

        <article>
          <h2>{currentPublication.title}</h2>
          <p>{currentPublication.description}</p>
        </article>
      </div>
    );
  }
}
