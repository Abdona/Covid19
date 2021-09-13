/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Country = (props) => (
  <>
    <Link to="/description">
      <img src="sdfsf" alt={props.country} />
      <h1>

        {props.country}

      </h1>
      <h3>
        {props.today_confirmed}
      </h3>
    </Link>
  </>
);

export default Country;
