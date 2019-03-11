import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <isi>
                    <div class="container-fluid">
                        <div class="row" >
                            <div class="d-sm-none d-lg-block d-md-none col-6 col-lg-6 sideView">
                                <div>
                                    <table style={{ width: "100%", height: "100%", border: "none", margin: "0", padding: "0" }}>
                                        <tr>
                                            <td style={{ border: "none" }}>
                                                <img src="assets/img/logo/logo-alterra-academy-plain@2x.png" alt="" class="center" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div class="col-6 col-lg-6 col-sm-12 col-md-12 leftview ">
                                <div class="container">
                                    <div style={{ marginTop: "25px", marginLeft: "44px", marginRight: "44px" }}>
                                        <div class="row">
                                            <div class="col-12">
                                                <strong><h2>Contact Us</h2></strong>
                                                <span style={{ fontSize: "12px" }}>Send us a message and we will get back to you as soon
                                        as possible</span>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="fontInForm">
                                            <div class="row">
                                                <div class="col-12">
                                                    <label for="exampleFormControlTextarea1">Name<redcolo style={{ color: "red" }}>*</redcolo></label>
                                                    <form>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control inputsName" placeholder="Username" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <label for="exampleFormControlTextarea1">Email<redcolo style={{ color: "red" }}>*</redcolo></label>
                                                    <form>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control inputsEmail" placeholder="Email" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <label for="exampleFormControlTextarea1">Phone<redcolo style={{ color: "red" }}>*</redcolo></label>
                                                    <form>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control inputsPhone" placeholder="Phone" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <label for="exampleFormControlTextarea1">Nationality</label>
                                                    <form>
                                                        <select class="custom-select inputsNationality">
                                                            <option selected>Nationality</option>
                                                            <option value="1">Indonesia</option>
                                                            <option value="2">Thailand</option>
                                                            <option value="3">Zimbabwe</option>
                                                        </select>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <form>
                                                        <div class="form-group">
                                                            <label for="exampleFormControlTextarea1">Message</label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <input class="btn btn-primary" type="submit" value="Submit" style={{ width: "100% !important", backgroundColor: "#F47522", border: "0px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </isi>
            </div>
        );
    }
}

export default App;