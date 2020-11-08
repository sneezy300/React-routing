import React from 'react';

const ServiceDetails = (props) => {
  return (
    <>
    <h1>Service Details: {props.match.params.id}</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est, quae, harum blanditiis temporibus facere nemo officiis voluptatibus rerum ad eaque reiciendis, perferendis tempora. Dolorem exercitationem eveniet voluptatibus velit obcaecati!
    </p>
    </>
  );
}
export default ServiceDetails;
