import React from "react";
import { Link } from "react-router-dom";

const ThumbnailBookingCard = () => {
  return (
    <>
      <div className="col-xs-18 col-sm-6 col-md-3">
        <div className="thumbnail" style={{ padding: 0 }}>
          {/* <img src="http://placehold.it/500x250/EEE" alt="sadasd" /> */}
          <div className="caption">
            <h4>Thumbnail label</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              soluta, eligendi doloribus sunt minus amet sit debitis repellat.
              Consectetur, culpa itaque odio similique suscipit
            </p>
            <Link
              to="#"
              className="btn btn-default btn-xs pull-right"
              role="button"
            >
              <i class="glyphicon glyphicon-edit"></i>
            </Link>
            <Link href="#" class="btn btn-info btn-xs" role="button">
              Button
            </Link>
            <Link href="#" class="btn btn-default btn-xs" role="button">
              Button
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbnailBookingCard;
