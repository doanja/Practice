import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import LoadButton from "../LoadButton";

export default class PokemonList extends Component {
  state = {
    offset: 0,
    pokemon: null
  };

  // runs after things are rendered
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=${this.state.offset}&limit=20`
      )
      .then(res => {
        this.setState({ pokemon: res.data["results"] });
      })
      .catch(error => {
        console.log(error);
      });
  };

  loadPrev = () => {
    if (this.state.offset <= 20) {
      this.setState({ offset: 0 }, () => {
        this.getData();
      });
    } else if (this.state.offset > 20) {
      this.setState(
        {
          offset: this.state.offset - 20
        },
        () => {
          this.getData();
        }
      );
    }
  };

  loadNext = () => {
    this.setState(
      {
        offset: this.state.offset + 20
      },
      () => {
        this.getData();
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
        <LoadButton
          loadPrev={this.loadPrev}
          loadNext={this.loadNext}
        ></LoadButton>
      </React.Fragment>
    );
  }
}
