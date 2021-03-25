import { useState, useEffect, useCallback } from "react";
import { useErrorHandler } from "react-error-boundary";

const useFirebaseAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const handleError = useErrorHandler();

  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);
    const onSuccess = (response) => {
      setValue(response);
      setStatus("success");
    };
    const onError = (error) => {
      setError(error);
      setStatus("error");
      handleError(error);
    };

    return asyncFunction(onSuccess, onError);
  }, [handleError, asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export { useFirebaseAsync };
