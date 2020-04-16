import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../../graphql/mutations";
const { CREATE_FEATURE } = Mutations;

class MakeTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      rowValues: [],
    };
    this.createRow = this.createRow.bind(this);
    this.memberBoxCreate = this.memberBoxCreate.bind(this);
    this.handleFeatureSubmit = this.props.handleFeatureSubmit;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  createRow() {
    let counter = this.state.rows.length;
    this.setState((state) => {
      const list = state.rowValues.concat({
        counter: {
          [`pic${counter}`]: 0,
          [`name${counter}`]: 0,
          [`about${counter}`]: 0,
          [`socialLinks${counter}`]: { url: "" },
        },
      });

      return {
        rowValues: list,
      };
    });
    return (
      <div className="team-items" key={`name${counter}`}>
        <input
          className="new-site-data"
          onChange={this.update(counter, `pic${counter}`)}
          value={this.state.rowValues.counter}
          placeholder="Pic"
        />

        <input
          className="new-site-data"
          onChange={this.update(counter, `name${counter}`)}
          placeholder="Name"
        />

        <input
          className="new-site-data"
          onChange={this.update(counter, `about${counter}`)}
          placeholder="About"
        />

        <textarea
          className="new-site-data"
          onChange={this.update(counter, `socialLinks${counter}`, "url")}
          placeholder="url"
        />
      </div>
    );
  }

  memberBoxCreate() {
    this.setState((state) => {
      const list = state.rows.concat(this.createRow());
      return {
        rows: list,
      };
    });
  }

  handleSubmit() {
    let returnState = {};
    this.state.rowValues.forEach((obj, i) => {
      let social = Object.keys(obj.counter)[3];
      let newFormat = {};
      let newFormatUrl = obj.counter[social].url.split("*");
      newFormatUrl.forEach((data) => {
        let formating = data.split(": :");
        newFormat[formating[0]] = { url: formating[1] };
      });
      returnState[`member${i}`] = {
        pic: obj.counter[`pic${i}`],
        name: obj.counter[`name${i}`],
        about: obj.counter[`about${i}`],
        socialLinks: newFormat,
      };
    });
    return returnState;
  }

  update(memberSection, field, social = "none") {
    return (e) => {
      e.persist();
      this.setState((state) => {
        let newState = Object.assign({}, state);
        let newMember = memberSection;
        let newField = field;
        if (social !== "none") {
          newState.rowValues[newMember].counter[newField][social] =
            e.target.value;
        } else {
          newState.rowValues[newMember].counter[newField] = e.target.value;
        }
        return {
          rowValues: newState.rowValues,
        };
      });
    };
  }
  // EXAMPLE INPUT
  //   data:{
  //     member1: {
  //         pic:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         name: "Tom",
  //         about: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
  //         socialLinks: {
  //              facebook:{
  //                  url:"https://www.facebook.com",
  //              },
  //              instagram:{
  //                  url:"https://www.instagram.com",
  //              },
  //              linkedin:{
  //                  url:"https://www.linkedin.com",
  //              }
  //          },
  //
  //     },
  // }

  render() {
    return (
      <Mutation
        mutation={CREATE_FEATURE}
        update={(cache, data) => {
          this.handleFeatureSubmit(
            this.props.feature,
            data.data.makeFeature._id
          );
        }}
        onCompleted={(cache, data) => {}}
      >
        {(CreateFeature, { loading, error, data }) => {
          if (error) {
            return <div>{error.networkError.message}</div>;
          }
          return (
            <div className="team-div">
              <h1> Team Member Feature </h1>
              <button onClick={(e) => this.memberBoxCreate()}>
                Add More Team Members
              </button>
              <div className="team-div">
                <form
                  className="team-submit"
                  onSubmit={(e) => {
                    e.preventDefault();
                    let data = this.handleSubmit();
                    data = JSON.stringify(data);
                    let order = this.props.feature.toString();
                    CreateFeature({
                      variables: {
                        cssName: "1",
                        name: "Team",
                        data: data,
                        order: order,
                      },
                    });
                  }}
                >
                  <h1>
                    facebook: :*linkedin: :*twitter: :*youtube: :*instagram:
                    :*skype: :*pinterest: :*reddit: :*pr: :*
                  </h1>
                  {this.state.rows}
                  <input type="submit" />
                </form>
              </div>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default MakeTeam;

// https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48
// facebook: :https://www.facebook.com/*linkedin: :https://www.facebook.com/*twitter: :https://www.facebook.com/
