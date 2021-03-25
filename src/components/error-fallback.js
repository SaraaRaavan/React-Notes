import * as React from "react";
import PropTypes from "prop-types";

const ErrorFallback = ({ error, componentStack, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <pre>{componentStack}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

ErrorFallback.defaultProps = {
  error: {}
};

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func
};

export default ErrorFallback;
