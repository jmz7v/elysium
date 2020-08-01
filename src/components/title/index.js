// Libraries
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

// Other
const APP_NAME = "Elysium React Boilerplate";

export const config = {
  main: "title",
  subtitle: "subtitle",
};

export const DocumentTitle = ({ title, show }) =>
  show ? (
    <Helmet>
      <meta charSet="utf-8" />
      <title data-testid="documentTitle">{`${title} – ${APP_NAME}`}</title>
    </Helmet>
  ) : null;

DocumentTitle.propTypes = {
  title: PropTypes.string.isRequired,
  documentTitle: PropTypes.bool,
};

DocumentTitle.defaultProps = {
  title: "Elysium title",
  show: true,
};

export const Subtitle = ({ subtitle }) =>
  subtitle ? <h2 className={config.subtitle}>{subtitle}</h2> : null;

Subtitle.propTypes = {
  subtitle: PropTypes.string,
};

Subtitle.defaultProps = {
  subtitle: "",
};

const Title = ({ title, subtitle, documentTitle }) => (
  <React.Fragment>
    <h1 className={config.main}>{title}</h1>
    <Subtitle subtitle={subtitle} />
    <DocumentTitle title={title} show={documentTitle} />
  </React.Fragment>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  documentTitle: PropTypes.bool,
};

Title.defaultProps = {
  title: "Elysium title",
  subtitle: "",
  documentTitle: true,
};

export default Title;
