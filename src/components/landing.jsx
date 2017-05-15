import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Icon,
  Image,
  Segment
} from 'semantic-ui-react'
import $ from 'jquery'

import '../styles/landing.styl'


class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="landing">
        <div id="page1" className="masthead segment">
          <div id="header">
            <h1>Jon Powers </h1>
            <h2>Fullstack Web Developer </h2>
            <Container>
              <Grid columns={3}>
                <Grid.Column>
                  <Segment>
                    <Icon name="code" size="huge"/>
                    <h4></h4>
                    <p></p>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Icon name="html5" size="huge"/>
                    <h4>Modern Technologies</h4>
                    <p>Using the same software stack as the professionals, Node.js and React</p>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Icon name="map" size="huge"/>
                    <h4></h4>
                    <p></p>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Container>
          </div>
        </div>
        <div id="page2">
          <div className="header">
            <h1>Landing Pages</h1>
            <h2>Google Analytics and Adwords</h2>
            <h3>Bring in your next customer with this total SEO package</h3>
          </div>
          <Container className="row">
            <Grid stackable columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Segment color='green'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript_UI_widgets_library_for_building_desktop_and_mobile_web_apps.png" />
                    <Divider horizontal>Find</Divider>
                    <p>
                      Utilize the power of Google Adwords to send personalized advertisements to your customers
                    </p>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment color='green'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript_UI_widgets_library_for_building_desktop_and_mobile_web_apps.png" />
                      <Divider horizontal>Attract</Divider>
                      <p>
                        Impress your customers with an optimized landing page
                      </p>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment color='green'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript_UI_widgets_library_for_building_desktop_and_mobile_web_apps.png" />
                      <Divider horizontal>Learn</Divider>
                      <p>
                        Use Google Analytics to track behavior on your site, discovering how best to appeal to a potential client
                      </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <div id="page3">
          <div className="header">
            <h1>Web Applications</h1>
            <h2>Node.js and React</h2>
            <h3>Scale your data with your business and never forget a thing</h3>
          </div>
          <Container>
            <Grid stackable columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Segment color='orange'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript_UI_widgets_library_for_building_desktop_and_mobile_web_apps.png" />
                    <Divider horizontal>Responsive Design</Divider>
                    <p>
                      Whether on desktop, tablet, or mobile, your customers will receive a consistent experience that looks best on their device of choice.
                    </p>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment color='orange'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript_UI_widgets_library_for_building_desktop_and_mobile_web_apps.png" />
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment color='orange'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript_UI_widgets_library_for_building_desktop_and_mobile_web_apps.png" />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <div id="page4">
            <div className="header">
              <h1>General Maintence</h1>
              <h2>Your Software Stack</h2>
              <h3>Outsource the details so you can focus on the big picture</h3>
            </div>
            <Container>
              <Grid stackable columns={3}>
                <Grid.Row>
                  <Grid.Column>
                    <Segment color='pink'>
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript_UI_widgets_library_for_building_desktop_and_mobile_web_apps.png" />
                      <Divider horizontal>Responsive Design</Divider>
                      <p>
                        Whether on desktop, tablet, or mobile, your customers will receive a consistent experience that looks best on their device of choice.
                      </p>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment color='pink'>
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript_UI_widgets_library_for_building_desktop_and_mobile_web_apps.png" />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment color='pink'>
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript_UI_widgets_library_for_building_desktop_and_mobile_web_apps.png" />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
        </div>
      </div>
    )
  }
}

export default Landing;
