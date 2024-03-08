const Banner = () => {


    return <div className=" w-full flex flex-col ">
        <div className="container">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img src="/bg.png" alt="Los Angeles" className=" w-full" />
                    </div>

                    <div className="item">
                        <img src="/bg.png" alt="Chicago" className=" w-full" />
                    </div>

                    <div className="item">
                        <img src="/bg.png" alt="New york" className=" w-full" />
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div className=" flexCenter pt-[5px] w-full flex flex-row gap-x-[5px]">
            <img src="/bg1.png" className=" h-[160px]  " />
            <img src="/bg2.png" className=" h-[160px]  " />
            <img src="/bg3.png" className=" h-[160px]  " />
        </div>
    </div>

}

export default Banner;