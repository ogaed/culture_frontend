const Invest = ()=>{
     return (
          <section className="invest  w-105">
            <div className="invest__content">
                <div className="invest__head">
                    <h2 className="invest__title">Invest on your convenience</h2>
                    <p className="invest__description">Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                </div>
                <div className="invest__body">
                    <div className="invest__item">
                        <div className="invest__item__head">
                            <h5 className="invest__item__subtitle">NEW FARM TODAY</h5>
                        </div>
                        <div className="invest__item__body">
                            <h4 className="invest__item__title">Short terms investment</h4>
                            <p className="invest__item_description">
                                Invest in farms that will be ready for harvest in 3-18 months
                            </p>
                        </div>
                        <div className="invest__item__footer">
                            <a href="#" className="btn btn__invest">Browse Farm</a>
                        </div>
                    </div>
                    <div className="invest__item">
                        <div className="invest__item__head">
                            <h5 className="invest__item__subtitle">FULLY FUNDED</h5>
                        </div>
                        <div className="invest__item__body">
                            <h4 className="invest__item__title">Long terms investment
                            </h4>
                            <p className="invest__item_description">
                                Consider farms that have long term investment program.
                            </p>
                        </div>
                        <div className="invest__item__footer">
                            <a href="#" className="btn btn__invest">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
}


export default Invest