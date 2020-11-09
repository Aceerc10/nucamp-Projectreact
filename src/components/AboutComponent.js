import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPartner({partner}) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object width="158" src={partner.image} alt={partner.name} />
                <Media body className="ml-5 mb-4">
                    <Media heading>{partner.name} </Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        );
    }
    return <div />;
}

function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner} />
            </Media>
            
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>Ad detracto omittantur dissentiet quo. Ius vivendum necessitatibus ea. Eam ei probo mucius erroribus. Ut dicit aliquid has, ut nam persius quaerendum, eum zril fastidii te.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts About Us</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">september 1, 2020</dd>
                                <dt className="col-6">No. of cafe & bistro in 2020</dt>
                                <dd className="col-6">3</dd>
                                <dt className="col-6">No. of Reviews in 2020</dt>
                                <dd className="col-6">35</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">35</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">Ad detracto omittantur dissentiet quo. Ius vivendum necessitatibus ea. Eam ei probo mucius erroribus.</p>
                                <footer className="blockquote-footer">MARC,{' '}
                                    <cite title="Source Title">"We are the best" -
                                    My Home, 2020</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Our Community Partners</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;