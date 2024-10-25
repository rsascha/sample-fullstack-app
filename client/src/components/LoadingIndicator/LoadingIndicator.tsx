import { useState, useEffect } from "react";

type LoadingIndicatorProps = {
  isLoading?: boolean;
  interval?: number;
  numberOfDots?: number;
  character?: string;
  className?: string;
};

export function LoadingIndicator({
  isLoading = true,
  interval = 200,
  numberOfDots = 10,
  character = ">",
  className,
}: LoadingIndicatorProps) {
  const [indicator, setIndicator] = useState("");

  useEffect(() => {
    if (!isLoading) {
      setIndicator("");
      return;
    }
    const id = setInterval(() => {
      setIndicator((prev) =>
        prev.length < numberOfDots ? prev + character : ""
      );
    }, interval);
    return () => clearInterval(id);
  }, [isLoading, interval, numberOfDots, character]);

  return <div className={className}>{indicator}</div>;
}
