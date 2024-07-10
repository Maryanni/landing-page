import imagen1 from '../imagen/javascript2.png';
import imagen2 from '../imagen/Python.png';
import imagen3 from '../imagen/bootstrap.png'
import imagen4 from '../imagen/react.png';

function Cards() {
    return (
        <div className="justify-content-center">
            <div className="cardGeneral justify-content-center">
                <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Javascript</h5>
                                <p className="card-text">This course is to learn about Javascript.</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" class="btn btn-primary">Find out more!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Python</h5>
                                <p className="card-text">This course is to learn about Python.</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" class="btn btn-primary">Find out more!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Bootstrap</h5>
                                <p className="card-text">This course is to learn about Bootstrap..</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" class="btn btn-primary">Find out more!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">React</h5>
                                <p className="card-text">This course is to learn about React.</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" class="btn btn-primary">Find out more!</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Cards;