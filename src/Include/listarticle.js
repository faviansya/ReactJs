import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div >
                <li className="list-group-item bg-light">
                    <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </li>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <span className="badge badge-info">New</span>
                    <div className=" w-100 justify-content-between">
                        <h5 className="mb-1">Ikuti BootCamp Alphatech Academy</h5>
                        <small className="text-muted">2 days ago</small>
                    </div>
                    <p class="mb-1">Kini Alpatech Memberikan kesempatan bagi non IT untuk mengikuti
            bootcamp.</p>
                    <small className="text-muted">Diposting Oleh: Vian</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <span className="badge badge-info">New</span>
                    <div className=" w-100 justify-content-between">
                        <h5 className="mb-1">Python Is The Best Language</h5>
                        <small className="text-muted">2 days ago</small>
                    </div>
                    <p class="mb-1">Dengan menggunakan python kita bisa membuat berbagai jenis program
            dan alat yang kita inginkan.</p>
                    <small className="text-muted">Diposting Oleh: Vian</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <span className="badge badge-info">New</span>

                    <div className=" w-100 justify-content-between">
                        <h5 className="mb-1">Java Still Number 1 in 2019</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Menurut TIOBE.COM Java Menempati Urutan Pertama Bahasa Pemrograman
            yang Paling Banyak Digunakan diseluruh dunia.</p>

                    <small className="text-muted">Diposting Oleh: Vian</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <span className="badge badge-info">New</span>

                    <div className=" w-100 justify-content-between">
                        <h5 className="mb-1">Ayo Belajar Bareng ATA</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                <p class="mb-1">Belajar di ATA berlokasi di Malang dan sangat menyenangkan, kalian
            mendapatkan fasilitas yang luwar biyasa.</p>
                    <small className="text-muted">Diposting Oleh: Vian</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action text-info bg-light">Back To Home</a>
            </div >
        );
    }
}

export default Footer;