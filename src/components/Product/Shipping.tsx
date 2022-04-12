const ROOT = process.env.REACT_APP_ROOT;

const Shipping = () => {
    return (
        <div className="content shipping md:flex">
            <div className="flex flex-1"> 
                <div>
                    <img src={`${ROOT}/images/ship1.webp`} alt="ship1" className="flex-1 mr-2" />
                </div>
                <div>
                    <img src={`${ROOT}/images/ship2.webp`} alt="ship2" className="flex-1 ml-2" />
                </div>
            </div>
            <div className="mt-7 md:mt-0 flex-shrink">
                <h4>MAECENAS IACULIS</h4>
                <p>Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames nunc natoque dui.</p>

                <h4 className="mt-5">ADIPISCING CONVALLIS BULUM</h4>
                <ul className="mb-5">
                    <li>Vestibulum penatibus nunc dui adipiscing convallis bulum parturient suspendisse.</li>
                    <li>Abitur parturient praesent lectus quam a natoque adipiscing a vestibulum hendre.</li>
                    <li>Diam parturient dictumst parturient scelerisque nibh lectus.</li>
                </ul>
                <p>Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt purus lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac parturient scelerisque vestibulum amet elit ut volutpat</p>
            </div>
        </div>
    )
}

export default Shipping;