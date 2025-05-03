import React from "react";
type ErrorHandler = (error: Error, info: React.ErrorInfo) => void;
type ErrorHandlingComponent<Props> = (props: Props, error?: Error) => React.ReactNode;
export default function Catch<Props extends {}>(component: ErrorHandlingComponent<Props>, errorHandler?: ErrorHandler): React.ComponentType<Props>;
export {};
