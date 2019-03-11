import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div >
                <li className="list-group-item bg-light">Top Article</li>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
                    <span className="badge badge-info">#1</span>
                    <div className="w-100 justify-content-between">
                        <h5 className="mb-1">Ikuti BootCamp Alphatech Academy</h5>
                        <small>1 days ago</small>
                    </div>
                    <small>Diposting Oleh: Vian</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <span className="badge badge-info">#2</span>
                    <div className=" w-100 justify-content-between">
                        <h5 className="mb-1">Python Is The Best Language</h5>
                        <small className="text-muted">2 days ago</small>
                    </div>
                    <small className="text-muted">Diposting Oleh: Vian</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <span className="badge badge-info">#3</span>

                    <div className=" w-100 justify-content-between">
                        <h5 className="mb-1">Java Still Number 1 in 2019</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <small className="text-muted">Diposting Oleh: Vian</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <span className="badge badge-info">#4</span>

                    <div className=" w-100 justify-content-between">
                        <h5 className="mb-1">Ayo Belajar Bareng ATA</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <small className="text-muted">Diposting Oleh: Vian</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action text-info bg-light">Lihat Semua</a>
            </div >
        );
    }
}

export default Footer;