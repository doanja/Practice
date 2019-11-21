import React, { Component } from "react";
import axios from "axios";

const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "82351D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B94A156",
  steel: "B5B5C3",
  water: "3295F6"
};

export default class Pokemon extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageUrl: "",
    types: [],
    description: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      specialAttack: "",
      specialDefense: "",
      speed: ""
    },
    height: "",
    weight: "",
    eggGroups: "",
    abilities: "",
    genderRatioMale: "",
    genderRatioFemale: "",
    evs: "",
    hatchSteps: ""
  };

  componentDidMount() {
    // grab index from <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
    const { pokemonIndex } = this.props.match.params;

    this.getData(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`);
    this.getSpeciesData(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`
    );
  }

  getData = url => {
    axios
      .get(url)
      .then(res => {
        let { hp, attack, defense, speed, specialAttack, specialDefense } = "";

        res.data.stats.map(element => {
          switch (element.stat.name) {
            case "hp":
              hp = element["base_stat"];
              break;
            case "attack":
              attack = element["base_stat"];
              break;
            case "defense":
              defense = element["base_stat"];
              break;
            case "special-attack":
              specialAttack = element["base_stat"];
              break;
            case "special-defense":
              specialDefense = element["base_stat"];

              break;
            case "speed":
              speed = element["base_stat"];
              break;
          }
        });

        this.setState({
          name: res.data.name,
          pokemonIndex: res.data.id,
          imageUrl: res.data.sprites.front_default,
          height: Math.round((res.data.height * 0.328084 + 0.0001) * 100) / 100,
          weight: Math.round((res.data.height * 0.220462 + 0.0001) * 100) / 100,
          types: res.data.types.map(element => {
            console.log(element.type.name);
            return element.type.name;
          }),
          abilities: res.data.abilities.map(element => {
            return element.ability.name;
          }),

          evs: res.data.stats
            .filter(element => {
              if (element.effort > 0) {
                return true;
              }
              return false;
            })
            .map(element => {
              return `${element.effort} ${element.stat.name}`;
            }),
          stats: {
            hp,
            attack,
            defense,
            speed,
            specialAttack,
            specialDefense
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getSpeciesData = url => {
    axios
      .get(url)
      .then(res => {
        let description = "";

        res.data.flavor_text_entries.some(element => {
          if (element.language.name === "en") {
            description = element.flavor_text;
            return;
          }
        });

        const eggGroups = res.data["egg_groups"]
          .map(group => {
            return group.name
              .toLowerCase()
              .split(" ")
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ");
          })
          .join(", ");

        this.setState({
          description,
          genderRatioFemale: res.data["gender_rate"] * 12.5,
          genderRatioMale: 12.5 * (8 - res.data["gender_rate"]),
          catchRate: Math.round((100 / 255) * res.data["capture_rate"]),
          eggGroups,
          hatchSteps: 255 * (res.data["hatch_counter"] + 1)
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        {/* <h1>{this.state.name}</h1>
      <img src={this.state.imageUrl} className="mx-auto d-block mt-2"></img>
      <p>{this.state.stats.hp}</p> */}
        <div className="col">
          <div className="card-header bg-secondary">
            <div className="row">
              <div className="col-5">
                <h5>{this.state.pokemonIndex}</h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  {this.state.types.map(type => {
                    return (
                      <span
                        key={type}
                        className="badge badge-primary badge-pill mr-1"
                        style={badgeStyle(type)}
                      >
                        {type}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="card-body bg-light">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img
                  src={this.state.imageUrl}
                  alt="Pokemon Image"
                  className="card-img-top rounded mx-auto mt-2"
                />
              </div>
              <div className="col-md-9">
                <h4 className="mx-auto">{this.state.name}</h4>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">HP</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progress-bar"
                        style={{ width: `${this.state.stats.hp}%` }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.hp}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Attack</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progress-bar"
                        style={{ width: `${this.state.stats.attack}%` }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.attack}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Defense</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progress-bar"
                        style={{ width: `${this.state.stats.defense}%` }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.defense}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Special Attack</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progress-bar"
                        style={{ width: `${this.state.stats.specialAttack}%` }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.specialAttack}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Special Defense</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progress-bar"
                        style={{ width: `${this.state.stats.specialDefense}%` }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.specialDefense}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Speed</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progress-bar"
                        style={{ width: `${this.state.stats.speed}%` }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.speed}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col">
                  <p className="p-2">{this.state.description}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="card-body">
            <h5 className="card-title text-center">Profile</h5>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="div col-md-6">
                    <h6 className="float-right">Height:</h6>
                  </div>
                  <div className="div col-md-6">
                    <h6 className="float-left">{this.state.height}</h6>
                  </div>
                  <div className="div col-md-6">
                    <h6 className="float-right">Weight:</h6>
                  </div>
                  <div className="div col-md-6">
                    <h6 className="float-left">{this.state.weight}</h6>
                  </div>
                  <div className="div col-md-6">
                    <h6 className="float-right">Catch Rate:</h6>
                  </div>
                  <div className="div col-md-6">
                    <h6 className="float-left">{this.state.catchRate}</h6>
                  </div>
                  <div className="div col-md-6">
                    <h6 className="float-right">Gender Ratio:</h6>
                  </div>
                  <div className="div col-md-6">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.genderRatioFemale}%`,
                          backgroundColor: "#C2185B"
                        }}
                        aria-valuenow="15"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.genderRatioFemale}</small>
                      </div>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.genderRatioMale}%`,
                          backgroundColor: "#1976D2"
                        }}
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.genderRatioMale}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-6">
                    <h6 className="float-right">Egg Groups:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.eggGroups} </h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-right">Hatch Steps:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.hatchSteps}</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-right">Abilities:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.abilities}</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-right">EVs:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.evs}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const badgeStyle = type => {
  return {
    backgroundColor: `#${TYPE_COLORS[type]}`,
    color: "#fff",
    textTransform: "capitalize"
  };
};
