import useAsyncRequest, {TYPES} from "../../hooks/useAsyncRequest";
import SliderContainer from "../Slider/SliderContainer";
import Banner from "./Banner";
import LatestProducts from "./LatestProducts";
import OfferProducts from "./OfferProducts";
import Work from "./Work";


const HomeContainer = () => {

    const action = {type: TYPES.HOME_DATA}
    const [loading, results] = useAsyncRequest(action);
    const {latest, top, offers} = results;

    return (
        <>
            <SliderContainer />

            <OfferProducts 
                data={offers}
                title="TOP PRODUCTS" 
                desc="There are many variations of passages of lorem ipsum available."
            />

            {!loading && <LatestProducts data={latest} />}

            <Banner />

            <OfferProducts 
                data={top}
                title="OFFERS FOR YOU" 
                desc="There are many variations of passages of lorem ipsum available." 
            />

            <Work />
        </>
    )
}

export default HomeContainer
