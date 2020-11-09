import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CafeInfo from './CafeInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        cafes: state.cafes,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home
                    cafe={this.props.cafes.filter(cafe => cafe.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const AboutUs = () => {
            return (
                <About
                    partners={this.props.partners} />
            );
        };

        const CafeWithId = ({ match }) => {
            return (
                <CafeInfo cafe={this.props.cafes.filter(cafe => cafe.id === +match.params.cafeId)[0]}
                    comments={this.props.comments.filter(comment => comment.cafeId === +match.params.cafeId)} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory cafes={this.props.cafes} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' component={AboutUs} />
                    <Route path='/directory/:cafeId' component={CafeWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));