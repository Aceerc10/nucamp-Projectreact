import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({ cafe }) {
    return (
        <Card>
            <Link to={`/directory/${cafe.id}`}>
                <CardImg width="100%" src={cafe.image} alt={cafe.name} />
                <CardImgOverlay>
                    <CardTitle>{cafe.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.cafes.map(cafe => {
        return (
            <div key={cafe.id} className="col-md-5 m-1">
                <RenderDirectoryItem cafe={cafe} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Directory</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Directory</h2>
                        <hr />
                    </div>
            </div>
            <div className="row">
                {directory}
            </div>

        </div>
    );
}

export default Directory;