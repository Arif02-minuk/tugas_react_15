import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Icon,
  Search,
  Comment,
  Header,
  Table,
  Menu,
  Container,
  Label,
  Feed,
  Form,
  Button
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Table padded celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan={2}>
                  <Search placeholder="Search.." aligned="right" />
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Jenis FIle
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell warning>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
          <br />
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <Comment.Group>
                  <Header as="h3" dividing>
                    Commentar
                  </Header>

                  <Comment>
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                    <Comment.Content>
                      <Comment.Author as="a">Satria</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                      </Comment.Metadata>
                      <Comment.Text>Hallo...!</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>

                  <Comment>
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                    <Comment.Content>
                      <Comment.Author as="a">Danang</Comment.Author>
                      <Comment.Metadata>
                        <div>today at 5:50AM</div>
                      </Comment.Metadata>
                      <Comment.Text>
                        <p>
                          Kerjakan Sesuatu Semampu Kamu...
                        </p>
                      </Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                    <Comment.Group>
                      <Comment>
                        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                        <Comment.Content>
                          <Comment.Author as="a">Ricky</Comment.Author>
                          <Comment.Metadata>
                            <div>Just now</div>
                          </Comment.Metadata>
                          <Comment.Text>
                            Kmu Sekarang Dimana Danang?
                          </Comment.Text>
                          <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                          </Comment.Actions>
                        </Comment.Content>
                      </Comment>
                    </Comment.Group>
                  </Comment>

                  <Comment>
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                    <Comment.Content>
                      <Comment.Author as="a">Joe </Comment.Author>
                      <Comment.Metadata>
                        <div>1 days ago</div>
                      </Comment.Metadata>
                      <Comment.Text>
                       Terimakasih Atas Nasihat Nya
                      </Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>

                  <Form reply>
                    <Form.TextArea />
                    <Button
                      content="Add Reply"
                      labelPosition="left"
                      icon="edit"
                      primary
                    />
                  </Form>
                </Comment.Group>
              </Grid.Column>
              <Grid.Column width={5}></Grid.Column>

              <Grid.Column width={4}>
                <Feed>
                  <Feed.Event>
                    <Feed.Label>
                      <img
                        src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                        alt="profile"
                      />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Anton</Feed.User> added you as a friend
                        <Feed.Date>3 Hour Ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name="like" />4 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label>
                      <Icon name="pencil" />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        You Submitted a New post to the page
                      </Feed.Summary>{" "}
                      <br />
                      <Feed.Date>3 days ago</Feed.Date>
                      <Feed.Extra text>
                        Saya Senang Belajar Bahasa Pemrograman
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>11 Likes</Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
                    <Feed.Content>
                      <Feed.Date>4 days ago</Feed.Date>
                      <Feed.Summary>David added 2 New</Feed.Summary>
                      <Feed.Extra images>
                        <a href="home">
                          <img
                            src=" https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"
                            alt="Nimoic"
                          />
                        </a>
                        <a href="home">
                          <img
                            src=" https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png"
                            alt="React"
                          />
                        </a>
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name="like" />2 Like
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App;
