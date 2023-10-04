import { useEffect, useState } from "react";
import CarCard from "../Components/CarCard";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { cardata } from "../data/CarData";
import { SetCardDetails } from "../features/CarSlice";
import { useSelector, useDispatch } from "react-redux";

const CarWithPageNavigation = () => {
  let { PageNo } = useParams();
  if (PageNo === undefined) {
    PageNo = 1;
  }
  const [searchPar, setSearchPar] = useState("");
  const [currentpagedata, setCurrentpagedata] = useState([]);
  const navigate = useNavigate();
  const { carData } = useSelector((state) => state.CarSlice);
  const dispatch = useDispatch();

  const SearchOp = () => {
    if (searchPar !== "") {
      let startInd = 6 * (parseInt(PageNo) - 1);
      let endInd = startInd + 5;
      let regex = new RegExp(`${searchPar}`, "gi");

      let result0 = cardata.filter((item) => item.Name.match(regex));

      let result1 = result0.filter(
        (item, ind) => ind >= startInd && ind <= endInd
      );

      setCurrentpagedata(result1);
      dispatch(SetCardDetails(result0));
    } else {
      let startInd = 6 * (parseInt(PageNo) - 1);
      let endInd = startInd + 5;
      setCurrentpagedata(
        cardata.filter((item, ind) => ind >= startInd && ind <= endInd)
      );
    }
  };

  useEffect(() => {
    if (PageNo > 1) {
      navigate("/1");
    }
    let interval = setTimeout(() => {
      console.log(searchPar);
      SearchOp();
    }, 200);

    return () => {
      clearTimeout(interval);
    };
  }, [searchPar]);

  useEffect(() => {
    SearchOp();
  }, [PageNo]);

  return (
    <div
      style={{
        background: "hsl(200deg 18% 94%)",
        width: "100vw",
      }}
    >
      <header
        className="px-2 py-3 mx-5 rounded-4"
        style={{ boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px " }}
      >
        <div className="d-flex  gap-4 px-3 w-50 ">
          <div className="position-relative">
            <input
              type="search"
              name="carname"
              id="carname"
              placeholder="Search..."
              value={searchPar}
              onChange={(e) => {
                setSearchPar(e.target.value);
              }}
              className="form-control  w-100 rounded-5  "
            />
            <span className="position-absolute" style={{ top: 4, right: 8 }}>
              <i className="fa-solid fa-magnifying-glass "></i>
            </span>
          </div>
          <div className="d-flex gap-2  align-items-center flex-1">
            <span className=" badge bg-success ">Relevance</span>

            <span className=" badge bg-success ">All Brands</span>
          </div>
        </div>
      </header>
      <div
        className="row row-cols-1 row-cols-md-3 justify-content-center align-items-center px-5 my-4 "
        style={{ minHeight: "100dvh" }}
      >
        {currentpagedata?.map((item, ind) => (
          <div className="col mb-2" key={ind}>
            <CarCard {...item} />
          </div>
        ))}
        {currentpagedata?.length === 0 && (
          <>
            <h1>No results Found</h1>
          </>
        )}
        <div
          className="my-5  w-100 d-flex justify-content-between p-3   rounded-4"
          style={{ boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px " }}
        >
          <div>
            {PageNo} from
            {" " + Math.floor(carData.length % 6) === 0
              ? Math.floor(carData.length / 6)
              : Math.floor(carData.length / 6) + 1}
          </div>
          <div className="d-flex gap-2 align-items-center ">
            {PageNo > 1 && (
              <Link to={`/${parseInt(PageNo) - 1}`}>
                <button className="btn btn-primary">Previous</button>
              </Link>
            )}
            <Link to={`/${1}`}>
              <button className="badge">1</button>
            </Link>
            <Link to={`/${2}`}>
              <button className="badge">2</button>
            </Link>
            <Link>
              <button className="badge">..</button>
            </Link>
            {Math.floor(carData.length / 6) > 2 && (
              <>
                <Link
                  to={`/${
                    Math.floor(carData.length % 6) === 0
                      ? Math.floor(carData.length / 6) - 1
                      : Math.floor(carData.length / 6)
                  }`}
                >
                  <button className="badge">
                    {Math.floor(carData.length % 6) === 0
                      ? Math.floor(carData.length / 6) - 1
                      : Math.floor(carData.length / 6)}
                  </button>
                </Link>
                <Link
                  to={`/${
                    Math.floor(carData.length % 6) === 0
                      ? Math.floor(carData.length / 6)
                      : Math.floor(carData.length / 6) + 1
                  }`}
                >
                  <button className="badge">
                    {Math.floor(carData.length % 6) === 0
                      ? Math.floor(carData.length / 6)
                      : Math.floor(carData.length / 6) + 1}
                  </button>
                </Link>
              </>
            )}
            {PageNo < 10 && 6 * parseInt(PageNo) < carData.length && (
              <Link to={`/${parseInt(PageNo) + 1}`}>
                <button className="btn btn-primary">Next</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarWithPageNavigation;
