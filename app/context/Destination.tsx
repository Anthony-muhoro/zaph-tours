import React, { createContext, useContext } from "react";
import { destinations } from "~/assets/data";

type Destination = (typeof destinations)[0];

interface DestinationContextType {
  destinations: Destination[];
  getDestinationById: (id: number) => Destination | undefined;
}

const DestinationContext = createContext<DestinationContextType | undefined>(
  undefined
);

export const DestinationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getDestinationById = (id: number) =>
    destinations.find((d) => d.id === id);

  return (
    <DestinationContext.Provider value={{ destinations, getDestinationById }}>
      {children}
    </DestinationContext.Provider>
  );
};

export const useDestinations = () => {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error(
      "useDestinations must be used within a DestinationProvider"
    );
  }
  return context;
};
