import React from "react";
import Section from "../../../HOC/Section";

const mapMarker = () => {
  return (
    <Section id="map">
      <div>
        <iframe
          title="mapMarker"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.952053014033!2d127.49309227712338!3d36.651604076059705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565279171c98507%3A0x1368214149a9b388!2z7LKt7KO864yA7ZWZ6rWQIOycte2Vqeq0gA!5e0!3m2!1sko!2skr!4v1716035130652!5m2!1sko!2skr"
          width="100%"
          height="800"
          frameBorder="0"
          style={{ border: 0, marginBottom: "-7px" }}
          allowFullScreen
        />
      </div>
    </Section>
  );
};

export default mapMarker;
